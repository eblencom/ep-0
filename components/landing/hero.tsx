import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, ShieldCheck, Star } from "lucide-react"

const benefits = [
  "Бесплатный выезд и замер",
  "Гарантия 5 лет на работы",
  "Работа по договору",
]

export function Hero() {
  return (
    <section className="section-shell relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-secondary/35" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right, var(--color-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/80 px-4 py-1.5 text-primary font-medium uppercase tracking-[0.16em] text-xs">
                <ShieldCheck className="h-3.5 w-3.5" />
                Профессиональная укладка плитки
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Дизайнерский результат
                <br />
                в каждой детали
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Работаю с ванными, кухнями и полами под ключ. Геометрия, уровень, швы и примыкания
                выполняются по стандартам, которые видны даже спустя годы.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 max-w-2xl">
              {benefits.map((benefit, index) => (
                <div key={index} className="rounded-xl border border-border/80 bg-background/80 px-4 py-3 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
              <div className="rounded-xl border border-border/80 bg-background/80 px-4 py-3 flex items-center gap-3">
                <Star className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">5.0 рейтинг по отзывам клиентов</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base shadow-lg shadow-primary/25">
                <a href="#contact">
                  Рассчитать стоимость
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base bg-background/80">
                <a href="#portfolio">Смотреть портфолио</a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="rounded-xl border border-border/70 bg-background/85 p-4">
                <p className="font-serif text-3xl font-bold text-foreground">10+</p>
                <p className="text-sm text-muted-foreground">лет опыта</p>
              </div>
              <div className="rounded-xl border border-border/70 bg-background/85 p-4">
                <p className="font-serif text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">выполненных объектов</p>
              </div>
              <div className="rounded-xl border border-border/70 bg-background/85 p-4">
                <p className="font-serif text-3xl font-bold text-foreground">5 лет</p>
                <p className="text-sm text-muted-foreground">официальной гарантии</p>
              </div>
            </div>
          </div>

          {/* Hero image: hidden on mobile and tablet, visible from lg (1024px) */}
          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-border/70">
              <img
                src="/imgs/hero-image.jpg"
                alt="Красивая ванная комната с профессионально уложенной плиткой"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-5 left-5 rounded-xl border border-border/70 bg-background/90 px-4 py-2 shadow-lg">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Качество</p>
              <p className="font-semibold text-foreground">Премиальный уровень отделки</p>
            </div>
            <div className="absolute -bottom-6 right-4 rounded-2xl border border-border/70 bg-background p-5 shadow-xl max-w-[17rem]">
              <p className="text-sm text-muted-foreground mb-1">Стоимость работ</p>
              <p className="font-serif text-3xl font-bold text-foreground">от 15 BYN/м²</p>
              <p className="text-xs text-muted-foreground mt-2">Финальная цена после бесплатного замера</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
