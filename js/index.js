//TODO:===================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

//TODO:===================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

//TODO:===================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

//TODO:===================================
// скористаємося циклом while та виведіть у консоль числа від 0 до 50

//TODO:===================================
//Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// const question = prompt("Яка офіційна назва JavaScript?");

//TODO:===================================
// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10
// const globalMinutes = 90;
// const hours = Math.floor(globalMinutes / 60);
// const modifiedHours = String(hours).padStart(2, 0);
// const minutes = globalMinutes % 60;
// const modifiedMinutes = String(minutes).padStart(2, 0);

// const time = `${modifiedHours}:${modifiedMinutes}`;

//TODO:===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max
// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i--) {
// console.log(i);
// }

//TODO:===================================
//За допомогою циклу for додайте всі парні числа від min до max

//const max = 50;
//const min = 0;
// let total = 0;
// for (let i = min; i < max; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   total += i;
// }

//TODO:===================================
//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"

// const loginInput = prompt("Введіть свій логін");

// if (loginInput === "Адмін") {
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

//TODO:===================================
//При завантаженні сторінки користувачеві пропонується
//в prompt ввести число. Введення додається до значення
//змінної total.
//Операція введення числа триває до того часу,
//поки користувач не натисне кнопку Cancel в prompt.
//Після того, як користувач припинив введення натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
//Робити перевірку,що користувач ввів саме число,
//а не довільний набір символів, не потрібно.

// let inputValue = prompt('Введіть число');
// let check = false;
// let total = 0;

// do {
//   if (inputValue) {
//     check = true;
//     total += Number(inputValue);
//     inputValue = prompt("Введіть число");
//   } else {
//     check = false;
//     alert(`Загальна сума чисел дорівнює ${total}`);
//   }
// } while (check);

//TODO:===================================
//Напишіть цикл, який пропонує ввести
//число більше 100 через prompt.
//Якщо відвідувач ввів інше число - попросити
//ввести ще раз і так далі.
//Цикл має питати число, поки відвідувач не
//введе число більше 100, або натисне кнопку
//скасування в prompt

// let input = prompt("Введіть число більше 100");
// let chech = false;
// console.log(input < 100);

// while (input < 100 && input !== null) {
//   input = prompt("Введіть число більше 100");
// }
// alert(`${input}`);
// do {
//   if (Number(input) < 100) {
//     check = true;
//     input = prompt("Введіть число більше 100");
//   } else {
//     check = false;
//   }
// } while (chech);

//TODO:===================================
// У змінній min лежить число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число(у першу, другу, третю чи четверту).
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

//TODO:===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

//TODO:===================================
//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

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

//TODO:===================================
// Напишіть if..else, що відповідає наступному switch:

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

//TODO:===================================
// За допомогою циклу for виведіть парні числа від 2 до 10.

//TODO:===================================
// Повторювати цикл, поки введення неправильне
// Напишіть цикл, який пропонує prompt ввести число більше 100.
// Якщо відвідувач ввів інше число - попросити ввести ще раз, і таке інше.
// Цикл повинен запитувати число поки що або відвідувач не введе число, більше 100,
// або натисне кнопку Скасувати (ESC).
// Передбачається, що відвідувач вводить лише числа. Передбачати обробку
// нечислових рядків у цій задачі необов'язково.

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

//3>2>1
// const max = 50;
// const min = 23;
// let total = 0;
// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//      total += i;
//   }

// }
// console.log(total);
