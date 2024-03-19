// Практика 

// function getRandomInt(min, max) {
//     return Math.round(Math.random() * max);
// }

// console.log(getRandomInt(1, 10));


// Задание 01. Преобразуйте строку js в верхний регистр JS.

const javaS = 'js';
const JAVAS = javaS.toUpperCase();
console.log(JAVAS);


// Задание 02. Преобразуйте строку js в верхний регистр JS.

function filterByPrefix(arr, prefix) {
    const result = arr.filter(item => item.toLowerCase().startsWith(prefix.toLowerCase()));
    return result;
}

// Пример использования функции
const strings = ["Кошка", "Кит", "Комар", "Носорог", "Гингко"];
const filteredArray = filterByPrefix(strings, "Ко");
console.log(filteredArray);

//   или

// const products = ['Кошка', 'Кит', 'Комар', 'Носорог'];
// const search = 'ко';

// function searchStart(product, search) {
//     products.forEach((product) => {

//         if (product.toLowerCase().startsWith(search.toLowerCase())) {
//             return product;
//         }
//     })
// };

// searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']


// Задание 03. Округление числа

Math.floor(32.58884);
Math.ceil(32.58884);
Math.round(32.58884);


// Задание 04. Наименьшее и наибольшее числа

console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

// Задание 05. Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

console.log(getRandomInt(1, 10));

// Задание 06. Функция которая создает массив до заданного числа.

function getRandomArrNumber(maxNumber) {
    const randomArr = [];
    for (let i = 0; i < maxNumber / 2; i++) {
        randomArr.push(Math.floor(Math.random() * (maxNumber + 1)));
    }
    return randomArr.sort(); // сотрирует коряво (1, 11, 15, 2, 3);
}

// Задание 07. Функция, которая из двух целых чисел делает диапазон и возвращает рандомное целое число из этого диапазона.

function getRange(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRange(1, 8);

// Задание 08. Текущая дата

const curDate = new Date();
console.log(curDate);

// Задание 09. Текущая дата + 73 дня (англ)

const currentDate = new Date();

const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);

console.log(futureDate);

// Задание 10. 


// создадим массив, в который занесем все дни недели на русском, отсчет с воскресенья - 0

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// создадим массив, где будем хранить названия месяцев на русском
const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июлья", "Августа", "Сентября", "Октября", "Ноября", "Декабрья"];

let myDate = new Date(); // здесь мы получаем текущую дату
let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " г. - это " + days[myDate.getDay()];

let hour = myDate.getHours(); // получаем час из нашей даты
let minute = myDate.getMinutes(); // получаем минуты
let second = myDate.getSeconds(); // получаем секунды

console.log(fullDate);
console.log("Время: " + hour + ":" + minute + ":" + second);

// Время, которое будет выведено, также хранится в объекте Date. - ?







