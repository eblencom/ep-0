"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = ["Все", "Ванные", "Кухни", "Полы"]

const projects = [
  {
    image: "/imgs/image-review-1-v.jpg",
    title: "Ванная с акцентной раскладкой",
    category: "Ванные",
    service: "Укладка плитки в ванной под ключ",
    area: "9 м²",
  },
  {
    image: "/imgs/image-review-3-k.jpg",
    title: "Кухонный фартук",
    category: "Кухни",
    service: "Облицовка рабочей зоны кухни",
    area: "5 м²",
  },
  {
    image: "/imgs/image-review-0-p.jpg",
    title: "Керамогранит в гостиной",
    category: "Полы",
    service: "Укладка керамогранита на пол",
    area: "42 м²",
  },
  {
    image: "/imgs/image-review-2-p.jpg",
    title: "Пол в прихожей",
    category: "Полы",
    service: "Выравнивание и укладка плитки",
    area: "14 м²",
  },
  {
    image: "/imgs/image-review-4-k.jpg",
    title: "Кухня с плиткой под камень",
    category: "Кухни",
    service: "Монтаж настенной плитки и затирка",
    area: "6 м²",
  },
  {
    image: "/imgs/image-review-5-k.jpg",
    title: "Кухонная зона",
    category: "Кухни",
    service: "Фартук с декоративной раскладкой",
    area: "4 м²",
  },
  {
    image: "/imgs/image-review-6-k.jpg",
    title: "Светлая кухня",
    category: "Кухни",
    service: "Укладка плитки с подрезкой углов",
    area: "7 м²",
  },
  {
    image: "/imgs/image-review-7-k.jpg",
    title: "Плитка на кухне",
    category: "Кухни",
    service: "Комплексная облицовка кухни",
    area: "8 м²",
  },
  {
    image: "/imgs/image-review-8-k.jpg",
    title: "Кухонный интерьер",
    category: "Кухни",
    service: "Укладка плитки на стены и фартук",
    area: "9 м²",
  },
  {
    image: "/imgs/image-review-9-k.jpg",
    title: "Кухня в современном стиле",
    category: "Кухни",
    service: "Аккуратная укладка плитки без перепадов",
    area: "6 м²",
  },
  {
    image: "/imgs/image-review-10-p.jpg",
    title: "Пол в жилой комнате",
    category: "Полы",
    service: "Укладка напольной плитки",
    area: "28 м²",
  },
  {
    image: "/imgs/image-review-11-p.jpg",
    title: "Напольный керамогранит",
    category: "Полы",
    service: "Подготовка основания и укладка плитки",
    area: "33 м²",
  },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Все")

  const filteredProjects = activeCategory === "Все" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="section-shell py-20 md:py-32 bg-secondary/45">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-12">
          <div className="max-w-3xl">
            <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">
              Портфолио
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Реальные объекты и чистая геометрия
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ниже — примеры недавних работ. Каждый объект делается по согласованному
              плану: раскладка, подрезка, швы и финальная приёмка.
            </p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-background/80 px-5 py-4">
            <p className="font-serif text-2xl font-bold text-foreground">{filteredProjects.length}</p>
            <p className="text-sm text-muted-foreground">проектов в категории</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 auto-rows-[230px] gap-5">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-border/60 shadow-md ${
                index === 0 ? "md:col-span-2 md:row-span-2" : index === 3 ? "lg:col-span-2" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient + info — only on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-foreground">
                  {project.category}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-card font-serif text-lg md:text-xl font-semibold mb-1.5">{project.title}</p>
                <p className="text-card/85 text-sm mb-0.5">{project.service}</p>
                <p className="text-card/70 text-sm">Площадь: {project.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
