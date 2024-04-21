// Направете progress bar, който отчита докъде е стигнал потребителя в четенето на статията
// При scroll надолу прогресът се увеличава, а нагоре - намалява

// Пример: в images папката

// Насоки: Елементът с id progress-indicator е стилизиран да показва прогреса.
// Регулирайте го като му сложите стил - element.style.transform = `scaleX(${percentageCompletion})`
// като стойността е в границите от 0 - 1 форматирани до 2-рия знак, т.е. ако е прочел 25% от страницата - scaleX(0.25)
// За да изчислите процента ще са ви нужни 3 property-та от браузъра
//      - window.scrollY (колко пиксела надолу е скролирал потребителя)
//      - window.innerHeight (височината на екрана на потребителя)
//      - document.body.scrollHeight (пълната височина на страницата)

// Частта, която може да се скролира е на window обекта