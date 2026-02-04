"use client"

import { Button } from "@/components/ui/button"

export function Header() {
  const scrollToContact = () => {
    document.getElementById('cta-final')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="font-serif text-xl font-medium text-foreground">
            zeami sites
          </a>
          
          <Button 
            size="sm" 
            onClick={scrollToContact}
            className="rounded-full"
          >
            Fale comigo
          </Button>
        </div>
      </div>
    </header>
  )
}
