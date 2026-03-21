"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { UiproPillButton } from "@/features/shared/uipro-pill-button";
import ProjectCardAvatarStack from "@/features/projects/components/project-card-avatar-stack";
import type { OpenProjectCardData } from "@/features/projects/data/open-projects-card.types";
import { openProjectsCardCopy } from "@/features/projects/data/open-projects-copy";
import { projectsAsset } from "@/features/projects/data/projects-media";

export type OpenProjectCardProps = {
  className?: string;
  /** Middle grid cells use layered progress track (see `openProjectsCardUsesProgressLayers`). */
  showProgressLayers?: boolean;
  /** When set, overrides static marketing copy for list rendering. */
  data?: OpenProjectCardData;
};

function MetaItem({ icon, children }: { icon: string; children: ReactNode }) {
  return (
    <div className="flex min-w-0 items-center gap-2">
      <Image
        className="size-5 shrink-0"
        width={20}
        height={20}
        sizes="20px"
        alt=""
        src={projectsAsset(icon)}
      />
      <span className="leading-num-20">{children}</span>
    </div>
  );
}

export default function OpenProjectCard({
  className = "",
  showProgressLayers = false,
  data,
}: OpenProjectCardProps) {
  const d = openProjectsCardCopy;
  const title = data?.title ?? d.title;
  const description = data?.description ?? d.description;
  const hiring = data?.hiring ?? d.hiring;
  const experts = data?.experts ?? d.experts;
  const pay = data?.pay ?? d.pay;
  const device = data?.device ?? d.device;
  const deadline = data?.deadline ?? d.deadline;
  const processPct = data?.processPercent ?? 45;
  const processLabel = `${processPct}%`;
  const expertsLeft = data?.expertsLeft ?? d.expertsLeft;
  const applyLabel = data?.applyLabel ?? d.applyLabel;
  const barWidthPct = Math.min(100, Math.max(0, processPct));

  return (
    <section
      className={`flex w-full min-w-0 max-w-[372px] flex-col gap-4 rounded-num-16 border border-[#C4CDEA] p-4 text-left text-num-14 text-text-sub-500 [background:linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.4)),#e7e6f4] font-helvetica-now-display ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-1 items-start gap-2">
          <Image
            className="mt-0.5 size-5 shrink-0"
            width={20}
            height={20}
            sizes="20px"
            alt=""
            src={projectsAsset("luggage-deposit-fill.svg")}
          />
          <h3 className="m-0 min-w-0 text-num-16 font-medium tracking-num--0_01 leading-num-24 text-text-main-900">
            {title}
          </h3>
        </div>
        <div className="flex shrink-0 items-center gap-2 rounded-num-12 px-2 py-0.5 text-num-14 text-light-green-base">
          <span className="size-2 shrink-0 rounded-num-50 bg-light-green-base" aria-hidden />
          <span className="font-medium tracking-num--0_01 leading-num-20">{hiring}</span>
        </div>
      </div>

      <p className="m-0 leading-num-20">{description}</p>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <MetaItem icon="group-line.svg">{experts}</MetaItem>
        <MetaItem icon="hand-coin-line.svg">{pay}</MetaItem>
        <MetaItem icon="device-line.svg">{device}</MetaItem>
        <MetaItem icon="calendar-line.svg">{deadline}</MetaItem>
      </div>

      <div className="min-w-0">
        <Image
          className="h-5 w-auto max-w-[min(100%,146px)] object-cover object-left"
          loading="lazy"
          width={146}
          height={20}
          sizes="(max-width: 400px) 40vw, 146px"
          alt=""
          src={projectsAsset("Row@2x.png")}
        />
      </div>

      <div className="flex min-w-0 flex-col gap-2 overflow-hidden rounded-xl border border-stroke-white-0/40 bg-white p-3 shadow-[0px_1px_2px_rgba(15,23,42,0.04)]">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="min-w-0 font-medium tracking-num--0_01 leading-num-20">
            <span>🔥</span>
            <span className="text-text-sub-500"> Process:</span>
            <span className="text-text-main-900"> {processLabel}</span>
          </div>
          <div className="shrink-0 font-inter leading-num-20 text-text-sub-500">{expertsLeft}</div>
        </div>

        <div className="relative h-2 w-full min-w-0 overflow-hidden rounded-num-8">
          {showProgressLayers ? (
            <>
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                width={316}
                height={8}
                sizes="100vw"
                alt=""
                src={projectsAsset("Slider@2x.png")}
              />
              <div className="absolute inset-0 rounded-num-8 bg-bg-soft-200" />
              <div
                className="absolute top-0 left-0 h-full rounded-num-8 bg-bg-strong-900"
                style={{ width: `${barWidthPct}%` }}
                aria-hidden
              />
            </>
          ) : (
            <Image
              className="h-full w-full object-cover"
              loading="lazy"
              width={316}
              height={8}
              sizes="100vw"
              alt=""
              src={projectsAsset("Slider@2x.png")}
            />
          )}
        </div>
      </div>

      <div className="w-full border-t border-dashed border-stroke-sub-300/70" aria-hidden />

      <div className="flex min-w-0 items-center justify-between gap-3">
        <ProjectCardAvatarStack />
        <UiproPillButton
          inFlow
          onlyIcon="Off"
          size="Small 36"
          state="Default"
          style="Filled"
          type="Neutral"
          editText={applyLabel}
          arrowLeftSLineWidth="92px"
          arrowLeftSLineHeight="36px"
        />
      </div>
    </section>
  );
}
