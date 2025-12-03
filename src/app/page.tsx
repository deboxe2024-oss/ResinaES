import { Benefits } from '@/components/landing/benefits';
import { Bonuses } from '@/components/landing/bonuses';
import { Faq } from '@/components/landing/faq';
import { FloatingBuyButton } from '@/components/landing/floating-buy-button';
import { Footer } from '@/components/landing/footer';
import { Guarantee } from '@/components/landing/guarantee';
import { Hero } from '@/components/landing/hero';
import { Instructor } from '@/components/landing/instructor';
import { Pricing } from '@/components/landing/pricing';
import { StudentResults } from '@/components/landing/student-results';
import { TargetAudience } from '@/components/landing/target-audience';
import { WhatYouWillLearn } from '@/components/landing/what-you-will-learn';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <main>
        <Hero />
        <WhatYouWillLearn />
        <Benefits />
        <Bonuses />
        <Pricing />
        <Guarantee />
        <TargetAudience />
        <Instructor />
        <Faq />
        <StudentResults />
      </main>
      <Footer />
      <FloatingBuyButton />
    </div>
  );
}
