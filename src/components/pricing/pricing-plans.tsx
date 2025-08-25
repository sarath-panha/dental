// src/components/pricing/pricing-plans.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check, X } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 99,
    description: 'Perfect for small practices',
    features: [
      { name: 'Up to 500 patients', included: true },
      { name: 'Basic scheduling', included: true },
      { name: 'Patient records', included: true },
      { name: 'Email reminders', included: true },
      { name: 'Mobile app', included: true },
      { name: 'Email support', included: true },
      { name: 'Treatment planning', included: false },
      { name: 'Advanced billing', included: false },
      { name: 'Insurance management', included: false },
      { name: 'Custom reports', included: false },
      { name: 'API access', included: false },
    ]
  },
  {
    name: 'Professional',
    price: 199,
    description: 'Most popular for growing practices',
    popular: true,
    features: [
      { name: 'Unlimited patients', included: true },
      { name: 'Advanced scheduling', included: true },
      { name: 'Patient records', included: true },
      { name: 'SMS & email reminders', included: true },
      { name: 'Mobile app', included: true },
      { name: 'Priority support', included: true },
      { name: 'Treatment planning', included: true },
      { name: 'Advanced billing', included: true },
      { name: 'Insurance management', included: true },
      { name: 'Custom reports', included: true },
      { name: 'API access', included: false },
    ]
  },
  {
    name: 'Enterprise',
    price: 399,
    description: 'For large practices and chains',
    features: [
      { name: 'Unlimited patients', included: true },
      { name: 'Advanced scheduling', included: true },
      { name: 'Patient records', included: true },
      { name: 'SMS & email reminders', included: true },
      { name: 'Mobile app', included: true },
      { name: 'Dedicated support', included: true },
      { name: 'Treatment planning', included: true },
      { name: 'Advanced billing', included: true },
      { name: 'Insurance management', included: true },
      { name: 'Custom reports', included: true },
      { name: 'API access', included: true },
    ]
  }
]

export function PricingPlans() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative bg-white rounded-lg shadow-lg ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>

                <Link href="/register">
                  <Button className="w-full mb-8" variant={plan.popular ? "default" : "outline"}>
                    Start Free Trial
                  </Button>
                </Link>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-center">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 mr-3" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mr-3" />
                      )}
                      <span className={feature.included ? 'text-gray-900' : 'text-gray-400'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">All plans include:</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>✓ HIPAA compliant</span>
            <span>✓ 99.9% uptime</span>
            <span>✓ Automatic backups</span>
            <span>✓ SSL encryption</span>
            <span>✓ Regular updates</span>
          </div>
        </div>
      </div>
    </section>
  )
}