import Link from "next/link"
import { Mail, Lock, Settings, Users } from "lucide-react"

export const metadata = {
  title: "DITMail - Professional Email Service",
  description: "Professional email hosting with custom domains and advanced features.",
}

export default function DitMailPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 md:py-32 border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
              <Mail size={16} className="text-black" />
              <span className="text-sm font-medium text-gray-600">Professional Email</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">DITMail</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Enterprise-grade email service with custom domains, advanced security, and professional features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://mail.dishis.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-all font-medium"
              >
                Access DITMail
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Enterprise Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Settings size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Custom Domains</h3>
              <p className="text-gray-600">Use your own domain for professional branding.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Lock size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Advanced Security</h3>
              <p className="text-gray-600">Enterprise-grade encryption and security protocols.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Users size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Team Collaboration</h3>
              <p className="text-gray-600">Share mailboxes and collaborate with your team.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Mail size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Forwarding</h3>
              <p className="text-gray-600">Flexible email forwarding and management tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Perfect for Professionals</h2>
          <p className="text-xl text-gray-400 mb-8">
            DITMail provides the professional email experience your business deserves with reliability and security.
          </p>
        </div>
      </section>
    </div>
  )
}
