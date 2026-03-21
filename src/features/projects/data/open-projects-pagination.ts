export type OpenProjectsPaginationSlot =
  | { type: "page"; page: number }
  | { type: "ellipsis"; key: string };

/** Compact page list with ellipses (e.g. 1 … 6 7 8 … 15). */
export function buildOpenProjectsPaginationSlots(
  currentPage: number,
  totalPages: number,
): OpenProjectsPaginationSlot[] {
  if (totalPages <= 0) {
    return [];
  }
  const current = Math.min(Math.max(1, currentPage), totalPages);
  if (totalPages === 1) {
    return [{ type: "page", page: 1 }];
  }

  const delta = 2;
  const rangeSet = new Set<number>();
  for (let i = 1; i <= totalPages; i += 1) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= current - delta && i <= current + delta)
    ) {
      rangeSet.add(i);
    }
  }
  const range = [...rangeSet].sort((a, b) => a - b);

  const out: OpenProjectsPaginationSlot[] = [];
  let prev: number | null = null;
  for (const i of range) {
    if (prev !== null) {
      if (i - prev === 2) {
        out.push({ type: "page", page: prev + 1 });
      } else if (i - prev > 1) {
        out.push({ type: "ellipsis", key: `e-${prev}-${i}` });
      }
    }
    out.push({ type: "page", page: i });
    prev = i;
  }
  return out;
}
