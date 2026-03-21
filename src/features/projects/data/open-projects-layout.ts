/** Card grid density from Figma export (4×4, 24px gaps in the original canvas). */
export const OPEN_PROJECTS_GRID = {
  columns: 4,
  rows: 4,
  cardWidthPx: 372,
  cardHeightPx: 368,
  gapPx: 24,
} as const;

/** Cards per page — same as one full grid (4×4). */
export const OPEN_PROJECTS_PAGE_SIZE =
  OPEN_PROJECTS_GRID.columns * OPEN_PROJECTS_GRID.rows;

/** Middle two rows × inner three columns use layered progress track (matches UIPro). */
export function openProjectsCardUsesProgressLayers(cardIndex: number): boolean {
  const row = Math.floor(cardIndex / OPEN_PROJECTS_GRID.columns);
  const col = cardIndex % OPEN_PROJECTS_GRID.columns;
  return row >= 1 && row <= 2 && col >= 1 && col <= 3;
}
