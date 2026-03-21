"use client";

import Image from "next/image";
import OpenProjectsFilterChipSelect from "@/features/projects/components/ui/open-projects-filter-chip-select";
import { openProjectsSearch } from "@/features/projects/data/open-projects-copy";
import { openProjectsFilterChips } from "@/features/projects/data/open-projects-nav-config";
import type { OpenProjectsFilterState } from "@/features/projects/data/open-projects-filter";
import { projectsAsset } from "@/features/projects/data/projects-media";

export type OpenProjectsSearchFiltersBarProps = {
  filter: OpenProjectsFilterState;
  onFilterChange: (partial: Partial<OpenProjectsFilterState>) => void;
};

export default function OpenProjectsSearchFiltersBar({
  filter,
  onFilterChange,
}: OpenProjectsSearchFiltersBarProps) {
  return (
    <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
      <div className="flex h-10 w-full max-w-[476px] shrink-0 items-center overflow-hidden rounded-num-10 bg-bg-weak-100 shadow-[0px_1px_2px_rgba(228,_229,_231,_0.24)]">
        <span className="flex shrink-0 items-center pl-3" aria-hidden>
          <Image
            className="h-5 w-5"
            width={20}
            height={20}
            sizes="20px"
            alt=""
            src={projectsAsset("search-2-line.svg")}
          />
        </span>
        <input
          type="search"
          name="project-search"
          placeholder={openProjectsSearch.placeholder}
          autoComplete="off"
          enterKeyHint="search"
          value={filter.search}
          onChange={(e) => onFilterChange({ search: e.target.value })}
          className="min-w-0 flex-1 border-0 bg-transparent py-2 pr-3 pl-2 text-num-14 leading-num-20 tracking-num--0_01 text-text-main-900 outline-none ring-0 placeholder:text-text-sub-500 focus:ring-0"
          aria-label={openProjectsSearch.placeholder}
        />
      </div>
      <div className="flex min-w-0 flex-wrap gap-2 lg:justify-end">
        {openProjectsFilterChips.map((item) => {
          const key = item.name as keyof OpenProjectsFilterState;
          const value = filter[key] ?? "";
          return (
            <OpenProjectsFilterChipSelect
              key={item.name}
              inFlow
              onlyIcon={item.onlyIcon}
              size={item.size}
              state={item.state}
              style={item.style}
              type={item.type}
              editText={item.editText}
              selectName={item.name}
              selectOptions={item.selectOptions}
              selectValue={value}
              onSelectChange={(e) => onFilterChange({ [key]: e.target.value } as Partial<OpenProjectsFilterState>)}
              arrowLeftSLineTop={item.arrowLeftSLineTop}
              arrowLeftSLineLeft={item.arrowLeftSLineLeft}
              arrowLeftSLineWidth={item.arrowLeftSLineWidth}
              arrowLeftSLineHeight={item.arrowLeftSLineHeight}
            />
          );
        })}
      </div>
    </div>
  );
}
