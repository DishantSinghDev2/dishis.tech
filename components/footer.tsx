import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, Globe, Phone, MapPin, ShieldCheck } from "lucide-react"
import { company } from "@/lib/company"

const productLinks = [
  { name: "FreeCustom.Email", href: "/products/freecustom-email" },
  { name: "DITMail", href: "/products/ditmail" },
  { name: "WhatsYour.Info", href: "/products/whatsyour-info" },
  { name: "DITAPI", href: "/products/ditapi" },
  { name: "DITools", href: "/products/ditools" },
  { name: "Image Hosting", href: "/products/image-hosting" },
  { name: "Code Execution", href: "/products/code-execution" },
  { name: "Video Hosting", href: "/products/video-hosting" },
]

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/#team" },
  { name: "Contact", href: "/contact" },
  { name: "All APIs", href: company.social.rapidapi, external: true },
  { name: "Crunchbase", href: company.social.crunchbase, external: true },
]

const socials = [
  { label: "GitHub", href: company.social.github, icon: Github },
  { label: "LinkedIn", href: company.social.linkedin, icon: Linkedin },
  { label: "F6S", href: company.social.f6s, icon: Globe },
  { label: "Email", href: `mailto:${company.email}`, icon: Mail },
]

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark mask-fade opacity-40 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <Image src={company.logo} alt={company.brandName} width={40} height={40} className="rounded-lg" />
              <div>
                <span className="block font-bold text-lg leading-tight">{company.brandName}</span>
                <span className="block text-xs text-neutral-400">{company.shortEntityType}</span>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-6">
              Building powerful, developer-first APIs and email services since {company.foundedYear}. Trusted by
              developers around the world.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium mb-6">
              <ShieldCheck size={14} />
              Registered {company.shortEntityType} · {company.status}
            </div>
            <div className="flex gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-4">Products</h3>
            <ul className="space-y-2.5 text-sm">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-neutral-300 hover:text-white transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((l) =>
                l.external ? (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-300 hover:text-white transition-colors"
                    >
                      {l.name}
                    </a>
                  </li>
                ) : (
                  <li key={l.href}>
                    <Link href={l.href} className="text-neutral-300 hover:text-white transition-colors">
                      {l.name}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-4">Get in touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Mail size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${company.email}`} className="text-neutral-300 hover:text-white transition-colors">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <a href={company.phoneHref} className="text-neutral-300 hover:text-white transition-colors">
                  {company.phone}
                </a>
              </li>
              {[company.principalAddress, company.mailingAddress].map((addr) => (
                <li key={addr.label} className="flex gap-3">
                  <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-neutral-500 mb-0.5">{addr.label}</p>
                    <address className="not-italic text-neutral-300 leading-relaxed">
                      {addr.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row gap-4 justify-between items-center text-xs text-neutral-500">
          <p className="text-center md:text-left">
            &copy; {company.foundedYear}–{new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p className="text-center md:text-right">
            {company.entityType} · Filing ID {company.filingId}
          </p>
        </div>
      </div>
    </footer>
  )
}
