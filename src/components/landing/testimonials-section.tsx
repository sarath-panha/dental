// src/components/landing/testimonials-section.tsx
const testimonials = [
  {
    content: "Dentix has completely transformed how we manage our practice. The scheduling system alone has saved us hours each week.",
    author: "Dr. Sarah Johnson",
    role: "General Dentist",
    practice: "Smile Dental Care"
  },
  {
    content: "The billing features are incredible. We've reduced our administrative overhead by 40% since switching to Dentix.",
    author: "Dr. Michael Chen",
    role: "Orthodontist", 
    practice: "Chen Orthodontics"
  },
  {
    content: "HIPAA compliance was our biggest concern, but Dentix makes it effortless. We feel completely secure with our patient data.",
    author: "Dr. Emily Rodriguez",
    role: "Periodontist",
    practice: "Advanced Periodontics"
  }
]

export function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Loved by dental professionals
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="text-sm text-gray-500">{testimonial.practice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}