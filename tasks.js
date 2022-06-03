const vehicles = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
];

//1.Реализовать фильтер по свойству amount и получить
//только название модели
const getAvailableCarNames = (cars, amountThreshold) => {
  return cars.filter(car => car.amount > amountThreshold).map(car => car.model);
};
// console.table(getAvailableCarNames(vehicles, 12));

// filterByAmount + только название модели получить (reduce)
// const getAvailableCarNames = (cars, amountThreshold) => {
//     return cars.reduce((models, car) => {
//         if (car.amount > amountThreshold) {
//             //models.push(car.model);
//             return [...models, car.model]
//         }

//         return models;
//     }, []);
// };
// console.table(getAvailableCarNames(vehicles, 12));

//========================================
//2.Получить машины на распродаже и сортировать по убыванию цены
const getSortedCarsOnSale = cars => {
  return cars.filter(car => car.onSale).sort((a, b) => b.price - a.price);
};
// console.table(getSortedCarsOnSale(vehicles));

//3. Необходимо написать функцию (isEqualSymbols), принимающую
//в аргументах две строки и возвращающую true, если эти строки
//состоят из идентичных букв и false в противном случае.
//isEqualSymbols('кот', 'ток'); // выведет true
//isEqualSymbols('кот', 'тик'); // выведет false

const isEqualSymbols = (str1, str2) => {
  const strToArray1 = str1.split('');
  const strToArray2 = str2.split('');
  for (let i = 0; i < strToArray1.length; i += 1) {
    if (!strToArray1.includes(strToArray2[i])) return false;
  }
  return true;
};

isEqualSymbols('GOOD', 'GODO');
console.log(isEqualSymbols('GOOD', 'GODO'));
//========================================
//4. Сортировка примитивов.
//Выполните сортировку массива цен по убыванию и возрастанию
const prices = [1000, 240, 670, 360, 89, 20];
const ascendingPrice = [...prices].sort((a, b) => a - b);
const descendingPrice = [...prices].sort((a, b) => b - a);

//========================================
//5. Сортировка строк.
//Выполните сортировку массива названий мониторов в
//алфавитном и обратном порядке.

const monitors = ['SAMSUNG', 'LG', 'ASUS', 'DELL', 'BENQ', 'ASER'];
//alphabetical
//reverseAlphabetical
const a = monitors.sort((a, b) => {
  if (a < b) {
    //если a < b, a должна стоять перед b
    // console.log('a < b', a < b);
    // console.log('a', a);
    // console.log('b', b);
    //возвращаем -1 местами значения не меняем
    return -1;
    //местами значения не меняет
  }
  if (a > b) {
    return 1;
    //меняет местами значения
  }
  return 0;
  //означает что равны, остаются на своих местах
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
  //означает что равны, остаются на своих местах
});
// console.log(c);
const b = monitors.sort((a, b) => a.localeCompare(b));
//firstString.localeCompare(secondString)
//Возвращает отрицательное значение если firstString должна быть перед secondString.
//местами значение не меняет
// console.log(b);

//========================================
//5. Сортировка сложных типов
//Выполните сортировку массива объектов:
//1. По возростанию и убыванию значения свойства price
//2. По имени в алфавитном и обратном порядке

const items = [
  { name: 'SAMSUNG', price: 15000 },
  { name: 'LG', price: 9000 },
  { name: 'DELL', price: 27000 },
  { name: 'BENQ', price: 12000 },
  { name: 'ASER', price: 7000 },
];

//========================================
//6. Собрать в allTopics массив всех предметов всех курсов
//Выполнить фильтрацию, оставив в uniqueTopics только уникальные элементы

const courses = [
  {
    name: 'Basic HTML+CSS',
    topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'GitHub Desctop'],
  },
  {
    name: 'Intermediate HTML+CSS',
    topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'Git', 'Terminal'],
  },
  {
    name: 'Basic JavaScript',
    topics: [
      'VSCode',
      'Type system',
      'Loops',
      'Function',
      'Git',
      'Conditions',
      'Classes',
      'GitHub',
      'DOM',
    ],
  },
  {
    name: 'Intermediate JavaScript',
    topics: ['VSCode', 'NPM', 'Bundlers', 'Transpiling', 'Git', 'Promises', 'AJAX', 'GitHub'],
  },
];

const allTopics = courses
  .flatMap(course => course.topics)
  .filter((item, index, array) => array.indexOf(item) === index);
// console.log(allTopics);

//========================================
//7. Назначить скидку 20% на фрукты в массиве,
//присвоить id для каждого продукта

const fruits = [
  { name: 'apple', price: 200 },
  { name: 'orange', price: 300 },
  { name: 'grapes', price: 750 },
];

const discountFruits = fruits.map(fruit => {
  return {
    ...fruit,
    price: fruit.price * 0.8,
    id: Date.now(),
  };
});
// console.log(discountFruits);

//========================================
//8. Узнать общие годы практики в объекте workers

const workers = [
  { id: 10, name: 'Mango', years: 14 },
  { id: 2, name: 'Poly', years: 19 },
  { id: 41, name: 'Ajax', years: 30 },
  { id: 99, name: 'Kiwi', years: 22 },
];

const sumYears = workers.reduce((acc, { years }, index, array) => {
  return acc + years;
}, 0);
// console.log(sumYears);

//9. Дан массив с числами. Оставьте в нем только положительные числа.
//Затем извлеките квадратный корень и этих чисел.
const array = [121, -2, 225, 0, 4, -5, 36, -11];
const sqrtArray = array.filter(elem => elem > 0).map(number => Math.sqrt(number));
console.log(sqrtArray);

//10. Создание массива значений Фаренгейта из массива значений Цельсия
let celsius = [-15, -5, 0, 10, 16, 20, 24, 32];
let fahrenheit = celsius.map(t => t * 1.8 + 32);
// fahrenheit is [5, 23, 32, 50, 60.8, 68, 75.2, 89.6]

//11. Найти первый уникланый символ в строке
//в строке будут только буквы латинского алфавита и они будут в lowerCase
//https://learn.javascript.ru/map-set
let input1 = 'leetcode'; //0
let input2 = 'loveleetcode'; //2
let input3 = 'aabb'; //-1

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

//12. Найти уникальные элементы с помощью reduce
const numbers = [1, 9, 0, 1, 5, 9, 1, 6];

const findUniqNumber = array =>
  array.reduce((acc, number) => (acc.includes(number) ? acc : [...acc, number]), []);
console.log(findUniqNumber(numbers));

//13. Найти уникальные элементы с помощью reduce
//Нужно проверить "same" массивы
//числа с первого в квадрате равны числам второго
const a = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
function comp(array1, array2) {
  if (!array1 || !array2) return false;
  const sortArray1 = [...array1].sort((a, b) => a - b);
  const sortArray2 = [...array2].sort((a, b) => a - b);
  const sortArray1SQR = sortArray1.map(el => Math.pow(el, 2));
  for (let i = 0; i < sortArray1SQR.length; i++) {
    if (sortArray2[i] !== sortArray1SQR[i]) {
      return false;
    }
  }
  return true;
  // return array1.map((v) => v * v).every((v, i) => v == array2[i]);
}
// console.log(comp(a, b));
