import { OPEN_PROJECTS_CATALOG_TOTAL } from "@/features/projects/data/open-projects-catalog";

export function formatOpenProjectsTotalLabel(
  projectCount: number = OPEN_PROJECTS_CATALOG_TOTAL,
): string {
  return `Total: ${projectCount} open projects`;
}

export const openProjectsHero = {
  title: "Open Projects",
  subtitle:
    "Browse projects that are currently hiring experts. Apply to join and start working.",
  totalLabel: formatOpenProjectsTotalLabel(),
} as const;

export const openProjectsCardCopy = {
  title: "Voice Recording Dataset",
  description:
    "Record short voice samples for AI training. Simple tasks, no experience required.",
  hiring: "Hiring",
  experts: "30 experts",
  pay: "$15",
  device: "Smartphone",
  deadline: "3 days left",
  processPercent: "45%",
  expertsLeft: "16 experts left",
  applyLabel: "Apply Now",
} as const;

export const openProjectsSearch = {
  placeholder: "Search by keyword...",
} as const;

export type { SiteFooterColumn as OpenProjectsFooterColumn } from "@/features/shared/site-footer-data";
export {
  siteFooterBrand as openProjectsBrand,
  siteFooterColumns as openProjectsFooterColumns,
} from "@/features/shared/site-footer-data";
