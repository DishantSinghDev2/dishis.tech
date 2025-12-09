import type React from "react"
import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Products - DishIs Technologies",
  description: "Explore our suite of APIs and email services for developers.",
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      <main className="pt-16 min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
