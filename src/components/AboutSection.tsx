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
                Протоиерей Сергей Холодков — священник Русской Православной Церкви.
                Пишет о вере, духовной жизни и человеке — просто и честно, без лишних слов.
              </p>
              <p>
                В текстах нет готовых ответов, но есть попытка думать вместе с читателем
                о том, что по-настоящему важно.
              </p>
              <p className="text-muted-foreground">
                Все произведения доступны для свободного чтения. Если текст отозвался —
                напишите, это всегда важно слышать.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-sm">
            <img
              src="https://cdn.poehali.dev/projects/adc8a424-736c-4066-a2e5-8c26f6bd5548/bucket/23411248-3466-4f6b-adb3-a011d128b236.jpg"
              alt="Протоиерей Сергей Холодков"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}