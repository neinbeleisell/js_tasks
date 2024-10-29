/**
 * Принимает на вход текст письма и массив ключевых слов и проверяет,
 * содержится ли хотя бы одно из ключевых слов в этом тексте
 * 
 * @param {String} text Текст, проверяемый на спам
 * @param {String[]} keywords Массив ключевых слов
 * @returns {Boolean}
 */
export const isSpam = (text, keywords) => {
    // Приводим текст к нижнему регистру для нечувствительности к регистру
    const lowerCaseText = text.toLowerCase();

    // Проверяем, содержится ли хотя бы одно из ключевых слов в тексте
    return keywords.some(keyword => lowerCaseText.includes(keyword.toLowerCase()));
};
