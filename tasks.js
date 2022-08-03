//TODO:=============================================
//Напиши функцию конструктор User для создания пользователя со следующими свойствами
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

//TODO:=============================================
//Напиши функцию конструктор Storage который создаёт объкты
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

//TODO:=============================================
//Напиши класс Client котрорый создает объект
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

//TODO:=============================================
//Напиши класс Notes который управляет коллекцией заметок в
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

//TODO:=============================================
//Создать класс Worker у которого есть свойства name, age, salary.
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



//Sasha
/**
 * Напишите метод `calcTotalPrice(stoneName)`, который принимает название камня и
 * рассчитывает и возвращает общую стоимость камней с таким именем, ценой и
 * количеством из свойства `stones`.
 */

const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    const stone = this.stones.find(({ name }) => name === stoneName);
    if (stone) {
      return stone.price * stone.quantity;
    }
    alert('Такого камня нет, извините');
  },
};

console.log(chopShop.calcTotalPrice('Emerald')); // 5200
console.log(chopShop.calcTotalPrice('Diamond')); // 8100
console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
console.log(chopShop.calcTotalPrice('Ruby')); // 1600


//TODO:======================
const phonebook = {
  contacts: [],
  add(data) {
    const newContact = {
      list: 'default',
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
    return '_' + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

phonebook.add({
  name: 'Mango',
  email: 'mango@mail.com',
  list: 'friends',
});
phonebook.list();

phonebook.add({
  name: 'Poly',
  email: 'poly@hotmail.com',
});
phonebook.list();

//TODO:=====================
/**
 * Создайте объект `calculator` с тремя методами:
 * - `read(a, b)`- принимает два значения и сохраняет их как свойства объекта.
 * - `add()` - возвращает сумму сохранённых значений.
 * - `mult()` - перемножает сохранённые значения и возвращает результат.
 */

const calculator = {
  x: 0,
  y: 0,
  read(a, b) {
    this.x = a;
    this.y = b;
  },
  add() {
    return this.x + this.y;
  },
  mult() {
    return this.x * this.y;
  },
};

calculator.read(5, 10);
console.log(calculator.add());
console.log(calculator.mult());

calculator.read(15, 20);
console.log(calculator.add());
console.log(calculator.mult());