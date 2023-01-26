//TODO:=============================================
//Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

const User = function (userObj) {
  const { userName, age, numbersOfPost } = userObj;
  console.log("🐱‍👤👀: User -> typeof this", typeof this);
  this.username = userName;
  this.age = age;
  this.numbersOfPost = numbersOfPost;

  // this.getInfo = function () {
  // console.log(
  // `Користувачеві ${this.username} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`
  //);
  //};
};
User.prototype.getInfo = function () {
  console.log(
    `Пользователю ${this.username} ${this.age} лет и у него ${this.numbersOfPost} публикаций.`
  );
};
const polly = new User({ userName: "Polly", age: 30, numbersOfPost: 15 });
// console.log(polly);
// polly.getInfo();

//TODO:=============================================
//Напиши функцію конструктор Storage який створює об'єкти
//Для управління складом товарів.
//При виклику отримуватиме один агрумент - початковий масив товарів,
//і записувати їх у властивість items.
//Додай методи класу:
//getItems() - повертайте масив товарів
//addItems(item) - отримує новий товар та додає його до поточних
//removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних

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

//TODO:=============================================
//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email
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

//TODO:=============================================
//Напиши клас Notes який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text і priority.
//Додай класу статичний метод Priopity,
//який буде повертати об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text)
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

//TODO:=============================================
// Створити клас Worker, у якого є властивості name, age, salary.
//У класу Worker є метод getSalary.
//Створити клас TopLevelWorker, у якого є властивість hierarchyLevel
//і який успадковує клас Worker, додаючи метод getHierarchyLevel
//Реалізувати завдання за допомогою ES5 прототипів та ES6 класів

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

//TODO:======================
const phonebook = {
  contacts: [],
  add(data) {
    const newContact = {
      list: "default",
      ...data,
      id: this.generateId(),
      createdAt: this.getDate(),
    };
    this.contacts.push(newContact);
  },
  list() {
    console.table(this.contacts);
  },
  generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

phonebook.add({
  name: "Mango",
  email: "mango@mail.com",
  list: "friends",
});
phonebook.list();

phonebook.add({
  name: "Poly",
  email: "poly@hotmail.com",
});
phonebook.list();

//TODO:======================
// Створи клас для калькулятора, який має такі методи:
// метод number, який набуває початкового значення для наступних операцій
// Геттер, який повертає фінальний результат усіх операцій, проведених із числом
// методи add, substruct, divide, multiply
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
// +++++++++++++++++++++++++++++++++++++++++++++++++++

class Calculator {}

// const calculator = new Calculator();
// const res = calculator
// .number(10)
// .add(10)
// .divide(2)
// .multiply(4)
// .substruct(5)
// .result;

// console.log(res); // 35

// const res2 = calculator
// .number(20)
// .substruct(40)
// .multiply(-8)
// .divide(160)
// .add(20)
// .result;

// console.log(res2) // 21
