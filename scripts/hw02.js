// Задание 01
let a = 10;
alert(a);
a = 20;
alert(a);

// Задание 02
const firstIphoneYear = Number(2007);
alert(`Год выпуска первого айфона - ${firstIphoneYear}`);

// Задание 03
const javaScriptCreator = 'Брендан Эйк';
alert(`Этот парень создал Джаваскрипт -  ${javaScriptCreator}`);

// Задание 04
let n1 = 10, n2 = 2;
let sum = n1 + n2;
let dif = n1 - n2;
let prod = n1 * n2;
let quot = n1 / n2;

alert(`Сумма: ${sum}, Разность: ${dif}, Произведение: ${prod}, Частное: ${quot}`);

// Задание 05
let result = 2 ** 5;
alert(`Два в пятой степени = ${result}`);

// Задание 06
let a1 = 9;
let b1 = 2;
let reminder = a1 % b1;
alert("Остаток от деления девяти на два = " + reminder);

// Задание 07
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

// Задание 08
let age = Number(prompt('Сколько вам лет?'));
alert(`Вам ${age} лет/года`);

// Задание 09
// const user = {
//     name: String('Bob'),
//     age: Number(43),
//     isAdmin: Boolean(0),
// };

let user = { name: String('Bob'), age: Number(43), isAdmin: Boolean(0) };

// 09.1
user.cityOfResidence = String('Omsk');
user["cityOfResidence"] = "Omsk";

// 09.2
user.age = 53;

// 09.3
delete user.cityOfResidence;

// 09.4
let info = prompt('Какую информацию хотите узнать о пользователе?');

// Тут что-то не работает, непонятно
let userInfo = user[info];
alert(userInfo);

// Задание 10
let userName = String(prompt('Введите ваше имя'));
alert(`Привет, ${userName}!`);


