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
        return 'зима';

    } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
        return 'весна';

    } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
        return 'лето';

    } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
        return 'лето';

    } else {
        return 'Это не число месяца';
    }

}

// playSeasons()