//Задание 2
/*
Написать мини-проект "Лото" как показано на скриншоте.
Нужно генерировать случайных 5-6 чисел от 1 до 100 и выводить их
на интерфейс, генерация новых чисел вызывается по нажатию на кнопку.
*/

//Код решения
var generateButton = document.querySelector(".btn-success");
var resetButton = document.querySelector(".btn-secondary");
var lotteryNumbers = document.querySelectorAll(".number");

function generateNumbers(max) {
    max = 9;
    for (var number of lotteryNumbers) {
        number.innerText = Math.floor(Math.random() * max);
    }
}

function resetNumbers() {
    for (var number of lotteryNumbers) {
        number.innerText = "";
    }
}

generateButton.addEventListener("click", generateNumbers);
resetButton.addEventListener("click", resetNumbers);