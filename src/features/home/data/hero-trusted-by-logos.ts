const A = "/uipro-assets";

/**
 * Partner logos for the home hero “Trusted by” infinite marquee.
 * Edit this list to change assets; order is left-to-right within one loop.
 */
export type HeroTrustedByLogo = {
  src: string;
  width: number;
  height: number;
  /** Display size (Tailwind + arbitrary px) — should match intrinsic aspect ratio. */
  className: string;
  alt: string;
  /** Passed to next/image sizes */
  sizes?: string;
  loading?: "eager" | "lazy";
  /**
   * When false, skips the vertical rule after this logo (default true).
   * Use to match design where some adjacent logos have no separator.
   */
  dividerAfter?: boolean;
};

export const heroTrustedByLogos: readonly HeroTrustedByLogo[] = [
  {
    src: `${A}/Logo1.svg`,
    width: 151,
    height: 22,
    className: "h-[22.2px] w-[150.6px]",
    alt: "Partner logo",
  },
  {
    src: `${A}/Qualcomm-Logo-1.svg`,
    width: 145,
    height: 27,
    className: "h-[26.7px] w-[145.1px]",
    alt: "Qualcomm",
    loading: "lazy",
  },
  {
    src: `${A}/SK-Telecom-Logo-1.svg`,
    width: 81,
    height: 32,
    className: "h-8 w-[81.2px]",
    alt: "SK Telecom",
    loading: "lazy",
  },
  {
    src: `${A}/Toshiba-logo-1.svg`,
    width: 158,
    height: 24,
    className: "h-6 w-[157.5px]",
    alt: "Toshiba",
    loading: "lazy",
  },
  {
    src: `${A}/Group.svg`,
    width: 152,
    height: 40,
    className: "h-10 w-[152.1px]",
    alt: "Partner logo",
    loading: "lazy",
  },
  {
    src: `${A}/LG-Electronics-Logo-modern-1.svg`,
    width: 179,
    height: 27,
    className: "h-[26.7px] w-[178.7px]",
    alt: "LG Electronics",
    loading: "lazy",
  },
  {
    src: `${A}/Group1.svg`,
    width: 130,
    height: 36,
    className: "h-[35.6px] w-[130.3px]",
    alt: "Partner logo",
    loading: "lazy",
    dividerAfter: false,
  },
  {
    src: `${A}/SuperAnnotate-id6rijsJL-1-1.svg`,
    width: 175,
    height: 36,
    className: "h-[35.6px] w-[175.1px]",
    alt: "SuperAnnotate",
    loading: "lazy",
    dividerAfter: false,
  },
  {
    src: `${A}/image-2-400x100-1@2x.png`,
    width: 142,
    height: 36,
    className: "max-h-full w-[142.2px] object-cover",
    alt: "Partner logo",
    loading: "lazy",
    dividerAfter: false,
  },
] as const;
