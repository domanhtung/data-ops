import Content from "@/features/home/components/ui/content";
import IntegrationCard from "@/features/home/components/ui/integration-card";
import { integrationLogos } from "@/features/home/data/home-content";
import { ScrollFadeInOnView } from "@/features/shared/scroll-fade-in-on-view";

export function IntegrationsSection() {
  return (
    <section className="w-full max-w-num-1920 flex flex-col items-center justify-center py-num-86 px-num-180 box-border gap-12 z-[8]">
      <Content
        arrowPixel="/uipro-assets/Arrow-Pixel.svg"
        aLLINONEPLATFORM="Integrations"
        arrowPixel1="/uipro-assets/Arrow-Pixel1.svg"
        onePlatformToFindHireAndMan="Work with experts in any tool you use"
        sourceVettedProfessionalsCollab="Bring the right experts into your existing workflow - no migration, no disruption. From custom setups to industry-standard tools, everything just fits."
      />
      <section className="w-full max-w-num-1024 rounded-num-16 flex items-center justify-center flex-wrap content-center gap-4">
        {integrationLogos.map((item, index) => (
          <ScrollFadeInOnView key={index} delayMs={Math.min(index * 35, 210)}>
            <IntegrationCard {...item} />
          </ScrollFadeInOnView>
        ))}
      </section>
    </section>
  );
}
