"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

const products = [
  { name: "FreeCustom.Email", href: "/products/freecustom-email", description: "Temporary email addresses" },
  { name: "DITMail", href: "/products/ditmail", description: "Professional email service" },
  { name: "WhatsYour.Info", href: "/products/whatsyour-info", description: "Global profile & SSO" },
  { name: "DITAPI", href: "/products/ditapi", description: "All APIs unified" },
  { name: "DITools", href: "/products/ditools", description: "Free dev tools & utilities" },
  { name: "Image Hosting", href: "/products/image-hosting", description: "Fast image hosting API" },
  { name: "Code Execution", href: "/products/code-execution", description: "Execute code safely" },
  { name: "Video Hosting", href: "/products/video-hosting", description: "Video hosting API" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsProductsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsProductsOpen(false), 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="https://avatars.githubusercontent.com/u/120817762?s=200&v=4"
              alt="DishIs Technologies"
              width={32}
              height={32}
              className="rounded group-hover:scale-110 transition-transform"
            />
            <span className="font-bold text-lg hidden sm:inline text-black">DishIs Technologies</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {/* Products Dropdown */}
            <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center gap-1 text-gray-600 hover:text-black transition-colors text-sm font-medium">
                Products
                <ChevronDown size={16} className={`transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
              </button>

              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 animate-in fade-in slide-in-from-top-2">
                  {products.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="block px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      <div className="font-medium text-black text-sm">{product.name}</div>
                      <div className="text-xs text-gray-500">{product.description}</div>
                    </Link>
                  ))}
                  <Link
                    href="https://rapidapi.com/organization/dishis-technologies"
                    target="_blank"
                    className="block px-4 py-3 hover:bg-gray-50 transition-colors border-t border-gray-100 text-xs font-medium text-gray-700"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    View all on RapidAPI →
                  </Link>
                </div>
              )}
            </div>

            <Link href="#team" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">
              Team
            </Link>
            <a
              href="https://github.com/Dishis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors text-sm font-medium"
            >
              GitHub
            </a>
            <Link
              href="/contact"
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-all text-sm font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 animate-in fade-in slide-in-from-top-2">
            <div className="py-2">
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Products</div>
              {products.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  className="block px-4 py-2 text-gray-600 hover:text-black text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {product.name}
                </Link>
              ))}
            </div>
            <Link
              href="#team"
              className="block px-4 py-2 text-gray-600 hover:text-black text-sm"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="block mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 text-sm text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
