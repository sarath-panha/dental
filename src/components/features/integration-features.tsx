// src/components/features/integration-features.tsx
import { Zap, Globe, Database, Code } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function IntegrationFeatures() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-600">
            Connect with your existing tools and workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <Zap className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h3 className="font-semibold mb-2">Payment Processors</h3>
            <p className="text-sm text-gray-600">Stripe, Square, PayPal</p>
          </div>
          <div className="text-center">
            <Globe className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h3 className="font-semibold mb-2">Insurance</h3>
            <p className="text-sm text-gray-600">Major insurance networks</p>
          </div>
          <div className="text-center">
            <Database className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h3 className="font-semibold mb-2">Accounting</h3>
            <p className="text-sm text-gray-600">QuickBooks, Xero</p>
          </div>
          <div className="text-center">
            <Code className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h3 className="font-semibold mb-2">Custom API</h3>
            <p className="text-sm text-gray-600">Build your own integrations</p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/register">
            <Button size="lg">
              Try All Features Free
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}