import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bath, UtensilsCrossed, LayoutGrid, Droplets, Hammer, Ruler } from "lucide-react"

const services = [
  {
    icon: Bath,
    title: "Ванные комнаты",
    description: "Полная облицовка стен и пола, укладка мозаики, оформление душевых зон",
    price: "от 18 BYN/м²",
  },
  {
    icon: UtensilsCrossed,
    title: "Кухонные фартуки",
    description: "Керамическая плитка, керамогранит, мозаика. Идеальные швы и геометрия",
    price: "от 20 BYN/м²",
  },
  {
    icon: LayoutGrid,
    title: "Напольные покрытия",
    description: "Укладка керамогранита, плитки любого формата, сложные рисунки",
    price: "от 15 BYN/м²",
  },
  {
    icon: Droplets,
    title: "Гидроизоляция",
    description: "Профессиональная гидроизоляция под плитку в мокрых зонах",
    price: "от 8 BYN/м²",
  },
  {
    icon: Hammer,
    title: "Демонтаж старой плитки",
    description: "Аккуратный демонтаж с подготовкой поверхности под новую укладку",
    price: "от 5 BYN/м²",
  },
  {
    icon: Ruler,
    title: "Выравнивание стен",
    description: "Штукатурка, шпаклёвка, подготовка идеально ровной поверхности",
    price: "от 10 BYN/м²",
  },
]

export function Services() {
  return (
    <section id="services" className="section-shell py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-14">
          <div className="max-w-3xl">
            <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">
              Услуги
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Полный спектр плиточных работ
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Работаю как с типовыми задачами, так и с проектами повышенной сложности:
              крупноформат, диагонали, скрытые люки, ниши, душевые зоны и узлы примыканий.
            </p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-secondary/55 px-6 py-4">
            <p className="text-3xl font-serif font-bold text-foreground">6</p>
            <p className="text-sm text-muted-foreground">ключевых направлений</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group h-full border-border/70 bg-card/90 shadow-sm hover:shadow-lg transition-shadow duration-300 min-w-0"
            >
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <span className="text-xs font-semibold tracking-wider text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-primary font-medium">
                    {service.price}
                  </span>
                </div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <CardTitle className="font-serif text-lg sm:text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed text-sm sm:text-base min-w-0">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <a href="#contact" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  Обсудить проект →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
