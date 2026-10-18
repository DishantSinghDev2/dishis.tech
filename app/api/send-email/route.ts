import nodemailer from "nodemailer"
import { type NextRequest, NextResponse } from "next/server"
import { company } from "@/lib/company"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number.parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

// Cloudflare's public "always passes" test secret, used until a real key is configured.
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY || "1x0000000000000000000000000000000AA"
if (!process.env.TURNSTILE_SECRET_KEY) {
  console.warn("TURNSTILE_SECRET_KEY is not set; contact form captcha is running with Cloudflare test keys.")
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")

async function verifyCaptcha(token: string, ip: string | null) {
  const body = new URLSearchParams({ secret: TURNSTILE_SECRET, response: token })
  if (ip) body.append("remoteip", ip)

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
    })
    const data = (await res.json()) as { success: boolean }
    return data.success === true
  } catch (error) {
    console.error("Captcha verification error:", error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, captchaToken, website } = await request.json()

    // Honeypot: real users never see or fill this field. Pretend success so bots move on.
    if (website) {
      return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
    }

    // Validate inputs
    if (![name, email, subject, message].every((v) => typeof v === "string" && v.trim())) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }
    if (!EMAIL_RE.test(email) || name.length > 100 || subject.length > 200 || message.length > 5000) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 })
    }

    if (typeof captchaToken !== "string" || !captchaToken) {
      return NextResponse.json({ error: "Please complete the captcha" }, { status: 400 })
    }
    const ip = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for")?.split(",")[0].trim() || null
    if (!(await verifyCaptcha(captchaToken, ip))) {
      return NextResponse.json({ error: "Captcha verification failed. Please try again." }, { status: 400 })
    }

    const safe = {
      name: escapeHtml(name.trim()),
      email: escapeHtml(email.trim()),
      subject: escapeHtml(subject.trim()),
      message: escapeHtml(message.trim()).replace(/\n/g, "<br>"),
    }

    // Send email to support
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL || "noreply@dishis.tech",
      to: "dishant@dishis.tech",
      subject: `New Contact Form Submission: ${subject.trim().replace(/[\r\n]+/g, " ")}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Subject:</strong> ${safe.subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${safe.message}</p>
      `,
      replyTo: email.trim(),
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL || "noreply@dishis.tech",
      to: email.trim(),
      subject: `We received your message - ${company.brandName}`,
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${safe.name},</p>
        <p>We've received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>${company.brandName} Team</p>
        <hr />
        <p style="color:#6b7280;font-size:12px">
          ${company.legalName} &middot; ${company.principalAddress.lines.join(", ")}
        </p>
      `,
    })

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
