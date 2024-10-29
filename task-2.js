/**
 * Кастомная реализация метода Array.prototype.filter
 * 
 * @param {Array} array Массив
 * @param {(...args: any[]) => Boolean} filterFn Фильтрующая булева функция (та, которая в качестве результата возвращает true или false)
 * @param {Boolean} inplace Флаг "модифицируем исходный массив или нет"
 * @returns {Array} Отфильтрованный массив
 */
export const filter = (array, filterFn, inplace = false) => {
    const result = []; // Массив для хранения отфильтрованных значений

    // Перебираем все элементы массива
    for (let i = 0; i < array.length; i++) {
        if (filterFn(array[i], i, array)) { // Если элемент удовлетворяет фильтрующей функции
            result.push(array[i]); // Добавляем его в результат
        }
    }

    if (inplace) {
        // Если inplace=true, очищаем исходный массив и заполняем его отфильтрованными значениями
        array.splice(0, array.length, ...result);
        return array; // Возвращаем модифицированный массив
    }

    return result; // Возвращаем новый отфильтрованный массив
};
