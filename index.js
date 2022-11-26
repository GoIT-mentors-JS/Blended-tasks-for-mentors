//TODO:=======================
//Напиши скрипт, який для об'єкта user,
//Послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить вміст об'єкта user у форматі
//ключ:значення використовуючи Object.keys() і for...of
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

//=======================
//for(const key of Object.keys(obj)){
//  console.log(`${key}:${obj[key]}`)
//}
//=======================

//TODO:=======================
// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом

// const obj = {
//     name: 'Igor',
//     car:  'Mercedes',
//     carColor: 'black'
// }
// const getBool = (obj, key) => key in obj
// console.log(getBool())

//TODO:=======================
// Додати метод getinfo в об'єкт user, який повертатиме інфу про користувача у форматі
// Name: Peter. Surname: Parker. Age: 22. Position: spider-man.

// const user = {
//     name: 'Peter',
//     surname: 'Parker',
//     age: 22,
//     position: 'spider-man'
// }

// const user2 = {
//   name: "Batman",
//   surname: "Hz",
//   age: 36,
//   position: "batman",
// };

// user.getinfo = function () {
//   return `Name: ${this.name}. Surname: ${this.surname}. Age: ${this.age}. Position: ${this.position}.`;
// };

//TODO:=======================
//У нас є об'єкт, у якому зберігатимуться зарплати
//нашої команди
//Напишіть код для сумування всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

//=======================
//for(const value of Object.values(obj)){
//  total += value
//}
//=======================

//TODO:=======================
//Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//Рядок з назвою каменю.
//Функція вважає, що м повертає загальну вартість каменів
//з ​​таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
// { name: "Смарагд", price: 1300, quantity: 4 },
// { name: "Діамант", price: 2700, quantity: 6 },
// { name: "Сапфір", price: 400, quantity: 7},
// { name: "Щебінь", price: 150, quantity: 100 },
//];
//=======================
// function calcTotalPrices (stones, stoneName) {
//   for (const stone of stones) {
//     if (stone["name"] === stoneName) {
//       return stone["price"] * stone["quantity"]
//     }
//   }
// }
//=======================

//TODO:=======================
//Створіть об'єкт calculator із трьома методами
//read(a, b) - приймає два аргументи та зберігає їх
//як властивості об'єкта
//sum() - повертає суму збережених значень
//mult() - перемножує збережені значення та повертає результат

// const calculator = {
//   read(a, b) {},
//   sum() {},
//   mult() {},
// };

//=======================
// const calculator = {
//   read(a, b) {
//     this.val1 = a;
//     this.val2 = b;
//   },
//   sum() {
//     return !this.val1 || !this.val2 ? false : this.val1 + this.val2;
//   },
//   mult() {},
// };
//=======================

//TODO:=======================
//Напишіть функцію updateObject, яка приймає об'єкт та повертає
//новий об'єкт без зазначеного параметра
//Очікуваний результат ({a: 1. b: 2}, 'b') => {a: 1}

// const updateObject = (obj, ...removeKeys) => {
//   let newObj = { ...obj };
//   for (const item of removeKeys) {
//     delete newObj[item];
//   }
//   return newObj;
// };
//https://coderoad.ru/208105/%D0%9A%D0%B0%D0%BA-%D1%83%D0%B4%D0%B0%D0%BB%D0%B8%D1%82%D1%8C-%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE-%D0%B8%D0%B7-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0-JavaScript

//TODO:=======================
//Напишіть функцію, яка приймає як параметр об'єкт
//і формує об'єкти у новому масиві у форматі [key, value]

// const user6 = {
//   name: "John",
//   surName: "Stones",
//   age: 20,
//   hobby: "tenis",
//   haveCar: true,
//   merried: false,
// };

//=======================
// function changeObject(obj) {
//   const newObj = Object.entries(obj);
//   console.log(newObj);
//   https://question-it.com/questions/245501/kak-razbit-obekt-js-na-massiv-par-kljuch-znachenie
// }
// changeObject(user6);
//=======================

//TODO:===========Task7============
//Напиши скрипт управління особистим кабінетом інтернет банку
//Є об'єкт account у якому необхідно реалізувати
//методи для роботи з балансом та історією транзакцій

// Типів транзакцій лише два.
// Можна покласти чи зняти гроші з рахунку
// const Transaction = {
// DEPOSIT: "deposit",
// WITHDRAW: "withdraw",
//};

//Кожна транзакція це об'єкт з властивостями id, type, amount

const account = {
  //поточний баланс рахунку
  balance: 0,

  //Історія транзакцій
  transactions: [],

  //Метод створює та повертає об'єкт транзакцій
  //Приймає суму та тип транзакцій
  createTransaction(type, amount) {
    return {
      type,
      amount,
    };
  },

  //Метод відповідає за додавання суми до балансу.
  //Приймає суму транцякції.
  //Викликає createTransaction для створення об'єкта транзакції
  //після чого додає їх у історію транзакцій
  deposit(amount) {},

  //Метод відповідає за зняття суми з балансу.
  //Приймає суму транцякції.
  //Викликає createTransaction для створення об'єкта транзакції
  //після чого додає їх у історію транзакцій
  //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
  //що недостатньо коштів на рахунку
  withdraw(amount) {},

  //Метод повертає поточний баланс
  getBalance() {},

  //Метод шукає та повертає об'єкт транзакції по id
  getTransactionDetails(id) {},

  //Метод повертає кількість засобів певного типу
  //транзакції з усієї історії транзакцій
  getTransactionType(type) {},
};

//TODO:=======================
// Потрібно перебрати об'єкти та вивести ім'я кращого співробітника

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence
// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango
// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux

//TODO:=======================
// Напиши функцію яка вважатиме факторіал числа, обов'язково використовувати рекурсію
