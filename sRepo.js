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


//1. Напиши функцию конструктор User для создания пользователя со следующими свойствами
//a. userName - имя, строка
//b. age - возраст, число
//c. numbersOfPost - количество постов, число
//d. класс ожидает 1 параметр - объект настроек с одноименными свойствами

//Добавь метод getInfo(), который возвращает строку:
//`Пользователю ${} ${} лет и у него ${} публикаций.`

const User = function (userObj) {
  const { userName, age, numbersOfPost } = userObj;
  console.log("🐱‍👤👀: User -> typeof this", typeof this);
  this.username = userName;
  this.age = age;
  this.numbersOfPost = numbersOfPost;

  // this.getInfo = function () {
  // console.log(
  //   `Пользователю ${this.username} ${this.age} лет и у него ${this.numbersOfPost} публикаций.`
  // );
  // };
};
User.prototype.getInfo = function () {
  console.log(
    `Пользователю ${this.username} ${this.age} лет и у него ${this.numbersOfPost} публикаций.`
  );
};
const polly = new User({ userName: "Polly", age: 30, numbersOfPost: 15 });
// console.log(polly);
// polly.getInfo();

//2. Напиши функцию конструктор Storage который создаёт объкты
//для управления складом товаров.
//При вызове будет получать один агрумент - начальный массив товаров,
//и записывать его в свойство items.
//Добавь методы класса:
//getItems() - возвращайте массив товаров
//addItems(item) - получает новый товар и добавляет его к текущим
//removeItem(item) - плучает товар и, если он есть, удаляет его из текущих

const Storage = function (itemsArray) {
  this.items = itemsArray;
};

Storage.prototype.getItem = function () {
  return this.items;
};

Storage.prototype.addItems = function (item) {
  return this.items.push(item);
};

Storage.prototype.removeItem = function (item) {
  const index = this.items.indexOf(item);
  if (index !== -1) this.items.splice(index, 1);
  return this.items;
};

const storage = new Storage(["apple", "banana", "mango"]);
// console.log(storage);
// console.log(storage.removeItem("apple"));

//3. Напиши класс Client котрорый создает объект
//со свойствами login email
//Объяви приватные свойства #login #email,
//доступ к которым сделай через геттер и сеттер login email

class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  get getClientData() {
    return {
      login: this.#login,
      email: this.#email,
    };
  }

  set changeEmail(newEmail) {
    this.#email = newEmail;
  }
}
const client = new Client("mango", "mango@gmail.com");
client.changeEmail = '"mango@gmail.com"';
// console.log(client.getClientData.email);

//4. Напиши класс Notes который управляет коллекцией заметок в
//свойстве items.
//Заметка это объект со свойствами text priority
//Добавь классу статическое свойство Priopity,
//в котором будет храниться объект с приоритетами.
//Добавь методы addNote(note), removeNote(text)
//updatePriority(text, newPriority)

class Notes {
  static Priority() {
    return {
      HIGHT: "hight",
      LOW: "low",
    };
  }

  constructor() {
    this.items = [];
  }

  addNote(note) {
    return this.items.push(note);
  }

  removeNote(noteName) {
    const index = this.items.findIndex((item) => item.text === noteName);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
    // return this.items;
  }
  updatePriority({ text, newPriority }) {
    const index = this.items.findIndex((item) => item.text === text);
    if (index !== -1) {
      this.items[index].priority = newPriority;
    }
  }
}

const note1 = new Notes();

// note1.addNote({ text: "Note1", priority: Notes.Priority().LOW });
// note1.addNote({ text: "Note2", priority: Notes.Priority().LOW });
// note1.updatePriority({ text: "Note2", newPriority: Notes.Priority().HIGHT });
// console.table(note1.items);

//5. Создать класс Worker у которого есть свойства name, age, salary.
//У класса Worker есть метод getSalary.
//Создать класс TopLevelWorker у которого есть свойство hierarchyLevel
//и который наследует класс Worker, добавляя метод getHierarchyLevel
//Реализовать задачу с помощью ES5 прототипов и ES6 классов

const HIERARCHY_LEVEL = {
  TOP: "top",
  BOTTOM: "bottom",
};

const workerObj = {
  name: "Mango",
  surname: "Worker",
  age: 30,
  position: "FE developer",
  salary: 5000,
};

//ES5

const Worker = function (obj = {}) {
  const { name = "name", surname, age = 1, position, salary } = obj;
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.position = position;
  this.salary = salary;
};

Worker.prototype.getSalary = function () {
  return this.salary;
};

const TopLevelWorker = function (obj, hierarchyLevel) {
  Worker.call(this, obj); //унаследуем Worker
  this.hierarchyLevel = hierarchyLevel;
};

// TopLevelWorker.prototype = Object.create(Worker.prototype);
//TopLevelWorker.prototype.constructor = TopLevelWorker;
const top = new TopLevelWorker(workerObj, HIERARCHY_LEVEL.BOTTOM);
// console.log(top.__proto__ === TopLevelWorker.prototype);
// console.log(TopLevelWorker.prototype.__proto__ === Worker.prototype);
// console.log(TopLevelWorker.prototype.__proto__ === Object.prototype);
// console.log(TopLevelWorker.__proto__ === Function.prototype);
// console.log(Worker.__proto__ === Function.prototype);
// console.log(Worker.prototype.__proto__ === Object.prototype);
//console.log(top.__proto__.__proto__.__proto__ === Object.prototype);
// top.getSalary();
//ES6

class WorkerES6 {
  constructor(obj = {}) {
    const { name = "name", surname, age = 1, position, salary } = obj;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.position = position;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

class TopLevelWorkerES6 extends WorkerES6 {
  constructor(obj, hierarchyLevel) {
    super(obj);
    this.hierarchyLevel = hierarchyLevel;
  }
}

const topES6 = new TopLevelWorkerES6(workerObj, HIERARCHY_LEVEL.TOP);
// console.log(TopLevelWorkerES6.prototype.__proto__ === ???);
// console.log(TopLevelWorkerES6.__proto__ === ???);
// console.log(topES6.__proto__ === ???);
// console.log(topES6.getSalary());
