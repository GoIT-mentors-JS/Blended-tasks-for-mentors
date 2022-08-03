//TODO:==============================================
// Получить массив имен всех пользователей (поле name).
// console.log(getUserNames(usersData))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//TODO:==============================================
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//TODO:==============================================
// Получить массив имен пользователей по полу (поле gender)
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
// Получить массив только неактивных пользователей (поле isActive).
// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//TODO:==============================================
// Получить пользователя (не массив) по email (поле email, он уникальный).
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//TODO:==============================================
// Получить массив пользователей в возрасте от min до max

// console.log( getUsersWithAge( users, 20, 30 ) );
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log( getUsersWithAge( users, 30, 40 ) );
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//TODO:==============================================
// Получить общую сумму баланса (поле balance) всех пользователей.
// console.log(calculateTotalBalance(users)); // 20916

//TODO:==============================================
// Массив имен всех пользователей у которых есть друг с указанным именем.
// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//TODO:==============================================
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//TODO:==============================================
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть
// повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

//TODO:==============================================
// На входе массив чисел, например: arr = [1,2,3,4,5].
// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
// Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов,
// в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.

// То есть:
// для arr = [ 1, 2, 3, 4, 5 ]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// Функция не должна модифицировать входной массив.
// В решении используйте метод arr.reduce.

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

// Reverse. Напишите функцию, которая разворачивает массив в обратном порядке.
// Пожалуйста, не используйте array.reverse(), чтобы сделать задачу более интересной.

// const data = [1, 2, 3, 4, 5, 6];

// Compact. Напишите функцию, которая очищает массив от нежелательных значений,
// таких как false, undefined, пустые строки, ноль, null.

// const data = [0, 1, false, 2, undefined, '', 3, null];
// const compact = arr => arr.filter(el => el);
// console.log(compact(data)); // [1, 2, 3]

// Without. Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.
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