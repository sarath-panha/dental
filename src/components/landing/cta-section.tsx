// src/components/landing/cta-section.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to transform your practice?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Join thousands of dental professionals who trust Dentix to manage their practice.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link href="/register">
                <Button size="lg" variant="secondary">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="ml-3 inline-flex">
              <Link href="/contact">
                <Button size="lg" variant="ghost" className="text-white hover:bg-blue-700">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
          <p className="mt-4 text-sm text-blue-200">
            30-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}