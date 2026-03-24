"use client";

import { useMemo, type CSSProperties } from "react";
import Image from "next/image";


export type CardExpertsType = {
  className?: string;
  postOnceGetMatchedWithTheRig?: string;
  shareYourRequirementsAndReceive?: string;
  image21: string;
  
  /** Style props */
  cardExpertsPadding?: CSSProperties['padding'];
  /** Passed through to `mix-blend-mode`; empty string means no blend mode */
  image21IconMixBlendMode?: string;
}



export default function CardExperts({
  className = "",
  postOnceGetMatchedWithTheRig,
  shareYourRequirementsAndReceive,
  image21,
  cardExpertsPadding,
  image21IconMixBlendMode,
}: CardExpertsType) {
  const cardExpertsStyle: CSSProperties = useMemo(() => {
    if (!cardExpertsPadding) return {};
    return {
      ["--card-experts-padding" as string]: cardExpertsPadding,
    };
  }, [cardExpertsPadding]);

  const image21IconStyle: CSSProperties = useMemo(() => {
    return image21IconMixBlendMode
      ? {
          mixBlendMode: image21IconMixBlendMode as CSSProperties["mixBlendMode"],
        }
      : {};
  }, [image21IconMixBlendMode]);

  return (
    <section
      className={`self-stretch overflow-hidden rounded-[20px] border border-solid border-silver px-4 py-4 text-left font-helvetica-now-display text-[20px] text-text-main-900 md:rounded-[22px] md:px-5 md:py-5 md:text-[21px] lg:rounded-num-24 lg:px-6 lg:py-6 lg:text-[22px] xl:px-num-23 xl:py-num-22 xl:[padding:var(--card-experts-padding)] xl:text-[23px] 2xl:text-[24px] ${className}`}
      style={cardExpertsStyle}
    >
      <div className="self-stretch flex flex-col items-start gap-3 md:gap-3.5 lg:gap-4">
        <h3 className="m-0 self-stretch text-[length:inherit] font-medium font-[inherit] leading-[1.25] tracking-[-0.01em] md:leading-[1.28] lg:leading-num-32">
          {postOnceGetMatchedWithTheRig}
        </h3>
        <div className="self-stretch text-sm leading-6 tracking-[-0.002em] text-text-sub-500 md:text-[15px] lg:text-base xl:text-[17px] 2xl:text-num-18">
          {shareYourRequirementsAndReceive}
        </div>
      </div>
      <div className="mt-4 box-border flex w-full max-w-num-628 flex-col items-start rounded-[14px] bg-bg-weak-100 p-3 md:mt-5 md:rounded-[15px] md:p-4 lg:rounded-num-16 lg:p-5 xl:p-6">
        <Image
          className="relative h-auto max-h-full w-full object-cover"
          loading="lazy"
          width={574}
          height={230}
          sizes="100vw"
          alt=""
          src={image21}
          style={image21IconStyle}
        />
      </div>
    </section>
  );
}

