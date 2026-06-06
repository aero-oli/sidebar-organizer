export const isHaConfigModified = (
  currentLastModified?: number | null,
  nextLastModified?: number | null
): boolean => {
  if (currentLastModified == null || nextLastModified == null) return false;
  return nextLastModified > currentLastModified;
};

export const parseStoredLastModified = (value: string | null): number | undefined => {
  if (!value) return undefined;
  try {
    const parsed = JSON.parse(value);
    return typeof parsed === 'number' ? parsed : undefined;
  } catch {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : undefined;
  }
};
