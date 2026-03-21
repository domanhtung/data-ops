import Image from "next/image";
import { FaqAccordionItem } from "@/features/home/components/ui/faq-accordion-item";
import { UiproPillButton } from "@/features/shared/uipro-pill-button";
import { faqItems } from "@/features/home/data/home-content";

export function FaqSection() {
  return (
    <section className="w-num-1920 flex flex-col items-center justify-center py-[120px] px-num-180 box-border gap-12 z-[10] text-left text-num-18 text-text-main-900 font-helvetica-now-display">
      <section className="self-stretch flex flex-col items-center gap-6 text-center text-[16px] text-text-sub-500 font-helvetica-now-display">
        <div className="flex items-center gap-[11.5px]">
          <Image
            className="h-5 w-5 object-contain"
            loading="lazy"
            width={20}
            height={20}
            sizes="100vw"
            alt=""
            src="/uipro-assets/Arrow-Pixel.svg"
          />
          <div className="relative tracking-num-0_06 leading-6 uppercase font-medium">
            FAQ
          </div>
          <Image
            className="h-5 w-5"
            loading="lazy"
            width={20}
            height={20}
            sizes="100vw"
            alt=""
            src="/uipro-assets/Arrow-Pixel1.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start text-num-40 text-text-main-900">
          <h2 className="m-0 self-stretch relative text-[length:inherit] tracking-num--0_01 leading-num-48 font-medium font-[inherit]">
            Everything You Need to Know
          </h2>
        </div>
      </section>

      <div className="w-num-1024 flex max-w-full flex-col items-start">
        <div className="flex w-full flex-col items-start gap-4 self-stretch">
          {faqItems.map((item, index) => (
            <FaqAccordionItem key={index} item={item} />
          ))}
        </div>
      </div>

      <section className="w-num-1024 rounded-num-12 bg-neutral-900 overflow-hidden flex items-end justify-center p-6 box-border gap-6 text-left text-[32px] text-stroke-white-0 font-helvetica-now-display">
        <div className="flex flex-1 flex-col items-start gap-4">
          <h2 className="m-0 self-stretch relative text-[length:inherit] leading-10 font-medium font-[inherit]">
            Still have questions?
          </h2>
          <div className="self-stretch relative text-num-18 leading-6 text-text-soft-400">
            Contact our team and we’ll be happy to help.
          </div>
        </div>
        <UiproPillButton
          onlyIcon="Off"
          size="Medium 40"
          state="Default"
          style="Filled"
          type="Neutral"
          editText="Contact Us"
          arrowLeftSLineFlex="unset"
          arrowLeftSLineAlignSelf="unset"
        />
      </section>
    </section>
  );
}
