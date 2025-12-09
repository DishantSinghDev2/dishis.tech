"use client"

import { Code2, Mail, Globe, ImageIcon, Zap, Wrench } from "lucide-react"

const products = [
  {
    name: "FreeCustom.Email",
    url: "freecustom.email",
    description:
      "Free temporary email service perfect for testing and privacy-conscious users. Create disposable email addresses instantly.",
    icon: Mail,
    color: "bg-black",
    link: "https://freecustom.email",
  },
  {
    name: "DITMail",
    url: "mail.dishis.tech",
    description:
      "Professional email service for businesses. Custom domains, advanced features, and enterprise-grade reliability.",
    icon: Mail,
    color: "bg-black",
    link: "https://mail.dishis.tech",
  },
  {
    name: "WhatsYour.Info",
    link: "https://whatsyour.info",
    description:
      "Global user profile platform with built-in SSO for all DishIs products. One account, unified experience across all services.",
    icon: Globe,
    color: "bg-black",
  },
  {
    name: "DITAPI",
    description:
      "Unified API platform providing access to all our developer tools. Image hosting, code execution, video streaming, and more.",
    icon: Code2,
    color: "bg-black",
    link: "https://rapidapi.com/organization/dishis-technologies",
  },
  {
    name: "DITools",
    url: "tools.dishis.tech",
    description:
      "Free developer utilities including Redis connection tester, MongoDB manager, and file format converter. All at your fingertips.",
    icon: Wrench,
    color: "bg-black",
    link: "https://tools.dishis.tech",
  },
  {
    name: "Image Hosting API",
    url: "i.dishis.tech",
    description:
      "Powerful image hosting and CDN service. Fast, reliable, and scalable image delivery for your applications.",
    icon: ImageIcon,
    color: "bg-black",
    link: "https://i.dishis.tech",
  },
  {
    name: "Code Execution API",
    description:
      "Execute code in multiple languages safely. Perfect for educational platforms, sandboxing, and interactive coding tools.",
    icon: Code2,
    color: "bg-black",
    link: "https://rapidapi.com/organization/dishis-technologies",
  },
  {
    name: "Video Hosting API",
    description:
      "Stream and host videos at scale. Optimized encoding, adaptive bitrate streaming, and global CDN coverage.",
    icon: Zap,
    color: "bg-black",
    link: "https://rapidapi.com/organization/dishis-technologies",
  },
]

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-32 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Products & Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A complete suite of APIs and services designed to power modern applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, idx) => {
            const Icon = product.icon
            return (
              <a
                key={idx}
                href={product.link}
                target={product.link.startsWith("http") ? "_blank" : undefined}
                rel={product.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative p-6 md:p-8 border border-gray-200 rounded-lg hover:border-black hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="absolute inset-0 bg-black/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div
                    className={`${product.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">{product.name}</h3>
                  {product.url && <p className="text-sm text-gray-500 mb-3 font-mono">{product.url}</p>}
                  <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                  <div className="mt-4 flex items-center text-black opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold">Learn More →</span>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
