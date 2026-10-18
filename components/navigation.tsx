"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown, ArrowRight, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { company } from "@/lib/company"

// maybe store in db later
const products = [
  {
    name: "FreeCustom.Email",
    href: "/products/freecustom-email",
    description: "Temporary email addresses",
    logo: "https://rapidapi-prod-apis.s3.amazonaws.com/50debe77-878c-434d-be98-20062d68af07.png"
  },
  {
    name: "DITMail",
    href: "/products/ditmail",
    description: "Professional email service",
    logo: "https://whatsyour.info/api/v1/avatar/DM"
  },
  {
    name: "WhatsYour.Info",
    href: "/products/whatsyour-info",
    description: "Global profile & SSO",
    logo: "https://whatsyour.info/logo.png"
  },
  {
    name: "DITAPI",
    href: "/products/ditapi",
    description: "All APIs unified",
    logo: "https://whatsyour.info/api/v1/avatar/DA"
  },
  {
    name: "DITools",
    href: "/products/ditools",
    description: "Free dev tools & utilities",
    logo: "https://tools.dishis.tech/favicon.ico"
  },
  {
    name: "Image Hosting",
    href: "/products/image-hosting",
    description: "Fast image hosting API",
    logo: "https://rapidapi-prod-apis.s3.amazonaws.com/babd6c5b-a74b-488a-b870-01031ec4874c.png"
  },
  {
    name: "Code Execution",
    href: "/products/code-execution",
    description: "Execute code safely",
    logo: "https://rapidapi-prod-apis.s3.amazonaws.com/1df6dd9b-1c9d-4e08-a751-72f9ddf3fd17.png"
  },
  {
    name: "Video Hosting",
    href: "/products/video-hosting",
    description: "Video hosting API",
    logo: "https://rapidapi-prod-apis.s3.amazonaws.com/dae21b4f-64f6-4cd1-b070-986768c039f5.png"
  },
]

const links = [
  { name: "About", href: "/about" },
  { name: "Team", href: "/#team" },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [hoverProduct, setHoverProduct] = useState(products[0])
  const [scrolled, setScrolled] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsProductsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsProductsOpen(false), 150)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const isActive = (href: string) => !href.includes("#") && pathname === href

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white/85 backdrop-blur-xl border-b border-gray-200/80 shadow-[0_1px_12px_rgba(0,0,0,0.04)]"
          : "bg-white/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src={company.logo}
              alt={company.brandName}
              width={34}
              height={34}
              className="rounded-lg transition-transform group-hover:scale-110"
            />
            <span className="font-bold text-lg hidden sm:inline text-black tracking-tight">
              {company.brandName}
            </span>
          </Link>

          {/* desktop menu */}
          <div className="hidden md:flex items-center gap-1">

            {/* Mega Menu */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isProductsOpen || pathname.startsWith("/products")
                    ? "text-black bg-gray-100"
                    : "text-gray-600 hover:text-black hover:bg-gray-50"
                }`}
                aria-expanded={isProductsOpen}
                onClick={() => setIsProductsOpen((v) => !v)}
              >
                Products
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isProductsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div className="w-[760px] bg-white border border-gray-200 rounded-2xl shadow-2xl shadow-black/10 overflow-hidden flex animate-in fade-in slide-in-from-top-2">
                    {/* LEFT PREVIEW */}
                    <div className="w-[42%] p-5 bg-gradient-to-br from-gray-50 to-blue-50/60 flex flex-col">
                      <div className="flex-1 rounded-xl bg-white border border-gray-200 p-6 flex flex-col gap-4 shadow-sm">
                        <Image
                          src={hoverProduct.logo || "/placeholder.png"}
                          alt={hoverProduct.name}
                          width={64}
                          height={64}
                          className="rounded-xl border border-gray-100"
                        />
                        <div>
                          <h3 className="font-semibold text-lg text-black">{hoverProduct.name}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed mt-1">
                            {hoverProduct.description}
                          </p>
                        </div>
                        <Link
                          href={hoverProduct.href}
                          onClick={() => setIsProductsOpen(false)}
                          className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:gap-2 transition-all"
                        >
                          Learn more <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>

                    {/* RIGHT LIST */}
                    <div className="flex-1 p-2">
                      <div className="grid grid-cols-2 gap-1">
                        {products.map(p => (
                          <Link
                            key={p.href}
                            href={p.href}
                            onMouseEnter={() => setHoverProduct(p)}
                            onClick={() => setIsProductsOpen(false)}
                            className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                              hoverProduct?.name === p.name ? "bg-gray-100" : "hover:bg-gray-50"
                            }`}
                          >
                            <Image
                              src={p.logo}
                              alt=""
                              width={28}
                              height={28}
                              className="rounded-md border border-gray-100 flex-shrink-0"
                            />
                            <div className="min-w-0">
                              <div className="text-sm font-medium text-black truncate">{p.name}</div>
                              <div className="text-xs text-gray-500 truncate">{p.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <a
                        href={company.social.rapidapi}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsProductsOpen(false)}
                        className="mt-1 flex items-center justify-between px-3 py-3 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-black border-t border-gray-100"
                      >
                        View all APIs on RapidAPI
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(l.href) ? "text-black bg-gray-100" : "text-gray-600 hover:text-black hover:bg-gray-50"
                }`}
              >
                {l.name}
              </Link>
            ))}

            <a
              href={company.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg text-gray-600 hover:text-black hover:bg-gray-50 text-sm font-medium transition-colors"
            >
              GitHub
            </a>

            <Link
              href="/contact"
              className="ml-3 inline-flex items-center gap-1.5 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 text-sm font-medium transition-all hover:shadow-lg hover:shadow-black/20 group"
            >
              Contact Us
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* mobile toggle */}
          <button
            className="md:hidden p-2 -mr-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* mobile */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 animate-in fade-in slide-in-from-top-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="py-3">
              <div className="px-1 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Products
              </div>
              <div className="grid grid-cols-2 gap-1">
                {products.map(p => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-2 py-2 rounded-lg text-gray-700 hover:bg-gray-50 text-sm"
                  >
                    <Image src={p.logo} alt="" width={22} height={22} className="rounded" />
                    <span className="truncate">{p.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 pt-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block px-2 py-2.5 text-gray-700 hover:text-black text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {l.name}
                </Link>
              ))}
              <a
                href={company.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-2 py-2.5 text-gray-700 hover:text-black text-sm font-medium"
              >
                GitHub
              </a>
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-3 px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 text-sm font-medium text-center"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
