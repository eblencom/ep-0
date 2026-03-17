"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+375 (29) 803-36-81",
    href: "tel:+375298033681",
  },
  {
    icon: Mail,
    label: "Email",
    value: "plitkapro@mail.ru",
    href: "mailto:plitkapro@mail.ru",
  },
  {
    icon: MapPin,
    label: "Город",
    value: "Минск и Минская область",
    href: null,
  },
  {
    icon: Clock,
    label: "Время работы",
    value: "Пн-Сб: 9:00 - 20:00",
    href: null,
  },
]

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="section-shell py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="rounded-[2rem] border border-border/70 bg-background p-5 md:p-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
            <div className="rounded-2xl bg-foreground text-card p-6 md:p-8">
              <p className="text-primary-foreground/70 font-medium uppercase tracking-wider text-sm mb-4">
                Контакты
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5 text-balance">
                Начнём ваш проект
              </h2>
              <p className="text-card/70 leading-relaxed mb-8">
                Оставьте заявку, и я свяжусь с вами для уточнения деталей,
                предложу решения по материалам и рассчитаю стоимость.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 rounded-xl border border-card/15 bg-card/5 p-3">
                    <div className="w-10 h-10 bg-card/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-card/60 uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-semibold text-card hover:text-accent transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-card">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-card/15">
                <p className="text-sm text-card/60 mb-3">Также можете написать:</p>
                <div className="flex gap-4">
                  <a href="#" className="text-card hover:text-accent transition-colors font-medium">Instagram</a>
                  <a href="#" className="text-card hover:text-accent transition-colors font-medium">Telegram</a>
                  <a href="#" className="text-card hover:text-accent transition-colors font-medium">Viber</a>
                </div>
              </div>
            </div>

            <Card className="border-border/70 shadow-sm">
              <CardContent className="p-6 md:p-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  Заказать бесплатный расчёт
                </h3>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-serif text-xl font-semibold text-foreground mb-2">
                      Заявка отправлена!
                    </h4>
                    <p className="text-muted-foreground">
                      Я свяжусь с вами в ближайшее время
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Ваше имя
                      </label>
                      <Input
                        id="name"
                        placeholder="Как к вам обращаться?"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Телефон
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+375 (__) ___-__-__"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Опишите задачу
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Какие работы нужно выполнить? Укажите площадь, если знаете"
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full shadow-md shadow-primary/20"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Отправка..." : "Отправить заявку"}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
