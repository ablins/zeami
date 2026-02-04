"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('cta-final')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-white/70 mb-6">
            Sites que vendem
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight text-balance mb-6">
            Seu negócio merece um site que trabalha por você
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Sites profissionais, estratégicos e focados em resultado. Pronto em até 2 semanas.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="text-base px-8 py-6 rounded-full bg-white text-foreground hover:bg-white/90"
          >
            Quero meu site agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
