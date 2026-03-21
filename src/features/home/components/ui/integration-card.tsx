import Image from "next/image";

export type IntegrationCardType = {
  className?: string;
  rectangle13: string;
  aWSSageMaker?: string;
  multimodal?: string;
};

export default function IntegrationCard({
  className = "",
  rectangle13,
  aWSSageMaker,
  multimodal,
}: IntegrationCardType) {
  return (
    <div
      className={`rounded-num-12 bg-bg-weak-100 border-neutral-0 border-solid border-[1px] flex items-center py-2.5 px-num-11 gap-4 text-left text-[16px] text-text-main-900 font-helvetica-now-display ${className}`}
    >
      <Image
        className="h-12 w-12 relative rounded-num-8 object-cover"
        loading="lazy"
        width={48}
        height={48}
        sizes="100vw"
        alt=""
        src={rectangle13}
      />
      <div className="flex flex-col items-start">
        <div className="relative font-medium tracking-num--0_01 leading-6">
          {aWSSageMaker}
        </div>
        <div className="relative leading-6 text-text-sub-500">{multimodal}</div>
      </div>
    </div>
  );
}
