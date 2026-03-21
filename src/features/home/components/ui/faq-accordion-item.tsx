"use client";

import Image from "next/image";
import { useId, useState } from "react";
import type { FaqCardItem } from "@/features/home/data/home-content";

const ICON_CLOSED_SRC = "/uipro-assets/add-circle-line.svg";
const ICON_OPEN_SRC = "/uipro-assets/indeterminate-circle-fill.svg";

export type FaqAccordionItemProps = {
  item: FaqCardItem;
  /** First item open on load (optional). */
  defaultOpen?: boolean;
};

/** Single FAQ row: collapsible answer, animated expand/collapse, add vs minus-circle icons. */
export function FaqAccordionItem({
  item,
  defaultOpen = false,
}: FaqAccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const labelId = useId();
  const { howDoCompaniesFindExperts: question, companiesSimplyPostAProject: answer } =
    item;

  return (
    <section className="self-stretch overflow-hidden rounded-num-12 border border-solid border-silver text-left text-num-18 text-text-main-900 font-helvetica-now-display">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-start justify-between gap-5 border-0 bg-transparent py-num-14 px-num-15 text-left transition-colors duration-200 hover:bg-bg-weak-100/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-main-900 motion-reduce:hover:bg-transparent"
        onClick={() => setOpen((v) => !v)}
      >
        <span
          id={labelId}
          className="relative min-w-0 flex-1 font-medium tracking-num--0_01 leading-6"
        >
          {question}
        </span>
        <span className="relative h-6 w-6 shrink-0" aria-hidden>
          <Image
            src={ICON_CLOSED_SRC}
            alt=""
            width={24}
            height={24}
            sizes="24px"
            className={`absolute inset-0 object-contain transition-opacity duration-300 ease-out motion-reduce:transition-none ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src={ICON_OPEN_SRC}
            alt=""
            width={24}
            height={24}
            sizes="24px"
            className={`absolute inset-0 object-contain transition-opacity duration-300 ease-out motion-reduce:transition-none ${
              open ? "opacity-100" : "opacity-0"
            }`}
          />
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={labelId}
        className={`grid motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } transition-[grid-template-rows] duration-300 ease-out`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="px-num-15 pb-num-14 text-text-sub-500 leading-6">
            {answer}
          </div>
        </div>
      </div>
    </section>
  );
}
