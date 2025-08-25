// src/app/about/page.tsx
import { Metadata } from 'next'
import { AboutHero } from '@/components/about/about-hero'
import { AboutMission } from '@/components/about/about-mission'
import { AboutTeam } from '@/components/about/about-team'
import { AboutValues } from '@/components/about/about-values'

export const metadata: Metadata = {
  title: 'About Us - Dentix',
  description: 'Learn about our mission to revolutionize dental practice management with modern, secure software.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
    </>
  )
}