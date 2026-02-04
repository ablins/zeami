import { Check, Layout, FileText, Smartphone, MessageSquare, Target, Headphones } from "lucide-react"

const features = [
  {
    icon: Layout,
    title: "Site personalizado",
    description: "Design único e exclusivo para o seu negócio, nada de templates genéricos."
  },
  {
    icon: FileText,
    title: "Texto estratégico + design profissional",
    description: "Copywriting persuasivo combinado com visual que transmite credibilidade."
  },
  {
    icon: Smartphone,
    title: "Versão mobile otimizada",
    description: "Sua página funcionando perfeitamente em celulares, tablets e desktops."
  },
  {
    icon: MessageSquare,
    title: "Botões de contato integrados",
    description: "WhatsApp, email e formulários prontos para receber seus leads."
  },
  {
    icon: Target,
    title: "Estrutura pensada pra conversão",
    description: "Cada seção estrategicamente posicionada para guiar o visitante até a ação."
  },
  {
    icon: Headphones,
    title: "Publicação + suporte pós-entrega",
    description: "Coloco sua página no ar e te dou suporte após a entrega."
  }
]

export function WhatsIncluded() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4 text-balance">
            O que está incluso
          </h2>
          <p className="text-muted-foreground text-lg">
            Tudo o que você precisa para ter uma página que vende
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
