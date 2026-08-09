import type { SidebarConfig } from '../../../types';
import type { ValidationIssue } from './types';

import { isMap, LineCounter, parseDocument, Scalar, YAMLMap, type Document, type Node } from 'yaml';

const SCHEMA_ORDER = [
  'header_title',
  'hide_header_toggle',
  'animation_off',
  'animation_delay',
  'accordion_mode',
  'text_transformation',
  'move_settings_from_fixed',
  'force_transparent_background',
  'width',
  'custom_groups',
  'bottom_groups',
  'bottom_items',
  'bottom_grid_items',
  'hidden_items',
  'default_collapsed',
  'pinned_groups',
  'uncategorized_items',
  'new_items',
  'visibility_templates',
  'notification',
  'color_config',
  'scroll_hide_header',
] as const;

type Path = Array<string | number>;

export class YamlConfigDocument {
  public readonly document: Document.Parsed;
  public readonly lineCounter: LineCounter;

  private constructor(document: Document.Parsed, lineCounter: LineCounter) {
    this.document = document;
    this.lineCounter = lineCounter;
  }

  public static parse(rawYaml: string): YamlConfigDocument {
    const lineCounter = new LineCounter();
    const document = parseDocument(rawYaml || '{}\n', {
      keepSourceTokens: true,
      lineCounter,
      prettyErrors: false,
      strict: true,
    });
    return new YamlConfigDocument(document, lineCounter);
  }

  public get valid(): boolean {
    return this.document.errors.length === 0;
  }

  public toConfig(): SidebarConfig | undefined {
    if (!this.valid) return undefined;
    const value = this.document.toJS();
    if (typeof value !== 'object' || value === null || Array.isArray(value)) return undefined;
    return value as SidebarConfig;
  }

  public syntaxIssues(): ValidationIssue[] {
    return this.document.errors.map((error) => {
      const position = error.pos?.[0] === undefined ? undefined : this.lineCounter.linePos(error.pos[0]);
      return {
        severity: 'error',
        code: `yaml.${error.code || 'syntax'}`,
        message: error.message,
        path: [],
        line: position?.line,
        column: position?.col,
        route: 'yaml',
      };
    });
  }

  public positionForPath(path: Array<string | number>): { line: number; column: number } | undefined {
    const node = this.document.getIn(path, true) as Node | undefined;
    const offset = node?.range?.[0];
    if (offset === undefined) return undefined;
    const position = this.lineCounter.linePos(offset);
    return { line: position.line, column: position.col };
  }

  public patchConfig(next: SidebarConfig): void {
    if (!this.valid) throw new Error('Cannot patch an invalid YAML document.');
    const current = this.toConfig() || {};
    this.patchValue([], current as Record<string, unknown>, next as Record<string, unknown>);
    this.orderKnownTopLevelKeys();
  }

  public format(): string {
    if (!this.valid) throw new Error('Cannot format invalid YAML.');
    return this.document.toString({ indent: 2, lineWidth: 0 });
  }

  public toString(): string {
    return this.document.toString({ indent: 2, lineWidth: 0 });
  }

  private patchValue(path: Path, current: unknown, next: unknown): void {
    if (deepEqual(current, next)) return;
    if (isRecord(current) && isRecord(next)) {
      for (const key of Object.keys(current)) {
        if (!(key in next)) this.document.deleteIn([...path, key]);
      }
      for (const [key, value] of Object.entries(next)) {
        if (!(key in current)) {
          this.document.setIn([...path, key], value);
        } else {
          this.patchValue([...path, key], current[key], value);
        }
      }
      return;
    }

    const existing = this.document.getIn(path, true) as Node | undefined;
    const comment = existing && 'comment' in existing ? existing.comment : undefined;
    const commentBefore = existing && 'commentBefore' in existing ? existing.commentBefore : undefined;
    this.document.setIn(path, next);
    const replacement = this.document.getIn(path, true) as Node | undefined;
    if (replacement) {
      if (comment !== undefined) replacement.comment = comment;
      if (commentBefore !== undefined) replacement.commentBefore = commentBefore;
    }
  }

  private orderKnownTopLevelKeys(): void {
    if (!isMap(this.document.contents)) return;
    const map = this.document.contents as YAMLMap;
    const rank = new Map<string, number>(SCHEMA_ORDER.map((key, index) => [key, index]));
    map.items.sort((left, right) => {
      const leftKey = scalarKey(left.key);
      const rightKey = scalarKey(right.key);
      const leftRank = rank.get(leftKey);
      const rightRank = rank.get(rightKey);
      if (leftRank === undefined || rightRank === undefined) return 0;
      return leftRank - rightRank;
    });
  }
}

const scalarKey = (node: unknown): string => (node instanceof Scalar ? String(node.value) : String(node));
const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);
const deepEqual = (left: unknown, right: unknown): boolean => JSON.stringify(left) === JSON.stringify(right);
