// Практика

// let numbers = [1, 2, 3, 5];
// console.log(numbers);
// numbers[3] = 4;
// numbers[4] = 5;
// console.log(numbers);

// Add element
// const userName = ['Max', 'Bob', 'Ron'];
// console.log(userName);
// userName[userName.length] = 'John';
// console.log(userName);

// Split
// let numr = 'Nice';
// let massive = numr.split('');
// console.log(massive);

// Sort
// let numr = 'dfeabgch';
// numr = numr.split('');
// numr = numr.sort();
// console.log(numr);

// или
// let numr = 'dfeabgch';
// numr = numr.split('');
// console.log(numr = numr.sort());

// по словам
// let numr = 'ну=это=какаято=дичь';
// numr = numr.split('=');
// console.log(numr = numr.sort());

// Join
// let numr = 'ну=это=какаято=дичь';
// numr = numr.split('=');
// console.log(numr);
// numr = numr.sort();
// console.log(numr = numr.join(' '));


// Массив многомерный
// let mess = [['apple', 'pear', 'banana'], [1, 3, 5], [true, false, true]];
// for (let item of mess) {
//     console.log(item.sort());
//     for (let el of item) {
//         console.log(el);
//     }
// }


// Задание 01

const num = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
    if (num[i] === 10) break;
}

// Задание 02. Найти индекс

const numbs = [1, 5, 4, 10, 0, 3];

numbs.forEach((el, index) => {
    if (`${el}` == 4) {
        console.log(`У ${el} индекс ${index}:`);
    }
});

// или 

[1, 5, 4, 10, 0, 3].forEach((item, index) => {
    if (`${item}` == 4) {
        console.log(`У ${item} индекс ${index}`);
    }
});

// Задание 03. Добавить пробелы

const a = [1, 3, 5, 10, 20];
const b = a.join(' ');
console.log(b);

// Задание 04. Создание многомерного массива с помощью цикла

let arr = [];
for (let i = 0; i < 3; i++) {
    let arr2 = [];
    for (let i2 = 0; i2 < 3; i2++) {
        arr2.push(1);
    }
    arr.push(arr2);
}
console.log(arr);


// Задание 05

const ar05 = [1, 1, 1];
ar05.push(2, 2, 2);
console.log(ar05);

// Задание 06. Отсортировать, удалить а

const ar06 = [9, 8, 7, 'a', 6, 5];
const ar06NoA = ar06.sort();
ar06NoA.pop();
console.log(ar06NoA);

// Задание 07. Угадать есть ли число в массиве

let ar07 = [9, 8, 7, 6, 5];
let guessN = Nember(prompt('Угадайте число'));
if (ar07.includes(guessN)) {
    console.log('Угадал');
}
else {
    console.log('Не угадал');
}

// Задание 08. Реверс строки преобразованием в массив, реверсом и назад в строку

const str = 'abcdef';

const strRev = str.split('').reverse().join('');
console.log(strRev);

// Задание 09. Превращаем многомерный массив в одномерный

const ar09 = [[1, 2, 3,], [4, 5, 6]];
const ar09Mono = ar09.flat();
console.log(ar09Mono);

// Задание 10. Находим парные суммы элементов массива

const ar10 = [3, 5, 6, 1, 2, 7];
for (let i = 0; i < ar10.length - 1; i++) {
    console.log(ar10[i] + ar10[i + 1]);
}

// Задание 11. Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.

const ar11 = [1, 2, 3, 4, 123];

function getSqareNum(ar11) {
    return ar11.map(num => num * num);
}

getSqareNum(ar11)


// Задание 12. Преобразовать строки в длины слов


function getWordLength(words) {
    return words.map(w => w.length);
}

getWordLength(['слово', '', 'слог', 'длинное предложение', 'буква']);

// Задание 13. Функция, возвращающая только отрицательные значения массива

function filterPositive(ar12) {
    let result = [];
    for (let i = 0; i < ar12.length; i++) {
        if (ar12[i] < 0) {
            result.push(ar12[i])
        }
    }
    return result
}

filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]

