//TODO: объявление функций в js

// console.log(fnExpr())
function fnDecl() {
    return 'function expression';
}

const fnExpr = function() {
    return 'function declaration'
}

const arrowFn = (arr) => {
    for(const elem of arr) {
        console.log(elem + "Hello")
    }
}

//  условия, операторы сравнения, тернарный оператор

const firstNum = 10;
const secondNum = 20;

// if (firstNum < secondNum) {
//     return console.log('pravda');
// } else {
//     return console.log('nepravda')
// }

firstNum > secondNum ? console.log('pravda') : 5 < 10 ? console.log(true) : console.log(false)