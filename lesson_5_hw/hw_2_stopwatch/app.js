//Задание 2
/*
Написать мини-проект "Секундомер". Нужно чтобы по нажатию на кнопку
"запустить секундомер" начинался отсчет секунд. При нажатии на кнопку
"Остановить секундомер" секундомер останавливался. Также, дополнительно
создайте кнопку "Сбросить секундомер" чтобы сбросить в 0 текущее
количество секунд. Причем, если секундомер запущен кнопка
"запустить секундомер" должна быть недоступна для нажатия,
а если секундомер остановлен, то кнопка "Остановить секундомер"
была недоступна.
*/

//Код решения
var milliseconds = 0;
var seconds = 0;
var appendMilliseconds = document.querySelector('#milliseconds');
var appendSeconds = document.querySelector('#seconds');

var start = document.querySelector('#start');
var stop = document.querySelector('#stop');
var reset = document.querySelector('#reset');
var interval;

var trueValue = true;
var falseValue = false;

function startCountdown () {
    milliseconds++ && (appendMilliseconds.innerHTML = milliseconds)
      ? (start.disabled = trueValue) && (stop.disabled = falseValue)
      : false;
    if(milliseconds === 59) {
        seconds++;
        appendSeconds.innerHTML = seconds;
        milliseconds = 0;
        appendMilliseconds.innerHTML = milliseconds;
    }
    if(seconds === 59) {
        seconds = 0;
        appendSeconds.innerHTML = seconds;
        milliseconds++;
        appendMilliseconds.innerHTML = milliseconds;
    }
}

function stopCountdown() {
    clearInterval(interval);
    start.disabled = falseValue;
    stop.disabled = trueValue;
}

function resetCountdown() {
    clearInterval(interval);
    milliseconds = 0;
    appendMilliseconds.innerHTML = milliseconds;
    seconds = 0;
    appendSeconds.innerHTML = seconds;
    start.disabled = falseValue;
}

start.onclick = () => {
    clearInterval(interval);
    interval = setInterval(startCountdown, 20);
}

stop.onclick = () => {
    stopCountdown();
}

reset.onclick = () => {
    resetCountdown();
}