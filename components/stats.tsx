"use client"

import { useEffect, useState } from "react"

interface CounterProps {
  end: number
  suffix?: string
  duration?: number
}

function Counter({ end, suffix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [end, duration])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-16 md:py-24 bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center animate-fade-in">
            <p className="text-4xl md:text-5xl font-bold mb-2">
              <Counter end={2000000} suffix="+" />
            </p>
            <p className="text-gray-400 text-sm">API Calls Processed</p>
          </div>
          <div className="text-center animate-fade-in animation-delay-100">
            <p className="text-4xl md:text-5xl font-bold mb-2">
              <Counter end={600} suffix="+" />
            </p>
            <p className="text-gray-400 text-sm">Code Execution Users</p>
          </div>
          <div className="text-center animate-fade-in animation-delay-200">
            <p className="text-4xl md:text-5xl font-bold mb-2">
              <Counter end={200} suffix="/day" />
            </p>
            <p className="text-gray-400 text-sm">FreeCustom.Email Users</p>
          </div>
          <div className="text-center animate-fade-in animation-delay-300">
            <p className="text-4xl md:text-5xl font-bold mb-2">
              <Counter end={2000000} suffix="+" />
            </p>
            <p className="text-gray-400 text-sm">Emails Processed</p>
          </div>
        </div>
      </div>
    </section>
  )
}
