import Link from "next/link"
import { Globe, Lock, Zap, Users } from "lucide-react"

export const metadata = {
  title: "WhatsYour.Info - Global Profile & SSO",
  description: "Universal profile platform with single sign-on for all DishIs Technologies products.",
}

export default function WhatsYourInfoPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 md:py-32 border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
              <Globe size={16} className="text-black" />
              <span className="text-sm font-medium text-gray-600">Global Profile Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">WhatsYour.Info</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Create your universal profile and access all DishIs Technologies products with a single login.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://whatsyour.info"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-all font-medium"
              >
                Create Your Profile
              </a>
              <Link
                href="/contact"
                className="px-8 py-3 border border-black text-black rounded-lg hover:bg-gray-50 transition-all font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Users size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Universal Profile</h3>
              <p className="text-gray-600">One profile to manage all your DishIs accounts.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Zap size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Single Sign-On (SSO)</h3>
              <p className="text-gray-600">Access all products with one login.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Lock size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure Authentication</h3>
              <p className="text-gray-600">Enterprise-grade security for your profile.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <Globe size={32} className="text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Reach</h3>
              <p className="text-gray-600">Access your profile from anywhere, anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
