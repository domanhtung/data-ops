"use client";

import { UiproPillButton } from "@/features/shared/uipro-pill-button";
import Image from "next/image";
import Link from "next/link";
import { projectsAsset } from "@/features/projects/data/projects-media";
import { openProjectsBrand } from "@/features/projects/data/open-projects-copy";
import clsx from "clsx";

/** Projects site header auth actions — separate from filter selects and generic pills. */
export function OpenProjectsSiteHeaderAuthActions({ className }: { className?: string }) {
  return (
    <div className={clsx("flex items-center gap-4", className)}>
      <UiproPillButton
        onlyIcon="Off"
        size="Medium 40"
        state="Default"
        style="Filled"
        type="Primary"
        editText="Sign up"
        arrowLeftSLineFlex="unset"
        arrowLeftSLineAlignSelf="unset"
      />
      <UiproPillButton
        onlyIcon="Off"
        size="Medium 40"
        state="Default"
        style="Stroke"
        type="Primary"
        editText="Login"
        arrowLeftSLineFlex="unset"
        arrowLeftSLineAlignSelf="unset"
      />
    </div>
  );
}

export function ProjectLogoHeader() {
  return (<Link href="/">
    <div className="flex min-w-0 items-center gap-1 xl:gap-3">
      <Image
        className="size-10 shrink-0 w-6 h-6 xl:w-10 xl:h-10"
        loading="lazy"
        width={40}
        height={40}
        sizes="40px"
        alt=""
        src={projectsAsset("Logo.svg")}
      />
      <h2 className="m-0 truncate text-xl xl:text-[length:inherit] font-medium leading-10 font-[inherit]">
        {openProjectsBrand.name}
      </h2>
    </div>
  </Link>)
}