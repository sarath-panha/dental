// src/components/contact/contact-info.tsx
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <Phone className="w-5 h-5 text-blue-600 mt-1 mr-3" />
          <div>
            <p className="font-medium text-gray-900">Phone</p>
            <p className="text-gray-600">+1 (555) 123-4567</p>
            <p className="text-sm text-gray-500">Mon-Fri 8:00 AM - 6:00 PM EST</p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="w-5 h-5 text-blue-600 mt-1 mr-3" />
          <div>
            <p className="font-medium text-gray-900">Email</p>
            <p className="text-gray-600">hello@dentix.com</p>
            <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-3" />
          <div>
            <p className="font-medium text-gray-900">Address</p>
            <p className="text-gray-600">
              123 Healthcare Ave<br />
              Suite 456<br />
              San Francisco, CA 94105
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="w-5 h-5 text-blue-600 mt-1 mr-3" />
          <div>
            <p className="font-medium text-gray-900">Business Hours</p>
            <p className="text-gray-600">
              Monday - Friday: 8:00 AM - 6:00 PM EST<br />
              Saturday: 9:00 AM - 2:00 PM EST<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">Need immediate help?</h3>
        <p className="text-sm text-gray-600 mb-3">
          Check out our knowledge base for instant answers to common questions.
        </p>
        <a href="/help" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
          Visit Help Center →
        </a>
      </div>
    </div>
  )
}