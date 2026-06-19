import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Genre {
  name: string;
  description: string;
  icon: string;
}

const genres: Genre[] = [
  {
    name: "Рассказы",
    description:
      "Короткие истории, в которых одно событие или встреча раскрывает целый мир. Читаются за один вечер.",
    icon: "BookOpen",
  },
  {
    name: "Повести",
    description:
      "Более длинные сюжеты с глубокими героями и неспешным повествованием — для долгого, вдумчивого чтения.",
    icon: "Library",
  },
  {
    name: "Эссе",
    description:
      "Размышления о жизни, книгах и времени. Личные заметки, в которых мысль важнее сюжета.",
    icon: "PenLine",
  },
  {
    name: "Поэзия",
    description:
      "Стихи и небольшие лирические тексты — попытка поймать настроение в нескольких строках.",
    icon: "Feather",
  },
];

export function ArtTypes() {
  return (
    <section id="genres" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 text-balance">Жанры</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите то, что вам по настроению — от коротких рассказов до неспешных повестей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {genres.map((genre) => (
            <Card key={genre.name} className="border-border hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <Icon name={genre.icon} size={32} className="mb-5 text-foreground" />
                <h3 className="font-serif text-2xl font-light mb-3">{genre.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{genre.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
