interface Work {
  title: string;
  genre: string;
  year: string;
  excerpt: string;
}

const works: Work[] = [
  {
    title: "Тишина перед рассветом",
    genre: "Рассказ",
    year: "2024",
    excerpt:
      "История об одном утре, которое изменило всё. О том, как в самые тихие минуты мы слышим себя яснее всего.",
  },
  {
    title: "Письма, которые не отправили",
    genre: "Повесть",
    year: "2024",
    excerpt:
      "Героиня находит пачку старых писем и через них заново проживает чужую — и свою — жизнь.",
  },
  {
    title: "Город под дождём",
    genre: "Рассказ",
    year: "2023",
    excerpt:
      "Зарисовка о случайной встрече двух незнакомцев, которых на пять минут объединил один зонт.",
  },
  {
    title: "Заметки на полях",
    genre: "Эссе",
    year: "2024",
    excerpt:
      "Размышления о книгах, времени и о том, почему мы перечитываем любимые страницы снова и снова.",
  },
  {
    title: "Сад, которого нет",
    genre: "Рассказ",
    year: "2023",
    excerpt:
      "Воспоминание о бабушкином доме, где каждое дерево хранило свою маленькую тайну.",
  },
  {
    title: "Долгая дорога домой",
    genre: "Повесть",
    year: "2022",
    excerpt:
      "О возвращении в место, которое мы покинули, и о том, что встречает нас по прибытии.",
  },
];

export function ArtworkGrid() {
  return (
    <section id="works" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">Произведения</h2>
          <p className="text-muted-foreground text-lg">Подборка рассказов, повестей и эссе</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {works.map((work, index) => (
            <article
              key={index}
              className="group cursor-pointer bg-card border border-border rounded-sm p-8 transition-colors hover:border-foreground/40"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                {work.genre} · {work.year}
              </p>
              <h3 className="font-serif text-2xl font-light mb-3 group-hover:text-muted-foreground transition-colors">
                {work.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{work.excerpt}</p>
              <span className="text-sm tracking-wide border-b border-foreground/30 pb-0.5">
                Читать
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
