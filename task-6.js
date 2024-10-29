/**
 * Глобальный переключатель стилей
 * 
 * @param {String} className Название класса
 */
export const globalToggle = (className) => {
    // Ищем все элементы с переданным классом
    const elements = document.querySelectorAll(`.${className}`);
    
    // Если элементов не найдено, прекращаем работу
    if (elements.length === 0) {
        return;
    }

    // Определяем, активный ли класс
    const isActive = className.endsWith('_active');
    const newClassName = isActive ? className.slice(0, -7) : `${className}_active`;

    // Переключаем классы для всех найденных элементов
    elements.forEach(element => {
        element.classList.toggle(className); // Убираем дефолтный класс
        element.classList.toggle(newClassName); // Добавляем или убираем активный класс
    });
};