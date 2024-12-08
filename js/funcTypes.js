//TODO: оголошення функцій в js

// console.log(fnExpr())
function fnDecl() {
  return "function declaration";
}

const fnExpr = function () {
  return "function expression ";
};

const arrowFn = (arr) => {
  for (const elem of arr) {
    console.log(elem + "Hello");
  }
};

//  оператори порівняння, тернарний оператор

const firstNum = 10;
const secondNum = 20;

// if (firstNum < secondNum) {
//     return console.log('pravda');
// } else {
//     return console.log('nepravda')
// }

firstNum > secondNum
  ? console.log("pravda")
  : 5 < 10
  ? console.log(true)
  : console.log(false);
