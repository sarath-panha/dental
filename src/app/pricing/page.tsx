// src/app/pricing/page.tsx
import { Metadata } from 'next'
import { PricingHero } from '@/components/pricing/pricing-hero'
import { PricingPlans } from '@/components/pricing/pricing-plans'
import { PricingFAQ } from '@/components/pricing/pricing-faq'
import { PricingCTA } from '@/components/pricing/pricing-cta'

export const metadata: Metadata = {
  title: 'Pricing - Dentix',
  description: 'Simple, transparent pricing for dental practice management software. Start with a free trial.',
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingPlans />
      <PricingFAQ />
      <PricingCTA />
    </>
  )
}