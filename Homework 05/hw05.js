// Практика
// function showTextButton() {
//     alert('Работает скрипт');
// }

// function showTextButton() {
//     let userAnswer = prompt('Загадка по елку');
//     if (userAnswer === 'елка') {
//         alert('Молодец, угадал!');
//     } else {
//         alert('Не угадал');
//     }
// }

// function delMessage() {
//     let del = confirm('Вы правда хотите удалить сообщение?');
//     if (del) {
//         alert('Сообщение удалено!');
//     } else {
//         alert('Без паники, ничего не удалено!');
//     }

//     или тернарный оператор
//     let del = confirm('Вы правда хотите удалить сообщение?');
//     del ? alert('Сообщение удалено!') : alert('Без паники, ничего не удалено!');
// }

// const user = {
//     name: 'Замир',
//     age: 30,
//     city: 'Омск',
//     getInfo() {
//         return `Пользователь ${user.name}, возраст ${user.age}, проживает в городе ${user.city}`;
//     }
// }

// console.log(user.getInfo());


// function getRectangleArea() {
//     return this.width * this.height;
// };

// const square1 = {
//     width: 2,
//     height: 3,
//     getArea: getRectangleArea,
// }

// const square2 = {
//     width: 5,
//     height: 6,
//     getArea: getRectangleArea,
// }

// square1.getArea();
// square2.getArea();




// Задание 01
function less(a, b) {
    if (a > b) {
        return b;
    }
    else {
        return a;
    }
}

less(1, 2)

// или
// function result(a, b) {
//     return Math.min(a, b)
// }

// console.log(result(6, 3));


// Задание 02
function evenOdd(num) {
    let userNum = Number(prompt('Введите число, чтобы проверить, четное оно или нет'));

    if (userNum % 2 === 0) {
        return 'Число четное';
    }
    else {
        return 'Число нечетное';
    }
}

evenOdd(num);

// Задание 03
function returnSquare(a) {
    return a ** 2;
}

function square(b) {
    console.log(b ** 2);
}

// или

// function  squareNumber(num, square) { 

//     console.log(Math.pow(num, square)); /// где num это наше передаваемое число, а square это степень которая нам нужна.

//     return Math.pow(num, square);
// }

// squareNumber(5, 2)


// Задание 04
"use strict";
let age = Number(prompt("Сколько Вам лет?", 12));

let printMessage;

if (age < 12 && age >= 0) {
    printMessage = function () {
        console.log("Привет, друг!");
    }

} else if (age < 0) {
    printMessage = function () {
        console.log("Вы ввели неправильное значение");
    }

} else {
    printMessage = function () {
        console.log("Добро пожаловать!");
    }
}

// или
// function greetUser() {

//     let age = prompt("Сколько вам лет?");  

//     if (age < 0) { 
//       console.log("Вы ввели неправильное значение");

//     } else if (age <= 12) { 
//       console.log("Привет, друг!");

//     } else {
//       console.log("Добро пожаловать!");
//     }
//   }



printMessage();

// Задание 05
function mult(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return num1 * num2;
    }
}

// Задание 06
function cube() {
    let num3 = Number(prompt('Введите число, которое нужно возвести в куб'))

    if (isNaN(num3)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${num3} в кубе равняется ${num3 ** 3}`;
    }
}

// Задание 07
function getRectangleArea() {
    return (this.radius ** 2) * 2 * 3.14;
}
function getRectanglePerimeter() {
    return this.radius * 2 * 3.14;
}

const circle1 = {
    radius: 4,

    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};

const circle2 = {
    radius: 7,

    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());


