// TODO:====================================

// ЗАВДАННЯ 1

// Перероби функцію на проміс таким чином, щоб проміс повертав значення
// через 2 секунди після виклику функції

function greet() {
  return "hello world";
}

// TODO:====================================

// ЗАВДАННЯ 2

// - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і всередині якої буде проміс.
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

// TODO:====================================

// ЗАВДАННЯ 3

// Кнопка increment повинна кожну секунду збільшувати значення на 1
// Кнопка decrement має кожну секунду зменшувати значення на 1

// TODO:====================================

// ЗАВДАННЯ 4

// Перероби код так, щоб усі дані збиралися
// одночасно і приходили у вигляді масиву

const getData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 1;
      console.log(data);
      res(data);
    }, 1000);
  });

const getNewData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 2;
      console.log(data);
      res(data);
    }, 1000);
  });

const getAnotherData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 3;
      console.log(data);
      res(data);
    }, 1000);
  });

const getLastData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 4;
      console.log(data);
      res(data);
    }, 1000);
  });

const arr = [];

// getData()
// .then((data) => {
//     arr.push(data);
//     return getNewData();
// })
// .then((data) => {
//     arr.push(data);
//     return getAnotherData();
// })
// .then((data) => {
//     arr.push(data);
//     return getLastData();
// })
// .then(data => {
//     arr.push(data);
//     console.log(arr);
// })

// TODO:====================================

// ЗАВДАННЯ 5

// Функція startTimer повинна логувати кожен елемент масиву один раз на секунду.
// Коли черга дійде до останнього елемента масиву, продовжити логувати у зворотному порядку
// поки не дійде до першого елемента, потім зупинити процес.

const startTimer = (arr) => {};

//  startTimer(["a", "b", "c", "d", "e", "f"]);

// TODO:====================================

// ЗАВДАННЯ 6

// Функція countWithDelay приймає 3 аргументи:
// 1) кількість секунд перед тим як спрацює ф-ція logCount
// 2) скільки разів має відпрацювати logCount
// 3) затримка між викликами ф-ції

// logCount повинна логувати кількість викликів

const countWithDelay = (delay = 0, times = 0, stepInterval = 0) => {};

//  countWithDelay(3000, 6, 1000);
