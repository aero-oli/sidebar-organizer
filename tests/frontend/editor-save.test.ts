import assert from 'node:assert/strict';
import test from 'node:test';
import YAML from 'yaml';
import { EditorDraftStorage } from '../../src/components/editor/workbench/draft-storage';
import { EditorSessionController } from '../../src/components/editor/workbench/editor-session-controller';
import { HomeAssistantConfigProvider } from '../../src/config/providers/ha-config-provider';
import { HomeAssistantProfileProvider } from '../../src/config/providers/ha-profile-provider';
import { loadClassMethod } from './helpers/source-method';

const dialogPath = 'src/components/sidebar-dialog.ts';

const deferred = <T = void>() => {
  let resolve!: (value: T) => void;
  const promise = new Promise<T>((done) => { resolve = done; });
  return { promise, resolve };
};

const memoryDrafts = () => {
  const values = new Map<string, string>();
  return new EditorDraftStorage({
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => { values.set(key, value); },
    removeItem: (key) => { values.delete(key); },
  });
};

for (const profile of [true, false]) {
  for (const phase of ['info', 'validate', 'write']) {
    test(`${profile ? 'profile' : 'shared'} save retains edits made during ${phase}`, async () => {
      const gate = deferred();
      const entered = deferred();
      const writes: any[] = [];
      const cache: any[] = [];
      const source = profile ? 'home_assistant_profile' : 'home_assistant_config';
      const session = new EditorSessionController({
        userId: profile ? 'alice' : 'admin', source, target: profile ? 'alice' : 'shared',
        config: { header_title: 'Before' }, rawYaml: 'header_title: Before\n', baselineRevision: 'r1',
        draftStorage: memoryDrafts(), draftDebounceMs: 10_000,
      });
      const context: any = {
        _configSource: source, _selectedProfile: profile ? 'alice' : 'shared',
        selectedProfileUserId: profile ? 'alice' : undefined,
        _useConfigFile: false, _rawYaml: session.rawYaml, _sidebarConfig: session.config,
        _baselineRawYaml: session.rawYaml, _baselineConfig: session.config, _baselineRevision: 'r1',
        _profileInfo: { revision: 'r1' }, _profileUsers: [],
        _haConfigInfo: { available: true, allow_write: true, revision: 'r1' },
        _session: session, requestUpdate() {}, async _refreshHaConfigInfo() {},
        _formatSaveError(error: Error) { throw error; },
        hass: {
          user: { id: profile ? 'alice' : 'admin' },
          async callWS(message: any) {
            if (message.type.endsWith(`/${phase}`)) { entered.resolve(); await gate.promise; }
            if (message.type.endsWith('/info')) return { revision: 'r1' };
            if (message.type.endsWith('/validate')) return { valid: true };
            if (message.type.endsWith('/write')) { writes.push(message); return { revision: 'r2' }; }
            throw new Error(`Unexpected ${message.type}`);
          },
        },
      };
      for (const name of ['_capturePublishedSave', '_isPublishedTargetCurrent', '_acceptPublishedSave', '_currentSessionIdentity']) {
        context[name] = loadClassMethod(dialogPath, name, { YAML });
      }
      const save = loadClassMethod(dialogPath, profile ? '_saveHomeAssistantProfileUnlocked' : '_saveHomeAssistantConfigUnlocked', {
        HomeAssistantConfigProvider, HomeAssistantProfileProvider, YAML,
        showConfirmDialog: async () => true, showAlertDialog: () => {}, showToast: () => {},
        setStorage: (...args: any[]) => cache.push(args), getHaConfigCacheKey: () => 'cache', STORAGE: {}, ALERT_MSG: {},
      });
      const saving = save.call(context);
      await entered.promise;
      session.setRawYaml('header_title: During\n');
      context._rawYaml = session.rawYaml;
      context._sidebarConfig = structuredClone(session.config);
      gate.resolve();
      const result = await saving;
      assert.equal(writes[0].yaml, 'header_title: Before\n');
      assert.deepEqual(result.config, { header_title: 'Before' });
      assert.equal(result.profileUserId, profile ? 'alice' : undefined);
      assert.equal(context._rawYaml, 'header_title: During\n');
      assert.deepEqual(context._baselineConfig, { header_title: 'Before' });
      assert.equal(context._baselineRevision, 'r2');
      assert.equal(session.dirty, true);
      const draft = session.draftState();
      assert.equal(draft.state, 'matching');
      if (draft.state !== 'none') {
        assert.equal(draft.draft.rawYaml, 'header_title: During\n');
        assert.equal(draft.draft.baselineRevision, 'r2');
      }
      assert.deepEqual(cache[0][1], { header_title: 'Before' });
      session.destroy();
    });
  }
}

