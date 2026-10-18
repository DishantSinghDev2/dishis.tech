import Link from "next/link"
import { Code2, Mail, Globe, ImageIcon, Video, Wrench, Inbox, Layers, ArrowUpRight } from "lucide-react"

const products = [
  {
    name: "FreeCustom.Email",
    url: "freecustom.email",
    description:
      "Free temporary email service perfect for testing and privacy-conscious users. Create disposable email addresses instantly.",
    icon: Inbox,
    accent: "from-sky-500 to-blue-600",
    href: "/products/freecustom-email",
  },
  {
    name: "DITMail",
    url: "mail.dishis.tech",
    description:
      "Professional email service for businesses. Custom domains, advanced features, and enterprise-grade reliability.",
    icon: Mail,
    accent: "from-violet-500 to-purple-600",
    href: "/products/ditmail",
  },
  {
    name: "WhatsYour.Info",
    url: "whatsyour.info",
    description:
      "Global user profile platform with built-in SSO for all DishIs products. One account, unified experience across all services.",
    icon: Globe,
    accent: "from-emerald-500 to-teal-600",
    href: "/products/whatsyour-info",
  },
  {
    name: "DITAPI",
    description:
      "Unified API platform providing access to all our developer tools. Image hosting, code execution, video streaming, and more.",
    icon: Layers,
    accent: "from-orange-500 to-rose-500",
    href: "/products/ditapi",
  },
  {
    name: "DITools",
    url: "tools.dishis.tech",
    description:
      "Free developer utilities including Redis connection tester, MongoDB manager, and file format converter. All at your fingertips.",
    icon: Wrench,
    accent: "from-slate-600 to-slate-900",
    href: "/products/ditools",
  },
  {
    name: "Image Hosting API",
    url: "i.dishis.tech",
    description:
      "Powerful image hosting and CDN service. Fast, reliable, and scalable image delivery for your applications.",
    icon: ImageIcon,
    accent: "from-pink-500 to-fuchsia-600",
    href: "/products/image-hosting",
  },
  {
    name: "Code Execution API",
    description:
      "Execute code in multiple languages safely. Perfect for educational platforms, sandboxing, and interactive coding tools.",
    icon: Code2,
    accent: "from-indigo-500 to-blue-700",
    href: "/products/code-execution",
  },
  {
    name: "Video Hosting API",
    description:
      "Stream and host videos at scale. Optimized encoding, adaptive bitrate streaming, and global CDN coverage.",
    icon: Video,
    accent: "from-red-500 to-orange-500",
    href: "/products/video-hosting",
  },
]

export default function Products() {
  return (
    <section id="products" className="scroll-mt-20 py-24 md:py-32 bg-gray-50/70 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Products</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-balance text-black">
            Everything you need to ship faster
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A complete suite of APIs and services designed to power modern applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, idx) => {
            const Icon = product.icon
            return (
              <Link
                key={product.href}
                href={product.href}
                className="group relative flex flex-col p-6 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/70 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.accent} flex items-center justify-center text-white shadow-lg shadow-black/10 group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={22} />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-gray-300 group-hover:text-black group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-black">{product.name}</h3>
                {product.url && <p className="text-xs text-gray-400 mb-3 font-mono">{product.url}</p>}
                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
