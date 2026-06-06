const duplicateCustomElementError = (err: unknown, tagName: string): boolean => {
  if (!(err instanceof Error)) {
    return false;
  }
  return (
    err.message.includes(tagName) &&
    err.message.includes('already been used') &&
    (err.name === 'NotSupportedError' || err.message.includes('CustomElementRegistry'))
  );
};

export const defineCustomElementSafely = (
  tagName: string,
  elementClass: CustomElementConstructor,
  registry: CustomElementRegistry = customElements
): void => {
  if (registry.get(tagName)) {
    return;
  }
  try {
    registry.define(tagName, elementClass);
  } catch (err) {
    if (!duplicateCustomElementError(err, tagName)) {
      throw err;
    }
  }
};

export const safeCustomElement =
  (tagName: string) =>
  <T extends CustomElementConstructor>(elementClass: T): T => {
    defineCustomElementSafely(tagName, elementClass);
    return elementClass;
  };
