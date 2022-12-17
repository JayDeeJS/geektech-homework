//Задание 1
/*
Написать мини-проект "Счетчик" как показано на скриншоте.
Нужно просто увеличивать или уменьшать на единицу число.
Дизайн можете сделать какой сами пожелаете. Но главное чтобы
вся логика работала. Можете при уменьшении, если дошли до нуля,
больше не уменьшать счетчик или же можно реализовать следующую логику:
если число 0 то цвет текста серый, если число положительное то цифра
зеленая, а если отрицательная то красная (один вариант на выбор)
*/

//Код решения
function changeCount(count) {
  var watchCount = document.querySelector(".count");
  var increaseButton = document.querySelector(".btn-success");
  var decreaseButton = document.querySelector(".btn-danger");
  var resetButton = document.querySelector(".btn-secondary");

  function adjustColor() {
    switch (count) {
      case 0:
        watchCount.style.color = "dimgray";
        break;
      case -1:
        watchCount.style.color = "red";
        break;
      case 1:
        watchCount.style.color = "lime";
        break;
      default:
        break;
    }
  }

  increaseButton.addEventListener("click", () => {
    watchCount.innerText = count + 1;
    count++;
    adjustColor();
  });

  decreaseButton.addEventListener("click", () => {
    watchCount.innerText = count - 1;
    count--;
    adjustColor();
  });

  resetButton.addEventListener("click", () => {
    watchCount.innerText = count = 0;
    adjustColor();
  });
}
changeCount(0);
