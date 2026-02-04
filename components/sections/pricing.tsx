"use client"

import { Button } from "@/components/ui/button"
import { Clock, CreditCard, ArrowRight } from "lucide-react"

export function Pricing() {
  const scrollToContact = () => {
    document.getElementById('cta-final')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4 text-balance">
            Prazo e investimento
          </h2>
          <p className="text-muted-foreground text-lg">
            Transparência total sobre valores e prazos
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <Clock className="h-5 w-5 text-foreground" />
                  </div>
                  <span className="text-muted-foreground">Prazo de entrega</span>
                </div>
                <p className="text-3xl font-serif font-medium text-foreground">
                  Site no ar em 2 semanas
                </p>
              </div>
              
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-foreground" />
                  </div>
                  <span className="text-muted-foreground">Investimento</span>
                </div>
                <p className="text-3xl font-serif font-medium text-foreground">
                  A partir de R$ 700
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Dependendo do escopo do projeto
                </p>
              </div>
            </div>
            
            <div className="border-t border-border pt-8">
              <div className="text-center">
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="text-base px-8 py-6 rounded-full"
                >
                  Me conte sobre seu projeto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
