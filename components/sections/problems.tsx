import { XCircle, Clock, UserX, TrendingDown, Smartphone, AlertTriangle } from "lucide-react"

const problems = [
  {
    icon: XCircle,
    title: "Visual amador",
    description: "Páginas mal feitas passam insegurança e afastam clientes."
  },
  {
    icon: Clock,
    title: "Carrega devagar",
    description: "Visitantes abandonam páginas que demoram para abrir."
  },
  {
    icon: UserX,
    title: "Confusa demais",
    description: "Sem direção clara, o visitante sai sem tomar ação."
  },
  {
    icon: TrendingDown,
    title: "Sem estratégia",
    description: "Textos genéricos não convencem ninguém a comprar."
  },
  {
    icon: Smartphone,
    title: "Não funciona no celular",
    description: "Mais de 70% dos acessos são mobile. Sua página está pronta?"
  },
  {
    icon: AlertTriangle,
    title: "Sem botões de ação",
    description: "Sem CTAs claros, você perde oportunidades de venda."
  }
]

export function Problems() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4 text-balance">
            Seu site pode estar te fazendo perder clientes (sem você perceber)
          </h2>
          <p className="text-muted-foreground text-lg">
            Veja os erros mais comuns que afastam clientes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-border bg-background hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                <problem.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="font-medium text-foreground text-lg mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
