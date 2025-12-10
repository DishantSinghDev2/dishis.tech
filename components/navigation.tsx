"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

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

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [hoverProduct, setHoverProduct] = useState(products[0])
  const timeoutRef = useRef<NodeJS.Timeout>()

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsProductsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsProductsOpen(false), 150)
  }

  useEffect(() => {
    return () => timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="https://avatars.githubusercontent.com/u/120817762?s=200&v=4"
              alt="DishIs Technologies"
              width={32}
              height={32}
              className="rounded transition-transform group-hover:scale-110"
            />
            <span className="font-bold text-lg hidden sm:inline text-black">
              DishIs Technologies
            </span>
          </Link>

          {/* desktop menu */}
          <div className="hidden md:flex items-center gap-8">

            {/* Mega Menu */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-gray-600 hover:text-black text-sm font-medium">
                Products
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isProductsOpen && (
                <div
                  className="
                    absolute top-full right-0   /* opens left */
                    w-[900px] mt-3
                    bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden
                    flex animate-in fade-in slide-in-from-top-2
                  "
                >
                  {/* LEFT PREVIEW */}
                  <div className="w-1/2 p-6 bg-gray-50 flex flex-col">
                    <Card
                      className="
                        p-6 flex flex-col gap-4
                        transition-all duration-300
                        hover:shadow-lg hover:scale-[1.01]
                      "
                    >
                      <Image
                        src={hoverProduct.logo || "/placeholder.png"}
                        alt={hoverProduct.name}
                        width={90}
                        height={90}
                        className="
                          rounded-md border transition-transform duration-300
                          hover:scale-110
                        "
                      />

                      <h3 className="font-semibold text-xl">{hoverProduct.name}</h3>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {hoverProduct.description}
                      </p>

                      <Separator />

                      <Link
                        href={hoverProduct.href}
                        onClick={() => setIsProductsOpen(false)}
                        className="text-sm font-medium text-blue-600 hover:underline"
                      >
                        Learn more →
                      </Link>
                    </Card>
                  </div>

                  {/* RIGHT LIST */}
                  <div className="w-1/2 bg-white border-l border-gray-100 py-2">
                    {products.map(p => (
                      <Link
                        key={p.href}
                        href={p.href}
                        onMouseEnter={() => setHoverProduct(p)}
                        onClick={() => setIsProductsOpen(false)}
                        className={`
                          block px-4 py-3 text-sm cursor-pointer
                          transition-colors duration-150
                          hover:bg-gray-50
                          ${
                            hoverProduct?.name === p.name
                              ? "bg-gray-50"
                              : ""
                          }
                        `}
                      >
                        <div className="font-medium text-black">{p.name}</div>
                        <div className="text-xs text-gray-500">{p.description}</div>
                      </Link>
                    ))}

                    <Separator className="my-1" />

                    <Link
                      href="https://rapidapi.com/organization/dishis-technologies"
                      target="_blank"
                      onClick={() => setIsProductsOpen(false)}
                      className="block px-4 py-3 text-xs hover:bg-gray-50"
                    >
                      View all on RapidAPI →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="#team" className="text-gray-600 hover:text-black text-sm font-medium">
              Team
            </Link>

            <a
              href="https://github.com/Dishis"
              target="_blank"
              className="text-gray-600 hover:text-black text-sm font-medium"
            >
              GitHub
            </a>

            <Link
              href="/contact"
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 text-sm font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* mobile */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 animate-in fade-in slide-in-from-top-2">
            <div className="py-2">
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">
                Products
              </div>
              {products.map(p => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-gray-600 hover:text-black text-sm"
                >
                  {p.name}
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
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 text-sm text-center"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
