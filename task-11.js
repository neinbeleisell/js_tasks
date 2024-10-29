/**
 * Останавливает время на определённое количество миллисекунд
 * 
 * @param {Number} ms - количество миллисекунд, на которое необходимо остановить время
 */
function theWorld(ms) {
    const seconds = Math.floor(ms / 1000); // Преобразуем миллисекунды в секунды

    // Цикл для вывода оставшихся секунд
    for (let i = seconds; i >= 0; i--) {
        // Используем setTimeout для асинхронного выполнения
        setTimeout(() => {
            console.log(`Time will continue running in ${i}`);
        }, (seconds - i) * 1000); // Задержка на количество секунд * 1000 мс
    }

    // Задерживаем выполнение кода с помощью промиса
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Пример использования
console.log('Выведется до остановки времени');

theWorld(3000).then(() => {
    console.log('Выведется после того, как время продолжит ход');
});