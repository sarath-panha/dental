// src/components/pricing/pricing-faq.tsx
'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "Is there a free trial?",
    answer: "Yes! All plans come with a 30-day free trial. No credit card required to start."
  },
  {
    question: "Can I change plans anytime?",
    answer: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle."
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "Your data remains accessible for 30 days after cancellation. You can export all your data during this period."
  },
  {
    question: "Do you offer discounts for multiple locations?",
    answer: "Yes, we offer volume discounts for practices with multiple locations. Contact our sales team for custom pricing."
  },
  {
    question: "Is training included?",
    answer: "Professional and Enterprise plans include onboarding training. Additional training sessions are available for all plans."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, ACH transfers, and can accommodate annual billing for larger practices."
  }
]

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}