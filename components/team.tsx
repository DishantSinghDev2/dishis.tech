"use client"

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
    <section id="team" className="py-20 md:py-32 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate innovators building the future of developer APIs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {team.map((member, idx) => (
            <div key={idx} className="group text-center animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 aspect-square">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-1 text-black">{member.name}</h3>
              <p className="text-lg font-semibold text-gray-600 mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-black/10 rounded-lg transition-colors"
                >
                  <Github size={20} className="text-black" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-black/10 rounded-lg transition-colors"
                >
                  <Linkedin size={20} className="text-black" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
