const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

//TODO:==============================================
// Отримати масив імен всіх користувачів (поле name).
// console.log(getUserNames(usersData))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//TODO:==============================================
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

//TODO:==============================================
// Отримати масив імен користувачів за статтю (поле gender)
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// const getUsersWithGender = (users, gen) => {
//     return users.reduce((acc, el) => {
//         if(el.gender === gen) {
//             acc.push(el.name)
//         }
//         return acc
//     }, [])
// }
// console.log(getUsersWithGender(users, 'male'))

//TODO:==============================================
// Отримати масив тільки неактивних користувачів (поле є активним).
// console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]

//TODO:==============================================
// Отримати користувача (не масив) по email (поле email, він унікальний).
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}

//TODO:==============================================
// Отримати масив користувачів віком від min до max

// console.log (getUsersWithAge (users, 20, 30));
// [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
// console.log (getUsersWithAge (users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]

//TODO:==============================================
// Отримати загальну суму балансу (поле balance) всіх користувачів.
// console.log(calculateTotalBalance(users)); // 20916

//TODO:==============================================
// Масив імен всіх користувачів які мають один із зазначеним ім'ям.
// console.log(getUsersWithFriend(users, 'Briana Decker'))); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
//TODO:==============================================
// Масив імен (поле name) людей, відсортованих залежно кількості їх друзів (поле friends)
// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//TODO:==============================================
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не повинно бути
// Уміння, що повторюються, і вони повинні бути відсортовані в алфавітному порядку.
// console.log(getSortedUniqueSkills(users));
// ['adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit' , 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam'

//TODO:==============================================
// На вході масив чисел, наприклад: arr = [1,2,3,4,5].
// Напишіть функцію getSums(arr), яка повертає масив його часткових сум.
// Інакше кажучи, виклик getSums(arr) повинен повертати новий масив з тієї ж кількості елементів,
// у якому кожної позиції має бути сума елементів arr до цієї позиції включно.

// Тобто:
// для arr = [1, 2, 3, 4, 5]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// Функція має модифікувати вхідний масив.
// У рішенні використовуйте метод arr.reduce.

// const getSums = arr => {
//   const array = [];
//   for (let i = 0; i < arr.lenght; i += 1) {
//     array.push(array.length ? [...array, array[i] + arr[i]] : arr[i]);
//   }
//   return array;
// };

// console.log(getSums([1, 2, 3, 4, 5]));

// const getSums = arr =>
//   arr.reduce((acc, num, i) => (i > 0 ? [...acc, acc[i - 1] + num] : [num]), []);
// console.log(getSums([1, 2, 3, 4, 5]));

//TODO:==============================================
// Reverse. Напишіть функцію, яка розгортає масив у зворотному порядку.
// Будь ласка, не використовуйте array.reverse(), щоб зробити завдання цікавішим.

// const data = [1, 2, 3, 4, 5, 6];

//TODO:==============================================
//Compact. Напишіть функцію, яка очищає масив від небажаних значень,
// Таких як false, undefined, порожні рядки, нуль, null.

// const data = [0, 1, false, 2, undefined, '', 3, null];
// const compact = arr => arr.filter(el => el);
// console.log(compact(data)); // [1, 2, 3]

//TODO:==============================================
// Without. Напишіть функцію, яка повертає новий масив без наданих значень. Використовуйте примітивні типи.

// const data = [1, 2, 3, 4, 1, 2];
// console.log(without(data, 1, 2)); // [3, 4]

// const without = (array, ...args) => {
//   const arg = [...args];
//   const array1 = [];
//   for (let elem of array) {
//     if (!arg.includes(elem)) {
//       array1.push(elem);
//     }
//   }
//   return array1;
// };

//TODO:==============================================
//Необхідно написати функцію (isEqualSymbols), що приймає в аргументах два рядки і повертає true, якщо ці рядки складаються з ідентичних літер і false в іншому випадку.
//isEqualSymbols('кіт', 'струм'); // виведе true
//isEqualSymbols('кіт', 'тік'); // виведе false
const isEqualSymbols = (str1, str2) => {
  const strToArray1 = str1.split("");
  const strToArray2 = str2.split("");
  for (let i = 0; i < strToArray1.length; i += 1) {
    if (!strToArray1.includes(strToArray2[i])) return false;
  }
  return true;
};

isEqualSymbols("GOOD", "GODO");
console.log(isEqualSymbols("GOOD", "GODO"));

//TODO:==============================================
//Сортування примітивів.
//Виконайте сортування масиву цін за спаданням та зростанням
const prices = [1000, 240, 670, 360, 89, 20];
const ascendingPrice = [...prices].sort((a, b) => a - b);
const descendingPrice = [...prices].sort((a, b) => b - a);

