// src/components/about/about-mission.tsx
import { Target, Heart, Zap } from 'lucide-react'

export function AboutMission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Founded by healthcare professionals and technology experts, Dentix was created to address 
              the real challenges facing modern dental practices. We combine deep industry knowledge 
              with cutting-edge technology to deliver solutions that actually work.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Target className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Purpose-Built</h3>
                  <p className="text-gray-600">Designed specifically for dental practices, not adapted from generic software.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Heart className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Patient-Centered</h3>
                  <p className="text-gray-600">Every feature is designed to improve patient experience and care quality.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Zap className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Innovation First</h3>
                  <p className="text-gray-600">Continuously evolving with the latest technology and industry best practices.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-2xl p-8 text-center">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">2019</div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">2,000+</div>
                <div className="text-sm text-gray-600">Practices</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">500K+</div>
                <div className="text-sm text-gray-600">Patients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}