export function Footer() {
  return (
    <footer className="border-t border-border py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-light mb-4">Сергей Холодков</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Протоиерей, священник РПЦ. Пишет о вере, духовной жизни и человеке.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">Разделы</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#works" className="hover:text-foreground transition-colors">
                  Произведения
                </a>
              </li>
              <li>
                <a href="#genres" className="hover:text-foreground transition-colors">
                  Жанры
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  Об авторе
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">Связаться</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:88005556677" className="hover:text-foreground transition-colors">
                  8 800 555-56-77
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Протоиерей Сергей Холодков. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}