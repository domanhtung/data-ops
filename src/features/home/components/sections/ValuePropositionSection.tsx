import Image from "next/image";

export function ValuePropositionSection() {
  return (
    <section className="w-num-1920 flex flex-col items-center justify-center py-num-86 px-5 box-border gap-12 z-[2] text-center text-[16px] text-text-sub-500 font-helvetica-now-display">
      <div className="flex items-center gap-3">
        <Image
          className="h-5 w-5 object-contain"
          width={20}
          height={20}
          sizes="100vw"
          alt=""
          src="/uipro-assets/Arrow-Pixel.svg"
        />
        <div className="relative tracking-num-0_06 leading-6 uppercase font-medium">
          Data Operations - from raw data to real AI
        </div>
        <Image
          className="h-5 w-5"
          width={20}
          height={20}
          sizes="100vw"
          alt=""
          src="/uipro-assets/Arrow-Pixel1.svg"
        />
      </div>
      <div className="w-[1560px] flex items-start justify-between text-[48px]">
        <div className="w-[1044px] flex flex-col mx-auto items-start gap-12">
          <h1 className="m-0 w-[1043px] relative text-[length:inherit] tracking-num--0_01 leading-[56px] font-medium font-[inherit] flex items-center justify-center">
            AI teams don’t just need models. They need accurate data, expert
            evaluation, and reliable feedback. Without the right experts, AI
            systems struggle to perform in the real world.
          </h1>
          <h1 className="m-0 w-[1043px] relative text-[length:inherit] tracking-num--0_01 leading-[56px] font-medium font-[inherit] text-text-main-900 flex items-center justify-center">
            We connect AI teams with verified domain experts worldwide. Label
            better data. Evaluate models. Improve outputs. <br />
            Human intelligence - at scale
          </h1>
        </div>
      </div>
    </section>
  );
}
