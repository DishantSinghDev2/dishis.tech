"use client"

import Link from "next/link"
import { Wrench, Database, FileJson, ArrowRight, CheckCircle2 } from "lucide-react"

export default function DIToolsPage() {
  const features = [
    {
      title: "Redis Connection Tester",
      description:
        "Test and manage your Redis connections directly from your browser. Monitor performance metrics in real-time.",
      icon: Database,
    },
    {
      title: "MongoDB Manager",
      description:
        "MongoDB Atlas management directly on web. Query, insert, update, and manage your MongoDB databases with ease.",
      icon: Database,
    },
    {
      title: "File Format Converter",
      description:
        "Convert between multiple image and file formats. Support for JPG, PNG, WebP, SVG, and many more formats.",
      icon: FileJson,
    },
  ]

  return (
    <main className="pt-24 pb-12">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
              <Wrench size={32} className="text-black" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Developer Tools</p>
              <h1 className="text-5xl md:text-6xl font-bold mt-2 text-balance">DITools</h1>
            </div>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl mb-8 leading-relaxed">
            A comprehensive collection of free developer utilities designed to streamline your workflow. From database
            management to file conversion, all your tools in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://tools.dishis.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-all font-semibold group"
            >
              Access DITools
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://c.tools.dishis.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all font-semibold"
            >
              File Converter
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-balance">Our Tools</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors group"
                >
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-balance">Why Choose DITools?</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
            {[
              "Completely free - no hidden costs or premium tiers",
              "Fast and reliable - optimized for performance",
              "Easy to use - intuitive interfaces for all tools",
              "Secure - your data stays private and encrypted",
              "Always updated - regular feature releases",
              "Developer-friendly - built by developers, for developers",
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <CheckCircle2 size={24} className="flex-shrink-0 mt-1" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-balance">Start Using DITools Today</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join developers worldwide who use DITools to simplify their workflow and boost productivity.
          </p>
          <a
            href="https://tools.dishis.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-all font-semibold"
          >
            Get Started Now
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/" className="text-gray-600 hover:text-black transition-colors inline-flex items-center gap-2">
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}
