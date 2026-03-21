import type { OpenProjectCardData } from "@/features/projects/data/open-projects-card.types";
import openProjectsMock from "@/features/projects/data/open-projects-mock.json";

export const OPEN_PROJECTS_CATALOG = openProjectsMock as OpenProjectCardData[];

export const OPEN_PROJECTS_CATALOG_TOTAL = OPEN_PROJECTS_CATALOG.length;
