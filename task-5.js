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