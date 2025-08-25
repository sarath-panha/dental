// src/app/contact/page.tsx
import { Metadata } from 'next'
import { ContactHero } from '@/components/contact/contact-hero'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactInfo } from '@/components/contact/contact-info'

export const metadata: Metadata = {
  title: 'Contact Us - Dentix',
  description: 'Get in touch with our team. We\'re here to help with questions about Dentix dental practice management software.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  )
}