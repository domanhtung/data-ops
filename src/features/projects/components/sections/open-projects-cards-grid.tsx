"use client";

import OpenProjectCard from "@/features/projects/components/open-project-card";
import type { OpenProjectCardData } from "@/features/projects/data/open-projects-card.types";
import { openProjectsCardUsesProgressLayers } from "@/features/projects/data/open-projects-layout";

export type OpenProjectsCardsGridProps = {
  /** Projects visible on the current page (pre-sliced). */
  projects: readonly OpenProjectCardData[];
  /** Start index within the filtered list (for progress-layer pattern). */
  listOffset: number;
};

export default function OpenProjectsCardsGrid({
  projects,
  listOffset,
}: OpenProjectsCardsGridProps) {
  if (projects.length === 0) {
    return (
      <div className="w-full rounded-num-12 border border-dashed border-stroke-sub-300 bg-bg-weak-100/50 py-16 text-center text-num-14 text-text-sub-500">
        No projects match the current filters.
      </div>
    );
  }

  return (
    <div className="grid w-full grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {projects.map((project, i) => (
        <OpenProjectCard
          key={project.id}
          data={project}
          showProgressLayers={openProjectsCardUsesProgressLayers(listOffset + i)}
        />
      ))}
    </div>
  );
}
