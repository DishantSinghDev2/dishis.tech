"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 bg-white">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-black/5 rounded-full blur-3xl -top-40 -left-40 transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div
          className="absolute w-96 h-96 bg-black/5 rounded-full blur-3xl -bottom-40 -right-40 transition-transform duration-1000"
          style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6 animate-fade-in">
          <span className="px-4 py-2 bg-black/5 border border-gray-300 rounded-full text-sm font-medium text-gray-700">
            Founded in 2022 • Building the Future
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in animation-delay-100 text-balance">
          Developer APIs That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">Simply Work</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-200">
          Image hosting, video hosting, code execution, and email services designed for modern developers. One API,
          infinite possibilities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in animation-delay-300">
          <Link
            href="/contact"
            className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-900 transition-all hover:scale-105 font-semibold flex items-center justify-center gap-2 group"
          >
            Get Started
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://rapidapi.com/organization/dishis-technologies"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-black text-black rounded-lg hover:bg-black/5 transition-all font-semibold"
          >
            Explore APIs on RapidAPI
          </a>
        </div>

        {/* Floating stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mt-16">
          <div className="animate-fade-in animation-delay-400">
            <p className="text-3xl md:text-4xl font-bold text-black">2M+</p>
            <p className="text-xs md:text-sm text-gray-600 mt-1">API Calls/Month</p>
          </div>
          <div className="animate-fade-in animation-delay-500">
            <p className="text-3xl md:text-4xl font-bold text-black">1000+</p>
            <p className="text-xs md:text-sm text-gray-600 mt-1">Active Users</p>
          </div>
          <div className="animate-fade-in animation-delay-600">
            <p className="text-3xl md:text-4xl font-bold text-black">99.9%</p>
            <p className="text-xs md:text-sm text-gray-600 mt-1">Uptime</p>
          </div>
        </div>
      </div>
    </section>
  )
}
