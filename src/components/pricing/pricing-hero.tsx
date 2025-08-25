// src/components/pricing/pricing-hero.tsx
export function PricingHero() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Choose the perfect plan for your practice. No hidden fees, no surprises.
        </p>
        <div className="inline-flex items-center bg-green-100 px-4 py-2 rounded-full">
          <span className="text-green-800 font-semibold">30-day free trial on all plans</span>
        </div>
      </div>
    </section>
  )
}