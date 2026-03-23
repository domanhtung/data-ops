import Image from "next/image";
import FrameComponent from "@/features/home/components/ui/frame-component";
import { AnimatedTextReveal } from "@/features/shared/animated-text-reveal";
import { ScrollFadeInOnView } from "@/features/shared/scroll-fade-in-on-view";

export function QualityTrustSection() {
  return (
    <section className="w-full max-w-num-1920 flex flex-col items-center justify-center py-num-86 px-num-180 box-border relative isolate gap-12 z-[4]">
      <Image
        className="w-full max-w-num-1920 h-[1365.3px] absolute !m-0 top-[calc(50%_-_766.5px)] left-1/2 -translate-x-1/2 object-contain z-[0] shrink-0"
        width={1920}
        height={1365}
        sizes="100vw"
        alt=""
        src="/uipro-assets/Grid-layers-v2@2x.png"
      />
      <section className="self-stretch flex flex-col items-center gap-6 z-[1] shrink-0 text-center text-[16px] text-text-sub-500 font-helvetica-now-display">
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
            QUALITY & TRUST
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
        <h2 className="m-0 self-stretch relative text-num-40 tracking-num--0_01 leading-num-48 font-medium font-[inherit] text-text-main-900">
          <AnimatedTextReveal text="Where teams find the right experts" />
        </h2>
      </section>
      <div className="w-[1193px] h-[943px] flex items-start pt-[108px] px-num-0 pb-[91px] box-border relative isolate gap-[74px] max-w-full z-[1] shrink-0">
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
                  title="Global Expert Network"
                  subtext="Access a worldwide pool of vetted professionals across industries, languages, and specialized domains."
                />
              </ScrollFadeInOnView>
            </div>
            <ScrollFadeInOnView delayMs={140}>
              <FrameComponent
                title="Smart Matching"
                subtext="Get connected with the right experts based on your needs, skills, and project requirements."
              />
            </ScrollFadeInOnView>
          </div>
        </section>
        <div className="flex items-end gap-[25px] max-w-full">
          <ScrollFadeInOnView delayMs={200}>
            <FrameComponent
              title="Curated Shortlists"
              subtext="Receive a focused list of qualified candidates aligned with your goals, timeline, and scope."
            />
          </ScrollFadeInOnView>
          <section className="h-[744px] w-[395px] flex flex-col items-start max-w-full">
            <div className="flex flex-col items-start gap-[157px]">
              <ScrollFadeInOnView delayMs={260}>
                <FrameComponent
                  title="Domain Specialists"
                  subtext="Work with experts who bring deep, real-world experience - not generalists."
                />
              </ScrollFadeInOnView>
              <div className="w-[395px] flex items-start justify-end">
                <ScrollFadeInOnView delayMs={320}>
                  <FrameComponent
                    title="Proven Skills"
                    subtext="Experts are evaluated through real tasks and past work - so you know they can deliver."
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
