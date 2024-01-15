// Задание 01
let i = 0;
while (i < 2) {
    console.log('Привет!');
    i++;
}

// или
for (let i = 0; i < 2; i++) {
    console.log("Привет");
}

// Задание 02
let ii = 0;
while (ii <= 5) {
    console.log(ii);
    ii++;
}

// Задание 03
for (let iii = 7; iii <= 22; iii++) {
    console.log(iii);
}

// Задание 04
const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
};

for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов.`);
}

// Задание 05
let n = 1000;
let number = 0;

while (n >= 50) {
    n /= 2;
    number++;
}
console.log(n);
console.log(number);

// Задание 06
let fri1 = 1;
for (let i = fri1; i <= 31; i += 7) {
    console.log(`Сегодня пятница, ${fri1}-е число. Необходимо подготовить отчет.`)
}
