// src/components/landing/pricing-section.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 99,
    description: 'Perfect for small practices getting started',
    features: [
      'Up to 500 patients',
      'Basic scheduling',
      'Patient records',
      'Email support',
      'Mobile app access'
    ]
  },
  {
    name: 'Professional',
    price: 199,
    description: 'Most popular for growing practices',
    features: [
      'Unlimited patients',
      'Advanced scheduling',
      'Treatment planning',
      'Billing & invoicing',
      'Insurance management',
      'Priority support',
      'Custom reports'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 399,
    description: 'For large practices and chains',
    features: [
      'Everything in Professional',
      'Multi-location support',
      'Advanced analytics',
      'API access',
      'Custom integrations',
      'Dedicated support',
      'Training & onboarding'
    ]
  }
]

export function PricingSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that's right for your practice
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-lg shadow-lg ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2">
                  <span className="inline-flex rounded-full bg-blue-500 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-gray-500">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="ml-3 text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/register" className="block mt-8">
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}