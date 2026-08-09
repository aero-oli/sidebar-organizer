import type { ConfigSource } from '../../../config';
import type { SidebarConfig } from '../../../types';
import type {
  ChangeSummaryEntry,
  EditorDraftEnvelope,
  SessionSnapshot,
  ValidationIssue,
  WorkbenchRoute,
} from './types';

import YAML from 'yaml';

import { buildChangeSummary } from './change-summary';
import { EditorDraftStorage } from './draft-storage';
import { validateStructuredConfig } from './validation';
import { YamlConfigDocument } from './yaml-config-document';

export interface EditorSessionOptions {
  userId: string;
  source: ConfigSource;
  target: string;
  baselineRevision?: string | null;
  rawYaml?: string;
  config: SidebarConfig;
  activeRoute?: WorkbenchRoute;
  draftStorage?: EditorDraftStorage;
  draftDebounceMs?: number;
  onChange?: (snapshot: SessionSnapshot) => void;
}

export type DraftState =
  | { state: 'none' }
  | { state: 'matching'; draft: EditorDraftEnvelope }
  | { state: 'stale'; draft: EditorDraftEnvelope };

/** The single editing authority shared by visual and YAML workbench routes. */
export class EditorSessionController {
  public readonly userId: string;
  public source: ConfigSource;
  public target: string;
  public baselineRevision: string | null;
  public baselineRawYaml: string;
  public rawYaml: string;
  public config: SidebarConfig;
  public issues: ValidationIssue[] = [];
  public activeRoute: WorkbenchRoute;
  public yamlValid = true;

  private baselineConfig: SidebarConfig;
  private document: YamlConfigDocument;
  private readonly drafts: EditorDraftStorage;
  private readonly draftDebounceMs: number;
  private readonly onChange?: (snapshot: SessionSnapshot) => void;
  private draftTimer?: ReturnType<typeof setTimeout>;
  private draftSuppressed = false;

  public constructor(options: EditorSessionOptions) {
    this.userId = options.userId;
    this.source = options.source;
    this.target = options.target;
    this.baselineRevision = options.baselineRevision ?? null;
    this.config = structuredClone(options.config);
    this.baselineConfig = structuredClone(options.config);
    this.rawYaml = options.rawYaml?.trim() ? options.rawYaml : YAML.stringify(options.config);
    this.baselineRawYaml = this.rawYaml;
    this.activeRoute = options.activeRoute || 'sidebar';
    this.document = YamlConfigDocument.parse(this.rawYaml);
    this.drafts = options.draftStorage || new EditorDraftStorage();
    this.draftDebounceMs = options.draftDebounceMs ?? 500;
    this.onChange = options.onChange;
    this.revalidate();
  }

  public get dirty(): boolean {
    return this.rawYaml !== this.baselineRawYaml || JSON.stringify(this.config) !== JSON.stringify(this.baselineConfig);
  }

  public get snapshot(): SessionSnapshot {
    return {
      source: this.source,
      target: this.target,
      baselineRevision: this.baselineRevision,
      baselineRawYaml: this.baselineRawYaml,
      rawYaml: this.rawYaml,
      config: structuredClone(this.config),
      issues: [...this.issues],
      dirty: this.dirty,
      activeRoute: this.activeRoute,
      yamlValid: this.yamlValid,
    };
  }

  public get changes(): ChangeSummaryEntry[] {
    return buildChangeSummary(this.baselineConfig, this.config);
  }

  public setRoute(route: WorkbenchRoute): void {
    this.activeRoute = route;
    this.changed();
  }

  public setRawYaml(rawYaml: string): void {
    this.rawYaml = rawYaml;
    this.document = YamlConfigDocument.parse(rawYaml);
    this.revalidate();
    const parsed = this.document.toConfig();
    if (parsed) this.config = parsed;
    this.changed();
  }

  public setConfig(config: SidebarConfig): void {
    if (!this.document.valid) {
      // Keep invalid source exactly as typed. Visual controls intentionally edit
      // the last valid snapshot only after the user repairs the YAML.
      return;
    }
    this.document.patchConfig(config);
    this.rawYaml = this.document.toString();
    this.config = structuredClone(config);
    this.revalidate();
    this.changed();
  }

  public formatYaml(): void {
    this.rawYaml = this.document.format();
    this.document = YamlConfigDocument.parse(this.rawYaml);
    this.revalidate();
    this.changed();
  }

  public draftState(): DraftState {
    const draft = this.drafts.read(this.userId, this.source, this.target);
    if (!draft) return { state: 'none' };
    if (draft.baselineRevision !== this.baselineRevision) return { state: 'stale', draft };
    return { state: 'matching', draft };
  }

  public resumeDraft(draft: EditorDraftEnvelope): void {
    if (draft.userId !== this.userId || draft.source !== this.source || draft.target !== this.target) {
      throw new Error('Draft does not belong to this editing target.');
    }
    this.activeRoute = draft.activeRoute;
    this.setRawYaml(draft.rawYaml);
  }

  public discardDraft(): void {
    clearTimeout(this.draftTimer);
    this.draftTimer = undefined;
    this.drafts.clear(this.userId, this.source, this.target);
    this.draftSuppressed = true;
  }

  public markApplied(rawYaml: string, config: SidebarConfig, revision?: string | null): void {
    this.rawYaml = rawYaml;
    this.baselineRawYaml = rawYaml;
    this.config = structuredClone(config);
    this.baselineConfig = structuredClone(config);
    this.baselineRevision = revision ?? this.baselineRevision;
    this.document = YamlConfigDocument.parse(rawYaml);
    this.revalidate();
    this.discardDraft();
    this.onChange?.(this.snapshot);
  }

  public destroy(): void {
    clearTimeout(this.draftTimer);
    if (this.dirty && !this.draftSuppressed) this.writeDraft();
  }

  private revalidate(): void {
    this.yamlValid = this.document.valid && this.document.toConfig() !== undefined;
    this.issues = this.document.syntaxIssues();
    const parsed = this.document.toConfig();
    if (!parsed && this.document.valid) {
      this.issues.push({
        severity: 'error',
        code: 'yaml.root_type',
        message: 'YAML must parse to an object/dictionary.',
        path: [],
        route: 'yaml',
      });
    } else if (parsed) {
      this.issues.push(
        ...validateStructuredConfig(parsed).map((issue) => ({
          ...issue,
          ...this.document.positionForPath(issue.path),
        }))
      );
    }
  }

  private changed(): void {
    this.draftSuppressed = false;
    this.scheduleDraft();
    this.onChange?.(this.snapshot);
  }

  private scheduleDraft(): void {
    clearTimeout(this.draftTimer);
    if (!this.dirty) return;
    this.draftTimer = setTimeout(() => {
      this.draftTimer = undefined;
      this.writeDraft();
    }, this.draftDebounceMs);
  }

  private writeDraft(): void {
    this.drafts.write({
      version: 1,
      userId: this.userId,
      source: this.source,
      target: this.target,
      rawYaml: this.rawYaml,
      baselineRevision: this.baselineRevision,
      activeRoute: this.activeRoute,
      timestamp: Date.now(),
    });
  }
}
