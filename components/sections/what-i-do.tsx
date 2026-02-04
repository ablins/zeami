import { Sparkles } from "lucide-react"

export function WhatIDo() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm mb-6">
                <Sparkles className="h-4 w-4" />
                O que eu faço
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6 text-balance">
                Crio sites que convertem visitantes em clientes
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Não é só um site bonito. É uma página pensada estrategicamente para guiar 
                seu visitante até a ação que você quer: seja uma compra, um contato ou um cadastro.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cada elemento da página pensado com estratégia.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-muted border border-border p-8 flex items-center justify-center">
                <div className="space-y-4 w-full">
                  <div className="h-3 bg-primary/20 rounded-full w-3/4" />
                  <div className="h-3 bg-primary/15 rounded-full w-full" />
                  <div className="h-3 bg-primary/10 rounded-full w-5/6" />
                  <div className="mt-8 flex gap-3">
                    <div className="h-10 bg-primary rounded-lg w-1/3" />
                    <div className="h-10 bg-border rounded-lg w-1/4" />
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="aspect-square rounded-lg bg-border" />
                    <div className="aspect-square rounded-lg bg-border" />
                    <div className="aspect-square rounded-lg bg-border" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
