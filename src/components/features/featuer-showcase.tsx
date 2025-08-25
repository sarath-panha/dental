// src/components/features/feature-showcase.tsx
import { Monitor, Smartphone, Tablet } from 'lucide-react'

export function FeatureShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Works seamlessly across all devices
          </h2>
          <p className="text-xl text-gray-600">
            Access your practice data anywhere, anytime, on any device
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Monitor className="w-16 h-16 mx-auto text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Desktop</h3>
            <p className="text-gray-600">Full-featured desktop experience with advanced reporting and bulk operations</p>
          </div>
          <div className="text-center">
            <Tablet className="w-16 h-16 mx-auto text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Tablet</h3>
            <p className="text-gray-600">Perfect for chairside use with patient records and treatment planning</p>
          </div>
          <div className="text-center">
            <Smartphone className="w-16 h-16 mx-auto text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Mobile</h3>
            <p className="text-gray-600">Quick access to schedules, patient info, and urgent notifications</p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Cloud-Based & Always Up-to-Date
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Automatic backups</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">256-bit</div>
                <div className="text-gray-600">SSL encryption</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}