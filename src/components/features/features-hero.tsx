// src/components/features/features-hero.tsx
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function FeaturesHero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Powerful Features for Modern Dental Practices
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
          Everything you need to streamline operations, improve patient care, and grow your practice
        </p>
        <Link href="/register">
          <Button size="lg" variant="secondary">
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}