"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quanto tempo demora para ficar pronto?",
    answer: "O prazo é de aproximadamente 2 semanas após o recebimento de todas as informações e materiais necessários. Projetos mais complexos podem levar um pouco mais de tempo."
  },
  {
    question: "O que eu preciso enviar para começar?",
    answer: "Basicamente informações sobre seu negócio, público-alvo, diferenciais, fotos/logo (se tiver), e o objetivo da página. Envio um briefing completo para você preencher."
  },
  {
    question: "Como manter meu site ativo?",
    answer: "Temos um serviço de hospedagem com um valor mensal de manutenção que inclui manter o site no ar e alterações pequenas quando necessário. Você precisa comprar o seu domínio, mas não se preocupa que nós ajudamos com isso."
  },
  {
    question: "Posso fazer alterações depois?",
    answer: "Durante o processo de criação você tem direito a duas rodadas de alterações inclusas. Após a finalização, caso escolha manter a manutenção, você pode fazer pequenas alterações e mudanças de texto. Para alterações maiores, temos taxas específicas."
  },
  {
    question: "Serve para qualquer tipo de negócio?",
    answer: "Sites funcionam muito bem para serviços, produtos digitais, produtos físicos, eventos, captação de leads e vendas em geral. Conversamos para entender se faz sentido pro seu caso."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Para Pix, é 50% antes de começar e 50% na entrega. Para cartão de crédito, o pagamento é feito antes do início do projeto, com parcelamento em até 6x. Emitimos nota fiscal."
  }
]

export function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4 text-balance">
            Perguntas frequentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas dúvidas sobre o serviço
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:text-foreground/80 text-base md:text-lg py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