test('acknowledging an unchanged published draft clears recovery', () => {
  const session = new EditorSessionController({
    userId: 'admin', source: 'home_assistant_profile', target: 'alice', config: {}, rawYaml: '{}\n',
    draftStorage: memoryDrafts(), draftDebounceMs: 10_000,
  });
  session.setRawYaml('header_title: Published\n');
  session.acknowledgePublished(session.rawYaml, session.config, 'r2');
  assert.equal(session.dirty, false);
  assert.equal(session.draftState().state, 'none');
  session.destroy();
});

test('profile switching is blocked while a save is pending', async () => {
  const selected = loadClassMethod(dialogPath, '_handleProfileSelected');
  const context = { _saving: true, _selectedProfile: 'alice' };
  await selected.call(context, { stopPropagation() {}, detail: { value: 'bob' } });
  assert.equal(context._selectedProfile, 'alice');
});

for (const wrapper of ['sidebar-organizer-dialog.ts', 'sidebar-organizer-dialog_wa.ts']) {
  test(`${wrapper} reports the published snapshot and leaves newer edits open`, async () => {
    const published = { config: { header_title: 'Before' }, configSource: 'home_assistant_profile', profileUserId: 'alice', useConfigFile: false };
    let savedEvent: any;
    let closed = false;
    const save = loadClassMethod(`src/components/${wrapper}`, '_handleSaveConfig', {
      HA_EVENT: { SIDEBAR_CONFIG_SAVED: 'saved' }, fireEvent: (_: any, __: any, detail: any) => { savedEvent = detail; },
    });
    const context = {
      isConnected: true, _canSaveConfig: true, _configValid: true, _dialogClosed() { closed = true; },
      _configDialog: {
        _configSource: 'home_assistant_profile', _sidebarConfig: { header_title: 'During' },
        async _saveHomeAssistantProfile() { return published; },
        _isPublishedTargetCurrent() { return true; }, hasUnsavedChanges: true,
        _markSessionApplied() { assert.fail('newer edits must not be marked applied'); },
      },
    };
    await save.call(context);
    assert.deepEqual(savedEvent, published);
    assert.equal(closed, false);
    context._configDialog.hasUnsavedChanges = false;
    await save.call(context);
    assert.equal(closed, true);
  });
}

test('a completed save never rebases a different current profile', async () => {
  const gate = deferred();
  const entered = deferred();
  let writtenUser: string | undefined;
  const context: any = {
    _selectedProfile: 'alice', selectedProfileUserId: 'alice', _configSource: 'home_assistant_profile',
    _baselineRevision: 'r1', _profileInfo: { revision: 'r1' }, _profileUsers: [],
    _rawYaml: 'header_title: Alice\n', _sidebarConfig: { header_title: 'Alice' },
    _capturePublishedSave: loadClassMethod(dialogPath, '_capturePublishedSave', { YAML }),
    _isPublishedTargetCurrent: loadClassMethod(dialogPath, '_isPublishedTargetCurrent'),
    _acceptPublishedSave() { assert.fail('save from a different target must not update this editor'); },
    hass: { user: { id: 'admin' }, async callWS(message: any) {
      if (message.type.endsWith('/info')) return { revision: 'r1' };
      if (message.type.endsWith('/validate')) return { valid: true };
      if (message.type.endsWith('/write')) {
        writtenUser = message.user_id;
        entered.resolve(); await gate.promise;
        return { revision: 'alice-r2' };
      }
    } },
  };
  const save = loadClassMethod(dialogPath, '_saveHomeAssistantProfileUnlocked', {
    HomeAssistantProfileProvider, showToast() {},
  });
  const saving = save.call(context);
  await entered.promise;
  context._selectedProfile = context.selectedProfileUserId = 'bob';
  context._rawYaml = 'header_title: Bob\n';
  context._sidebarConfig = { header_title: 'Bob' };
  context._profileInfo = { revision: 'bob-r3' };
  gate.resolve();
  const published = await saving;
  assert.equal(writtenUser, 'alice');
  assert.equal(published.profileUserId, 'alice');
  assert.deepEqual(published.config, { header_title: 'Alice' });
  assert.equal(context._rawYaml, 'header_title: Bob\n');
  assert.equal(context._profileInfo.revision, 'bob-r3');
});

