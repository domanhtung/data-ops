"use client";

import { useEffect, useRef, useState } from "react";
import { PlatformAllInOneTabList } from "@/features/home/components/sections/PlatformAllInOneTabList";
import CardExperts from "@/features/home/components/ui/card-experts";
import Content from "@/features/home/components/ui/content";
import { ScrollFadeInOnView } from "@/features/shared/scroll-fade-in-on-view";
import {
  cardExpertsItems,
  platformAllInOneTabLabels,
} from "@/features/home/data/home-content";

const PLATFORM_CARD_ID_PREFIX = "platform-all-in-one-card";

export function PlatformAllInOneSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let rafId = 0;

    const syncActiveCard = () => {
      const viewportCenter = window.innerHeight / 2;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setActiveIndex((current) => (current === nearestIndex ? current : nearestIndex));
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(syncActiveCard);
    };

    syncActiveCard();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <main className="w-full max-w-num-1920 box-border flex flex-col items-center justify-center gap-12 py-num-86 px-num-180 text-center text-num-18 text-text-soft-400 z-[5] font-helvetica-now-display">
      <Content
        arrowPixel="/uipro-assets/Arrow-Pixel.svg"
        aLLINONEPLATFORM="ALL-IN-ONE PLATFORM"
        arrowPixel1="/uipro-assets/Arrow-Pixel1.svg"
        onePlatformToFindHireAndMan="One platform to find, hire, and manage expert talent"
        sourceVettedProfessionalsCollab="Source vetted professionals, collaborate seamlessly, and handle payments - all in one place. Built to fit your existing workflows."
      />
      <div className="flex w-full max-w-num-1024 flex-col items-start gap-10 lg:flex-row lg:items-start lg:gap-[120px]">
        <div className="relative z-30 h-fit w-full shrink-0 self-start bg-white lg:sticky lg:top-40 lg:w-auto lg:pe-8">
          <PlatformAllInOneTabList
            labels={platformAllInOneTabLabels}
            activeIndex={activeIndex}
            panelIdPrefix={PLATFORM_CARD_ID_PREFIX}
          />
        </div>
        <div className="flex w-full min-w-0 max-w-[692px] flex-1 flex-col gap-8">
          {cardExpertsItems.map((item, index) => (
            <div
              key={`${item.postOnceGetMatchedWithTheRig}-${index}`}
              id={`${PLATFORM_CARD_ID_PREFIX}-${index}`}
              role="tabpanel"
              aria-labelledby={`platform-tab-${index}`}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
            >
              <ScrollFadeInOnView delayMs={Math.min(index * 80, 240)}>
                <CardExperts {...item} />
              </ScrollFadeInOnView>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
