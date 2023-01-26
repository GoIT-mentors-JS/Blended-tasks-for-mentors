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
