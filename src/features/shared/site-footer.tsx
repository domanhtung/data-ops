"use client";

import Image from "next/image";
import { AnimatedTextReveal } from "@/features/shared/animated-text-reveal";
import { UiproPillButton } from "@/features/shared/uipro-pill-button";
import { SITE_PAGE_GUTTER_CLASS } from "@/features/shared/page-gutter";
import { siteFooterBrand, siteFooterColumns } from "@/features/shared/site-footer-data";

/** Shared site footer for home, projects, and other marketing surfaces. */
export function SiteFooter() {
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
      <div className={`${SITE_PAGE_GUTTER_CLASS} relative py-16`}>
        <div className="mx-auto w-full max-w-[1024px] rounded-num-12 bg-neutral-900 px-6 py-10 sm:px-10">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {siteFooterColumns.map((column) => (
              <div key={column.heading} className="min-w-0">
                <div className="tracking-num--0_01 text-num-18 font-medium leading-num-24 text-stroke-white-0">
                  {column.heading}
                </div>
                <div className="mt-10 flex flex-col gap-2 text-text-soft-400">
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
            className="mt-12 text-[clamp(3.5rem,14vw,15.4rem)] font-bold leading-none tracking-tight text-stroke-white-0 opacity-10"
            aria-hidden
          >
            <AnimatedTextReveal text={siteFooterBrand.name} ariaHidden />
          </div>
          <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 text-num-18 text-text-soft-400 sm:flex-row sm:items-center sm:justify-between">
            <div className="leading-num-24">{siteFooterBrand.copyright}</div>
            <UiproPillButton
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
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