//TODO:==============================================
//Сортування рядків.
//Виконайте сортування масиву назв моніторів у Алфавітному та зворотному порядку.

const monitors = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ", "ASER"];
//alphabetical
//reverseAlphabetical
const a = monitors.sort((a, b) => {
  if (a < b) {
    //якщо a < b, a має стояти перед b
    // console.log('a<b', a<b);
    // console.log('a', a);
    // console.log('b', b);
    //Повертаємо -1 місцями значення не міняємо
    return -1;
    //Місцями значення не змінює
  }
  if (a > b) {
    return 1;
    //змінює місцями значення
  }
  return 0;
  // означає, що рівні, залишаються на своїх місцях
});
// console.log(a);
const c = monitors.sort((a, b) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  return 0;
  // означає, що рівні, залишаються на своїх місцях
});
// console.log(c);
const b = monitors.sort((a, b) => a.localeCompare(b));
//firstString.localeCompare(secondString)
//Повертає негативне значення якщо firstString має бути перед secondString.
//Місцями значення не змінює
// console.log(b);

//TODO:==============================================
//Сортування складних типів
//Виконайте сортування масиву об'єктів:
//1. За зростанням та зменшенням значення властивості price
//2. На ім'я в алфавітному та зворотному порядку
const items = [
  { name: "SAMSUNG", price: 15000 },
  { name: "LG", price: 9000 },
  { name: "DELL", price: 27000 },
  { name: "BENQ", price: 12000 },
  { name: "ASER", price: 7000 },
];

//TODO:==============================================
//Зібрати в allTopics масив всіх предметів всіх курсів
//Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи

const courses = [
  {
    name: "Basic HTML+CSS",
    topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
  },
  {
    name: "Intermediate HTML+CSS",
    topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
  },
  {
    name: "Basic JavaScript",
    topics: [
      "VSCode",
      "Type system",
      "Loops",
      "Function",
      "Git",
      "Conditions",
      "Classes",
      "GitHub",
      "DOM",
    ],
  },
  {
    name: "Intermediate JavaScript",
    topics: [
      "VSCode",
      "NPM",
      "Bundlers",
      "Transpiling",
      "Git",
      "Promises",
      "AJAX",
      "GitHub",
    ],
  },
];

const allTopics = courses
  .flatMap((course) => course.topics)
  .filter((item, index, array) => array.indexOf(item) === index);
// console.log(allTopics);

//TODO:==============================================
//Призначити знижку 20% на фрукти в масиві,
//Присвоїти ID для кожного продукту

const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

const discountFruits = fruits.map((fruit) => {
  return {
    ...fruit,
    price: fruit.price * 0.8,
    id: Date.now(),
  };
});
// console.log(discountFruits);

//TODO:==============================================
//Повернути об'єкт у якому вказується кількість тегів
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
const stats = tweets
  .flatMap((tweet) => tweet.tags)
  .reduce(
    (acc, tag) => ({
      ...acc,
      [tag]: acc[tag] ? acc[tag] + 1 : 1,
    }),
    {}
  );

console.log(stats);

// const allTags = tweets
//   .reduce((acc, tweet) => [...acc, ...tweet.tags], [])
//   .filter((item, index, array) => array.indexOf(item) === index);

//TODO:==============================================
//Дізнатись загальні роки практики в об'єкті workers

const workers = [
  { id: 10, name: "Mango", years: 14 },
  { id: 2, name: "Poly", years: 19 },
  { id: 41, name: "Ajax", years: 30 },
  { id: 99, name: "Kiwi", years: 22 },
];

const sumYears = workers.reduce((acc, { years }, index, array) => {
  return acc + years;
}, 0);
// console.log(sumYears);

//TODO:==============================================
// Даний масив із числами. Залишіть у ньому лише позитивні числа.
// Потім витягніть квадратний корінь і цих чисел.
const array = [121, -2, 225, 0, 4, -5, 36, -11];
const sqrtArray = array
  .filter((elem) => elem > 0)
  .map((number) => Math.sqrt(number));
console.log(sqrtArray);

//TODO:==============================================
//Створення масиву значень Фаренгейта із масиву значень Цельсія
let celsius = [-15, -5, 0, 10, 16, 20, 24, 32];
let fahrenheit = celsius.map((t) => t * 1.8 + 32);
// fahrenheit is [5, 23, 32, 50, 60.8, 68, 75.2, 89.6]

//TODO:==============================================
//Знайти перший унікальний символ у рядку
//У рядку будуть лише літери латинського алфавіту і вони будуть у lowerCase
//https://learn.javascript.ru/map-set
let input1 = "leetcode"; //0
let input2 = "loveleetcode"; //2
let input3 = "aabb"; //-1

