import { Shield, Clock, Award, Wrench, FileText, Headphones } from "lucide-react"

const advantages = [
  {
    icon: Shield,
    title: "Гарантия 3 года",
    description: "На все выполненные работы предоставляю письменную гарантию",
  },
  {
    icon: Clock,
    title: "Точные сроки",
    description: "Выполняю работу в оговоренные сроки без задержек и переносов",
  },
  {
    icon: Award,
    title: "Качество работ",
    description: "Использую профессиональный инструмент и проверенные материалы",
  },
  {
    icon: Wrench,
    title: "Свой инструмент",
    description: "Весь необходимый профессиональный инструмент всегда с собой",
  },
  {
    icon: FileText,
    title: "Работа по договору",
    description: "Официальное оформление, фиксированная цена, прозрачные условия",
  },
  {
    icon: Headphones,
    title: "Всегда на связи",
    description: "Консультирую до, во время и после выполнения работ",
  },
]

export function Advantages() {
  return (
    <section id="advantages" className="section-shell py-20 md:py-32 bg-foreground text-card relative overflow-hidden">
      {/* Decorative tile texture — no crop, no frame, fades into dark background */}
      <img
        src="/imgs/tile-back-png.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-[18%] w-[44%] max-w-md pointer-events-none select-none object-contain opacity-100"
        style={{ transform: "translateY(12%)" }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div className="lg:sticky lg:top-28 space-y-6">
            <p className="text-primary-foreground/70 font-medium uppercase tracking-wider text-sm">
              Почему выбирают меня
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              Надёжный подрядчик
              <br />
              для вашего ремонта
            </h2>
            <p className="text-card/70 text-lg leading-relaxed">
              Беру ответственность за этапы, сроки и итоговый вид отделки.
              Вы заранее понимаете стоимость, объём работ и результат.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Получить консультацию
            </a>
          </div>

          <div className="grid gap-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-card/15 bg-card/5 p-5">
                <div className="w-11 h-11 rounded-lg bg-card/10 flex items-center justify-center">
                  <advantage.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs tracking-wider text-card/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-xl font-semibold">
                      {advantage.title}
                    </h3>
                  </div>
                  <p className="text-card/70 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
