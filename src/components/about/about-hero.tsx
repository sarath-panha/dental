// src/components/about/about-hero.tsx
export function AboutHero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Transforming Dental Practice Management
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
          We believe dental professionals should focus on patient care, not paperwork. 
          That's why we built Dentix—to simplify practice management with modern, intuitive software.
        </p>
      </div>
    </section>
  )
}