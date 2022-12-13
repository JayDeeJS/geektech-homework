/*
Задача 1
 написать программу: нужно запрашивать у пользователя
 его имя и фамилию (отдельным prompt) и выводит приветствие
 в виде: Здравствуйте, Имя Фамилия!
*/

//Код решения
// var nameAndSurname = prompt("Введите ваше имя и фамилию");

// if (nameAndSurname == "" || nameAndSurname == undefined) {
//     console.log("Имя и фамилия не введены");
// } else {
//     console.log("Здравствуйте, " + nameAndSurname + "!");
// }


/*
Задача 2
 Написать программу которая спрашивает у пользователя
 2 числа(через prompt) и выводит в консоль какое больше.
 Если числа равны, то вывести что они равны.
*/

//Код решения 
var numberOne = Number(prompt("Введите первое число"));
var numberTwo = Number(prompt("Введите второе число"));

if (numberOne == undefined || numberOne == "" || numberTwo == undefined || numberTwo == ""){
    console.log("Одно или оба числа не были введены");
} else if (numberOne > numberTwo) {
    console.log(numberOne);
} else if (numberOne == numberTwo) {
    console.log("Числа равны");
} else {
    console.log(numberTwo);
}

/*
Задача 3
 написать программу "светофор": программа спрашивает у пользователя
 цвет в текстовом виде, и печатает в консоль действие согласно ПДД.
 Например: красный : стой! желтый : жди и т.д.
*/

//Код решения
// var trafficLight = prompt("Введите цвет светофора");
// if (trafficLight == "" || trafficLight == undefined) {
//     console.log("Не введено");
// } else if (trafficLight == "красный") {
//     console.log("Стой!");
// } else if (trafficLight == "желтый") {
//     console.log("Жди!");
// } else if (trafficLight == "зеленый") {
//     console.log("Переходи!");
// } else {
//     console.log("Другое значение");
// }