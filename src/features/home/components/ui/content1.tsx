import { AnimatedTextReveal } from "@/src/features/shared/animated-text-reveal";
import Image from "next/image";

export type Content1Type = {
  className?: string;
  postAJobGetQualifiedMat?: string;
  defineYourNeedsAndRequirements?: string;
};

export default function Content1({
  className = "",
  postAJobGetQualifiedMat,
  defineYourNeedsAndRequirements,
}: Content1Type) {
  return (
    <div
      className={`self-stretch flex items-start gap-5 text-center font-helvetica-now-display text-[16px] text-text-main-900 md:gap-6 md:text-[17px] lg:gap-8 lg:text-num-18 ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center gap-1.5 md:gap-2">
        <Image
          className="h-5 w-5 md:h-[22px] md:w-[22px] lg:h-6 lg:w-6"
          width={24}
          height={24}
          sizes="100vw"
          alt=""
          src="/uipro-assets/Check.svg"
        />
        <div className="relative w-px flex-1 bg-stroke-sub-300" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col items-start gap-3 md:gap-3.5 lg:gap-4">
        <div className="relative text-[length:inherit] font-medium leading-6 tracking-[-0.01em]">
          <AnimatedTextReveal text={postAJobGetQualifiedMat ?? ""} />
        </div>
        <div className="relative self-stretch text-left text-sm leading-6 text-text-sub-500 md:text-[15px] lg:text-base xl:text-[17px] 2xl:text-num-18">
          <AnimatedTextReveal text={defineYourNeedsAndRequirements ?? ""} />
        </div>
      </div>
    </div>
  );
}
