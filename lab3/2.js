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
    let buf = "";
    let i = 0;
    while (i < str.length) {
        if (numbers.search(str[i]) != -1) {
            if (i != 0) {
                if (str[i - 1] == '-') buf += '-';
            }
            while (numbers.search(str[i]) != -1 && i < str.length - 1) {
                buf += str[i];
                i++;
            }
            if (i === str.length - 1 && numbers.search(str[i]) != -1) buf += str[i];
            nums.push(Number(buf));
            buf = "";
        }
        i++;
    }
    const min = Math.min.apply(null, nums);
    const max = Math.max.apply(null, nums);
    return { "min": min, "max": max }
}

module.exports = getMinMax;