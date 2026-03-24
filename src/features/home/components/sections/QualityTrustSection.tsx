import Image from "next/image";
import FrameComponent from "@/features/home/components/ui/frame-component";
import { AnimatedTextReveal } from "@/features/shared/animated-text-reveal";
import { ScrollFadeInOnView } from "@/features/shared/scroll-fade-in-on-view";
import { ArrowEyebrow } from "@/features/shared/arrow-eyebrow";

const QUALITY_TRUST_ITEMS = [
  {
    title: "Global Expert Network",
    subtext:
      "Access a worldwide pool of vetted professionals across industries, languages, and specialized domains.",
  },
  {
    title: "Smart Matching",
    subtext:
      "Get connected with the right experts based on your needs, skills, and project requirements.",
  },
  {
    title: "Curated Shortlists",
    subtext:
      "Receive a focused list of qualified candidates aligned with your goals, timeline, and scope.",
  },
  {
    title: "Domain Specialists",
    subtext:
      "Work with experts who bring deep, real-world experience - not generalists.",
  },
  {
    title: "Proven Skills",
    subtext:
      "Experts are evaluated through real tasks and past work - so you know they can deliver.",
  },
];

export function QualityTrustSection() {
  return (
    <section className="relative isolate z-[4] box-border flex w-full max-w-num-1920 flex-col items-center justify-center gap-8 px-4 py-12 sm:px-6 sm:py-14 md:gap-10 md:px-8 md:py-16 lg:gap-11 lg:px-12 lg:py-20 xl:gap-12 xl:px-16 xl:py-24 2xl:px-num-180 2xl:py-num-86">
      <Image
        className="pointer-events-none absolute left-1/2 top-1/2 z-[0] hidden h-[1200px] w-full max-w-num-1920 -translate-x-1/2 -translate-y-1/2 object-contain opacity-80 lg:block 2xl:h-[1365.3px]"
        width={1920}
        height={1365}
        sizes="100vw"
        alt=""
        src="/uipro-assets/Grid-layers-v2@2x.png"
      />
      <section className="z-[1] flex shrink-0 flex-col items-center gap-4 self-stretch text-center font-helvetica-now-display text-[15px] text-text-sub-500 md:gap-5 md:text-[16px]">
        <ArrowEyebrow label="QUALITY & TRUST" />
        <h2 className="relative m-0 self-stretch text-[30px] font-medium leading-[1.16] tracking-[-0.01em] text-text-main-900 md:text-[34px] lg:text-[36px] xl:text-[38px] 2xl:text-num-40 2xl:leading-num-48">
          <AnimatedTextReveal text="Where teams find the right experts" />
        </h2>
      </section>

      <div className="z-[1] flex w-full max-w-[1100px] shrink-0 flex-col items-center gap-6 md:gap-7 lg:gap-8 xl:hidden">
        <ScrollFadeInOnView as="div" className="w-full max-w-[560px]" durationMs={700}>
          <Image
            className="h-auto w-full object-cover"
            width={460}
            height={345}
            sizes="100vw"
            alt=""
            src="/uipro-assets/Frame-19@2x.png"
          />
        </ScrollFadeInOnView>
        <div className="grid w-full grid-cols-1 justify-items-center gap-4 md:grid-cols-2 md:gap-5 lg:gap-6">
          {QUALITY_TRUST_ITEMS.map((item, index) => (
            <ScrollFadeInOnView key={item.title} delayMs={80 + index * 60}>
              <FrameComponent title={item.title} subtext={item.subtext} />
            </ScrollFadeInOnView>
          ))}
        </div>
      </div>

      <div className="relative isolate z-[1] hidden h-[943px] w-[1193px] max-w-full shrink-0 items-start gap-[74px] box-border px-num-0 pb-[91px] pt-[108px] xl:flex">
        <ScrollFadeInOnView as="div" className="absolute !m-0 top-[calc(50%_-_180.5px)] left-[calc(50%_-_236.5px)] z-[2]" durationMs={700}>
          <Image
            className="h-[345.3px] w-[460px] object-cover"
            width={460}
            height={345}
            sizes="100vw"
            alt=""
            src="/uipro-assets/Frame-19@2x.png"
          />
        </ScrollFadeInOnView>
        <Image
          className="h-[78px] w-[156px] absolute !m-0 top-[539px] left-[805.5px] z-0"
          width={156}
          height={78}
          sizes="100vw"
          alt=""
          src="/uipro-assets/Vector-19.svg"
        />
        <Image
          className="h-[78px] w-[156px] absolute !m-0 top-[539px] rotate-[50deg] left-[210px] object-contain z-0"
          width={156}
          height={78}
          sizes="100vw"
          alt=""
          src="/uipro-assets/Vector-19.svg"
        />
        <Image
          className="h-[78px] w-[156px] absolute !m-0 top-[230px] rotate-[180deg] left-[694.5px] object-contain z-0"
          width={156}
          height={78}
          sizes="100vw"
          alt=""
          src="/uipro-assets/Vector-19.svg"
        />
        <Image
          className="h-[78px] w-[156px] absolute !m-0 top-[230px] rotate-[50deg] left-[333px] z-0"
          width={156}
          height={78}
          sizes="100vw"
          alt=""
          src="/uipro-assets/Vector-19.svg"
        />
        <Image
          className="h-[106px] w-[168px] absolute !m-0 top-[618px] left-[505.5px] object-contain z-0 "
          loading="lazy"
          width={168}
          height={106}
          sizes="100vw"
          alt=""
          src="/uipro-assets/Vector-18.svg"
        />
        <section className="flex flex-col items-start pt-num-4 px-num-0 pb-num-0">
          <div className="flex flex-col items-start gap-[153px]">
            <div className="w-[383px] flex items-start justify-end">
              <ScrollFadeInOnView delayMs={80}>
                <FrameComponent
                  title={QUALITY_TRUST_ITEMS[0].title}
                  subtext={QUALITY_TRUST_ITEMS[0].subtext}
                />
              </ScrollFadeInOnView>
            </div>
            <ScrollFadeInOnView delayMs={140}>
              <FrameComponent
                title={QUALITY_TRUST_ITEMS[1].title}
                subtext={QUALITY_TRUST_ITEMS[1].subtext}
              />
            </ScrollFadeInOnView>
          </div>
        </section>
        <div className="flex items-end gap-[25px] max-w-full">
          <ScrollFadeInOnView delayMs={200}>
            <FrameComponent
              title={QUALITY_TRUST_ITEMS[2].title}
              subtext={QUALITY_TRUST_ITEMS[2].subtext}
            />
          </ScrollFadeInOnView>
          <section className="h-[744px] w-[395px] flex flex-col items-start max-w-full">
            <div className="flex flex-col items-start gap-[157px]">
              <ScrollFadeInOnView delayMs={260}>
                <FrameComponent
                  title={QUALITY_TRUST_ITEMS[3].title}
                  subtext={QUALITY_TRUST_ITEMS[3].subtext}
                />
              </ScrollFadeInOnView>
              <div className="w-[395px] flex items-start justify-end">
                <ScrollFadeInOnView delayMs={320}>
                  <FrameComponent
                    title={QUALITY_TRUST_ITEMS[4].title}
                    subtext={QUALITY_TRUST_ITEMS[4].subtext}
                  />
                </ScrollFadeInOnView>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
