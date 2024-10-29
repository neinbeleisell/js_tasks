/**
 * Бей или беги
 * 
 * @param {Number} a Левая граница
 * @param {Number} b Правая граница
 * @returns {('hit' | 'run')}
 */
export const hitOrRun = (a, b) => {
    // Генерируем случайное число в заданном диапазоне
    const randomNumber = Math.floor(Math.random() * (b - a + 1)) + a;

    // Функция для проверки простоты числа
    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    // Проверяем, является ли сгенерированное число простым
    return isPrime(randomNumber) ? 'run' : 'hit';
};