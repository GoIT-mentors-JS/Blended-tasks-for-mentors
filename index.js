//1. Используя конструкцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const question = prompt("Какое официальное название JavaScript?");

//2. Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10
// const globalMinutes = 90;
// const hours = Math.floor(globalMinutes / 60);
// const modifiedHours = String(hours).padStart(2, 0);
// const minutes = globalMinutes % 60;
// const modifiedMinutes = String(minutes).padStart(2, 0);

// const time = `${modifiedHours}:${modifiedMinutes}`;

//3. Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Додайте все четные числа от min до max
// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i--) {
  // console.log(i);
// }

//4. При помощи цыкла for додайте все четные числа от   min до max

//const max = 50;
//const min = 0;
// let total = 0;
// for (let i = min; i < max; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   total += i;
// }

//4. Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести стороку "Отменено"
//В противном случае вывести строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// const loginInput = prompt("Введите свой логин");

// if (loginInput === "Админ") {
//   const passwordInput = prompt("Введите свой пароль");
//   if (passwordInput) {
//     if (passwordInput === "Я главный") {
//       console.log("Здравствуйте");
//     } else {
//       console.log("Неверный пароль");
//     }
//   } else {
//     console.log("Отменено");
//   }
// } else {
//   console.log("Я вас не знаю!");
// }
//5. При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к значению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.

// let inputValue = prompt('Введите число');
// let check = false;
// let total = 0;

// do {
//   if (inputValue) {
//     check = true;
//     total += Number(inputValue);
//     inputValue = prompt("Введите число");
//   } else {
//     check = false;
//     alert(`Общая сумма чисел равна${total}`);
//   }
// } while (check);

//7. Напишите цикл, который предлагает ввести
//число больше 100 через prompt.
//Если посетитель ввёл другое число - попросить
//ввести ещё раз и так далее.
//Цикл должет спрашивать число, пока посетитель не
//введёт число больше 100, либо не нажмет кнопку
//Отмена в prompt

// let input = prompt("Введите число больше 100");
// let chech = false;
// console.log(input < 100);

// while (input < 100 && input !== null) {
//   input = prompt("Введите число больше 100");
// }
// alert(`${input}`);
// do {
//   if (Number(input) < 100) {
//     check = true;
//     input = prompt("Введите ччисло больше 100");
//   } else {
//     check = false;
//   }
// } while (chech);

// 8. В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).
// var min = 10;
// if (min >= 0 && min <= 14) {
//   alert("В первую четверть.");
// }
// if (min >= 15 && min <= 30) {
//   alert("Во вторую четверть.");
// }
// if (min >= 31 && min <= 45) {
//   alert("В третью четверть.");
// }
// if (min >= 46 && min <= 59) {
//   alert("В четвертую четверть.");
// }

//9. Дана строка, состоящая из символов, например, 'abcde'.
// Проверьте, что первым символом этой строки является буква 'a'.
// Если это так - выведите 'да', в противном случае выведите 'нет'.

//10. Елси число делиться на 3 возвращать
//fizz если делиться на 5 возвращать buzz
//елси делиться на 3 и на 5 возвращить fizzbuzz

//fizzBuzz(24);
// function fizzBuzz(num) {
//      for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//           console.log('fizzbuzz');
//         }
//         else if (i % 3 === 0) {
//           console.log('fizz');
//         }
//         else if (i % 5 === 0) {
//           console.log('buzz');
//         }
//         else {
//           console.log(i);
//         }
//      }

// }

// Task 1

// Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.

// Task 2

// В переменной min лежит число от 0 до 59. Определите в какую четверть часа
// попадает это число (в первую, вторую, третью или четвертую).

// Task 3

// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет
// значение '1', то в переменную result запишем 'зима', если имеет значение
// '2' – 'весна' и так далее. Решите задачу через switch-case.

// Task 4
// воспользуемся циклом while и выведите в консоль числа от 0 до 50

// Task 5
// Напиши скрипт который просит посетителя ввести число в prompt до тех пор,
// пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.
// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод добавляется к значению переменной total. Операция ввода числа продолжается
// до тех пор, пока пользователь не нажмет кнопку Cancel в prompt. После того как
// пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// Сделать проверку на то что пользователь ввел именно число.
// let input;
// let total = 0;

// Task 6
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// Task 7
// При помощи цикла for выведите чётные числа от 2 до 10.

// Task 8
// Повторять цикл, пока ввод неверен
// Напишите цикл, который предлагает prompt ввести число, большее 100.
// Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100,
// либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку
// нечисловых строк в этой задаче необязательно.

// let total = 0;

// while (true) {
//   const answer = prompt('enter number > 100');
//   if (answer === null) {
//     alert(`sum = ${total}`);
//     break;
//   }
//   if (Number.isNaN(+answer)) {
//     alert('you enter non a number');
//   }
//   if (!Number.isNaN(+answer) && +answer > 99) {
//     total += +answer;
//   }
//   if (!Number.isNaN(+answer) && +answer <= 99) {
//     alert('your number is lower then 100')
//   }
// }



// function findLongestWord(string) {

// const stringArray = string.split(" ");
// let longestWord = stringArray[0];
// const maxLength = longestWord.length;

// for (word of stringArray) {
//   const wordLength = word.length;

//   if (wordLength > maxLength) {
//       longestWord = word;}
// }
// return longestWord;
// }


console.log('5' + 5);
