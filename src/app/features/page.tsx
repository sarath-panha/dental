// src/app/features/page.tsx
import { Metadata } from 'next'
import { FeaturesHero } from '@/components/features/features-hero'
import { FeatureCategories } from '@/components/features/feature-categories'
import { FeatureShowcase } from '@/components/features/featuer-showcase'
import { SecurityFeatures } from '@/components/features/security-features'
import { IntegrationFeatures } from '@/components/features/integration-features'

export const metadata: Metadata = {
  title: 'Features - Dentix',
  description: 'Explore all the powerful features that make Dentix the complete dental practice management solution.',
}

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <FeatureCategories />
      <FeatureShowcase />
      <SecurityFeatures />
      <IntegrationFeatures />
    </>
  )
}