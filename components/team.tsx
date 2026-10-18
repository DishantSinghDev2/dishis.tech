import { Github, Linkedin } from "lucide-react"
import Image from "next/image"

const team = [
  {
    name: "Dishant Singh",
    role: "Founder & CTO",
    image: "https://avatars.githubusercontent.com/u/122022552?v=4",
    github: "https://github.com/dishantsinghdev2",
    linkedin: "https://www.linkedin.com/in/dishantsinghdev/",
    bio: "Visionary technologist leading DishIs Technologies with innovative API solutions.",
  },
  {
    name: "Ishant Singh",
    role: "Chief Marketing Officer",
    image: "https://avatars.githubusercontent.com/u/174198287?v=4",
    github: "https://github.com/ishant-singh-dev",
    linkedin: "https://www.linkedin.com/in/ishant-singh-dev/",
    bio: "Strategic marketer driving growth and building our community worldwide.",
  },
]

export default function Team() {
  return (
    <section id="team" className="scroll-mt-20 py-24 md:py-32 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Team</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-black">The people behind DishIs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate innovators building the future of developer APIs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {team.map((member, idx) => (
            <div
              key={member.name}
              className="group relative rounded-3xl border border-gray-200 bg-white p-3 hover:shadow-2xl hover:shadow-gray-200/80 hover:-translate-y-1 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-semibold text-black">
                  {member.role}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-black">{member.name}</h3>
                  <div className="flex gap-1.5">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on GitHub`}
                      className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-[#0a66c2] hover:text-white hover:border-[#0a66c2] transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
