"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-black/5 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Ready to Build Something Amazing?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of developers using DishIs Technologies APIs. Get started in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-900 transition-all hover:scale-105 font-semibold flex items-center justify-center gap-2 group"
          >
            Get in Touch
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://rapidapi.com/organization/dishis-technologies"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-all font-semibold"
          >
            View on RapidAPI
          </a>
        </div>
      </div>
    </section>
  )
}
