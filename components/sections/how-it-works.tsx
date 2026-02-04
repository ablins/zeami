const steps = [
  {
    number: "01",
    title: "Você me conta sobre seu negócio",
    description: "Conversamos sobre seu negócio, público e objetivos. Você me envia as informações e materiais necessários."
  },
  {
    number: "02",
    title: "Eu crio seu site",
    description: "Desenvolvo o texto estratégico e o design do seu site com foco total em conversão."
  },
  {
    number: "03",
    title: "Você revisa e ajustamos juntos",
    description: "Você recebe o projeto e pode solicitar até 2 rodadas de ajustes para deixar tudo perfeito."
  },
  {
    number: "04",
    title: "Seu site vai pro ar",
    description: "Publico sua página e te entrego tudo funcionando, com suporte após a entrega."
  }
]

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4 text-balance">
            Como funciona
          </h2>
          <p className="text-muted-foreground text-lg">
            Um processo simples e direto em 4 etapas
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-serif font-medium text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="font-medium text-foreground text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
