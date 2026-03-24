"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
  const tabsRowRef = useRef<HTMLDivElement>(null);
  const tabColRef = useRef<HTMLDivElement>(null);
  const [cardsPullUpPx, setCardsPullUpPx] = useState(0);
  const [tabColWidthPx, setTabColWidthPx] = useState(0);

  useLayoutEffect(() => {
    const row = tabsRowRef.current;
    const tabCol = tabColRef.current;
    if (!row) return;

    const update = () => {
      const isLg = window.matchMedia("(min-width: 1024px)").matches;
      if (!isLg) {
        setCardsPullUpPx(0);
        setTabColWidthPx(0);
        return;
      }
      setCardsPullUpPx(row.getBoundingClientRect().height);
      if (tabCol) {
        setTabColWidthPx(tabCol.getBoundingClientRect().width);
      }
    };

    const ro = new ResizeObserver(() => update());
    ro.observe(row);
    if (tabCol) ro.observe(tabCol);
    const mql = window.matchMedia("(min-width: 1024px)");
    mql.addEventListener("change", update);
    window.addEventListener("resize", update);
    update();

    return () => {
      ro.disconnect();
      mql.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

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
    <main className="z-[5] box-border flex w-full max-w-num-1920 flex-col items-center justify-center gap-0 px-4 py-12 text-center font-helvetica-now-display text-[16px] text-text-soft-400 sm:px-6 sm:py-14 md:px-8 md:py-16 md:text-[17px] lg:px-10 lg:py-20 lg:text-num-18 xl:px-14 xl:py-24 2xl:px-num-180 2xl:py-num-86">
      {/* One sticky stack (Content + tab row with spacer). Cards sibling pulls up on lg to sit beside tabs; bg only on text/tabs so the spacer column does not cover cards. */}
      <div className="relative z-30 h-fit w-full shrink-0 self-start lg:sticky lg:top-[86px] xl:top-[118px]">
        <div className="bg-white pb-3 md:pb-4">
          <Content
            className="gap-4 md:gap-5 lg:gap-6 [&_.h-5]:h-4 [&_.h-5]:w-4 md:[&_.h-5]:h-[18px] md:[&_.h-5]:w-[18px] lg:[&_.h-5]:h-5 lg:[&_.h-5]:w-5 [&_h2]:text-[30px] [&_h2]:leading-[1.16] md:[&_h2]:text-[34px] lg:[&_h2]:text-[36px] xl:[&_h2]:text-[38px] 2xl:[&_h2]:text-num-40 [&_h2]:tracking-[-0.01em] 2xl:[&_h2]:leading-num-48 [&_p]:text-sm md:[&_p]:text-base lg:[&_p]:text-[17px] xl:[&_p]:text-num-18 [&_p]:leading-6"
            arrowPixel="/uipro-assets/Arrow-Pixel.svg"
            aLLINONEPLATFORM="ALL-IN-ONE PLATFORM"
            arrowPixel1="/uipro-assets/Arrow-Pixel1.svg"
            onePlatformToFindHireAndMan="One platform to find, hire, and manage expert talent"
            sourceVettedProfessionalsCollab="Source vetted professionals, collaborate seamlessly, and handle payments - all in one place. Built to fit your existing workflows."
          />
        </div>
        <div
          ref={tabsRowRef}
          className="mt-8 hidden flex-col gap-8 lg:mx-auto lg:mt-8 lg:flex lg:w-full lg:max-w-num-1024 lg:flex-row lg:items-start lg:gap-16 xl:mt-10 xl:gap-24 2xl:mt-11 2xl:gap-[120px]"
        >
          <div ref={tabColRef} className="bg-white lg:pe-8">
            <PlatformAllInOneTabList
              labels={platformAllInOneTabLabels}
              activeIndex={activeIndex}
              panelIdPrefix={PLATFORM_CARD_ID_PREFIX}
            />
          </div>
          <div
            className="hidden min-h-0 w-full max-w-[692px] flex-1 lg:block"
            aria-hidden
          />
        </div>
      </div>
      <div
        className="relative z-10 flex w-full max-w-num-1024 flex-col gap-5 pt-8 md:gap-6 md:pt-10 lg:flex-row lg:items-start lg:gap-16 lg:pt-8 xl:gap-24 xl:pt-10 2xl:gap-[120px] 2xl:pt-11"
        style={
          cardsPullUpPx > 0
            ? { marginTop: -cardsPullUpPx }
            : undefined
        }
      >
        <div
          className="hidden flex-shrink-0 lg:block"
          style={{ width: tabColWidthPx > 0 ? tabColWidthPx : undefined }}
          aria-hidden
        />
        <div className="flex w-full min-w-0 max-w-[692px] mx-auto flex-1 flex-col items-center gap-5 md:gap-6 lg:items-stretch lg:gap-8">
          {cardExpertsItems.map((item, index) => (
            <div
              key={`${item.postOnceGetMatchedWithTheRig}-${index}`}
              id={`${PLATFORM_CARD_ID_PREFIX}-${index}`}
              role="tabpanel"
              aria-labelledby={`platform-tab-${index}`}
              className="w-full max-w-[692px]"
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
            >
              <div className="mb-3 block text-center lg:hidden">
                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.04em] text-text-main-900 md:text-sm md:tracking-[0.05em]">
                  {platformAllInOneTabLabels[index] ?? `Step ${index + 1}`}
                </div>
              </div>
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
