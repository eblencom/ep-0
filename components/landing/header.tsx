"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Работы" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contact", label: "Контакты" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
              <span className="text-primary-foreground font-bold text-lg">П</span>
            </div>
            <span className="font-serif text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
              ПлиткаПро
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-0 after:bg-primary after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+375298033681" className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Phone className="w-4 h-4" />
              +375 (29) 803-36-81
            </a>
            <Button asChild className="shadow-md shadow-primary/20 transition-transform duration-300 hover:-translate-y-0.5">
              <a href="#contact">Заказать расчёт</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border reveal-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:+375298033681" className="flex items-center gap-2 text-sm font-medium text-foreground py-2">
                <Phone className="w-4 h-4" />
                +375 (29) 803-36-81
              </a>
              <Button asChild className="w-full">
                <a href="#contact">Заказать расчёт</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
