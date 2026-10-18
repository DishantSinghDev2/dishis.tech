import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  CalendarDays,
  FileText,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
  Heart,
  Lock,
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: `About Us - ${company.legalName}`,
  description: `${company.legalName} is a ${company.entityType} building developer-first APIs, email services and tools used by developers worldwide.`,
}

const facts = [
  { label: "Legal name", value: company.legalName, icon: Building2 },
  { label: "Entity type", value: company.shortEntityType, icon: FileText },
  { label: "Formation date", value: company.formationDate, icon: CalendarDays },
  { label: "Filing ID", value: company.filingId, icon: FileText, mono: true },
]

const values = [
  {
    title: "Developer first",
    description: "Clean APIs, clear docs and predictable behaviour. We build the tools we want to use ourselves.",
    icon: Zap,
  },
  {
    title: "Privacy by default",
    description: "We collect only what we need, keep your data secure and never sell it. Ever.",
    icon: Lock,
  },
  {
    title: "Reliability",
    description: "Infrastructure designed for 99.9% uptime, so your product keeps running while you sleep.",
    icon: ShieldCheck,
  },
  {
    title: "Built with care",
    description: "Small, focused team that cares about the details and listens to the people using our products.",
    icon: Heart,
  },
]

const timeline = [
  {
    year: String(company.foundedYear),
    title: "DishIs Technologies is born",
    description: "Started as a small project to give developers simple, affordable APIs for everyday problems.",
    icon: Sparkles,
  },
  {
    year: "Growth",
    title: "A growing product suite",
    description:
      "Launched FreeCustom.Email, DITMail, WhatsYour.Info, DITools and a family of hosting & code-execution APIs.",
    icon: Rocket,
  },
  {
    year: "2026",
    title: `Incorporated as ${company.legalName}`,
    description: `Officially registered as a ${company.entityType} on ${company.formationDate}.`,
    icon: Building2,
  },
  {
    year: "Today",
    title: "Serving developers worldwide",
    description: "Millions of API calls and emails processed for thousands of developers and businesses.",
    icon: Users,
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
          <div className="absolute inset-0 bg-grid mask-fade pointer-events-none" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-gradient-to-tr from-blue-200/50 via-violet-200/40 to-transparent blur-3xl pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 animate-fade-in">
              About us
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-black text-balance animate-fade-in animation-delay-100">
              We build the APIs <span className="text-gradient">developers rely on.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto animate-fade-in animation-delay-200">
              {company.legalName} is a {company.entityType} on a mission to make powerful infrastructure simple,
              affordable and accessible to every developer, from solo hackers to growing businesses.
            </p>
          </div>
        </section>

        {/* Company facts */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Company info */}
              <div className="lg:col-span-2 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-8 pb-8 border-b border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Company info</p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">{company.legalName}</h2>
                    <p className="text-gray-500 mt-1">{company.entityType}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {company.status}
                  </span>
                </div>
                <dl className="grid sm:grid-cols-2 gap-6">
                  {facts.map(({ label, value, icon: Icon, mono }) => (
                    <div key={label} className="flex gap-4">
                      <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-700 flex-shrink-0">
                        <Icon size={20} />
                      </div>
                      <div>
                        <dt className="text-sm text-gray-500">{label}</dt>
                        <dd className={`text-lg font-semibold text-black ${mono ? "font-mono tracking-tight" : ""}`}>
                          {value}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Contact */}
              <div className="rounded-3xl bg-neutral-950 text-white p-8 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/30 blur-[90px] rounded-full pointer-events-none" />
                <div className="relative">
                  <p className="text-sm text-neutral-400 mb-2">Company contact</p>
                  <h3 className="text-2xl font-bold mb-8">Talk to us</h3>
                  <ul className="space-y-5">
                    <li>
                      <a href={`mailto:${company.email}`} className="flex items-center gap-4 group">
                        <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-violet-300">
                          <Mail size={20} />
                        </span>
                        <span className="group-hover:underline">{company.email}</span>
                      </a>
                    </li>
                    <li>
                      <a href={company.phoneHref} className="flex items-center gap-4 group">
                        <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-blue-300">
                          <Phone size={20} />
                        </span>
                        <span className="group-hover:underline">{company.phone}</span>
                      </a>
                    </li>
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-10 inline-flex items-center gap-2 px-5 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-colors group"
                  >
                    Send a message
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Addresses */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {[
                { ...company.principalAddress, tint: "bg-blue-50 text-blue-600" },
                { ...company.mailingAddress, tint: "bg-violet-50 text-violet-600" },
              ].map((addr) => (
                <div key={addr.label} className="rounded-3xl border border-gray-200 bg-white p-8 flex gap-5 shadow-sm">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${addr.tint}`}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">{addr.label}</p>
                    <address className="not-italic text-lg text-black leading-relaxed">
                      {addr.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story / timeline */}
        <section className="py-20 md:py-28 bg-gray-50/70 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Our story</p>
              <h2 className="text-4xl font-bold tracking-tight mb-6 text-black">From side project to company</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {company.brandName} started in {company.foundedYear} with a simple idea: developers shouldn&apos;t
                  have to fight their infrastructure. Hosting an image, running a snippet of code or spinning up an
                  inbox should be one API call away.
                </p>
                <p>
                  Founded by {company.founder}, we&apos;ve grown into a suite of products used by thousands of
                  developers every month, from temporary email and professional mail hosting to media and
                  code-execution APIs.
                </p>
                <p>
                  On {company.formationDate} we incorporated as <strong>{company.legalName}</strong>,
                  a {company.entityType}, so we can keep growing and serve our customers with the stability of a
                  registered business.
                </p>
              </div>
            </div>

            <ol className="relative border-l border-gray-200 ml-3 space-y-10">
              {timeline.map(({ year, title, description, icon: Icon }) => (
                <li key={title} className="pl-8 relative">
                  <span className="absolute -left-[18px] top-0 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-blue-600">
                    <Icon size={16} />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{year}</p>
                  <h3 className="text-lg font-semibold text-black mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">What we believe</p>
              <h2 className="text-4xl font-bold tracking-tight text-black">Our values</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:shadow-gray-200/70 hover:-translate-y-1 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-lg text-black mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
