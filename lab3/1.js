/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    let i = 0;
    let flag = 1;
    while (i < str.length) {
        if (str.charAt(i) === ' ') {
            flag = 1;
        }
        if (flag === 1 && str[i] != ' ') {
            str = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
            flag = 0;
        }
        i += 1;
    }
    return str;
}

module.exports = capitalize;