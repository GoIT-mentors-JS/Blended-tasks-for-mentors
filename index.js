//TODO:=================01====================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній
//++++++++++++++++++++++++++++++++++++++++++++
// function letMeSeeYourName(callback) {
// const name = prompt ("What is your name?");
// if (! name) return;

// return callback(name);
// }
// const greet = (name) => `Привіт ${name}`;
// console.log(letMeSeeYourName(greet));

//TODO:==============================================
//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль
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

//TODO:==============================================
//Виконай рефакторинг makeDish так, щоб не потрібно було
// Щоразу передавати ім'я шефа.
//Напишіть функцію makeShef(shefName), яка повертає функцію
//makeDish(dish), що пам'ятає ім'я шефа під час її виклику

// const makeDish = function (shefName, dish) {
// console.log(`${shefName} is cooking ${dish}`);
//};

// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");
//++++++++++++++++++++++++++++++++++++++++++
const makeShef = function (name) {
  /*
   * Параметр name це локальна змінна для функції makeShef.
   * Це означає, що вона буде доступна функції makeDish через замикання.
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

//TODO:==============================================
//Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(price);
//   },
// };
// product.showPrice();

//TODO:==============================================
//Виправте помилки, щоб код працював
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

//TODO:==============================================
//Напишіть функцію each(array, callback), яка
//першим параметром приймає масив, а другим - функцію,
//Яка застосовується до кожного елементу масиву.
//Функція each повинна повернути новий масив, елементами
//якого будуть результати виклику callback
//callback функції повинна множити елементи на 2
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

//TODO:==============================================
//Напишіть функцію makeCounter, яка повертає іншу
//функцію, яка вважає та логує кількість своїх викликів
//++++++++++++++++++++++++++++++++++++++++++
function makeCounter() {
  let counter = 0;
  return () => (counter += 1);
}

const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

//TODO:==============================================
//Напишіть функцію savePassword(password), яка приймає
//пароль і повертає внутрішню функцію, що приймає
//рядок і повертає буль true, якщо рядок збігається зі збереженим
//паролем і false - якщо не збігається
//++++++++++++++++++++++++++++++++++++++++++
const savePassword = (password) => {
  return (ourPassword) => password === ourPassword;
};

const standartPassword = savePassword("qwerty");
// console.log(standartPassword("qwerty"));

//TODO:==============================================
//Напишіть функцію для зберігання знижки. Функція повертає
//Іншу функцію, яка приймає суму покупки
//і повертає фінальну суму із збереженою знижкою.
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
