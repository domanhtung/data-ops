"use client";

import Image from "next/image";
import clsx from "clsx";

type ArrowEyebrowProps = {
  label: string;
  leftIconSrc?: string;
  rightIconSrc?: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  leftIconAlt?: string;
  rightIconAlt?: string;
};

export function ArrowEyebrow({
  label,
  leftIconSrc = "/uipro-assets/Arrow-Pixel.svg",
  rightIconSrc = "/uipro-assets/Arrow-Pixel1.svg",
  className,
  iconClassName,
  textClassName,
  leftIconAlt = "",
  rightIconAlt = "",
}: ArrowEyebrowProps) {
  return (
    <div className={clsx("flex items-center gap-2 md:gap-2.5 lg:gap-3", className)}>
      <Image
        className={clsx(
          "ui-eyebrow-icon h-4 w-4 object-contain md:h-[18px] md:w-[18px] lg:h-5 lg:w-5",
          iconClassName
        )}
        loading="lazy"
        width={20}
        height={20}
        sizes="100vw"
        alt={leftIconAlt}
        src={leftIconSrc}
      />
      <div
        className={clsx(
          "text-[11px] font-medium uppercase leading-5 tracking-[0.04em] md:text-xs md:leading-6 md:tracking-[0.05em] lg:text-sm lg:tracking-num-0_06",
          textClassName
        )}
      >
        {label}
      </div>
      <Image
        className={clsx(
          "ui-eyebrow-icon h-4 w-4 md:h-[18px] md:w-[18px] lg:h-5 lg:w-5",
          iconClassName
        )}
        loading="lazy"
        width={20}
        height={20}
        sizes="100vw"
        alt={rightIconAlt}
        src={rightIconSrc}
      />
    </div>
  );
}
