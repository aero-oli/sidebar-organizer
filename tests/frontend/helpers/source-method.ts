import { readFileSync } from 'node:fs';

import ts from 'typescript';

/** Exercise the actual browser method without starting Home Assistant's shell. */
export const loadClassMethod = (
  path: string,
  name: string,
  bindings: Record<string, unknown> = {}
): (...args: any[]) => any => {
  const source = ts.createSourceFile(path, readFileSync(path, 'utf8'), ts.ScriptTarget.Latest, true);
  const owner = source.statements.find(
    (node): node is ts.ClassDeclaration =>
      ts.isClassDeclaration(node) && node.members.some((member) => member.name?.getText(source) === name)
  );
  const member = owner?.members.find((node) => node.name?.getText(source) === name);
  const callable = member && ts.isPropertyDeclaration(member) ? member.initializer : member;
  if (!callable || !(ts.isMethodDeclaration(callable) || ts.isArrowFunction(callable) || ts.isGetAccessor(callable))) {
    throw new Error(`No callable ${name} in ${path}`);
  }
  if (!callable.body) throw new Error(`No body for ${name} in ${path}`);
  const body = ts.isBlock(callable.body)
    ? callable.body
    : ts.factory.createBlock([ts.factory.createReturnStatement(callable.body)]);
  const expression = ts.factory.createFunctionExpression(
    callable.modifiers?.filter((modifier) => modifier.kind === ts.SyntaxKind.AsyncKeyword),
    undefined,
    undefined,
    undefined,
    callable.parameters,
    callable.type,
    body
  );
  const printed = ts.createPrinter().printNode(ts.EmitHint.Expression, expression, source);
  if (/\bsuper\s*[.[]/.test(callable.body.getText(source))) {
    // Keep a method home object for lifecycle super calls; callers can supply a
    // baseClass when they need to observe them rather than use the no-op base.
    const method = ts.factory.createMethodDeclaration(
      expression.modifiers, undefined, 'sourceMethod', undefined, undefined,
      callable.parameters, callable.type, body
    );
    const memberText = ts.createPrinter().printNode(ts.EmitHint.Unspecified, method, source);
    const { baseClass = class { connectedCallback() {} disconnectedCallback() {} }, ...methodBindings } = bindings;
    const { outputText } = ts.transpileModule(`class SourceMethod extends BaseClass { ${memberText} }`, {
      compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
    });
    return new Function('BaseClass', ...Object.keys(methodBindings), `${outputText}\nreturn SourceMethod.prototype.sourceMethod;`)(baseClass, ...Object.values(methodBindings));
  }
  const { outputText } = ts.transpileModule(`const sourceMethod = ${printed};`, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
  });
  return new Function(...Object.keys(bindings), `${outputText}\nreturn sourceMethod;`)(...Object.values(bindings));
};
