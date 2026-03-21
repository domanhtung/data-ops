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
                  return {
                    padding: cardExpertsPadding
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
    <section className={`self-stretch rounded-num-24 border-silver border-solid border-[1px] overflow-hidden flex flex-col items-center justify-center py-num-22 px-num-23 gap-6 text-left text-[24px] text-text-main-900 font-helvetica-now-display ${className}`} style={cardExpertsStyle}>
      <div className="self-stretch flex flex-col items-start gap-4">
        <h3 className="m-0 self-stretch relative text-[length:inherit] leading-num-32 font-medium font-[inherit]">{postOnceGetMatchedWithTheRig}</h3>
        <div className="self-stretch relative text-num-18 leading-6 text-text-sub-500">{shareYourRequirementsAndReceive}</div>
      </div>
      <div className="w-num-628 rounded-num-16 bg-bg-weak-100 flex flex-col items-start p-6 box-border">
        <Image className="w-full relative max-h-full h-auto object-cover" loading="lazy" width={574} height={230} sizes="100vw" alt="" src={image21} style={image21IconStyle} />
      </div>
    </section>
  );
}

