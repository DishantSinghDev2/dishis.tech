"use client"

import { useEffect, useState } from "react"

const testimonials = [
  {
    name: "Sarah Chen",
    date: "15 Nov, 2024",
    rating: 4.9,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "DishIs Technologies transformed our development workflow completely. Their API Builder Pro reduced our development time by 60% and the team support is exceptional. Highly recommend for any serious development team.",
    company: "TechFlow Solutions",
    role: "Lead Developer",
  },
  {
    name: "Marcus Rodriguez",
    date: "8 Nov, 2024",
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The DevOps Toolkit is a game-changer. We went from manual deployments taking hours to automated pipelines completing in minutes. The reliability and performance improvements have been incredible.",
    company: "CloudScale Inc",
    role: "DevOps Engineer",
  },
  {
    name: "Emily Watson",
    date: "2 Nov, 2024",
    rating: 5.0,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Outstanding tools and even better support. The Security Scanner helped us identify critical vulnerabilities we missed in our internal audits. DishIs Technologies truly understands developer needs.",
    company: "SecureBank Corp",
    role: "Security Architect",
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000) // increased interval to 4 seconds for better readability
    return () => clearInterval(interval)
  }, [paused])

  return (
    <div
      className="flex items-center justify-center p-8 lg:p-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8 lg:gap-12">
        {/* Left Side - Avatars & Names */}
        <div className="flex flex-row lg:flex-col items-center lg:items-start justify-center lg:justify-start space-x-6 lg:space-x-0 lg:space-y-6 w-full lg:w-1/3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row items-center lg:items-center space-y-2 lg:space-y-0 lg:space-x-4 cursor-pointer transition-all duration-300 ${
                idx === activeIndex ? "opacity-100 scale-105" : "opacity-60 hover:opacity-80"
              }`}
              onClick={() => setActiveIndex(idx)}
            >
              <img
                src={t.image || "/placeholder.svg"}
                alt={t.name}
                className="w-16 h-16 lg:w-14 lg:h-14 rounded-full border-2 border-primary/30 shadow-lg"
              />
              <div className="text-center lg:text-left">
                <h3 className="font-bold font-space-grotesk text-card-foreground text-sm lg:text-base">{t.name}</h3>
                <p className="text-xs lg:text-sm text-muted-foreground font-dm-sans">
                  {t.role} at {t.company}
                </p>
                <p className="text-xs text-accent font-dm-sans flex items-center justify-center lg:justify-start">
                  ⭐ {t.rating} • {t.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Testimonial Text */}
        <div className="w-full lg:w-2/3 flex items-center justify-center">
          <div className="text-center lg:text-left">
            <blockquote className="text-xl lg:text-2xl italic leading-relaxed text-card-foreground/90 font-dm-sans transition-all duration-500 mb-4">
              "{testimonials[activeIndex].text}"
            </blockquote>
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-muted-foreground font-dm-sans">
              <span>—</span>
              <span className="font-semibold">{testimonials[activeIndex].name}</span>
              <span>•</span>
              <span>{testimonials[activeIndex].company}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
