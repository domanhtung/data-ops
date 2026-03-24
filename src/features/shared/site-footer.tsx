"use client";

import Image from "next/image";
import { AnimatedTextReveal } from "@/features/shared/animated-text-reveal";
import { UiproPillButton } from "@/features/shared/uipro-pill-button";
import { SITE_PAGE_GUTTER_CLASS } from "@/features/shared/page-gutter";
import { siteFooterBrand, siteFooterColumns } from "@/features/shared/site-footer-data";

/** Shared site footer for home, projects, and other marketing surfaces. */
export function SiteFooter() {
  const handleBackToTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-bg-strong-900 text-left text-neutral-600 font-helvetica-now-display">
      <Image
        className="pointer-events-none absolute top-1/2 left-1/2 max-h-none min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        width={2100}
        height={1365}
        sizes="100vw"
        alt=""
        src="/uipro-assets/Grid-layers-v2@2x.png"
      />
      <div className={`${SITE_PAGE_GUTTER_CLASS} relative py-10 sm:py-12 md:py-14 lg:py-16`}>
        <div className="mx-auto w-full max-w-[1024px] rounded-[10px] bg-neutral-900 px-4 py-6 sm:rounded-[11px] sm:px-6 sm:py-8 md:px-8 md:py-9 lg:rounded-num-12 lg:px-10 lg:py-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-9 md:grid-cols-4 md:gap-10">
            {siteFooterColumns.map((column) => (
              <div key={column.heading} className="min-w-0">
                <div className="text-base font-medium leading-6 tracking-[-0.01em] text-stroke-white-0 lg:text-num-18 lg:leading-num-24 lg:tracking-num--0_01">
                  {column.heading}
                </div>
                <div className="mt-5 flex flex-col gap-2 text-sm text-text-soft-400 sm:mt-7 md:mt-8 lg:mt-10 lg:text-base">
                  {column.links.map((link, j) => (
                    <div key={`${column.heading}-${j}`} className="leading-num-24">
                      {link}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div
            className="mt-8 text-[clamp(2.6rem,15vw,15.4rem)] font-bold leading-none tracking-tight text-stroke-white-0 opacity-10 sm:mt-10 md:mt-11 lg:mt-12"
            aria-hidden
          >
            <AnimatedTextReveal text={siteFooterBrand.name} ariaHidden />
          </div>
          <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-5 text-sm text-text-soft-400 sm:mt-8 sm:gap-5 sm:pt-6 md:mt-9 md:pt-7 lg:mt-10 lg:gap-6 lg:pt-8 lg:text-num-18 sm:flex-row sm:items-center sm:justify-between">
            <div className="leading-6 lg:leading-num-24">{siteFooterBrand.copyright}</div>
            <UiproPillButton
              className="!w-full sm:!w-auto"
              inFlow
              onlyIcon="Off"
              size="Medium 40"
              state="Default"
              style="Filled"
              type="Neutral"
              editText={siteFooterBrand.backToTop}
              arrowLeftSLineTop="0px"
              arrowLeftSLineLeft="0px"
              arrowLeftSLineWidth="130px"
              arrowLeftSLineHeight="40px"
              onClick={handleBackToTopClick}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
