// const numbers = [5, 10, 25, 15];

// const arrayNumbers = numbers.reduce((acc, number) => {
//   console.log("acc", acc);
//   console.log("number", number);
// });

// console.log(arrayNumbers);
const numbers = [5, 10, 25, 15];

const arrayNumbers = numbers.reduce((acc, number) => acc + number, 100);

console.log(arrayNumbers);
const users = [
  { name: 'Mango', isActive: true },
  { name: 'Poly', isActive: false },
  { name: 'Ajax', isActive: true },
  { name: 'Chelsey', isActive: false },
];

// Для каждого элемента коллекции (user) проверим поле isActive.
// Если оно true, то текущий элемент (user) будет записан в результирующий массив.
const activeUsers = users.filter(user => user.isActive);
console.log(activeUsers);
console.log(activeUsers[0] === users[0]);
// Для каждого элемента коллекции (user) проверим поле isActive.
// Если оно false, то текущий элемент (user) будет записан в результирующий массив.
const inactiveUsers = users.filter(user => !user.isActive);
console.log(inactiveUsers);

//========================================
// const numbers = [0, 1, 2, 3, 4, 5, 2, 3, 4, 5].filter(
//   (item, index, array) => array.indexOf(item) === index
// );
//========================================

// console.log("numbers", numbers);
const fruits = [
  { name: 'apples', amount: 100 },
  { name: 'bananas', amount: 0 },
  { name: 'grapes', amount: 50 },
];

// every вернет true только если всех фруктов будет больше чем 0 штук
const allAvailable = fruits.every(
  function (fruit) {
    fruit.amount > 0;
    this;
    console.log('🐱‍👤👀: this', this);
  },
  { a: 20 },
); // false

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];
const allTags = tweets
  .reduce((acc, tweet) => [...acc, ...tweet.tags], [])
  .filter((item, index, array) => array.indexOf(item) === index);

/// Дан словарь из городов и дат выступлений рок-группы

/// Необходимо преобразовать словарь (key-value) в массив из названий городов
/// Вывод городов должен быть в хронологическом порядке
/// Города в которых концерт уже прошел нужно исключить
/// Результат ["Казань", "Питер", "Калининград"]

const concerts = {
  Москва: new Date('2020-04-01'),
  Казань: new Date('2021-07-02'),
  Владивосток: new Date('2020-04-21'),
  Калининград: new Date('2021-07-15'),
  Омск: new Date('2020-04-18'),
  Питер: new Date('2021-07-10'),
};

// function concertsToArray(concerts) { // O(n*log2n)
//     return Object.keys(concerts)
//         .filter(city => concerts[city] > new Date()) // O(n)
//         .sort((a, b) =>  concerts[a] - concerts[b]) // O(N*log2n)
// }

// console.log(concertsToArray(concerts));;
