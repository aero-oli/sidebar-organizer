import type { ConfigSource } from '../../../config';
import type { EditorDraftEnvelope } from './types';

const PREFIX = 'sidebar-organizer-editor-draft:v1';

export const draftStorageKey = (userId: string, source: ConfigSource, target: string): string =>
  `${PREFIX}:${encodeURIComponent(userId)}:${source}:${encodeURIComponent(target)}`;

export class EditorDraftStorage {
  private readonly storage?: Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;

  public constructor(storage?: Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>) {
    this.storage = storage || safeLocalStorage();
  }

  public read(userId: string, source: ConfigSource, target: string): EditorDraftEnvelope | undefined {
    let raw: string | null;
    try {
      raw = this.storage?.getItem(draftStorageKey(userId, source, target)) ?? null;
    } catch {
      return undefined;
    }
    if (!raw) return undefined;
    try {
      const value = JSON.parse(raw) as Partial<EditorDraftEnvelope>;
      if (
        value.version !== 1 ||
        value.userId !== userId ||
        value.source !== source ||
        value.target !== target ||
        typeof value.rawYaml !== 'string' ||
        typeof value.timestamp !== 'number'
      ) {
        return undefined;
      }
      return value as EditorDraftEnvelope;
    } catch {
      return undefined;
    }
  }

  public write(draft: EditorDraftEnvelope): void {
    try {
      this.storage?.setItem(draftStorageKey(draft.userId, draft.source, draft.target), JSON.stringify(draft));
    } catch (error) {
      console.warn('Sidebar Organizer could not persist the editor draft.', error);
    }
  }

  public clear(userId: string, source: ConfigSource, target: string): void {
    try {
      this.storage?.removeItem(draftStorageKey(userId, source, target));
    } catch (error) {
      console.warn('Sidebar Organizer could not clear the editor draft.', error);
    }
  }
}

const safeLocalStorage = (): Storage | undefined => {
  try {
    return globalThis.localStorage;
  } catch {
    return undefined;
  }
};
