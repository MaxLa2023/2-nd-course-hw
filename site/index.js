// function playSeasons() {

//     let monthNumber = Number(prompt("Введите номер месяца"));

//     {
//         switch (monthNumber) {
//             case 12:
//             case 1:
//             case 2:
//                 alert("Зима");
//                 break;
//             case 3:
//             case 4:
//             case 5:
//                 alert("Весна");
//                 break;
//             case 6:
//             case 7:
//             case 8:
//                 alert("Лето");
//                 break;
//             case 9:
//             case 10:
//             case 11:
//                 alert("Осень");
//                 break;
//             default:
//                 alert("Некорректный номер месяца");
//         }
//     }


function playSeasons() {

    let monthNumber = Number(prompt("Введите номер месяца"));

    if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12) {
        alert('зима');
        return 'зима';

    } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
        alert('весна');
        return 'весна';

    } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
        alert('лето');
        return 'лето';

    } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
        alert('осень');
        return 'осень';

    } else {
        alert('Это не число месяца');
        return 'Это не число месяца';
    }

}

function playGuessNumber() {

    let arrFruit = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    //какая-то хитрая сортировка
    arrFruit = arrFruit.sort(() => Math.random() - 0.5);
    // arrFruit = arrFruit.join(', ');

    alert(arrFruit);

    let Guess1 = prompt('Чему равнялся первый элемент массива?');
    let Guess2 = prompt('Чему равнялся последний элемент массива?');

    if (Guess1 == arrFruit[0] && Guess2 == arrFruit[arrFruit.length - 1]) {
        alert('Поздравляем, вы угадали!');
    } else if (Guess1 == arrFruit[0] || Guess2 == arrFruit[arrFruit.length - 1]) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы отрицательно угадали');
    }
}



