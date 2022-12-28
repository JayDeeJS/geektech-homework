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
var noteListJSON = `{
    "January": ["fix the door", "call a dentist"],
    "February": "buy books",
    "March": "throw a party",
    "April": "go hiking",
    "May": "see a doctor",
    "June": "try ice climbing",
    "July": "help stranger",
    "August": "try base jumping",
    "September": "buy a car",
    "October": "celebrate Halloween",
    "November": "celebrate Halloween again",
    "December": "spend Christmas with friends"
}`

var noteList = JSON.parse(noteListJSON);
console.log(noteList);

var noteInput = document.querySelector(".input");
noteInput.addEventListener("keydown", function (event) {
    console.log(event.target.value);
});
var monthNodes = document.querySelectorAll(".month");
var display = document.querySelector(".note");

for (var monthNode of monthNodes) {
    monthNode.addEventListener("click", function (event) {
        console.log(event.target.innerHTML.toString());

        var key = event.target.innerHTML.toString();
        switch (key) {
            case "January":
                display.textContent = noteList.January;
                break;
            case "February":
                display.textContent = noteList.February;
                break;
            case "March":
                display.textContent = noteList.March;
                break;
            case "April":
                display.textContent = noteList.April;
                break;
            case "May":
                display.textContent = noteList.May;
                break;
            case "June":
                display.textContent = noteList.June;
                break;
            case "July":
                display.textContent = noteList.July;
                break;
            case "August":
                display.textContent = noteList.August;
                break;
            case "September":
                display.textContent = noteList.September;
                break;
            case "October":
                display.textContent = noteList.October;
                break;
            case "November":
                display.textContent = noteList.November;
                break;
            case "December":
                display.textContent = noteList.December;
                break;
            default:
                break;
        }
    })

}
