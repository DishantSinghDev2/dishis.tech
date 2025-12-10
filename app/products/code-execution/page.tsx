import Link from "next/link"
import { Code, Zap, Shield, Users } from "lucide-react"

export const metadata = {
  title: "Code Execution API - 600+ Users",
  description: "Safe, fast code execution API used by 600+ developers worldwide.",
}

export default function CodeExecutionPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 md:py-32 border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
              <Code size={16} className="text-black" />
              <span className="text-sm font-medium text-gray-600">Code Execution API</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">Code Execution API</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Execute code safely and instantly. Trusted by 600+ developers for running code in the cloud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://rapidapi.com/organization/dishis-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-all font-medium"
              >
                View on RapidAPI
              </a>
              <Link
                href="https://rapidapi.com/dishis-technologies-judge0/api/judge029"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-black text-black rounded-lg hover:bg-gray-50 transition-all font-medium"
              >
                Get Started
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
              <h3 className="text-xl font-bold mb-2">Instant Execution</h3>
              <p className="text-gray-600">Execute code in milliseconds with optimized infrastructure.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Shield size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure Sandboxing</h3>
              <p className="text-gray-600">Run untrusted code safely in isolated environments.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Code size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Multiple Languages</h3>
              <p className="text-gray-600">Support for Python, JavaScript, Node.js, and more.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Users size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">600+ Active Users</h3>
              <p className="text-gray-600">Trusted by developers worldwide for cloud code execution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-black text-white border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Usage Statistics</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-5xl font-bold mb-2">600+</p>
              <p className="text-gray-400">Active Users</p>
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
