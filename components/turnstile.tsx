"use client"

import Script from "next/script"
import { useCallback, useEffect, useRef } from "react"

type TurnstileOptions = {
  sitekey: string
  theme?: "light" | "dark" | "auto"
  size?: "normal" | "flexible" | "compact"
  callback?: (token: string) => void
  "expired-callback"?: () => void
  "error-callback"?: () => void
}

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, options: TurnstileOptions) => string
      reset: (widgetId?: string) => void
      remove: (widgetId?: string) => void
    }
  }
}

// Cloudflare's public "always passes" test key, used until a real key is configured.
const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"

interface TurnstileProps {
  onVerify: (token: string) => void
  onExpire?: () => void
  /** Change this value to reset the widget (e.g. after a submit). */
  resetKey?: number
}

export default function Turnstile({ onVerify, onExpire, resetKey }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const verifyRef = useRef(onVerify)
  const expireRef = useRef(onExpire)
  verifyRef.current = onVerify
  expireRef.current = onExpire

  const renderWidget = useCallback(() => {
    if (!window.turnstile || !containerRef.current || widgetIdRef.current) return
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: SITE_KEY,
      theme: "light",
      size: "flexible",
      callback: (token) => verifyRef.current(token),
      "expired-callback": () => expireRef.current?.(),
      "error-callback": () => expireRef.current?.(),
    })
  }, [])

  // The script may already be loaded when navigating back to the page.
  useEffect(() => {
    renderWidget()
    return () => {
      if (widgetIdRef.current && window.turnstile) window.turnstile.remove(widgetIdRef.current)
      widgetIdRef.current = null
    }
  }, [renderWidget])

  useEffect(() => {
    if (resetKey === undefined || !widgetIdRef.current || !window.turnstile) return
    window.turnstile.reset(widgetIdRef.current)
  }, [resetKey])

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={renderWidget}
      />
      <div ref={containerRef} className="min-h-[65px] w-full" />
    </>
  )
}
