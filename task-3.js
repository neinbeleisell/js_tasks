/**
 * Возвращает объект с количеством вхождений типов в переданном объекте
 * 
 * @param {Object} obj Объект
 * @returns {Object} Объект с количеством вхождений типов
 */
export const solutionFn = (obj) => {
    const typeCount = {}; // Объект для хранения типов и их количества

    for (const key in obj) {
        const type = typeof obj[key]; // Определяем тип текущего значения
        
        // Учитываем null как объект
        const normalizedType = type === 'object' && obj[key] === null ? 'null' : type;
        
        // Увеличиваем счетчик для данного типа
        if (normalizedType in typeCount) {
            typeCount[normalizedType]++;
        } else {
            typeCount[normalizedType] = 1;
        }
    }

    return typeCount; // Возвращаем объект с типами и их количеством
};
