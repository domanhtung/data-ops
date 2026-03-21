"use client";

import { useCallback, useMemo, useState } from "react";
import OpenProjectsCardsGrid from "@/features/projects/components/sections/open-projects-cards-grid";
import OpenProjectsHeroSection from "@/features/projects/components/sections/open-projects-hero-section";
import OpenProjectsPaginationBar from "@/features/projects/components/sections/open-projects-pagination-bar";
import OpenProjectsSearchFiltersBar from "@/features/projects/components/sections/open-projects-search-filters-bar";
import { SiteFooter } from "@/features/shared/site-footer";
import OpenProjectsSiteHeader from "@/features/projects/components/sections/open-projects-site-header";
import { OPEN_PROJECTS_CATALOG } from "@/features/projects/data/open-projects-catalog";
import {
  DEFAULT_OPEN_PROJECTS_FILTER,
  filterOpenProjects,
  type OpenProjectsFilterState,
} from "@/features/projects/data/open-projects-filter";
import { OPEN_PROJECTS_PAGE_SIZE } from "@/features/projects/data/open-projects-layout";
import { OPEN_PROJECTS_PAGE_GUTTER_CLASS } from "@/features/projects/data/open-projects-page-layout";

const G = OPEN_PROJECTS_PAGE_GUTTER_CLASS;

export default function OpenProjectsView() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<OpenProjectsFilterState>(DEFAULT_OPEN_PROJECTS_FILTER);

  const onFilterChange = useCallback((partial: Partial<OpenProjectsFilterState>) => {
    setFilter((f) => ({ ...f, ...partial }));
    setPage(1);
  }, []);

  const filteredProjects = useMemo(
    () => filterOpenProjects(OPEN_PROJECTS_CATALOG, filter),
    [filter],
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / OPEN_PROJECTS_PAGE_SIZE),
  );

  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * OPEN_PROJECTS_PAGE_SIZE;
  const pageSlice = filteredProjects.slice(start, start + OPEN_PROJECTS_PAGE_SIZE);

  return (
    <div className="flex min-h-screen w-full justify-center bg-neutral-200">
      <div className="flex w-full max-w-[1920px] flex-1 flex-col">
        <OpenProjectsSiteHeader />
        <main className="flex flex-1 flex-col py-8">
          <div className={G}>
            <OpenProjectsHeroSection />
          </div>
          <section
            className={`${G} mt-12 lg:pb-40 flex flex-col gap-6 text-left text-num-14 text-text-sub-500 font-inter`}
          >
            <OpenProjectsSearchFiltersBar filter={filter} onFilterChange={onFilterChange} />
            <OpenProjectsCardsGrid projects={pageSlice} listOffset={start} />
            <OpenProjectsPaginationBar
              page={safePage}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </section>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
