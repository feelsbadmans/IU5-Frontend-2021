/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
    let numbers = "1234567890"
    let nums = [];
    let buffer = "";
    let i = 0;
    while (i < str.length) {
        if (numbers.search(str[i]) != -1) {
            if (i != 0) {
                if (str[i - 1] == '-') buffer += '-';
            }
            while (numbers.search(str[i]) != -1 && i < str.length - 1) {
                buffer += str[i];
                i++;
            }
            if (i === str.length - 1 && numbers.search(str[i]) != -1) buffer += str[i];
            nums.push(Number(buffer));
            buffer = "";
        }
        i++;
    }
    const min = Math.min.apply(null, nums);
    const max = Math.max.apply(null, nums);
    return { "min": min, "max": max }
}

module.exports = getMinMax;