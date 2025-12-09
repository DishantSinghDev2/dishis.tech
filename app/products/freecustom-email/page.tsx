import Link from "next/link"
import { Mail, Zap, Shield, Globe } from "lucide-react"

export const metadata = {
  title: "FreeCustom.Email - Free Temporary Email",
  description: "Get instant temporary email addresses for protecting your privacy.",
}

export default function FreeCustomEmailPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 md:py-32 border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
              <Mail size={16} className="text-black" />
              <span className="text-sm font-medium text-gray-600">Free Temporary Email</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">FreeCustom.Email</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Instant, disposable email addresses to protect your privacy online. No signup required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://freecustom.email"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-all font-medium"
              >
                Go to FreeCustom.Email
              </a>
              <Link
                href="/contact"
                className="px-8 py-3 border border-black text-black rounded-lg hover:bg-gray-50 transition-all font-medium"
              >
                Get Support
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
              <h3 className="text-xl font-bold mb-2">Instant Generation</h3>
              <p className="text-gray-600">Create temporary email addresses instantly with no waiting.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Shield size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Privacy Protected</h3>
              <p className="text-gray-600">Keep your personal email private from unwanted spam.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Mail size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Receive Emails</h3>
              <p className="text-gray-600">Receive emails instantly in your temporary inbox.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Globe size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">No Signup Required</h3>
              <p className="text-gray-600">Start using immediately without any registration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-black text-white border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Trusted by Users</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-5xl font-bold mb-2">200+</p>
              <p className="text-gray-400">Daily Active Users</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">2M+</p>
              <p className="text-gray-400">Emails Processed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
