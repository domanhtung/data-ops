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
        className="flex w-full items-center gap-3 transition-opacity duration-200 hover:opacity-80 xl:w-auto xl:gap-6"
      >
        <UiproPillButton
          className="!w-full xl:!w-auto"
          onlyIcon="Off"
          size="Medium 40"
          state="Default"
          style="Filled"
          type="Primary"
          editText="Open Projects"
          trailingIconSrc="/uipro-assets/arrow-right-up-line.svg"
        />
        <div className="relative hidden xl:block h-6 w-px shrink-0 bg-stroke-sub-300" aria-hidden />
      </Link>
      {navChipItems.map((item, index) => (
        <UiproPillButton key={index} {...item} />
      ))}
    </div>
  );
}
