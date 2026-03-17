import Link from "next/link"

export function Footer() {
  return (
    <footer className="section-shell bg-foreground text-card py-12">
      <div className="pointer-events-none absolute bottom-0 left-0 h-44 w-44 rounded-full bg-accent/25 blur-3xl" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 reveal-up">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-foreground font-bold text-lg">П</span>
            </div>
            <span className="font-serif text-xl font-semibold">
              ПлиткаПро
            </span>
          </Link>

          {/* Copyright */}
          <p className="text-card/60 text-sm text-center">
            © {new Date().getFullYear()} ПлиткаПро. Все права защищены.
            <br className="md:hidden" />
            <span className="md:ml-2">Профессиональная укладка плитки в Минске</span>
          </p>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <a href="#services" className="text-card/70 hover:text-card text-sm transition-colors duration-300">
              Услуги
            </a>
            <a href="#portfolio" className="text-card/70 hover:text-card text-sm transition-colors duration-300">
              Работы
            </a>
            <a href="#contact" className="text-card/70 hover:text-card text-sm transition-colors duration-300">
              Контакты
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
