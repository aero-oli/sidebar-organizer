import type { ValidationIssue } from './types';

import { defaultKeymap, history, historyKeymap, indentWithTab } from '@codemirror/commands';
import { yaml } from '@codemirror/lang-yaml';
import { bracketMatching, defaultHighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { lintGutter, setDiagnostics, type Diagnostic } from '@codemirror/lint';
import { searchKeymap } from '@codemirror/search';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap, lineNumbers } from '@codemirror/view';
import { safeCustomElement } from '@utilities/safe-custom-element';
import { css, html, LitElement, type PropertyValues } from 'lit';
import { property, query } from 'lit/decorators.js';

@safeCustomElement('sidebar-workbench-yaml-editor')
export class SidebarWorkbenchYamlEditor extends LitElement {
  @property({ attribute: false }) value = '';
  @property({ attribute: false }) issues: ValidationIssue[] = [];
  @query('.editor-host') private editorHost?: HTMLDivElement;

  private editor?: EditorView;
  private applyingExternalValue = false;

  protected firstUpdated(): void {
    this.editor = new EditorView({
      parent: this.editorHost,
      state: EditorState.create({
        doc: this.value,
        extensions: [
          lineNumbers(),
          history(),
          yaml(),
          bracketMatching(),
          lintGutter(),
          syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
          keymap.of([
            ...defaultKeymap,
            ...historyKeymap,
            ...searchKeymap,
            indentWithTab,
            {
              key: 'Shift-Alt-f',
              run: () => {
                this.dispatchEvent(new CustomEvent('format-yaml', { bubbles: true, composed: true }));
                return true;
              },
            },
          ]),
          EditorView.lineWrapping,
          EditorView.updateListener.of((update) => {
            if (!update.docChanged || this.applyingExternalValue) return;
            this.dispatchEvent(
              new CustomEvent('yaml-changed', {
                bubbles: true,
                composed: true,
                detail: { yaml: update.state.doc.toString() },
              })
            );
          }),
          EditorView.theme({
            '&': { height: '100%', background: 'var(--code-editor-background-color, var(--card-background-color))' },
            '.cm-content': { minHeight: '360px', caretColor: 'var(--primary-text-color)' },
            '.cm-content, .cm-gutterElement': { fontFamily: 'var(--ha-font-family-code, monospace)' },
            '.cm-gutters': {
              background: 'var(--secondary-background-color)',
              color: 'var(--secondary-text-color)',
              borderRight: '1px solid var(--divider-color)',
            },
            '.cm-activeLine, .cm-activeLineGutter': { background: 'rgba(var(--rgb-primary-color), 0.08)' },
            '.cm-scroller': { color: 'var(--primary-text-color)', overflow: 'auto' },
            '&.cm-focused': { outline: '2px solid var(--primary-color)', outlineOffset: '-2px' },
          }),
        ],
      }),
    });
    this.updateDiagnostics();
  }

  protected updated(changed: PropertyValues): void {
    if (changed.has('value') && this.editor && this.editor.state.doc.toString() !== this.value) {
      this.applyingExternalValue = true;
      this.editor.dispatch({ changes: { from: 0, to: this.editor.state.doc.length, insert: this.value } });
      this.applyingExternalValue = false;
    }
    if (changed.has('issues')) this.updateDiagnostics();
  }

  public revealIssue(issue: ValidationIssue): void {
    if (!this.editor || !issue.line) return;
    const line = this.editor.state.doc.line(Math.min(issue.line, this.editor.state.doc.lines));
    const offset = Math.min(Math.max((issue.column || 1) - 1, 0), line.length);
    this.editor.dispatch({ selection: { anchor: line.from + offset }, scrollIntoView: true });
    this.editor.focus();
  }

  disconnectedCallback(): void {
    this.editor?.destroy();
    this.editor = undefined;
    super.disconnectedCallback();
  }

  protected render() {
    return html`<div class="editor-host" aria-label="YAML configuration editor"></div>`;
  }

  private updateDiagnostics(): void {
    if (!this.editor) return;
    const diagnostics: Diagnostic[] = this.issues.map((issue) => {
      let from = 0;
      if (issue.line) {
        const line = this.editor!.state.doc.line(Math.min(issue.line, this.editor!.state.doc.lines));
        from = line.from + Math.min(Math.max((issue.column || 1) - 1, 0), line.length);
      }
      return {
        from,
        to: Math.min(from + 1, this.editor!.state.doc.length),
        severity: issue.severity,
        message: issue.message,
      };
    });
    this.editor.dispatch(setDiagnostics(this.editor.state, diagnostics));
  }

  static styles = css`
    :host {
      border: 1px solid var(--divider-color);
      border-radius: 10px;
      display: block;
      min-height: 360px;
      overflow: hidden;
    }
    .editor-host {
      height: min(58vh, 680px);
      min-height: 360px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'sidebar-workbench-yaml-editor': SidebarWorkbenchYamlEditor;
  }
}
