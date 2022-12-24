//Задание 1
/*
Написать функцию с переменным числом аргументов, которая считает
среднее арифметическое из параметров функции.
Пример: mean(5,4,8,1) -> 4.5, mean(1,1,1,1) -> 1
*/

//Код решения
function countMeanValue(arguments = [5, 4, 8, 1]) {
    var result = 0;
    for (var argument of arguments) {
        result += argument;
    }
    return result / arguments.length;
}
console.log(countMeanValue());


//Задание 2
/*
С помощью метода массивов изученного на уроке проверить
что в ИНН все символы являются числами
*/

//Код решения
var INN = [2, 15, "06", 1991, 303, 25];

function verifyINN(array) {
    return array.every(element => typeof element === 'number');
}

console.log(verifyINN(INN));



//Задание 3
/*
Написать мини-проект "Авторизация". Требования следующие:
надо создать функцию-конструктор User, которая создает
объект со следующими полями: логин, пароль и имя пользователя;
создать массив пользователей через  ключевое слово new как это
сделано на уроке со счетами; создать интерфейс авторизации
(дизайн выбираете какой угодно); при нажатии на кнопку "войти"
искать по логину и паролю пользователя в массиве; если найден
то выводим куда-нибудь имя пользователя, иначе выводим ошибку авторизации
*/

//Код решения
var userInput = document.querySelector(".user");
var passwordInput = document.querySelector(".password");
var enter = document.querySelector(".enter");

function User(login, password, userName) {
    this.Login = login;
    this.Password = password;
    this.UserName = userName;
    this.searchUser = function(userName) {
        if (userInput.value === this.UserName && passwordInput === this.Password) {
            console.log(userName);
        }
    }
}
console.log(User);

var users = [
    new User("arrival", "hectapod123", "Dr Banks"),
    new User("interstellar", "murph123", "Cooper"),
    new User("martian", "martian123", "Mark Watney"),
]

users.forEach(function (user) {
    enter.onclick = () => {
        user.searchUser;
    }
})