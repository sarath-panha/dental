// src/components/about/about-values.tsx
import { Shield, Users, Lightbulb, Handshake } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'Patient data protection is our top priority. We maintain the highest security standards and HIPAA compliance.'
  },
  {
    icon: Users,
    title: 'Customer Success',
    description: 'Your success is our success. We provide ongoing support, training, and guidance to help your practice thrive.'
  },
  {
    icon: Lightbulb,
    title: 'Continuous Innovation',
    description: 'We constantly evolve our platform based on user feedback and emerging dental industry needs.'
  },
  {
    icon: Handshake,
    title: 'Trusted Partnership',
    description: 'We build long-term relationships with our clients, understanding that trust is earned through reliability.'
  }
]

export function AboutValues() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-xl text-gray-600">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}