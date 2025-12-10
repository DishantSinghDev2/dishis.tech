"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError("Failed to send message. Please try again.")
      }
    } catch (err) {
      setError("Error sending message. Please try again later.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Get in Touch</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <div className="space-y-8">
                <div className="flex gap-4 animate-fade-in animation-delay-100">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Email</h3>
                    <a href="mailto:support@dishis.tech" className="text-gray-600 hover:text-black transition-colors">
                      support@dishis.tech
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 animate-fade-in animation-delay-200">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Phone</h3>
                    <p className="text-gray-600">Available via email inquiry</p>
                  </div>
                </div>

                <div className="flex gap-4 animate-fade-in animation-delay-300">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Location</h3>
                    <p className="text-gray-600">Global Operations</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-black mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/DishIs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:border-black hover:bg-black hover:text-white transition-all text-sm font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/company/dishistech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:border-black hover:bg-black hover:text-white transition-all text-sm font-medium"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
                {submitted && (
                  <div className="p-4 bg-black text-white rounded-lg text-center animate-fade-in">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg text-center animate-fade-in">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all resize-none"
                    placeholder="Tell us more..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-4 bg-black text-white rounded-lg hover:bg-gray-900 transition-all disabled:opacity-50 font-semibold flex items-center justify-center gap-2 group"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
