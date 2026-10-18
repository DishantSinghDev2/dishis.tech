"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Turnstile from "@/components/turnstile"
import { company } from "@/lib/company"
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, AlertCircle, ShieldCheck, Clock } from "lucide-react"

const inputClass =
  "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-black placeholder:text-gray-400 focus:border-black focus:ring-4 focus:ring-black/5 outline-none transition-all"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [website, setWebsite] = useState("") // honeypot
  const [captchaToken, setCaptchaToken] = useState("")
  const [captchaResetKey, setCaptchaResetKey] = useState(0)
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
    if (!captchaToken) {
      setError("Please complete the captcha to verify you're human.")
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, captchaToken, website }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitted(false), 6000)
      } else {
        const data = await response.json().catch(() => ({}))
        setError(data.error || "Failed to send message. Please try again.")
      }
    } catch (err) {
      setError("Error sending message. Please try again later.")
      console.error(err)
    } finally {
      // Turnstile tokens are single-use, so always get a fresh one.
      setCaptchaToken("")
      setCaptchaResetKey((k) => k + 1)
      setLoading(false)
    }
  }

  return (
    <>
      <Navigation />
      <main className="relative overflow-hidden pt-36 pb-24 bg-white">
        <div className="absolute inset-x-0 top-0 h-[600px] bg-grid mask-fade pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-gradient-to-tr from-blue-200/50 via-violet-200/40 to-transparent blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-fade-in">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">Contact</p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-black text-balance">Get in touch</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a question, partnership idea or need help with one of our products? Send us a message and
              we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {/* Contact Info */}
            <aside className="lg:col-span-2 relative overflow-hidden rounded-3xl bg-neutral-950 text-white p-8 md:p-10 animate-fade-in animation-delay-100">
              <div className="absolute inset-0 bg-grid-dark mask-fade opacity-50 pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-600/30 blur-[100px] rounded-full pointer-events-none" />

              <div className="relative flex flex-col h-full">
                <h2 className="text-2xl font-bold mb-1">{company.legalName}</h2>
                <p className="text-neutral-400 text-sm mb-10">{company.entityType}</p>

                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-violet-300 flex-shrink-0">
                      <Mail size={20} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-neutral-500 mb-0.5">Email</p>
                      <a href={`mailto:${company.email}`} className="hover:underline">
                        {company.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-blue-300 flex-shrink-0">
                      <Phone size={20} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-neutral-500 mb-0.5">Phone</p>
                      <a href={company.phoneHref} className="hover:underline">
                        {company.phone}
                      </a>
                    </div>
                  </li>
                  {[company.principalAddress, company.mailingAddress].map((addr) => (
                    <li key={addr.label} className="flex gap-4">
                      <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-orange-300 flex-shrink-0">
                        <MapPin size={20} />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-neutral-500 mb-0.5">{addr.label}</p>
                        <address className="not-italic text-neutral-200 leading-relaxed">
                          {addr.lines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </address>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 text-sm text-neutral-400">
                    <Clock size={16} /> Replies within 1–2 business days
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={company.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white hover:text-black transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={company.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white hover:text-black transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Contact Form */}
            <div className="lg:col-span-3 rounded-3xl border border-gray-200 bg-white/80 backdrop-blur p-6 sm:p-8 md:p-10 shadow-xl shadow-gray-200/50 animate-fade-in animation-delay-200">
              <form onSubmit={handleSubmit} className="space-y-5">
                {submitted && (
                  <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl animate-fade-in">
                    <CheckCircle2 size={20} className="flex-shrink-0" />
                    Message sent successfully! We&apos;ll get back to you soon.
                  </div>
                )}

                {error && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl animate-fade-in">
                    <AlertCircle size={20} className="flex-shrink-0" />
                    {error}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      autoComplete="name"
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className={inputClass}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    maxLength={200}
                    className={inputClass}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={5000}
                    rows={6}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us more..."
                  />
                  <p className="mt-1.5 text-xs text-gray-400 text-right">{formData.message.length}/5000</p>
                </div>

                {/* Honeypot field, hidden from humans */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div>
                  <p className="flex items-center gap-2 text-sm font-medium text-black mb-2">
                    <ShieldCheck size={16} className="text-emerald-600" /> Verify you&apos;re human
                  </p>
                  <Turnstile
                    onVerify={(token) => {
                      setCaptchaToken(token)
                      setError("")
                    }}
                    onExpire={() => setCaptchaToken("")}
                    resetKey={captchaResetKey}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || !captchaToken}
                  className="w-full px-6 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-all hover:shadow-xl hover:shadow-black/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none font-semibold flex items-center justify-center gap-2 group"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Protected by Cloudflare Turnstile. We&apos;ll only use your details to reply to your message.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
