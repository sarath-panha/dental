// src/components/about/about-team.tsx
const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'CEO & Co-Founder',
    bio: 'Former practicing dentist with 15+ years of experience. DDS from Harvard School of Dental Medicine.'
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO & Co-Founder',
    bio: 'Former healthcare technology executive with expertise in HIPAA-compliant systems and scalable architecture.'
  },
  {
    name: 'Emily Johnson',
    role: 'VP of Product',
    bio: 'Product strategy expert specializing in healthcare software and user experience design.'
  },
  {
    name: 'David Kim',
    role: 'VP of Engineering',
    bio: 'Full-stack engineer with 20+ years building enterprise software for healthcare organizations.'
  }
]

export function AboutTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600">
            Healthcare professionals and technology experts working together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-400">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-4">{member.role}</p>
              <p className="text-sm text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}