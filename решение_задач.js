
/**
 * Возвращает сумму всех чётных чисел в массиве
 * 
 * @param {number[]} numbers Массив чисел
 * @returns {number} Сумма чётных чисел
 */
export const solutionFn = (numbers) => {
    return numbers.reduce((sum, num) => {
        return num % 2 === 0 ? sum + num : sum; // Проверяем, четное ли число
    }, 0);
};



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


/**
 * Валидирует операнды и возвращает их сумму
 * 
 * @param {unknown} leftOperand Левый операнд
 * @param {unknown} rightOperand Правый операнд
 * @returns {Number} Сумма операндов
 */
export const sum = (leftOperand, rightOperand) => {
    // Проверяем, являются ли оба операнда числами
    const isLeftNumber = typeof leftOperand === 'number';
    const isRightNumber = typeof rightOperand === 'number';

    if (isLeftNumber && isRightNumber) {
        return leftOperand + rightOperand; // Если оба числа, возвращаем их сумму
    } else if (!isLeftNumber && !isRightNumber) {
        throw new Error('Operands are not numbers'); // Оба операнда не числа
    } else if (!isLeftNumber) {
        throw new Error('The left operand is not number'); // Левый операнд не число
    } else {
        throw new Error('The right operand is not number'); // Правый операнд не число
    }
};



/**
 * Возвращает минимальную систему контроля версий
 * 
 * @param {Array} initialCommit 
 * @returns {Object}
 */
export const getMinimalCVS = (initialCommit) => {
    const history = [initialCommit]; // История версий, начинаем с начальной версии
    let currentVersion = [...initialCommit]; // Текущая версия массива

    return {
        head: () => currentVersion, // Возвращает последнюю версию
        history: () => history, // Возвращает историю изменений
        push: (element) => {
            currentVersion = [...currentVersion, element]; // Добавляем элемент в конец
            history.push([...currentVersion]); // Сохраняем новую версию в историю
        },
        pop: () => {
            if (currentVersion.length === 0) return undefined; // Если массив пустой, ничего не возвращаем
            const lastElement = currentVersion.pop(); // Убираем последний элемент
            history.push([...currentVersion]); // Сохраняем новую версию в историю
            return lastElement; // Возвращаем удаленный элемент
        }
    };
};



/**
 * Глобальный переключатель стилей
 * 
 * @param {String} className Название класса
 */
export const globalToggle = (className) => {
    const elements = document.querySelectorAll(`.${className}, .${className}_active`);

    // Проверяем, есть ли элементы с переданным классом
    if (elements.length === 0) {
        return;
    }

    // Переключаем классы для всех найденных элементов
    for (const element of elements) {
        if (element.classList.contains(className)) {
            element.classList.remove(className);
            element.classList.add(`${className}_active`);
        } else {
            element.classList.remove(`${className}_active`);
            element.classList.add(className);
        }
    }
};




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



/**
 * Возвращает одноразрядное число, полученное в результате итеративного перемножения всех цифр числа
 * 
 * @param {Number} num
 * @returns {Number}
 */
export const solutionFn = (num) => {
    // Если число уже одноразрядное, возвращаем его
    if (num < 10) {
        return num;
    }

    while (num >= 10) {
        let product = 1; // Инициализируем переменную для хранения произведения
        // Перемножаем все цифры числа
        while (num > 0) {
            product *= num % 10; // Умножаем на последнюю цифру
            num = Math.floor(num / 10); // Убираем последнюю цифру
        }
        num = product; // Присваиваем произведение обратно num для следующей итерации
    }

    return num; // Возвращаем одноразрядное число
};



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
