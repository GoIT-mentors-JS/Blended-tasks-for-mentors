//=============1=============
//Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение «Блюз» на «Классика».
//Удалите первый элемент массива и выведите его в консоль.
//Вставьте «Рэп» и «Регги» в начало массива.

//=============2=============
//Напишите функцию min(a, b), которая возвращает
//меньшее из чисел a, b
//нужно добавить проверку, что функция получает числа

//=============3=============
//Напишите функцию logItems(array) которая принимает
//массив и использует цикл for, который для каждого
//элемента массива будет выводить сообщение в формате
//<номер элемента> - <значение элемента>
//Нумерация элементов должна начинаться с 1.
//['Джаз', 'Блюз', 'Рок-н-ролл', 'Регги', 'Рэп']
//[{name: 'Джаз', engl: "jazz", number: 1}, {name: 'Блюз', engl: "blues", number: 2}, {name: 'Рок-н-ролл', engl: "rock 'n' roll ", number: 3}, {name: 'Регги', engl: "reggae", number: 4}, {name: 'Рэп', engl: "rap", number: 5}]

//=============4=============
//Напиши функцию findSmallerNumber(numbers)
//которая ищет самое маленькое число в массиве
//Добавь проверку что функция получает массив
//const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

//=============5=============
//Вернуть отсортированную копию массива по возростанию
//не меняя исходный массив
//не использовать Array.prototype.sort()
//const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

function bb(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  return numbers;
}

//=============6=============
//Напишите функцию caculculateAverage()
//которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.

function calculateAverage() {
  const args = arguments;
  let sum = 0;
  let totalCount = 0;
  for (const arg of args) {
    if (typeof arg !== "number") {
      continue;
    }
    sum += arg;
    totalCount += 1;
  }
  return sum / totalCount;
}

//=============7=============
//Напиши функцию findLongestWord(string)
//которая принимает произвольную строку
//состоящую только из слов разделенных
//пробелом (параметр string)
//и возвращает самое длинное слово в этой строке

//=============8=============
//Напишите функцию findTheColor()
//которая принимает название цвета
//определяет его наличие в массиве
//если цвет есть, усталавливет его как фон документа
//если цвета нет выводит console.error('Такой цвет не найден');
//и устанавливает цвет документа красный
// document.body.style.background = 'red';
//const colors = ['blue', 'yellow', 'olive', 'fuchsia', 'lime', 'aqua', 'maroon']

//=============9=============
//Напишите функции для работы с массивом
//add(name) добавляет курс в конец коллекции
//removeCourse(name) удаляет курс из коллекции
//updateCourse(oldName, newName) изменяет имя на новое

//=============10=============
//Напишите код для поиска пароля в массиве
//Через include и тернарный оператор
// const passwords = ['ajax123', 'polly456', 'mango789', 'semiBold'];
// const password = 'semiBold';

//=============11=============
//Напишите скрипт который заменяет регистр каждого символа
//в стороке на противоположный
//Например 'JavaScript' должен вернуть 'jAVAsCRIPT'
const string = "JavaScript";
const letters = string.split("");
let invetedString = "";
// invetedString += letter === letter.toLocaleLowerCase()? letter.toLocaleUpperCase(): letter.toLocaleLowerCase()
for (const letter of letters) {
  if (letter === letter.toLocaleLowerCase()) {
    console.log("эта буква в нижнем регистре!", letter);
    invetedString += letter.toLocaleUpperCase();
  } else {
    console.log("эта буква в верзнем регистре!", letter);
    invetedString += letter.toLocaleLowerCase();
  }
}

//=============12===============
//rgb to hex
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
rgbToHex;
0, 51, 255;

//=============13===============
//Написать функцию, которая разобъет строку на массив
//по 2 буквы, если у последней буквы нет пары, то
//должна записаться 1 буква.
//Дана строка 'abc' - вернет ['ab', 'c']

//*если у последней буквы нет пары, вернет _
//строка 'abc' - вернет ['ab', 'c_']

//=============14===============
//Напишите функцию unique(arr), которая возвращает массив,
//содержащий только уникальные элементы arr.
//const words = ["HTML","CSS", "JS", "React", "JS", "CSS", "JS",
// "Node.js", "JS", "React", "CSS", "React", "HTML", "Node.js"];

//=============15===============
//Создайте функцию multiplyNumeric(obj),
//которая умножает все числовые свойства объекта obj на 2.
// до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

//==============16================

//Проверка на палиндром
//const result = 'reversestring'.split('').reverse().join('') ;

//Лёша на полке клопа нашёл
//А роза упала на лапу Азора

//TODO:=======
// TASK 1
// Что выведет следующий код?
// let fruits = ["Яблоки", "Груша", "Апельсин"];
// добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");
// что в fruits?
// alert( fruits.length );

// TASK 2
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// TASK 3
// Напишите функцию pow(x,n), которая возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.

// TASK 4
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

// const age = prompt('Enter your age')

// function isAdult() {

// }

// TASK 5
// напиши функцию которая будет суммировать соседние числа и пушить их в новый массив

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];



// TASK 5
// Напишите решение, которое вычисляет сумму
// квадратных корней для всех чисел у которых квадратный корень будет целым числом и пушить числа в новый массив.

// const arr = [4, 3, 5, 16, 16, 33, 4, 9]

//  вариант 2

// TASK 6

// Функция formatMessage(message, maxLength)
// принимает строку (параметр message) и форматирует её,
// если длина превышает значение в параметре maxLength.

// function formatMessage(message, maxLength) {
//   return message.length > maxLength
//     ? message.slice(0, maxLength) + "..."
//     : message;
// }

// formatMessage("Curabitur ligula sapien", 16); //возвращает 'Curabitur ligula...'.
// formatMessage("Curabitur ligula sapien", 23); //возвращает 'Curabitur ligula sapien'.
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15); //возвращает 'Nunc sed turpis...'.
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41); //возвращает 'Nunc sed turpis a felis in nunc fringilla'.

// TASK 7
// Напиши функцию которая перебирает массив логинов и проверяет
// есть ли имя введенное в инпут в этом массиве и в случае, если есть - выводит сообщение "Доступ разрешен"

// const res = prompt('vvedi name')
// const str = 'Peter John Igor Sasha'

// str.includes(res) ? console.log('ok') : console.log('ne ok')

// TASK 6

// TASK 8

// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.

// const styles = ['Джаз', 'Блюз'];

// TASK 9
// привести массив к одному уровню не используя flat

// const arr = [
//   [23, 11, ["hello", "world", "Vasya"]],
//   "some str",
//   [777, "word", ["Привет", ["как сюда добраться"]]],
// ];

// let a = 3;

// while (a > 10) {
//   a += 1;
// }

// console.log(a);


