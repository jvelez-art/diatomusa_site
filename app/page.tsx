"use client";

import HeroSection from "@/components/home/HeroSection";
import VideoIntroSection from "@/components/home/VideoIntroSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ColorsSection from "@/components/home/ColorsSection";
import ScienceSection from "@/components/home/ScienceSection";
import HistorySection from "@/components/home/HistorySection";
import CareSection from "@/components/home/CareSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import WarrantyFaqSection from "@/components/home/WarrantyFaqSection";
import AtmosphereSection from "@/components/home/AtmosphereSection";
import StickyCTA from "@/components/home/StickyCTA";

export default function Home() {
  return (
    <div className="bg-mist-20 text-ink-900">
      <HeroSection />
      <VideoIntroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ColorsSection />
      <ScienceSection />
      <HistorySection />
      <CareSection />
      <ReviewsSection />
      <WarrantyFaqSection />
      <AtmosphereSection />
      <StickyCTA />
    </div>
  );
}
