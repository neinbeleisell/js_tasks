
/**
 * Возвращает объект с количеством вхождений типов в переданном объекте
 * 
 * @param {Object} obj Объект
 * @returns {Object} Объект с количеством вхождений типов
 */
export const solutionFn = (obj) => {
    const type_counts = {};
    for (let key in obj) {
        const type = typeof obj[key];
        if (type_counts[type]) {
            type_counts[type]++;
        } else {
            type_counts[type] = 1;
        }
    }
    return type_counts; // Возвращаем объект с типами и их количеством
};