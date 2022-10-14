//TODO: типи даних в js

const str = `hello`;
const num = 234;
const symb = Symbol("hello");
const bool = true;
const bigInteger = BigInt(37827327382);
const arr = [];
const obj = {};
const und = undefined;
const nu = null;

// console.log(typeof bigInteger)
// console.log(typeof str)
// console.log(typeof num)
// console.log(typeof arr)
// console.log(typeof obj)
// console.log(typeof und)
// console.log(typeof symb)
// console.log(typeof bool)

// Приведення типів

// console.log(Boolean(-1))
// console.log(Boolean(0))
// console.log(Boolean(''))
// console.log(Boolean(' '))
// console.log(Number("   777   "))
// console.log(Number(" 777sfgah  "))
// console.log(Number(true))
// console.log(Number(false))

// boxing

// const str = 7777
// const res = str.toString()
// console.log(res)

//TODO: Навіщо потрібен Symbol
// Це примітивный тип даних, як boolean чи string, Який потрібен для створення унікальних ідентифікаторів.

// Існують «глобальні символи», вони доступні в усіх частинах вашої програми.
// Тобто ви можете створити символ і помістити його в якусь базу, це робиться за допомогою функції Symbol.for()

// console.log(Symbol('Hello') === Symbol('Hello'))

// const someName = Symbol.for('Some identifier');

// console.log(Symbol.for('Some identifier') === someName)
