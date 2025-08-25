// src/components/features/feature-categories.tsx
import { Calendar, Users, CreditCard, FileText, Package, BarChart3, Shield, MessageCircle } from 'lucide-react'

const categories = [
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    features: [
      'Intelligent appointment booking with conflict detection',
      'Automated reminders via SMS and email',
      'Recurring appointment management',
      'Waitlist and cancellation management',
      'Multi-provider calendar views',
      'Time slot optimization'
    ]
  },
  {
    icon: Users,
    title: 'Patient Management',
    features: [
      'Comprehensive patient profiles',
      'Medical history tracking',
      'Family and dependent relationships',
      'Insurance information management',
      'Patient portal access',
      'Custom fields and notes'
    ]
  },
  {
    icon: FileText,
    title: 'Treatment Planning',
    features: [
      'Visual treatment plan creation',
      'Cost estimation and approval workflow',
      'Progress tracking and updates',
      'Digital consent forms',
      'Treatment templates',
      'Photo and X-ray integration'
    ]
  },
  {
    icon: CreditCard,
    title: 'Billing & Payments',
    features: [
      'Automated invoice generation',
      'Multiple payment methods',
      'Payment plan management',
      'Insurance claim processing',
      'Financial reporting',
      'Outstanding balance tracking'
    ]
  },
  {
    icon: Package,
    title: 'Inventory Management',
    features: [
      'Real-time stock tracking',
      'Automated reorder alerts',
      'Supplier management',
      'Cost analysis and reporting',
      'Usage tracking by procedure',
      'Expiration date monitoring'
    ]
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reports',
    features: [
      'Practice performance dashboards',
      'Revenue and profitability analysis',
      'Patient demographics and trends',
      'Treatment success metrics',
      'Staff productivity reports',
      'Custom report builder'
    ]
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    features: [
      'HIPAA compliant infrastructure',
      'Role-based access control',
      'Audit trail logging',
      'Data encryption at rest and in transit',
      'Regular security assessments',
      'Compliance reporting'
    ]
  },
  {
    icon: MessageCircle,
    title: 'Communication',
    features: [
      'Patient communication portal',
      'Automated appointment reminders',
      'Marketing campaign management',
      'Review request automation',
      'Internal team messaging',
      'Document sharing'
    ]
  }
]

export function FeatureCategories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Complete Practice Management Suite
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed specifically for dental practices with features that matter most
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((category) => (
            <div key={category.title} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}