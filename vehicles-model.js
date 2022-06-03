const vehicles = [
  { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
  { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
  { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
  { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
  { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
  { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
  { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
  { make: "Ford", model: "F-150", type: "truck", price: 27110 },
  { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
  { make: "Ford", model: "Explorer", type: "suv", price: 31660 },
];

class CarsManager {
  #cars; //приватные свойства нужно явно указывать перед конструктором
  constructor(cars = []) {
    this.#cars = cars;
  }

  get cars() {
    return this.#cars;
  }

  getModels() {
    const models = [];
    for (const car of this.#cars) {
      models.push(car.model);
    }
    return models;
  }

  changeModel(oldModelName, newModelName) {
    for (const car of this.#cars) {
      if (car.model === oldModelName) {
        car.model = newModelName;
      }
    }
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (const car of this.#cars) {
      totalPrice += car.price;
    }
    return totalPrice;
  }
}

const carsManager = new CarsManager(vehicles);

// console.table(carsManager.getModels());
// carsManager.changeModel("Sequoia", "Tundra");
// console.log(carsManager.getTotalPrice());
console.table(carsManager.cars);
