//TODO:==============================
// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі, якщо є - виводить повідомлення "Доступ дозволено"

// const res = prompt('vvedi name')
// const str = 'Peter John Igor Sasha'

// str.includes(res) ? console.log('ok') : console.log('ne ok')

//TODO:==============================
// Напишіть функцію min(a,b), яка повертає менше чисел a і b.

//TODO:==============================
// Наступна функція повертає true, якщо параметр age більше 18.
// В іншому випадку вона запитує підтвердження через confirm і повертає його результат:

// const age = prompt('Enter your age')

// function isAdult() {

// }

//TODO:==============================
// Що виведе наступний код?
// let fruits = ["Яблука", "Груша", "Апельсин"];
// Додаємо нове значення в "копію"
// let shoppingCart = fruits;
//shoppingCart.push("Банан");
// що у fruits?
// alert( fruits.length );

//TODO:===========================
// Створіть масив styles з елементами «Джаз» та «Блюз».
//Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
//Видалить перший елемент масиву і виведіть його в консоль.
//Вставте «Реп» і «Реггі» на початок масиву.

//TODO:==========================
//Напишіть функцію min(a, b), яка повертає
//менше з чисел a, b
//Потрібно додати перевірку, що функція отримує числа

//TODO:==============================
// Напишіть функцію pow(x,n), яка повертає x до ступеня n.
// Інакше висловлюючись, множить x він n разів і повертає результат.

//TODO:==============================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

//TODO:==============================
// Напишіть рішення, яке обчислює суму
// Квадратного коріння для всіх чисел у яких квадратний корінь буде цілим числом і пушити числа в новий масив.

// const arr = [4, 3, 5, 16, 16, 33, 4, 9]

//TODO:==========================
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']
//[{name: 'Джаз', engl: "jazz", number: 1}, {name: 'Блюз', engl: "blues", number: 2}, {name: 'Рок-н-рол', engl: "rock 'n' roll", number: 3}, {name: 'Реггі', engl: "reggae", number: 4}, {name: 'Реп', engl: "rap", number: 5} ]

//TODO:==========================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

//TODO:==============================
// Функція formatMessage(message, maxLength)
// приймає рядок (параметр message) і форматує його,
// якщо довжина перевищує значення параметрі maxLength.

// function formatMessage(message, maxLength) {
//   return message.length > maxLength
//     ? message.slice(0, maxLength) + "..."
//     : message;
// }
// formatMessage("Curabitur ligula sapien", 16); //Повертає 'Curabitur ligula...'.
// formatMessage("Curabitur ligula sapien", 23); //Повертає 'Curabitur ligula sapien'.
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15); //Повертає 'Nunc sed turpis...'.
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41); //Повертає 'Nunc sed turpis a felis in nunc fringilla'.

//TODO:==========================
//Повернути відсортовану копію масиву за зростанням
//не змінюючи вихідний масив
//не використовувати Array.prototype.sort()
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function bb(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length; j++) {
//       if (numbers[j] > numbers[j + 1]) {
//         let temp = numbers[j];
//         numbers[j] = numbers[j + 1];
//         numbers[j + 1] = temp;
//       }
//     }
//   }
//   return numbers;
// }

//TODO:==========================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function calculateAverage() {
//   const args = arguments;
//   let sum = 0;
//   let totalCount = 0;
//   for (const arg of args) {
//     if (typeof arg !== "number") {
//       continue;
//     }
//     sum += arg;
//     totalCount += 1;
//   }
//   return sum / totalCount;
// }

//TODO:==========================
//Напиши функцію findLongestWord(string)
//яка приймає довільний рядок
//що складається лише з розділених слів
//пробілом (параметр string)
//і повертає найдовше слово у цьому рядку

//TODO:==========================
//Напишіть функцію findTheColor()
//яка приймає назву кольору
//визначає його наявність у масиві.
//Якщо колір є, встановлює його як фон документа,
//якщо кольору немає виводить console.error('Такий колір не знайдено')
//і встановлює колір документа червоний
// document.body.style.background = 'red';
//const colors = ['blue', 'yellow', 'olive', 'fuchsia', 'lime', 'aqua', 'maroon']

//TODO:==========================
//Напишіть функції для роботи з масивом
//add(name) додає курс до кінця колекції
//removeCourse(name) видаляє курс із колекції
//updateCourse(oldName, newName) змінює ім'я на нове

//TODO:==========================
//Напишіть код для пошуку пароля в масиві
//Через include і тернарний оператор
// const passwords = ['ajax123', 'polly456', 'mango789', 'semiBold'];
// const password = 'semiBold';

//TODO:==========================
//Напишіть скрипт, який замінює регістр кожного символу
//У сторіччі на протилежний
//Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'
// const string = "JavaScript";
// const letters = string.split("");
// let invetedString = "";
// invetedString += letter === letter.toLocaleLowerCase()? letter.toLocaleUpperCase(): letter.toLocaleLowerCase()
// for (const letter of letters) {
// if (letter === letter.toLocaleLowerCase()) {
// console.log("ця буква в нижньому регістрі!", Letter);
// invetedString += letter.toLocaleUpperCase();
// } else {
// console.log("ця буква у верзному регістрі!", Letter);
// invetedString += letter.toLocaleLowerCase();
// }
// }

//TODO:============================
//rgb to hex
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

// function componentToHex(c) {
//   let hex = c.toString(16);
//   return hex.length === 1 ? "0" + hex : hex;
// }

// function rgbToHex(r, g, b) {
//   return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
// }
// rgbToHex;
// 0, 51, 255;

//TODO:============================
//Написати функцію, яка розіб'є рядок на масив
//по 2 літери, якщо останньої літери немає пари, то
//має записатися 1 літера.
//Даний рядок 'abc' - поверне ['ab', 'c']

//*якщо остання буква не має пари, поверне _
//Рядок 'abc' - поверне ['ab', 'c_']

//TODO:============================
//Напишіть функцію unique(arr), яка повертає масив,
//містить лише унікальні елементи arr.
//const words = ["HTML","CSS", "JS", "React", "JS", "CSS", "JS",
// "Node.js", "JS", "React", "CSS", "React", "HTML", "Node.js"];

//TODO:============================
//Створіть функцію multiplyNumeric(obj),
//яка множить всі числові властивості об'єкта obj на 2.
// до виклику функції
// let menu = {
// width: 200,
// height: 300,
// title: "My menu"
//};

// multiplyNumeric(menu);

// після виклику функції
// menu = {
// width: 400,
// height: 600,
// title: "My menu"
//};

//TODO:==============================
//Перевірка на паліндром
//const result = 'reversestring'.split('').reverse().join('') ;
//Льоша на полиці клопа знайшов
//А троянда впала на Азора лапу

//TODO:==============================
// привести масив до одного рівня не використовуючи flat

// const arr = [
// [23, 11, ["hello", "world", "Vasya"]],
// "Some str",
// [777, "word", ["Привіт", ["як сюди дістатися"]]],
//];
