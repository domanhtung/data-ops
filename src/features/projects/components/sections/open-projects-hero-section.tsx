"use client";

import Image from "next/image";
import { openProjectsHero } from "@/features/projects/data/open-projects-copy";
import { projectsAsset } from "@/features/projects/data/projects-media";

export default function OpenProjectsHeroSection() {
  const h = openProjectsHero;
  return (
    <section className="w-full text-left font-helvetica-now-display text-text-main-900">
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_clamp(200px,30vw,466px)] lg:items-center lg:gap-8">
        <div className="flex min-w-0 flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="m-0 text-[clamp(1.75rem,4vw+0.5rem,3rem)] font-medium leading-tight tracking-num--0_01 md:text-[48px] md:leading-[56px]">
              {h.title}
            </h2>
            <p className="m-0 text-num-18 leading-num-24 text-text-sub-500">{h.subtitle}</p>
          </div>
          <div className="flex items-center gap-2 text-num-14">
            <div
              className="size-4 shrink-0 rounded-num-50 bg-light-green-base"
              aria-hidden
            />
            <div className="font-medium uppercase leading-num-20 tracking-[0.06em] text-text-sub-500">
              {h.totalLabel}
            </div>
          </div>
        </div>
        <div className="relative aspect-[233/66] w-full min-h-0 overflow-hidden rounded-num-12">
          <Image
            className="object-cover"
            fill
            loading="lazy"
            sizes="(max-width: 1023px) 100vw, clamp(200px, 30vw, 466px)"
            alt=""
            src={projectsAsset("Frame-12@2x.png")}
          />
        </div>
      </div>
    </section>
  );
}
