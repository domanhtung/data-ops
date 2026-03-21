import { FaqSection } from "@/features/home/components/sections/FaqSection";
import { GetStartedBandSection } from "@/features/home/components/sections/GetStartedBandSection";
import { HeroBackdrop } from "@/features/home/components/sections/HeroBackdrop";
import { HeroHeaderSection } from "@/features/home/components/sections/HeroHeaderSection";
import { HowItWorksSection } from "@/features/home/components/sections/HowItWorksSection";
import { IntegrationsSection } from "@/features/home/components/sections/IntegrationsSection";
import { PlatformAllInOneSection } from "@/features/home/components/sections/PlatformAllInOneSection";
import { QualityTrustSection } from "@/features/home/components/sections/QualityTrustSection";
import { SiteFooter } from "@/features/shared/site-footer";
import { SolutionsSection } from "@/features/home/components/sections/SolutionsSection";
import { ValuePropositionSection } from "@/features/home/components/sections/ValuePropositionSection";

/**
 * UIPro landing page: full marketing / home layout for DataOps.
 */
export default function HomeLanding() {
  return (
    <div className="relative flex w-full min-h-0 items-start overflow-hidden bg-white leading-[normal] tracking-[normal]">
      <main
        className="relative isolate flex max-w-full shrink-0 flex-col items-center justify-center">
        <HeroBackdrop />
        <HeroHeaderSection />
        <ValuePropositionSection />
        <div className="z-[3] flex h-px w-num-1920 flex-col items-center justify-center" />
        <QualityTrustSection />
        <PlatformAllInOneSection />
        <HowItWorksSection />
        <SolutionsSection />
        <IntegrationsSection />
        <GetStartedBandSection />
        <FaqSection />
        <SiteFooter />
      </main>
    </div>
  );
}
