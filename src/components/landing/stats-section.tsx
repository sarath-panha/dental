// src/components/landing/stats-section.tsx
const stats = [
  { name: 'Dental Practices', value: '2,000+' },
  { name: 'Appointments Scheduled', value: '1M+' },
  { name: 'Patient Records', value: '500K+' },
  { name: 'Uptime', value: '99.9%' }
]

export function StatsSection() {
  return (
    <section className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Trusted by dental practices worldwide
          </h2>
          <p className="mt-3 text-xl text-blue-200 sm:mt-4">
            Join thousands of dental professionals who trust Dentix
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-4 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">
                {stat.name}
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}