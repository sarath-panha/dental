// src/components/features/security-features.tsx
import { Shield, Lock, Eye, FileCheck } from 'lucide-react'

const securityFeatures = [
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Built from the ground up to meet and exceed HIPAA requirements for healthcare data protection.'
  },
  {
    icon: Lock,
    title: 'Data Encryption',
    description: 'All data is encrypted both at rest and in transit using industry-standard 256-bit encryption.'
  },
  {
    icon: Eye,
    title: 'Access Control',
    description: 'Granular role-based permissions ensure staff only see what they need to see.'
  },
  {
    icon: FileCheck,
    title: 'Audit Trails',
    description: 'Complete logging of all system activities for compliance and security monitoring.'
  }
]

export function SecurityFeatures() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Security & Compliance First
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your patients' data is protected with enterprise-grade security measures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 text-sm text-gray-300">
            <span className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              SOC 2 Certified
            </span>
            <span className="flex items-center">
              <Lock className="w-4 h-4 mr-2" />
              HIPAA Compliant
            </span>
            <span className="flex items-center">
              <FileCheck className="w-4 h-4 mr-2" />
              Regular Security Audits
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}