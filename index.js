//TODO:===========Task1============
//Напиши скрипт, который для объекта user,
//последовательно:
//1 добавит поле mood со значением 'happy'
//2 заменит hobby на 'skydiving'
//3 заменит значение premium на false
//4 выводит содержимое объекта users в фортмате
//ключ:значение используя Object.keys() и for...of
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

//TODO:===========Task2============
//У нас есть объект, в котором храняться зарплаты
//нашей команды
//Напишите код для сумирования всех зарплат и
//сохраните его результат в переменной sum.
//Если объект salaries пуст, то результат должен быть 0

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

//TODO:===========Task3============
//Напишите ф-цию calcTotalPrice(stones, stonesName),
//которая принимает массив объектов и
//строку с названием камня.
//Функция считает м возвращает общую стоимость камней
//с таким именем, ценой и количеством из объекта

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

//=======================
// function calcTotalPrices (stones, stoneName) {
//   for (const stone of stones) {
//     if (stone["name"] === stoneName) {
//       return stone["price"] * stone["quantity"]
//     }
//   }
// }
//=======================

//TODO:===========Task4============
//Создайте объект calculator с тремя методами
//read(a, b) - принимает два аргумента и сохраняет их
//как свойства объекта
//sum() возвращает сумму сохраненных значений
//mult() перемножает сохраненные значения и возвращает результат

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

//TODO:===========Task5============
//Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанного параметра
//Ожидаемый результат ({a: 1. b: 2}, 'b') => {a: 1}

// //=======================
// const updateObject = (obj, removeKey) => {
//   //hasOwnProperty;
//   let newObj = { ...obj };
//   delete newObj[removeKey];
//   return newObj;
// };
//https://coderoad.ru/208105/%D0%9A%D0%B0%D0%BA-%D1%83%D0%B4%D0%B0%D0%BB%D0%B8%D1%82%D1%8C-%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE-%D0%B8%D0%B7-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0-JavaScript
//=======================

//5.1 Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанных параметров
//Ожидаемый результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}
//=======================
// const updateObject = (obj, ...removeKeys) => {
//   //hasOwnProperty;
//   let newObj = { ...obj };
//   for (const item of removeKeys) {
//     delete newObj[item];
//   }

//   return newObj;
// };

//=======================

//TODO:===========Task6============
//Напишите функцию, которая принимает как параметр объект
//и формирует объекты в новом массиве в формате [key, value]

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
//Напиши скрипт управления личным кабинетом интернет банка
//Есть объект account в котором необходимо реализовать
//методы для работы с балансом и историей транзакций

//Типов транзакций всего два.
//Можно положить либо снять деньги со счета
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

//Каждая транзакция это объект со свойствами id, type, amount

const account = {
  //текущий баланс счёта
  balance: 0,

  //История транзакций
  transactions: [],

  //Метод создает и возвращает объект транзакций
  //Принимает сумму и тип транзакций
  createTransaction(type, amount) {
    return {
      type,
      amount,
    };
  },

  //Метод отвечающий за добавление суммы к балансу.
  //Принимает сумму транцакции.
  //Вызывает createTransaction для создания объекта транзакции
  //после чего добавляет его в историю транзакций
  deposit(amount) {},

  //Метод отвечающий за снятие суммы с баланса.
  //Принимает сумму транцакции.
  //Вызывает createTransaction для создания объекта транзакции
  //после чего добавляет его в историю транзакций
  //Если amount больше чем текущий баланс, выводим сообщение о том,
  //что недостаточно средств на счету
  withdraw(amount) {},

  //Метод возвращает текущий баланс
  getBalance() {},

  //Метод ищет и возвращает объект транзакции по id
  getTransactionDetails(id) {},

  //Метод возвращает количество средств определенного типа
  //транзакции из всей истории транзакций
  getTransactionType(type) {},
};

//TODO:===========Task8============
// Добавить метод getinfo в объект user, который будет возвращать инфу о пользователе в формате
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

//TODO:===========Task9============
// Нужно написать функцию которая принимает 2 параметра obj и key, которая будет перебирать объект
// если у объекта есть такой ключ - вернет true
// Есть 2 варианта решения, сначала напишем функцию, потом решим простым способом

// const obj = {
//     name: 'Igor',
//     car:  'Mercedes',
//     carColor: 'black'
// }
// const getBool = (obj, key) => key in obj
// console.log(getBool())

//TODO:===========Task10============
// Нужно перебрать объекты и вывести имя лучшего сотрудника

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

//TODO:===========Task11============
// Напиши функцию которая будет считать факториал числа, обязательно использовать рекурсию

//TODO:===========Task12============
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.



