// let salary = Number(prompt('Your salary'));
// let allMoney = salary / 100 * 87;
// console.log(`Money you can use is ${allMoney}`);

// let age = 10;
// if (age > 12) {
//     alert ('Access denied!')};

// Задание 01
let password = 'ля' || 'kz';
let trypass = prompt('Введите пароль');

if (trypass === 'ля' || 'kz') {
    console.log('Пароль введен верно');
}
else {
    console.log('Пароль введен неправильно')
}

// Задание 02
let c = 5;
if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

// Задание 03
let d = 6;
let e = 7;
if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

// Задание 04
let a = '2';
let b = '3';
console.log(parseInt(a) + parseInt(b));

// Задание 05
let monthNumber = Number(prompt("Введите номер месяца"));
// if (monthNumber < 1 || monthNumber > 12) {
//     console.log("Такого месяца не бывает");
// } else 
{
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log("Зима");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Весна");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Лето");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Осень");
            break;
        default:
            console.log("Некорректный номер месяца");
    }
}


