import Link from "next/link"
import { ImageIcon, Zap, Globe, Lock } from "lucide-react"

export const metadata = {
  title: "Image Hosting API - Fast CDN",
  description: "Lightning-fast image hosting API with CDN acceleration and optimization.",
}

export default function ImageHostingPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 md:py-32 border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
              <ImageIcon size={16} className="text-black" />
              <span className="text-sm font-medium text-gray-600">Image Hosting API</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">Image Hosting API</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Fast, reliable image hosting with global CDN. Perfect for web apps, blogs, and media platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://i.dishis.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-all font-medium"
              >
                Access API
              </a>
              <Link
                href="/contact"
                className="px-8 py-3 border border-black text-black rounded-lg hover:bg-gray-50 transition-all font-medium"
              >
                Get API Key
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Zap size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Global CDN ensures images load instantly anywhere.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Globe size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Distribution</h3>
              <p className="text-gray-600">Serve images worldwide with automatic optimization.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <ImageIcon size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Auto Optimization</h3>
              <p className="text-gray-600">Automatic image compression and format conversion.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Lock size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure Storage</h3>
              <p className="text-gray-600">Enterprise-grade security for your images.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
