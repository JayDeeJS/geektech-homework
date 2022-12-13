/*
Задание 1
 Создать объект банковской карты со следующими полями:
 Номер карты(строка), Дата окончания(строка), Имя владельца(строка),
 Тип карты(строка), CVC(число).
*/

//Код решения
var bankCard = {
    CardNumber: "4242424242424242",
    CardExpiryDate: "10.01.2024",
    CardHolderName: "John Doe",
    CardType: "Visa Classic",
    CardCVC: 424,
}

/*
Задание 2
 Создать объект банковского филиала: Код(число),
 Название(строка), График работы (строка),
 Работает ли точка вечером (логический),
 Адрес филиала (объект) со следующими полями: Город (строка),
 улица (строка), дом(строка)
*/

//Код решения
var bankBranch = {
    BranchCode: 2424,
    BranchName: "Bakai OSJC",
    BranchWorkingHours: "0900 - 1800",
    BranchEveningHours: false,
    BranchAddress: {
        City: "Bishkek",
        Street: "Soviet street",
        BuildingNumber: "123"
    }
}

/*
Задание 3
 У нас имеется 4 системы быстрых денежных переводов:
 Unistream, RIA, Contact, MoneyGram. По аналогии со светофором
 (писали на уроке) реализовать логику отправки денег
 (можно просто писать в консоли что деньги отправлены определенной системой)
*/

//Код решения
var transferOne = "UniStream";
var transferTwo = "RIA";
var transferThree = "Contact";
var transferFour = "MoneyGram";

switch (transferTwo) {
    case "UniStream":
    case "unistream":
        console.log("transferred via UniStream");
        break;
    case "RIA":
    case "ria":
        console.log("transferred via RIA");
        break;
    case "Contact":
    case "contact":
        console.log("transferred via Contact");
        break;
    case "MoneyGram":
    case "moneygram":
        console.log("transferred via MoneyGram");
        break;
    default:
        console.log("transferred via unknown branch");
}

/*
Задание 4
 Написать программу конвертер арабских чисел (от 1 до 9) в римские.
 Например: пользователь вводит 4 -> IV, 9 -> IX  и т.д.
*/

//Код решения
var enterNum = prompt("Enter numbers from 1 to 9");

if (enterNum === null || enterNum === "") {
    console.log("Not entered");
} else if (enterNum <= 0 || enterNum >= 10) {
    console.log("Less than 1 or more than 9");
} else if (enterNum == 1) {
    console.log("1 -> I");
} else if (enterNum == 2) {
    console.log("2 -> II ");
} else if (enterNum == 3) {
    console.log("3 -> III");
} else if (enterNum == 4) {
    console.log("4 -> IV");
} else if (enterNum == 5) {
    console.log("5 -> V");
} else if (enterNum == 6) {
    console.log("6 -> VI");
} else if (enterNum == 7) {
    console.log("7 -> VII");
} else if (enterNum == 8) {
    console.log("8 -> VIII");
} else if (enterNum == 9) {
    console.log("9 -> IX");
} else {
    console.log("Invalid value");
}


/*
Создайте переменную customerType. В нее положите либо 1, либо 2.
Тип клиента: 1 - физическое лицо, 2 - юридическое лицо.
Попрактикуйтесь с тернарным оператором, выводить вместо числа текст.
Например: customerType = 1 -> Физ. лицо
*/

//Код решения
// var customerType = 1;

// switch (customerType) {
//     case 1:
//         console.log("1 => физическое лицо");
//         break;
//     case 2:
//         console.log("2 => юридическое лицо");
//         break;
//     default:
//         console.log("Assign value to customerType");
// }

// console.log(customerType === 1 ? "1 => физическое лицо" : "2 => юридическое лицо");