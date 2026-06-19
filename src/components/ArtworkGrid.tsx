import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

interface Work {
  title: string;
  genre: string;
  year: string;
  excerpt: string;
  text: string;
}

const works: Work[] = [
  {
    title: "Любовь, изгоняющая мучение",
    genre: "Эссе",
    year: "2024",
    excerpt:
      "О разнице между страхом Божиим и рабской боязнью — и о том, как совершенная любовь превращает ужас в сыновнее доверие.",
    text: `Страх Божий в своем истинном звучании есть трепет пред лицом Бесконечного. Этот трепет расширяет душу до благоговейного молчания. Когда человек касается тайны Божественной любви, он трепещет, потому что видит свою маленькость и одновременно свою бесконечную значимость для Творца. Такой страх очищает. Он подобен огню, который освещает внутренние глубины, обнажая все, что противится свету.

В повседневной церковной среде этот страх съеживается до простой боязни. Боязни нарушить уставное правило, боязни успеть прочитать положенные молитвы, боязни прогневать священника неверно начав исповедь. Эта боязнь рождает рабскую психологию. Человек осторожничает, высчитывает свои шаги, запирает себя в клетку запретов, где каждое движение подозрительно. Он прячется от Бога за спинами святых и за толстыми книгами канонов. Такой ужас делает веру напряженной и сухой, иссушает сердце, оставляя в нем только тревогу. Уходит радость, уходит дерзновение, потому что Бог видится суровым надзирателем, который только ждет человеческой оплошности.

Это искажение коренится в неправильном восприятии греха. Грех воспринимается как нарушение формального закона, как ошибка в экзаменационной работе, за которой последует строгий выговор. Тогда страх превращается в страх провала, в страх вечных мук как справедливого возмездия. Апостол говорит, что совершенная любовь изгоняет страх, потому что в страхе есть мучение. Истинный трепет рождается от встречи с той Любовью, которая прощает прежде, чем мы успели попросить и которая ждет нас на дне самой глубокой пропасти.

Когда человек осознает, что Бог любит его совершенно, что Он отдал Себя ради него еще тогда, когда мы были врагами, тогда страх становится сыновним. Это страх потерять Доверие, страх предать Отца, Который никогда не предаст. Это страх, который заставляет плакать от умиления, а не от ужаса наказания.

Такой страх подвигнет на подвиг, на решительный шаг, на отказ от привычного комфорта, потому что любовь требует всего человека. Мелкая боязнь парализует волю, учит компромиссам и отговоркам. В православном понимании страх Божий есть начало премудрости, но начало, которое ведет в полноту любви. Искажение превращает это начало в тупик, из которого не видно света. Тогда вера становится бременем, которое человек тащит, стиснув зубы, вместо того чтобы лететь на крыльях доверия.

Самый печальный исход: этот ужас часто принимают за признак высокой духовности, за благочестивую осторожность. Христос звал нас к дерзновению. Дерзновению чада, которое знает, что Отец не отвернется, даже если чадо оступится. Именно этого дерзновения лишена душа, зажатая детским страхом перед грозным судьей. Она остается в вечном детстве, в неврозе, тогда как призвание христианина — возрасти в мужа совершенного, в меру полного возраста Христова, где страху нет места, но есть место только благоговейной любви.`,
  },
];

export function ArtworkGrid() {
  const [selected, setSelected] = useState<Work | null>(null);

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
              onClick={() => setSelected(work)}
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

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  {selected.genre} · {selected.year}
                </p>
                <DialogTitle className="font-serif text-3xl font-light text-left">
                  {selected.title}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground/90">
                {selected.text.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Feather" size={14} />
                <span>Автор</span>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}