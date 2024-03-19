

// Задание 01. С помощью метода массива sort отсортируйте массив people по возрастанию возраста

const people01 = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people01.sort((a, b) => a.age - b.age));


// Задание 02. Реализуйте функцию filter

function isPositive(num) {
    return num > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function map(arr, ruleFunction) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(ruleFunction(arr[i]));
    }
    return output;
}

function filter(arr, ruleFunction) {
    return map(arr, (element) => {
        if (ruleFunction(element)) {
            return element;
        }
    }).filter(Boolean);
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));


// Задание 03. Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. 


let counter = 0;
const interval = setInterval(() => {
    console.log(new Date().toLocaleString());
    counter += 3;
    if (counter >= 30) {
        clearInterval(interval);
        console.log("30 секунд прошло");
    }
}, 3000);

setTimeout(() => {
    clearInterval(interval);
    console.log("30 секунд прошло");
}, 30000);


// Задание 04. Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. 

function delayForSecond(callback) {
    setTimeout(callback, 1000); // Задержка выполнения callback на 1000 миллисекунд (1 секунда)
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});


// Задание 05. Вывести сообщения в нужном порядке

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

function sayHi(name) {
    return function () {
        console.log(`Привет, ${name}!`);
    }
}

delayForSecond(() => sayHi('Глеб'));


