//TODO:=================01====================
//1. Напишите две функции
// letMeSeeYourName(callback) - спрашивает имя пользователя
//через prompt и вызывает callback функцию
//greet(name) - коллбек принимающий имя и логирующий в консоль
//строку "Привет <name>"
//Реализуй проверку, что prompt не пустой
//++++++++++++++++++++++++++++++++++++++++++
function letMeSeeYourName(callback) {
  const name = prompt("What is your name?");
  if (!name) return;

  return callback(name);
}
const greet = (name) => `Привет ${name}`;
// console.log(letMeSeeYourName(greet));
//====================================================
//2. Напишите две функции
//makeProduct(name, price, callback) - принимает
//имя и цену товара, а так же callback.
//Функция создает объект товара, добавляя ему уникальный
//идентификатор в свойство id и вызывает callback
//передавая ему созданный объект.
//showProduct(product) - коллбек принимающий объект
//продукта и логирующий его в консоль
//++++++++++++++++++++++++++++++++++++++++++
function makeProduct(name, price, callback) {
  const product = {
    name,
    price,
    id: Math.random(),
  };
  //product.id = Math.random()
  //product.id = new Date()
  return callback(product);
}
const showProduct = (product) => product;

// console.table(makeProduct("Fish", 350, showProduct));

//====================================================
//3. Выполни рефакторинг makeDish так, чтобы не нужно было
//каждый раз передавать имя шефа.
//Напишите функцию makeShef(shefName) которая возвращает функцию
//makeDish(dish), помнящую имя шефа при её вызове

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");
//++++++++++++++++++++++++++++++++++++++++++
const makeShef = function (name) {
  /*
   * Параметр name это локальная переменная для функции makeShef.
   * Это значит что она будет доступна функции makeDish через замыкание.
   */
  return function makeDish(dish) {
    console.log(`${name} is cooking ${dish}`);
  };
};

const mango = makeShef("Mango");
// mango("apple pie"); // Mango is cooking apple pie
// mango("beef stew"); // Mango is cooking beef stew

const poly = makeShef("Poly");
// poly("pancakes"); // Poly is cooking pancakes
// poly("eggs and bacon"); // Poly is cooking eggs and bacon

//====================================================
//4. Исправьте ошибки, чтобы код работал
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(price);
//   },
// };
// product.showPrice();

//====================================================
//5. Исправьте ошибки, чтобы код работал
const product = {
  price: 5000,
  showPrice() {
    console.log(this.price);
  },
};

function callAction(action) {
  action();
}
//++++++++++++++++++++++++++++++++++++++++++
// callAction(product.showPrice);
// callAction(product.showPrice.bind(product));

//====================================================
//6. Напишите функцию each(array, callback), которая
//первым параметром принимает массив, а вторым - функцию,
//которая применится к каждому элементу массива.
//Функция each должна вернуть новый массив, элементами
//которого будут результаты вызова callback
//callback функци должна умножать элементы на 2
//++++++++++++++++++++++++++++++++++++++++++
function each(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

const array = [3, 5, 6, 34, 8, 83, 12, 34];
// console.log(each(array, (value) => value * 2));

//====================================================
//7. Напишите функцию makeCounter, которая возвращает другую
//функцию, которая считает и логирует количество своих вызовов
//++++++++++++++++++++++++++++++++++++++++++
function makeCounter() {
  let counter = 0;
  return () => (counter += 1);
}

const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

//====================================================
//8. Напишите функцию savePassword(password) которая принимает
//пароль и возвращает внутреннюю функцию, которая принимает
//строку и возвращает буль true, если строка совпадает с сохраненным
//паролем и false - если не совпадает
//++++++++++++++++++++++++++++++++++++++++++
const savePassword = (password) => {
  return (ourPassword) => password === ourPassword;
};

const standartPassword = savePassword("qwerty");
// console.log(standartPassword("qwerty"));

//====================================================
//9. Напишите функцию для хранения скидки.Функция возвращает
//другую функцию, которая принимает сумму покупки
//и возвращает финальную сумму с сохраненной скидкой.

//++++++++++++++++++++++++++++++++++++++++++
// function saveDiscount(discount) {
//   return function makeDiscount(sum) {
//     return sum - sum * (discount / 100);
//   };
// }

const saveDiscount = (discount) => (sum) => sum - sum * (discount / 100);
const discountPremium = saveDiscount(50);
// console.log(discountPremium(1000));

function one(callback) {}
function two(callback) {}
function three(callback) {}
function four(callback) {}
function five(callback) {}
function six(callback) {}
function seven(callback) {}
function eight(callback) {}
function nine(callback) {}

function plus(a) {}
function minus(a) {}
function divide(a) {}
function mult(a) {}

console.log(one(plus(three()))); // 4
console.log(four(mult(three()))); // 12
console.log(four(divide(two())));

// function one(callback) {
//   return callback ? callback(1) : 1;
// }
// function two(callback) {
//   return callback ? callback(2) : 2;
// }
// function three(callback) {
//   return callback ? callback(3) : 3;
// }
// function four(callback) {
//   return callback ? callback(4) : 4;
// }
// function five(callback) {
//   return callback ? callback(5) : 5;
// }
// function six(callback) {
//   return callback ? callback(6) : 6;
// }
// function seven(callback) {
//   return callback ? callback(7) : 7;
// }
// function eight(callback) {
//   return callback ? callback(8) : 8;
// }
// function nine(callback) {
//   return callback ? callback(9) : 9;
// }

// function plus(a) {
//   return (b) => a + b;
// }
// function minus(a) {
//   return (b) => a - b;
// }
// function divide(a) {
//   return (b) => b / a;
// }
// function mult(a) {
//   return (b) => a * b;
// }

// console.log(one(plus(three()))); // 4
// console.log(four(mult(three()))); // 12
// console.log(four(divide(two())));