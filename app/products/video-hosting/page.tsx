import Link from "next/link"
import { Play, Zap, Globe, Settings } from "lucide-react"

export const metadata = {
  title: "Video Hosting API - Stream Anywhere",
  description: "Fast video hosting with adaptive bitrate streaming and global CDN.",
}

export default function VideoHostingPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 md:py-32 border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
              <Play size={16} className="text-black" />
              <span className="text-sm font-medium text-gray-600">Video Hosting API</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">Video Hosting API</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Stream videos worldwide with adaptive bitrate and global CDN. Perfect for video platforms and
              applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://rapidapi.com/dishis-technologies-dishis-technologies-default/api/upload-videos-hosting-streaming-get-url"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-all font-medium"
              >
                View on RapidAPI
              </a>
              <Link
                href="https://rapidapi.com/dishis-technologies-dishis-technologies-default/api/upload-videos-hosting-streaming-get-url"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-black text-black rounded-lg hover:bg-gray-50 transition-all font-medium"
              >
                Request Access
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
              <Play size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Adaptive Bitrate</h3>
              <p className="text-gray-600">Automatically adjust quality based on connection speed.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Globe size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Global CDN</h3>
              <p className="text-gray-600">Serve videos from servers closest to your viewers.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Settings size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Easy Integration</h3>
              <p className="text-gray-600">Simple API and player embeds for quick integration.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Zap size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Optimized infrastructure for smooth playback.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
