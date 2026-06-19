export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-6">
              Об авторе
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Меня зовут [Ваше имя]. Я пишу прозу и короткие эссе уже много лет — сначала
                для себя, а теперь и для всех, кому близки мои истории.
              </p>
              <p>
                В моих текстах нет супергероев и громких сюжетов. Меня интересуют обычные
                люди и тихие моменты, в которых на самом деле и происходит вся жизнь.
              </p>
              <p className="text-muted-foreground">
                Все произведения на сайте написаны мной и доступны для свободного чтения.
                Если какая-то история отозвалась в вас — напишите мне, мне будет очень важно
                это услышать.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-sm">
            <img
              src="https://cdn.poehali.dev/projects/adc8a424-736c-4066-a2e5-8c26f6bd5548/files/e76cb302-dab5-4f81-887b-753c8cb348b7.jpg"
              alt="Рабочий стол писателя"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