// const firstUniqChar = function (s) {
//   const array = s.split('');
//   const newArray = array.reduce(
//     (acc, tag) => ({
//       ...acc,
//       [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     }),
//     {},
//   );

//   for (const item in newArray) {
//     if (newArray[item] === 1) {
//       return array.indexOf(item);
//     }
//   }
//   return -1;
// };

const firstUniqChar = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    map.set(current, map.has(current) ? map.get(current) + 1 : 1);
    // console.log('nap', map);
    // if (map.has(current)) {
    //   map.set(current, map.get(current) + 1);
    // } else {
    //   map.set(current, 1);
    // }
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar(input1));
console.log(firstUniqChar(input2));
console.log(firstUniqChar(input3));

//TODO:==============================================
//Знайти унікальні елементи за допомогою reduce
const numbers = [1, 9, 0, 1, 5, 9, 1, 6];

const findUniqNumber = (array) =>
  array.reduce(
    (acc, number) => (acc.includes(number) ? acc : [...acc, number]),
    []
  );
console.log(findUniqNumber(numbers));

//TODO:==============================================
//Знайти унікальні елементи за допомогою reduce
//Потрібно перевірити "same" масиви
// числа з першого в квадраті дорівнюють числам другого
// const a = [121, 144, 19, 161, 19, 144, 19, 11];
// const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
// function comp(array1, array2) {
//   if (!array1 || !array2) return false;
//   const sortArray1 = [...array1].sort((a, b) => a - b);
//   const sortArray2 = [...array2].sort((a, b) => a - b);
//   const sortArray1SQR = sortArray1.map((el) => Math.pow(el, 2));
//   for (let i = 0; i < sortArray1SQR.length; i++) {
//     if (sortArray2[i] !== sortArray1SQR[i]) {
//       return false;
//     }
//   }
//   return true;
// return array1.map((v) => v * v).every((v, i) => v == array2[i]);
// }
// console.log(comp(a, b));

//TODO:==============================================
// const numbers = [5, 10, 25, 15];

// const arrayNumbers = numbers.reduce((acc, number) => {
//   console.log("acc", acc);
//   console.log("number", number);
// });

// console.log(arrayNumbers);

// const numbers = [5, 10, 25, 15];

// const arrayNumbers = numbers.reduce((acc, number) => acc + number, 100);

// console.log(arrayNumbers);

//TODO:==============================================
// const users = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: false },
//   { name: "Ajax", isActive: true },
//   { name: "Chelsey", isActive: false },
// ];

// Для кожного елемента колекції (user) перевіримо поле isActive.
// Якщо воно true, то поточний елемент (user) буде записаний результуючий масив.
const activeUsers = users.filter((user) => user.isActive);
console.log(activeUsers);
console.log(activeUsers[0] === users[0]);

// Для каждого элемента коллекции (user) проверим поле isActive.
// Если оно false, то текущий элемент (user) будет записан в результирующий массив.
const inactiveUsers = users.filter((user) => !user.isActive);
console.log(inactiveUsers);

//========================================
// const numbers = [0, 1, 2, 3, 4, 5, 2, 3, 4, 5].filter(
//   (item, index, array) => array.indexOf(item) === index
// );
//========================================

//TODO:==============================================
// const fruits = [
//   { name: "apples", amount: 100 },
//   { name: "bananas", amount: 0 },
//   { name: "grapes", amount: 50 },
// ];

// every поверне true тільки якщо всіх фруктів буде більше 0 штук
const allAvailable = fruits.every(
  function (fruit) {
    fruit.amount > 0;
    this;
    console.log("🐱‍👤👀: this", this);
  },
  { a: 20 }
); // false

//TODO:==============================================
/// Даний словник із міст та дат виступів рок-групи

/// Необхідно перетворити словник (key-value) на масив із назв міст
/// Виведення міст має бути у хронологічному порядку
/// Міста у яких концерт вже пройшов потрібно виключити
/// Результат ["Умань", "Харків", "Одеса"]

const concerts = {
  Київ: new Date("2020-04-01"),
  Умань: new Date("2021-07-02"),
  Вінниця: new Date("2020-04-21"),
  Одеса: new Date("2021-07-15"),
  Хмельницький: new Date("2020-04-18"),
  Харків: new Date("2021-07-10"),
};

// function concertsToArray(concerts) { // O(n*log2n)
//     return Object.keys(concerts)
//         .filter(city => concerts[city] > new Date()) // O(n)
//         .sort((a, b) =>  concerts[a] - concerts[b]) // O(N*log2n)
// }

// console.log(concertsToArray(concerts));;
