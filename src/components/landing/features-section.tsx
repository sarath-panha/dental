// src/components/landing/features-section.tsx
import { Calendar, Users, CreditCard, FileText, Shield, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Intelligent appointment scheduling with automated reminders and conflict resolution.'
  },
  {
    icon: Users,
    title: 'Patient Management',
    description: 'Comprehensive patient profiles with medical history, treatments, and family connections.'
  },
  {
    icon: CreditCard,
    title: 'Billing & Payments',
    description: 'Streamlined invoicing, payment processing, and insurance claim management.'
  },
  {
    icon: FileText,
    title: 'Treatment Planning',
    description: 'Create detailed treatment plans with cost estimates and progress tracking.'
  },
  {
    icon: Shield,
    title: 'HIPAA Compliance',
    description: 'Built-in security features ensuring full HIPAA compliance and data protection.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reports',
    description: 'Detailed insights into practice performance, revenue, and patient trends.'
  }
]

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything you need to run your practice
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive features designed specifically for dental practices
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <feature.icon className="h-6 w-6" />
              </div>
              <div className="ml-16">
                <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}