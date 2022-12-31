//Задание 1
/*
Дан массив из чисел: [5,4,1,20,0, -4, -8, 100,4,-74,-5,0,0,1,2,7].
Задания к нему:
* map: умножьте каждое число из массива на 5
* filter: оставьте в массиве только положительные числа (ноль тоже исключить)
* reduce: найдите максимальное число в массиве
* reduce: найдите минимальное число в массиве
*/

//Код решения
const numbers = [5,4,1,20,0, -4, -8, 100,4,-74,-5,0,0,1,2,7];

//умножить на 5
const multiplied = numbers.map(number => number * 5);
console.log(multiplied);

//оставить положительные числа
const filtered = numbers.filter(number => number > 0);
console.log(filtered);

//найти максимальное число
const maxNumber = numbers.reduce((previous, current) => {
    return previous > current ? previous : current;
});
console.log(`максимальное число -> ${maxNumber}`);

//найти минимальное число
const minNumber = numbers.reduce((previous, current) => {
    return previous < current ? previous : current;
});
console.log(`минимальное число -> ${minNumber}`);


//Задание 2
/*
Дан массив строк (имена людей):
["алиса","ЖЕНЯ","артем","ПАВЕЛ","ЖАКШЫЛЫК","антон","айсулуу", "канаим"]
* map: использовать функцию capitalize из прошлой домашки, чтобы все имена
выглядели как надо: артем -> Артем.
* map: все имена написать на латинице (тоже использовать функцию из домашки)
* filter: вывести имена начинающиеся с буквы "А"
* reduce: получить имя в котором само много букв
*/

//Код решения
const names = ["алиса","ЖЕНЯ","артем","ПАВЕЛ","ЖАКШЫЛЫК","антон","айсулуу", "канаим"];
const namesFixed = [];

//capitalize
names.map(function (name) {
    const upperCaseChar = name[0].toUpperCase();
    const lowerCaseChars = name.substring(1).toLowerCase();
    return namesFixed.push(`${upperCaseChar}${lowerCaseChars}`);
});
console.log(namesFixed);

//написать на латинице
const convertToLatin = namesFixed.map(function (name) {
    const chars = {
        "А": "А", "а": "а", "Б": "B", "б": "b", "В": "V", "в": "v",
        "Г": "G", "г": "g", "Д": "D", "д": "d", "Е": "Ye", "е": "e",
        "Ё": "Yo", "ё": "yo", "Ж": "J", "ж": "j", "З": "Z", "з": "z",
        "И": "I", "и": "i", "Й": "I", "й": "i", "К": "K", "к": "k",
        "Л": "L", "л": "l", "М": "M", "м": "m", "Н": "N", "н": "n",
        "О": "O", "о": "o", "П": "P", "п": "p", "Р": "R", "р": "r",
        "С": "S", "с": "s", "Т": "T", "т": "t", "У": "U", "у": "u",
        "Ф": "Ph", "ф": "ph", "Х": "Kh", "х": "kh", "Ц": "C", "ц": "c",
        "Ч": "Ch", "ч": "ch", "Ш": "Sh", "ш": "sh", "Щ": "Sh'", "щ": "sh'",
        "Ъ": "'", "ъ": "'", "Ы": "Y", "ы": "y", "Ь": "'", "ь": "'",
        "Э": "E", "э": "e", "Ю": "Yu", "ю": "yu", "Я": "Ya", "я": "ya",
    };

    return name.replace(/[АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя]/gi, char => chars[char]);
});
console.log(convertToLatin);


//вывести имена на "А" или "а"
const detectFirstChar = namesFixed.filter(name => name[0] === "А" || name[0] === "а");
console.log(detectFirstChar);


//самое большое кол-во букв
const highestQuantity = namesFixed.reduce(function (starterName, nextName) {
    return starterName.length > nextName.length ? starterName : nextName;
})

console.log(`самое длинное имя -> ${highestQuantity}`);


//Задание 3
/*
Дан массив объектов (модели машин). Создать функцию-конструктор модели машины:
Бренд(строка), Модель(строка), Страна(строка), год выпуска(число), объем двигателя(число).
Пример объекта на скриншоте. Массив заполните сами (минимум 5 объектов должно быть в массиве)
* map: вывести название машины в виде: "Volkswagen Golf IV 2.0L (2002)"
* filter: вывести японские машины с объемом двигателя больше 3 литров
* reduce: вывести самую старую машину(у которой год выпуска минимальный)
* reduce: вывести машину с самым большим объемом двигателя
* reduce: вывести самую старую машину с самым большим объемом двигателя.
*/

//Код решения
function Car(brand, model, country, year, volume) {
    this.Brand = brand;
    this.Model = model;
    this.Country = country;
    this.Year = year;
    this.Volume = volume;
    this.displayCarInfo = () => {
        let volumeRefactor = "";
        volumeRefactor += (volume === 2.0 || volume === 3.0 ? volume + ".0" : volume);
        return `${brand} ${model} ${volume ? volumeRefactor : volume}L (${year})`;
    };
    this.displayByCountryAndVolume = () => country === "Japan" && volume > 3;
    this.displayOldestCar = (benchmark = 2003) => year < benchmark;
    this.displayMostPowerfulCar = (benchmark = 3.2) => volume > benchmark;
    this.displayOldestAndMostPowerful = (yearBenchmark = 2005, volumeBenchmark = 3.2) => volume > volumeBenchmark && year < yearBenchmark;
}

const cars = [
    new Car("BMW", "E90", "Germany", 2005, 3.0),
    new Car("Toyota", "Camry LE", "Japan", 2003, 3.4),
    new Car ("Volkswagen", "Golf IV", "Germany", 2002, 2.0),
    new Car("Honda", "Accord", "Japan", 2017, 3.2),
    new Car("Mazda", "Atenza", "Japan", 2015, 2.2),
]
console.log(cars);

//вывести полное название машины
const findFullInfo = cars.map(function (car) {
    return car.displayCarInfo();
});
console.log("full specs ->" , findFullInfo);

//вывести японские машины с объемом двигателя больше 3 литров
const findCountryAndVolume = cars.filter(function (car) {
    return car.displayByCountryAndVolume();
});
console.log("japanese cars with engine volume > 3 ->", findCountryAndVolume);

//вывести самую старую машину(у которой год выпуска минимальный)
const findOldestCar = cars.filter(function (car) {
    return car.displayOldestCar();
})
console.log("oldest car -> ", findOldestCar);

//вывести машину с самым большим объемом двигателя
const findMostPowerfulCar = cars.filter(function (car) {
    return car.displayMostPowerfulCar();
})
console.log("most powerful car -> ", findMostPowerfulCar);

//вывести самую старую машину с самым большим объемом двигателя
const findOldestAndMostPowerful = cars.filter(function (car) {
    return car.displayOldestAndMostPowerful();
})
console.log("oldest and most powerful -> ", findOldestAndMostPowerful);