// src/components/pricing/pricing-cta.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function PricingCTA() {
  return (
    <section className="bg-blue-600 py-16">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to streamline your practice?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Start your free trial today. No credit card required.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/register">
            <Button size="lg" variant="secondary">
              Start Free Trial
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="ghost" className="text-white hover:bg-blue-700">
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}