/**
 * Project card flag strip — real flag PNGs (`FlagRoundImage` + flagcdn).
 * Edit ISO codes or labels here; images load from flagcdn.com (see `next.config.ts`).
 */

export type ProjectCardFlag = {
  id: string;
  /** ISO 3166-1 alpha-2 — https://flagcdn.com */
  isoCode: string;
  label: string;
};

/** Max flags visible at once in the overlapping strip (see design). */
export const PROJECT_CARD_FLAG_PAGE_SIZE = 4;

export const PROJECT_CARD_FLAGS: readonly ProjectCardFlag[] = [
  { id: "vn", isoCode: "vn", label: "Vietnam" },
  { id: "vi", isoCode: "vi", label: "U.S. Virgin Islands" },
  { id: "ye", isoCode: "ye", label: "Yemen" },
  { id: "zw", isoCode: "zw", label: "Zimbabwe" },
  { id: "us", isoCode: "us", label: "United States" },
  { id: "gb", isoCode: "gb", label: "United Kingdom" },
  { id: "sa", isoCode: "sa", label: "Saudi Arabia" },
  { id: "de", isoCode: "de", label: "Germany" },
];
