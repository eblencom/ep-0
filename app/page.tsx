import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Services } from "@/components/landing/services"
import { Portfolio } from "@/components/landing/portfolio"
import { Advantages } from "@/components/landing/advantages"
import { Reviews } from "@/components/landing/reviews"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/35">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Advantages />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}
