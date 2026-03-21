import Image from "next/image";

export type FrameComponentType = {
  className?: string;
  title?: string;
  subtext?: string;
};

export default function FrameComponent({
  className = "",
  title,
  subtext,
}: FrameComponentType) {
  return (
    <div
      className={`flex items-start z-[2] text-left text-num-18 text-stroke-white-0 font-helvetica-now-display ${className}`}
    >
      <div className="h-36 w-num-315 relative">
        <Image
          className="absolute top-[0px] left-[0px] h-full w-full"
          width={315}
          height={144}
          sizes="100vw"
          alt=""
          src="/uipro-assets/Rectangle-100.svg"
        />
        <div className="absolute top-[20px] left-[26px] w-num-263 flex flex-col items-start gap-2">
          <div className="self-stretch relative font-medium tracking-num--0_01 leading-6">
            {title}
          </div>
          <div style={{letterSpacing: '-3%'}} className="self-stretch relative text-[16px] leading-6 text-text-disable-200">
            {subtext}
          </div>
        </div>
      </div>
    </div>
  );
}
