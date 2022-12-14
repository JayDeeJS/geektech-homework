//Задание 1
/*
Написать программу "Треугольник в цикле".
*/

//Код решения
function DrawTriangle(symbol) {
    var count = 7;
    var string = "";

    for (var i = 0; i < count; i++) {
        string += symbol;
        console.log(string);
    }
}
DrawTriangle("*");


//Задание 2
/*
Написать программу FizzBuzz: программа должна вывести
числа от 1 до 100 по следующим правилам. Если число делится
на 3 то вывести Fizz, если число делится на 5 вывести Buzz,
если делится и на 3 и на 5, то вывести FizzBuzz, иначе вывести
просто число. Например: 1 2 Fizz 4 Buzz и т.д.
*/

//Код решения
function PlayFizzBuzz(range) {
    var fizz = "fizz";
    var buzz = "buzz";
    var fizzBuzz = "FizzBuzz"
    var printer = "";

    for (var i = 1; i <= range; i++) {

        if (i % 3 === 0 && i % 5 !== 0) {
            printer += " " + fizz;
        } else if (i % 5 === 0 && i % 3 !== 00) {
            printer += " " + buzz;
        } else if (i % 3 === 0 && i % 5 === 0) {
            printer += " " + fizzBuzz;
        } else {
            printer += " " + i;
        }
    }
    return printer;
}
console.log(PlayFizzBuzz(100));


//Задание 3
/*
Написать функцию, которая подсчитывает вхождение определенного
символа в строке. Например: CountChar("Abrakadabra", "a") -> 5,
CountChar("Hello world", "o") -> 2 и т.д. Причем считаются как
маленькие, так и большие буквы.
*/

//Код решения
function CountChar(string, symbol) {
    var count = 0;
    var lowerCaseString = string.toLowerCase();

    for (var i = 0; i < string.length; i++) {
        lowerCaseString[i] === symbol
          ? count++
          : count
    }
    console.log(`symbol count -> ${count}`);
}
CountChar("Hello world", "h");


//Задание 4
/*
Напишите функцию капитализации строк. Капитализация - это механизм
форматирования строки, так чтобы первая буква была заглавной,
а остальные строчные. Выглядит он так:
CapitalizeString("еВГЕНИЙ") -> "Евгений",
CapitalizeString("КиСеЛеВ") -> "Киселев".
*/

//Код решения
function CapitalizeString(string) {
    var CapitalLetter;

    CapitalLetter = string[0].toUpperCase();
    return CapitalLetter.concat(string.substring(1).toLowerCase());
}
console.log(CapitalizeString("еВгЕНиЙ"));