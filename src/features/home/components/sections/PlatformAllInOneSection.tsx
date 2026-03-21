"use client";

import { useState } from "react";
import { PlatformAllInOneTabList } from "@/features/home/components/sections/PlatformAllInOneTabList";
import CardExperts from "@/features/home/components/ui/card-experts";
import Content from "@/features/home/components/ui/content";
import {
  cardExpertsItems,
  platformAllInOneTabLabels,
} from "@/features/home/data/home-content";

const PLATFORM_PANEL_ID = "platform-all-in-one-panel";

export function PlatformAllInOneSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <main className="w-num-1920 box-border flex flex-col items-center justify-center gap-12 py-num-86 px-num-180 text-center text-num-18 text-text-soft-400 z-[5] font-helvetica-now-display">
      <Content
        arrowPixel="/uipro-assets/Arrow-Pixel.svg"
        aLLINONEPLATFORM="ALL-IN-ONE PLATFORM"
        arrowPixel1="/uipro-assets/Arrow-Pixel1.svg"
        onePlatformToFindHireAndMan="One platform to find, hire, and manage expert talent"
        sourceVettedProfessionalsCollab="Source vetted professionals, collaborate seamlessly, and handle payments - all in one place. Built to fit your existing workflows."
      />
      <div className="flex w-num-1024 max-w-full flex-col items-start gap-10 lg:flex-row lg:items-start lg:gap-[120px]">
        <div className="w-full shrink-0 lg:w-auto">
          <PlatformAllInOneTabList
            labels={platformAllInOneTabLabels}
            selectedIndex={selectedIndex}
            onSelect={setSelectedIndex}
            panelId={PLATFORM_PANEL_ID}
          />
        </div>
        <div
          id={PLATFORM_PANEL_ID}
          role="tabpanel"
          aria-labelledby={`platform-tab-${selectedIndex}`}
          className="w-full min-w-0 max-w-[692px] flex-1"
        >
          <CardExperts
            key={selectedIndex}
            {...cardExpertsItems[selectedIndex]}
          />
        </div>
      </div>
    </main>
  );
}
