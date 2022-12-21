//Задание 1
/*
Написать мини-проект "Таймер". Нужно чтобы таймер отсчитывал 60 секунд
и останавливался. Должно быть 2 кнопки: запустить таймер и сбросить
таймер снова в 60 сек. 
*/

//Код решения
var start = document.querySelector(".controls__start");
var reset = document.querySelector(".controls__reset");

var appendSeconds = document.querySelector(".timer__count");
var seconds = 60;
var interval;

function startCountdown() {
    seconds >= 1
      ? seconds-- && (appendSeconds.innerHTML = seconds)
      : clearInterval(interval);
}

start.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startCountdown, 1000);
});
reset.addEventListener('click', () => {
    clearInterval(interval);
    (seconds = 60) && (appendSeconds.innerHTML = seconds);
});