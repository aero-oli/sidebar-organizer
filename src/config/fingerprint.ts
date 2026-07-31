const normalize = (value: unknown): unknown => {
  if (Array.isArray(value)) return value.map(normalize);
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([key, item]) => [key, normalize(item)])
    );
  }
  return value;
};

export const configFingerprint = (value: unknown): string => JSON.stringify(normalize(value));

export const isConfigDraftDirty = (
  baseline: unknown,
  current: unknown,
  baselineRawYaml: string,
  currentRawYaml: string,
  usesServerYaml: boolean
): boolean =>
  configFingerprint(baseline) !== configFingerprint(current) || (usesServerYaml && baselineRawYaml !== currentRawYaml);
