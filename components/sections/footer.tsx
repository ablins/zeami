export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} zeami sites. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="https://instagram.com/zeamicriacoes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a 
              href="https://wa.me/5592982327173" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
