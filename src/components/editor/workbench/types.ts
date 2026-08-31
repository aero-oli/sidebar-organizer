import type { ConfigSource } from '../../../config';
import type { SidebarConfig } from '../../../types';

export const WORKBENCH_NAV_ROUTES = ['sidebar', 'items', 'organize', 'appearance', 'yaml'] as const;
export const WORKBENCH_ROUTES = [...WORKBENCH_NAV_ROUTES, 'review'] as const;
export type WorkbenchRoute = (typeof WORKBENCH_ROUTES)[number];

export type ValidationSeverity = 'error' | 'warning' | 'info';

export interface ValidationIssue {
  severity: ValidationSeverity;
  code: string;
  message: string;
  path: Array<string | number>;
  line?: number;
  column?: number;
  route: WorkbenchRoute;
}

export interface EditorDraftEnvelope {
  version: 1;
  userId: string;
  source: ConfigSource;
  target: string;
  rawYaml: string;
  baselineRevision: string | null;
  activeRoute: WorkbenchRoute;
  timestamp: number;
}

export interface ChangeSummaryEntry {
  kind: 'added' | 'changed' | 'removed';
  key: string;
  label: string;
}

export interface SessionSnapshot {
  source: ConfigSource;
  target: string;
  baselineRevision: string | null;
  baselineRawYaml: string;
  rawYaml: string;
  config: SidebarConfig;
  issues: ValidationIssue[];
  dirty: boolean;
  activeRoute: WorkbenchRoute;
  yamlValid: boolean;
}
