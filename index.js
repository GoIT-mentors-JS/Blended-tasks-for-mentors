class Car {
  static description = "Класс описывающий автомобиль"; //статическое свойство обязательно ";"

  static logInfo(carObj) {
    console.log("🐱‍👤👀 -> Car -> logInfo -> carObj", carObj);
  }
  //Статичний метод не потрібно ";"
  //Статичні властивості/методи використовуються щоб зберігати константи, методи які не йдуть на екземрляр
  //статичного методу та статичної властивості не буде на екземплярах, не існує
  //Статичні методи працюють без контексту

  #test = "test";
  //начебто є на екземплярі, але не можна користуватися
  //якщо приватну властивість, ставимо перед constructor
  constructor({ brand, model, price } = {}) {
    this.brand = brand;
    this._model = model;
    //нижнє підкреслення означає, що ця властивість краще не чіпати
    this.price = price;
  }
  //все, що йде на екземпляр, живе в конструкторі
  //все, що йде на prototype оголошується нижче, під constructor
  get model() {
    return this._model;
  }

  set model(newModel) {
    return (this._model = newModel);
  }
  //гетери та сетери потрапляють на екземпляр
  //гетери та сетери працюють з об'єктами

  changeModel(newModel) {
    this.model = newModel;
  }
  //що йде на prototype це метод класу, setModel
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
