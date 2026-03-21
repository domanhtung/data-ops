import type { OpenProjectCardData } from "@/features/projects/data/open-projects-card.types";

export type OpenProjectsFilterState = {
  search: string;
  language: string;
  duration: string;
  category: string;
  paymentRange: string;
  experienceLevel: string;
};

export const DEFAULT_OPEN_PROJECTS_FILTER: OpenProjectsFilterState = {
  search: "",
  language: "",
  duration: "",
  category: "",
  paymentRange: "",
  experienceLevel: "",
};

export function filterOpenProjects(
  list: readonly OpenProjectCardData[],
  f: OpenProjectsFilterState,
): OpenProjectCardData[] {
  const q = f.search.trim().toLowerCase();
  return list.filter((p) => {
    if (q) {
      const hay = `${p.title} ${p.description}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    if (f.language && p.language !== f.language) return false;
    if (f.duration && p.duration !== f.duration) return false;
    if (f.category && p.category !== f.category) return false;
    if (f.paymentRange && p.paymentRange !== f.paymentRange) return false;
    if (f.experienceLevel && p.experienceLevel !== f.experienceLevel) return false;
    return true;
  });
}
