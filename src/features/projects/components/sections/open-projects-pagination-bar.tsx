"use client";

import Image from "next/image";
import { UiproPillButton } from "@/features/shared/uipro-pill-button";
import { buildOpenProjectsPaginationSlots } from "@/features/projects/data/open-projects-pagination";
import { projectsAsset } from "@/features/projects/data/projects-media";

export type OpenProjectsPaginationBarProps = {
  page: number;
  totalPages: number;
  onPageChange: (nextPage: number) => void;
};

export default function OpenProjectsPaginationBar({
  page,
  totalPages,
  onPageChange,
}: OpenProjectsPaginationBarProps) {
  const safeTotal = Math.max(1, totalPages);
  const safePage = Math.min(Math.max(1, page), safeTotal);
  const slots = buildOpenProjectsPaginationSlots(safePage, safeTotal);
  const pageSummary = `Page ${safePage} of ${safeTotal}`;
  const totalPagesLabel = safeTotal === 1 ? "1 page" : `${safeTotal} pages`;

  return (
    <div className="flex w-full flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
      <UiproPillButton
        inFlow
        onlyIcon="Off"
        size="Medium 40"
        state="Default"
        style="Ghost"
        type="Neutral"
        editText={pageSummary}
        arrowLeftSLineTop="0px"
        arrowLeftSLineLeft="0px"
        arrowLeftSLineWidth="108px"
        arrowLeftSLineHeight="40px"
      />
      <div className="flex flex-wrap items-center justify-center gap-1 sm:flex-1 sm:justify-center">
        <button
          type="button"
          className="flex size-9 shrink-0 items-center justify-center rounded-num-8 disabled:pointer-events-none disabled:opacity-35"
          aria-label="Previous page"
          disabled={safePage <= 1}
          onClick={() => onPageChange(safePage - 1)}
        >
          <Image
            className="h-5 w-5"
            width={20}
            height={20}
            sizes="20px"
            alt=""
            src={projectsAsset("arrow-left-s-line-dark.svg")}
          />
        </button>
        <div className="flex flex-wrap items-center justify-center gap-1">
          {slots.map((slot) =>
            slot.type === "ellipsis" ? (
              <span
                key={slot.key}
                className="flex h-9 min-w-9 items-center justify-center px-1 font-medium tracking-num--0_01 text-num-14 text-text-sub-500"
                aria-hidden
              >
                …
              </span>
            ) : (
              <UiproPillButton
                key={slot.page}
                inFlow
                onlyIcon="Off"
                size="Small 36"
                state="Default"
                style={slot.page === safePage ? "Filled" : "Lighter"}
                type={slot.page === safePage ? "Primary" : "Neutral"}
                editText={String(slot.page)}
                arrowLeftSLineTop=""
                arrowLeftSLineLeft=""
                arrowLeftSLineWidth={slot.page === safePage ? "36px" : ""}
                arrowLeftSLineHeight="36px"
                onClick={() => onPageChange(slot.page)}
              />
            ),
          )}
        </div>
        <button
          type="button"
          className="flex size-9 shrink-0 items-center justify-center rounded-num-8 disabled:pointer-events-none disabled:opacity-35"
          aria-label="Next page"
          disabled={safePage >= safeTotal}
          onClick={() => onPageChange(safePage + 1)}
        >
          <Image
            className="h-5 w-5"
            width={20}
            height={20}
            sizes="20px"
            alt=""
            src={projectsAsset("arrow-right-s-line-dark.svg")}
          />
        </button>
      </div>
      <UiproPillButton
        inFlow
        onlyIcon="Off"
        size="Medium 40"
        state="Default"
        style="Lighter"
        type="Neutral"
        editText={totalPagesLabel}
        arrowLeftSLineTop="0px"
        arrowLeftSLineLeft="0px"
        arrowLeftSLineHeight="40px"
      />
    </div>
  );
}
