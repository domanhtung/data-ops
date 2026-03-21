export type SiteFooterColumn = {
  heading: string;
  links: readonly string[];
};

export const siteFooterBrand = {
  name: "DataOps",
  copyright: "© Copyright DataOps 2026",
  backToTop: "Back to Top",
} as const;

export const siteFooterColumns: readonly SiteFooterColumn[] = [
  {
    heading: "Platform",
    links: ["How It Works", "Pricing", "Become a Experts", "Create Account"],
  },
  {
    heading: "Solutions",
    links: ["How It Works", "Pricing", "Become a Experts", "Create Account"],
  },
  {
    heading: "Integrations",
    links: ["How It Works", "Pricing", "Become a Experts", "Create Account"],
  },
  {
    heading: "Contact",
    links: ["How It Works", "Pricing", "Become a Experts", "Create Account"],
  },
] as const;
