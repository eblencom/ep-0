import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Андрей Козлов",
    location: "Минск, Уручье",
    rating: 5,
    text: "Делали ванную комнату под ключ. Результат превзошёл все ожидания! Аккуратная работа, идеальные швы, всё сделано точно в срок. Рекомендую!",
    project: "Ванная комната 9 м²",
  },
  {
    name: "Елена Михайлова",
    location: "Минск, Каменная Горка",
    rating: 5,
    text: "Очень довольна работой мастера. Кухонный фартук выложен идеально, мозаика смотрится великолепно. Приятный в общении, пунктуальный.",
    project: "Кухонный фартук",
  },
  {
    name: "Сергей Петров",
    location: "Минск, Серебрянка",
    rating: 5,
    text: "Укладывали керамогранит в коридоре и гостиной. Большая площадь, сложный рисунок — всё выполнено безупречно. Обязательно обращусь снова!",
    project: "Полы 55 м²",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="section-shell py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-14">
          <div className="max-w-2xl">
            <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">
              Отзывы
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Клиенты ценят результат,
              <br />
              а не обещания
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Несколько отзывов от заказчиков, которым я выполнял ремонт в Минске.
            </p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-secondary/45 px-6 py-4">
            <p className="font-serif text-3xl font-bold text-foreground">5.0 / 5</p>
            <p className="text-sm text-muted-foreground">средняя оценка качества</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="relative border-border/70 bg-card min-w-0">
              <CardContent className="pt-6 sm:pt-8 pb-5 sm:pb-6 px-4 sm:px-6">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary/20 absolute top-4 right-4 sm:top-6 sm:right-6" />
                
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  {review.text}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-border pt-4">
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm sm:text-base">{review.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{review.location}</p>
                  </div>
                  <div className="text-left sm:text-right min-w-0">
                    <p className="text-xs sm:text-sm text-primary font-medium">{review.project}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
