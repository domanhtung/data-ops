"use client";

import Link from "next/link";
import { UiproPillButton } from "@/features/shared/uipro-pill-button";
import { navChipItems } from "@/features/home/data/home-content";

/** Home header only: Open Projects CTA + ghost nav chips inside bordered pill. */
export function HomeHeaderNavCluster() {
  return (
    <div className="rounded-num-16 border border-solid border-stroke-white-0 bg-ghostwhite flex items-center gap-4 px-[7px] py-num-6">
      <Link
        href="/projects"
        className="flex items-center gap-6 transition-opacity duration-200 hover:opacity-80"
      >
        <UiproPillButton
          onlyIcon="Off"
          size="Medium 40"
          state="Default"
          style="Filled"
          type="Primary"
          editText="Open Projects"
          trailingIconSrc="/uipro-assets/arrow-right-up-line.svg"
        />
        <div className="relative h-6 w-px shrink-0 bg-stroke-sub-300" aria-hidden />
      </Link>
      {navChipItems.map((item, index) => (
        <UiproPillButton key={index} {...item} />
      ))}
    </div>
  );
}
