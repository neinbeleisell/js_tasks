/**
 * Case Converter
 * 
 * @param {String} snakeCaseString Строка в snake_case
 * @returns {String} Строка в camelCase
 */
export const solutionFn = (snakeCaseString) => {
    return snakeCaseString
        .split('_') // Разделяем строку по символу '_'
        .map((word, index) => {
            // Для первого слова оставляем его в нижнем регистре,
            // для остальных - делаем первую букву заглавной
            return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(''); // Объединяем слова обратно без разделителей
};