for (const wrapper of ['sidebar-organizer-dialog.ts', 'sidebar-organizer-dialog_wa.ts']) {
  for (const lifecycle of ['closed', 'disconnected', 'reopened']) {
    test(`${wrapper} completes a ${lifecycle} save without affecting another dialog`, async () => {
      const gate = deferred<any>();
      const published = { config: { header_title: 'Published' }, configSource: 'home_assistant_profile', profileUserId: 'alice', useConfigFile: false };
      const globalTarget = {};
      let savedEvent: any;
      let eventTarget: any;
      let closed = false;
      const save = loadClassMethod(`src/components/${wrapper}`, '_handleSaveConfig', {
        window: globalTarget, HA_EVENT: { SIDEBAR_CONFIG_SAVED: 'saved' },
        fireEvent(target: any, _: any, detail: any) { eventTarget = target; savedEvent = detail; },
      });
      const originalChild: any = {
        _configSource: 'home_assistant_profile', _sidebarConfig: { header_title: 'Published' },
        _saveHomeAssistantProfile() { return gate.promise; },
        _isPublishedTargetCurrent() { return true; }, hasUnsavedChanges: false,
        _markSessionApplied() { assert.fail('published save is already acknowledged'); },
      };
      const context: any = {
        isConnected: true, _canSaveConfig: true, _configValid: true, _configDialog: originalChild,
        _dialogClosed() { closed = true; },
      };
      const saving = save.call(context);
      if (lifecycle === 'closed') context._configDialog = null;
      else if (lifecycle === 'disconnected') context.isConnected = false;
      else context._configDialog = {
        _sidebarConfig: { header_title: 'New dialog edits' },
        _markSessionApplied() { assert.fail('old save must not clear new dialog recovery'); },
      };
      gate.resolve(published);
      await saving;
      assert.deepEqual(savedEvent, published);
      assert.equal(eventTarget, lifecycle === 'disconnected' ? globalTarget : context);
      assert.equal(closed, false);
      if (lifecycle === 'reopened') assert.deepEqual(context._configDialog._sidebarConfig, { header_title: 'New dialog edits' });
    });
  }
}

test('late completion after disconnect preserves a newer session recovery draft', () => {
  const storage = memoryDrafts();
  const options = {
    userId: 'admin', source: 'home_assistant_profile' as const, target: 'alice',
    config: { header_title: 'Baseline' }, rawYaml: 'header_title: Baseline\n', baselineRevision: 'r1',
    draftStorage: storage, draftDebounceMs: 10_000,
  };
  const retired = new EditorSessionController(options);
  retired.setRawYaml('header_title: Submitted\n');
  const context: any = {
    _session: retired, _sessionIdentity: 'old', _rawYaml: retired.rawYaml,
    _sidebarConfig: retired.config, _baselineRevision: 'r1', requestUpdate() {},
    _profileSubscription: { dispose() {} }, _configSubscription: { dispose() {} },
    _profileLoadGeneration: 0,
  };
  const capture = loadClassMethod(dialogPath, '_capturePublishedSave', { YAML });
  const snapshot = capture.call(context);
  const disconnect = loadClassMethod(dialogPath, 'disconnectedCallback', { window: { clearTimeout() {} } });
  disconnect.call(context);
  assert.equal(context._session, undefined);
  assert.equal(context._sessionIdentity, undefined);
  const newer = new EditorSessionController(options);
  newer.setRawYaml('header_title: New dialog draft\n');
  // Destroy flushes this session's recoverable draft, as closing the new dialog would.
  newer.destroy();
  const accept = loadClassMethod(dialogPath, '_acceptPublishedSave');
  accept.call(context, snapshot, 'r2');
  const recovery = storage.read('admin', 'home_assistant_profile', 'alice');
  assert.equal(recovery?.rawYaml, 'header_title: New dialog draft\n');
  assert.equal(recovery?.baselineRevision, 'r1');
});
