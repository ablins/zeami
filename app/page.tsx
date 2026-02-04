import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Problems } from "@/components/sections/problems"
import { WhatIDo } from "@/components/sections/what-i-do"
import { WhatsIncluded } from "@/components/sections/whats-included"
import { IdealFor } from "@/components/sections/ideal-for"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Pricing } from "@/components/sections/pricing"
import { CTA } from "@/components/sections/cta"
import { FAQ } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <Problems />
        <WhatIDo />
        <WhatsIncluded />
        <IdealFor />
        <HowItWorks />
        <Pricing />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
