import { Code, Zap, Globe, Shield } from "lucide-react"

export const metadata = {
  title: "DITAPI - Unified API Platform",
  description: "All DishIs Technologies APIs in one unified platform with comprehensive documentation.",
}

export default function DitapiPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 md:py-32 border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
              <Code size={16} className="text-black" />
              <span className="text-sm font-medium text-gray-600">Unified API Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">DITAPI</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              All DishIs Technologies APIs unified under one platform. Image hosting, video hosting, code execution, and
              more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://i.dishis.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-all font-medium"
              >
                Access Image API
              </a>
              <a
                href="https://rapidapi.com/organization/dishis-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-black text-black rounded-lg hover:bg-gray-50 transition-all font-medium"
              >
                View on RapidAPI
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* APIs */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Available APIs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Globe size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Image Hosting (i.dishis.tech)</h3>
              <p className="text-gray-600">Fast, reliable image hosting with CDN acceleration.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Zap size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Code Execution</h3>
              <p className="text-gray-600">Execute code safely with 600+ active users.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Code size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Video Hosting</h3>
              <p className="text-gray-600">Stream and host videos with adaptive bitrate.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Shield size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Temp Email API</h3>
              <p className="text-gray-600">Integrate temporary email into your apps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-black text-white border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">API Statistics</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-5xl font-bold mb-2">2M+</p>
              <p className="text-gray-400">API Calls Processed</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">99.9%</p>
              <p className="text-gray-400">Uptime SLA</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
