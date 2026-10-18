import Link from "next/link"
import { ArrowRight, Sparkles, ShieldCheck, Zap, Globe } from "lucide-react"
import { company } from "@/lib/company"

const stats = [
  { value: "2M+", label: "API calls / month" },
  { value: "1,000+", label: "Active developers" },
  { value: "99.9%", label: "Uptime" },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32 bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-grid mask-fade pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-gradient-to-tr from-blue-200/50 via-violet-200/40 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 mb-8 pl-1.5 pr-4 py-1.5 bg-white/80 backdrop-blur border border-gray-200 rounded-full text-sm text-gray-700 shadow-sm hover:shadow-md hover:border-gray-300 transition-all animate-fade-in group"
        >
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black text-white text-xs font-medium">
            <Sparkles size={12} /> New
          </span>
          Now a registered {company.shortEntityType}
          <ArrowRight size={14} className="text-gray-400 group-hover:translate-x-0.5 transition-transform" />
        </Link>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05] animate-fade-in animation-delay-100 text-balance text-black">
          Developer APIs that <br className="hidden sm:block" />
          <span className="text-gradient">simply work.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-200">
          Image hosting, video hosting, code execution and email services built for modern developers. Reliable
          infrastructure, simple APIs, fair pricing.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16 animate-fade-in animation-delay-300">
          <Link
            href="/#products"
            className="px-7 py-3.5 bg-black text-white rounded-xl hover:bg-gray-800 transition-all hover:shadow-xl hover:shadow-black/20 font-semibold flex items-center justify-center gap-2 group"
          >
            Explore Products
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={company.social.rapidapi}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-white border border-gray-300 text-black rounded-xl hover:border-black hover:shadow-md transition-all font-semibold"
          >
            Browse APIs on RapidAPI
          </a>
        </div>

        {/* Stats */}
        <div className="max-w-3xl mx-auto animate-fade-in animation-delay-400">
          <div className="grid grid-cols-3 divide-x divide-gray-200 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur shadow-sm">
            {stats.map((s) => (
              <div key={s.label} className="py-6 px-2">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black">{s.value}</p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500 animate-fade-in animation-delay-500">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck size={16} className="text-emerald-600" /> {company.status} · {company.shortEntityType}
          </span>
          <span className="inline-flex items-center gap-2">
            <Zap size={16} className="text-amber-500" /> Building since {company.foundedYear}
          </span>
          <span className="inline-flex items-center gap-2">
            <Globe size={16} className="text-blue-600" /> Serving developers worldwide
          </span>
        </div>
      </div>
    </section>
  )
}
