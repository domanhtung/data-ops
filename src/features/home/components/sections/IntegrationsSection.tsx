import Content from "@/features/home/components/ui/content";
import IntegrationCard from "@/features/home/components/ui/integration-card";
import { integrationLogos } from "@/features/home/data/home-content";
import { ScrollFadeInOnView } from "@/features/shared/scroll-fade-in-on-view";

export function IntegrationsSection() {
  return (
    <section className="z-[8] box-border flex w-full max-w-num-1920 flex-col items-center justify-center gap-8 px-4 py-12 sm:px-6 sm:py-14 md:gap-10 md:px-8 md:py-16 lg:gap-11 lg:px-12 lg:py-20 xl:gap-12 xl:px-16 xl:py-24 2xl:px-num-180 2xl:py-num-86">
      <Content
        className="gap-4 md:gap-5 lg:gap-6 [&_.h-5]:h-4 [&_.h-5]:w-4 md:[&_.h-5]:h-[18px] md:[&_.h-5]:w-[18px] lg:[&_.h-5]:h-5 lg:[&_.h-5]:w-5 [&_h2]:text-[30px] [&_h2]:leading-[1.16] md:[&_h2]:text-[34px] lg:[&_h2]:text-[36px] xl:[&_h2]:text-[38px] 2xl:[&_h2]:text-num-40 [&_h2]:tracking-[-0.01em] 2xl:[&_h2]:leading-num-48 [&_p]:text-sm md:[&_p]:text-base lg:[&_p]:text-[17px] xl:[&_p]:text-num-18 [&_p]:leading-6"
        arrowPixel="/uipro-assets/Arrow-Pixel.svg"
        aLLINONEPLATFORM="Integrations"
        arrowPixel1="/uipro-assets/Arrow-Pixel1.svg"
        onePlatformToFindHireAndMan="Work with experts in any tool you use"
        sourceVettedProfessionalsCollab="Bring the right experts into your existing workflow - no migration, no disruption. From custom setups to industry-standard tools, everything just fits."
      />
      <section className="grid w-full max-w-num-1024 grid-cols-1 gap-3 rounded-[14px] p-1 min-[450px]:grid-cols-2 sm:gap-3.5 md:grid-cols-3 md:gap-4 lg:flex lg:flex-wrap lg:content-center lg:items-center lg:justify-center lg:gap-4 lg:rounded-num-16">
        {integrationLogos.map((item, index) => (
          <ScrollFadeInOnView
            key={index}
            as="div"
            className="w-full lg:w-auto"
            delayMs={Math.min(index * 35, 210)}
          >
            <IntegrationCard {...item} className="h-full w-full lg:w-auto" />
          </ScrollFadeInOnView>
        ))}
      </section>
    </section>
  );
}
