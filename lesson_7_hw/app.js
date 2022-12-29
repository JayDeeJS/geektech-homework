//Задание 1
/*
Написать функцию которая будет напрямую вызываться у строк и
переворачивать их (эту функцию вы уже реализовывали в рамках прошлой ДЗ).
Нужно лишь чуть-чуть поправить код чтобы можно было функцию вызвать
не так: reverse("hello") -> "olleh", а так: "hello".reverse() -> "olleh"
*/

//Код решения
//Вариант 1
String.prototype.reverse = function () {
    return Array.from(this).reverse().join("");
}
console.log("Hello there".reverse());

//Вариант 2
String.prototype.reverse = function () {
    var reversed = "";
    for (var i = this.length - 1; i >= 0; i--) reversed += this[i];
    return reversed;
}
console.log("Hello there".reverse());


//Задание 2
/*
Также сделать с функцией capitalizeString (которая делает первую букву
    заглавной, а все остальные строчными)
*/

//Код решения
String.prototype.capitalizeString = function () {
    var upperCaseChar = this[0].toUpperCase();
    var lowerCaseChars = this.substring(1).toLowerCase();
    return upperCaseChar.concat(lowerCaseChars);
}
console.log("hELlo thErE".capitalizeString());



//Задание 3
/*
Написать мини-приложение по сохранению заметок. Логика следующая:
в коде создать объект в котором будут хранится заметки в следующем виде:
{"Январь": ["", ""], "Февраль": ["", ""]} и т.д; на интерфейсе создать
поле ввода и вкладки для каждого месяца,  и в зависимости от того какой
месяц выбрал пользователь отображать соответствующие заметки; также
сохранять введенный текст заметки в тот месяц который выбрал пользователь;
добавление заметок можно сделать как с помощью кнопки, либо по нажатию на
кнопку enter на клавиатуре; дизайн на ваш вкус, я просто накидал самый
базовый от которого можно оттолкнуться.
*/

//Код решения
var monthListJSON = `[
    {
        "id": 1,
        "January": "fix the door"
    },
    {
        "id": 2,
        "February": "buy books"
    },
    {
        "id": 3,
        "March": "throw a party"
    },
    {
        "id": 4,
        "April": "go hiking"
    },
    {
        "id": 5,
        "May": "see a doctor"
    },
    {
        "id": 6,
        "June": "try ice climbing"
    },
    {
        "id": 7,
        "July": "help stranger"
    },
    {
        "id": 8,
        "August": "try base jumping"
    },
    {
        "id": 9,
        "September": "buy a car"
    },
    {
        "id": 10,
        "October": "celebrate Halloween"
    },
    {
        "id": 11,
        "November": "celebrate Halloween again"
    },
    {
        "id": 12,
        "December": "spend Christmas with friends"
    }
]`

var monthList = JSON.parse(monthListJSON);

function MonthsObject(id, month) {
    this.Id = id;
    this.Month = month;
}

var months = [
    new MonthsObject(monthList[0].id, monthList[0].January),
    new MonthsObject(monthList[1].id, monthList[1].February),
    new MonthsObject(monthList[2].id, monthList[2].March),
    new MonthsObject(monthList[3].id, monthList[3].April),
    new MonthsObject(monthList[4].id, monthList[4].May),
    new MonthsObject(monthList[5].id, monthList[5].June),
    new MonthsObject(monthList[6].id, monthList[6].July),
    new MonthsObject(monthList[7].id, monthList[7].August),
    new MonthsObject(monthList[8].id, monthList[8].September),
    new MonthsObject(monthList[9].id, monthList[9].October),
    new MonthsObject(monthList[10].id, monthList[10].November),
    new MonthsObject(monthList[11].id, monthList[11].December),
]
console.log(months);

var containerNode = document.querySelector(".result");
var inputNode = document.querySelector(".input");

var monthNodes = document.querySelectorAll(".month");
for (const monthNode of monthNodes) {
    console.log(monthNode.innerHTML);

    monthNode.addEventListener("click", function () {
        switch (monthNode.innerHTML) {
            case "January":
                containerNode.textContent = `${monthList[0].January}`;
                break;
            case "February":
                containerNode.textContent = monthList[1].February;
                monthNode.classList.toggle("active");
                break;
            case "March":
                containerNode.textContent = monthList[2].March;
                monthNode.classList.toggle("active");
                break;
            case "April":
                containerNode.textContent = monthList[3].April;
                monthNode.classList.toggle("active");
                break;
            case "May":
                containerNode.textContent = monthList[4].May;
                monthNode.classList.toggle("active");
                break;
            case "June":
                containerNode.textContent = monthList[5].June;
                monthNode.classList.toggle("active");
                break;
            case "July":
                containerNode.textContent = monthList[6].July;
                monthNode.classList.toggle("active");
                break;
            case "August":
                containerNode.textContent = monthList[7].August;
                monthNode.classList.toggle("active");
                break;
            case "September":
                containerNode.textContent = monthList[8].September;
                monthNode.classList.toggle("active");
                break;
            case "October":
                containerNode.textContent = monthList[9].October;
                monthNode.classList.toggle("active");
                break;
            case "November":
                containerNode.textContent = monthList[10].November;
                monthNode.classList.toggle("active");
                break;
            case "December":
                containerNode.textContent = monthList[11].December;
                monthNode.classList.toggle("active");
                break;
            default:
                break;
        }
    })
}