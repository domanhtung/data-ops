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
      className={`self-stretch flex items-start flex-wrap content-start gap-8 text-center text-num-18 text-text-main-900 font-helvetica-now-display ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center gap-2">
        <Image
          className="w-6 h-6"
          width={24}
          height={24}
          sizes="100vw"
          alt=""
          src="/uipro-assets/Check.svg"
        />
        <div className="w-px flex-1 relative bg-stroke-sub-300" />
      </div>
      <div className="flex min-w-[397px] flex-1 flex-col items-start gap-4">
        <div className="relative font-medium tracking-num--0_01 leading-6">
          {postAJobGetQualifiedMat}
        </div>
        <div className="self-stretch relative text-left leading-6 text-text-sub-500">
          {defineYourNeedsAndRequirements}
        </div>
      </div>
    </div>
  );
}
