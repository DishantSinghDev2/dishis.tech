"use client"

import { useEffect, useRef, useState } from "react"
import { Activity, Code2, Inbox, Mail } from "lucide-react"

interface CounterProps {
  end: number
  suffix?: string
  duration?: number
}

const compact = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 })

function Counter({ end, suffix = "", duration = 1800 }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let animationId = 0

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        let startTime: number | undefined

        const animate = (currentTime: number) => {
          if (startTime === undefined) startTime = currentTime
          const progress = Math.min((currentTime - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * end))
          if (progress < 1) animationId = requestAnimationFrame(animate)
        }

        animationId = requestAnimationFrame(animate)
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationId)
    }
  }, [end, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {end >= 10000 ? compact.format(count) : count.toLocaleString()}
      {suffix}
    </span>
  )
}

const stats = [
  { end: 2000000, suffix: "+", label: "API calls processed", icon: Activity },
  { end: 600, suffix: "+", label: "Code Execution users", icon: Code2 },
  { end: 200, suffix: "/day", label: "FreeCustom.Email users", icon: Inbox },
  { end: 2000000, suffix: "+", label: "Emails processed", icon: Mail },
]

export default function Stats() {
  return (
    <section className="relative py-20 md:py-28 bg-neutral-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark mask-fade opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Trusted at scale</h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Numbers that keep growing every day, powered by infrastructure we run and maintain ourselves.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map(({ end, suffix, label, icon: Icon }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 md:p-8 hover:bg-white/[0.06] transition-colors"
            >
              <Icon size={20} className="text-blue-400 mb-4" />
              <p className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
                <Counter end={end} suffix={suffix} />
              </p>
              <p className="text-neutral-400 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
