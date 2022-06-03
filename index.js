class Car {
  static description = "Класс описывающий автомобиль"; //статическое свойство обязательно ";"

  static logInfo(carObj) {
    console.log("🐱‍👤👀 -> Car -> logInfo -> carObj", carObj);
  }
  //статический метод не нужно ";"
  //статические свойства/методы используются чтобы хранить константы, методы которые не идут на экземрляр
  //статического метода и статического свойства не будет на экземплярах, не существует
  //Статические методы работают без контекста

  #test = "test"; //вроде как есть на экземпляре, но нельзя пользоваться
  //если приватное совойство, ставим перед constructor
  constructor({ brand, model, price } = {}) {
    this.brand = brand;
    this._model = model;
    //нижнее подчеркивание значит что это свойство лучше не трогать
    this.price = price;
  }
  //все что идет на экземпляр, живет в конструкторе
  //все что идет на prototype объявляется ниже, под constructor
  get model() {
    return this._model;
  }

  set model(newModel) {
    return (this._model = newModel);
  }
  //гетеры и сетеры попадают на екземпляр
  //гетеы и сетеры работают с объектами

  changeModel(newModel) {
    this.model = newModel;
  }
  //то что идет на prototype это метод класса, setModel
}

const carInstance = new Car({
  brand: "Audi",
  model: "Q3",
  price: 3500,
});
console.dir(Car);
console.log(Object.getPrototypeOf(carInstance) === Car.prototype);
console.log(carInstance);
console.log("👻");
Car.logInfo(carInstance);
console.log(carInstance.model);
carInstance.model = "Tesla";
console.log(carInstance.model);

const myObject = {
  _a: 100,

  get a() {
    return this._a;
  },

  set a(x) {
    return (this._a = x);
  },
};

myObject.a = 100500;
console.log(myObject.__proto__);
