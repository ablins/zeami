import { CheckCircle2 } from "lucide-react"

const audiences = [
  "Pequenos negócios que precisam de presença online profissional",
  "Profissionais autônomos que querem atrair mais clientes",
  "Artistas e criadores que precisam de uma vitrine para seu trabalho",
  "Eventos, cursos e lançamentos que precisam de uma página de vendas",
  "Quem precisa captar leads e converter visitantes em contatos"
]

export function IdealFor() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6 text-balance">
                Pra quem esse serviço é ideal
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Não importa se você está começando agora ou se já tem um negócio rodando, 
                um site bem feito faz toda a diferença nos seus resultados.
              </p>
            </div>
            
            <div>
              <div className="bg-muted rounded-2xl p-8 border border-border">
                <div className="space-y-4">
                  {audiences.map((audience, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{audience}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
