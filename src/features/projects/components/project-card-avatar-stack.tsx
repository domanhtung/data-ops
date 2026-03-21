"use client";

import { useState } from "react";
import FlagRoundImage from "@/features/projects/components/ui/flag-round-image";
import {
  PROJECT_CARD_FLAG_PAGE_SIZE,
  PROJECT_CARD_FLAGS,
} from "@/features/projects/data/project-card-avatar-config";
import { projectsAsset } from "@/features/projects/data/projects-media";

/** Matches `size-5` (20px) minus overlap `1.5px` between circles. */
const FLAG_DIAMETER_PX = 20;
const FLAG_OVERLAP_PX = 1.5;
const FLAG_STRIDE_PX = FLAG_DIAMETER_PX - FLAG_OVERLAP_PX;

function stripWidthPx(count: number): number {
  if (count <= 0) {
    return 0;
  }
  return FLAG_DIAMETER_PX + (count - 1) * FLAG_STRIDE_PX;
}

const VIEWPORT_4_FLAGS_PX = stripWidthPx(PROJECT_CARD_FLAG_PAGE_SIZE);

function StripNavButton({
  direction,
  label,
  onClick,
}: {
  direction: "left" | "right";
  label: string;
  onClick: () => void;
}) {
  const src =
    direction === "right"
      ? projectsAsset("arrow-right-s-line.svg")
      : projectsAsset("arrow-left-s-line.svg");

  return (
    <button
      type="button"
      className="relative z-[12] flex size-5 shrink-0 items-center justify-center overflow-visible rounded-full bg-bg-surface-700 ring-1 ring-black/10 transition-opacity hover:opacity-90 focus-visible:z-[13] focus-visible:ring-2 focus-visible:ring-bg-strong-900 focus-visible:outline-none"
      aria-label={label}
      onClick={onClick}
    >
      {/* Local SVG: plain img avoids Next/Image + fractional Tailwind sizing glitches at 1x zoom */}
      {/* eslint-disable-next-line @next/next/no-img-element -- tiny inline icon; Image wrapper caused invisible render at 100% zoom */}
      <img
        src={src}
        alt=""
        width={14}
        height={14}
        className="pointer-events-none block h-3.5 w-3.5 shrink-0 select-none"
        draggable={false}
      />
    </button>
  );
}

/** Avatar / flag strip — overlapping circles, max 4 visible; prev/next when more flags exist. */
export default function ProjectCardAvatarStack() {
  const flags = PROJECT_CARD_FLAGS;
  const total = flags.length;
  const pageSize = PROJECT_CARD_FLAG_PAGE_SIZE;

  const [startIndex, setStartIndex] = useState(0);

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + pageSize < total;

  const innerWidthPx = stripWidthPx(total);
  const translateXPx = -startIndex * FLAG_STRIDE_PX;

  const useFullWidthViewport = total <= pageSize;
  const viewportWidthPx = useFullWidthViewport ? innerWidthPx : VIEWPORT_4_FLAGS_PX;

  if (total === 0) {
    return null;
  }

  return (
    <div className="relative isolate flex min-w-0 max-w-full flex-nowrap items-center">
      {canGoPrev ? (
        <StripNavButton
          direction="left"
          label="Show previous flags"
          onClick={() => setStartIndex((s) => Math.max(0, s - pageSize))}
        />
      ) : null}

      <div
        className="relative z-0 shrink-0 overflow-hidden"
        style={{ width: viewportWidthPx }}
      >
        <div
          className="flex flex-nowrap transition-transform duration-300 ease-out motion-reduce:transition-none [&>*+*]:-ml-[1.5px]"
          style={{
            width: innerWidthPx,
            transform: `translateX(${translateXPx}px)`,
          }}
        >
          {flags.map((flag, index) => (
            <div
              key={flag.id}
              className="relative shrink-0"
              style={{ zIndex: index }}
            >
              <FlagRoundImage isoCode={flag.isoCode} label={flag.label} />
            </div>
          ))}
        </div>
      </div>

      {canGoNext ? (
        <StripNavButton
          direction="right"
          label="Show more flags"
          onClick={() => setStartIndex((s) => (s + pageSize < total ? s + pageSize : s))}
        />
      ) : null}
    </div>
  );
}
