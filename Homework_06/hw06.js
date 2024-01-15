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

// Задание 02

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

// Задание 03

const a = [1, 3, 5, 10, 20];
const b = a.join(' ');
console.log(b);

// Задание 04


// let i1 = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
// for (let i2 of i1) {
//     for (let i3 of i2) {
//         console.log(i3);
//     }
// }




// Задание 05

const f = [1, 1, 1];
f.push(2, 2, 2);
console.log(f);

// Задание 06

const aa = [9, 8, 7, 'a', 6, 5];
const bb = aa.sort();
bb.pop();
console.log(bb);

// Задание 07



