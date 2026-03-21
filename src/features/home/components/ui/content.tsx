import Image from "next/image";

export type ContentType = {
  className?: string;
  arrowPixel: string;
  aLLINONEPLATFORM?: string;
  arrowPixel1: string;
  onePlatformToFindHireAndMan?: string;
  sourceVettedProfessionalsCollab?: string;
};

export default function Content({
  className = "",
  arrowPixel,
  aLLINONEPLATFORM,
  arrowPixel1,
  onePlatformToFindHireAndMan,
  sourceVettedProfessionalsCollab,
}: ContentType) {
  return (
    <section className={`self-stretch flex flex-col items-center gap-6 text-center text-[16px] text-text-sub-500 font-helvetica-now-display ${className}`}>
      <div className="flex items-center gap-3">
        <Image className="h-5 w-5 object-contain" loading="lazy" width={20} height={20} sizes="100vw" alt="" src={arrowPixel} />
        <div className="relative tracking-num-0_06 leading-6 uppercase font-medium">{aLLINONEPLATFORM}</div>
        <Image className="h-5 w-5" loading="lazy" width={20} height={20} sizes="100vw" alt="" src={arrowPixel1} />
      </div>
      <div className="self-stretch flex flex-col items-start gap-4 text-num-40 text-text-main-900">
        <h2 className="m-0 self-stretch relative text-[length:inherit] tracking-num--0_01 leading-num-48 font-medium font-[inherit]">{onePlatformToFindHireAndMan}</h2>
        <div className="self-stretch relative text-num-18 leading-6 text-text-sub-500">{sourceVettedProfessionalsCollab}</div>
      </div>
    </section>
  );
}

