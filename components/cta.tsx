import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { company } from "@/lib/company"

export default function CTA() {
  return (
    <section className="pt-4 pb-24 md:pb-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-950 px-6 py-16 md:px-16 md:py-20 text-center">
          <div className="absolute inset-0 bg-grid-dark mask-fade opacity-70 pointer-events-none" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/40 to-violet-600/40 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-white text-balance">
              Ready to build something amazing?
            </h2>
            <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
              Join thousands of developers using {company.brandName} APIs. Get started in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-white text-black rounded-xl hover:bg-gray-100 transition-all hover:scale-[1.02] font-semibold flex items-center justify-center gap-2 group"
              >
                Get in Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={company.social.rapidapi}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-all font-semibold"
              >
                View on RapidAPI
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
