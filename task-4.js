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

