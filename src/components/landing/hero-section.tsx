// src/components/landing/hero-section.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, CheckCircle } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Modern Dental</span>{' '}
                <span className="block text-blue-600 xl:inline">Practice Management</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Streamline your dental practice with our comprehensive management system. 
                Handle appointments, patient records, billing, and more—all in one secure, 
                HIPAA-compliant platform.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/register">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="ml-2 text-sm text-gray-600">30-day free trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="ml-2 text-sm text-gray-600">No credit card required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="ml-2 text-sm text-gray-600">Cancel anytime</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">D</span>
              </div>
            </div>
            <p className="text-white/90">Dashboard Preview</p>
          </div>
        </div>
      </div>
    </section>
  )
}