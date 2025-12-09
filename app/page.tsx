import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Products from "@/components/products"
import Stats from "@/components/stats"
import Team from "@/components/team"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <Hero />
      <Products />
      <Stats />
      <Team />
      <CTA />
      <Footer />
    </main>
  )
}
