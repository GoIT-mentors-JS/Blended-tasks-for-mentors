//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.
*/

//TODO:==============================================
/*
Завдання 5
Додайде слухач кліку і визначте, коли клік відбувається
всередині елемента з id "place" і коли клік припадає поза зоною елемента
https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
*/

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

//TODO:==============================================
/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/

//TODO:==============================================
/*
Завдання 9
Видалити зі списку елементи, які позначені.
*/

//TODO:==============================================
/*
Завдання 10
Наведено список людей. Зроби можливість сортування списку на ім'я та на прізвище.
*/

//TODO:==============================================
/*

Завдання 11
Наведено список людей. Зроби фільтр на ім'я/прізвище.
*/

//TODO:==============================================
/*
Завдання 12
Клік по кнопці замінює символ першого поля введення
символ з другого поля введення в усьому тексті.
Якщо одне з полів порожнє, викликай alert із проханням заповнити їх.
*/

//TODO:==============================================
/*
Завдання 13
Коло має зникати при наведенні на нього.
При цьому позиція сусідніх кіл має залишатися незмінною.
*/

//TODO:==============================================
/*
Завдання 14
Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
Додати класи на список eventList, на елементи eventCode та eventKey


const eventThumb = document.querySelector('.eventThumb');

// document.addEventListener('keydown', ({ code, key }) => {
//   const markup = `
//     <ul class="eventList">
//       <li class="eventKey"><b>Key</b>: ${key}</li>
//       <li class="eventCode"><b>Code</b>: ${code}</li>
//     </ul>
//   `;

//   eventThumb.insertAdjacentHTML('afterbegin', markup);
// });
// 

*/

//TODO:======================
// Завдання 15
// Взяти попереднє завдання з Зоопарком та вивести звірів, їх тип та особливості в DOM.
// Додати до списку клас animalList.На елемент списку animalElement

// class Zoo {
//   constructor() {
//     this.animals = [];
//     this.animalWrapper = document.querySelector('.zooWrapper');
//     this.animList = document.createElement('ul');
//   }

//   addAnimal(animal) {
//     this.animals.push(animal);
//   }

//   listAnimals() {
//     this.animals.forEach(obj => {
//       const item = document.createElement('li');
//       const animalName = document.createElement('p');
//       const animalType = document.createElement('p');
//       const species = document.createElement('p');

//       animalName.textContent = `Name: ${obj.name}`;
//       animalType.textContent = `Type: ${obj.type}`;

//       if (obj.species) {
//         species.textContent = `Species: ${obj.species}`;
//       }

//       if (obj.wingspan) {
//         species.textContent = `Wingspan: ${obj.wingspan}`;
//       }

//       item.append(animalName);

//       item.append(animalType);

//       item.append(species);

//       item.classList.add('animalElement');

//       this.animList.classList.add('animalList');

//       this.animList.prepend(item);

//       this.animalWrapper.prepend(this.animList);
//     });
//   }
// }

// const zoo = new Zoo();

//TODO:======================
// Завдання 16
//  Створіть HTML сторінку з табличкою,
//  яка містить список продуктів.Кожен рядок у
//  табличці повинен містити назву продукту та його ціну.
//  При натисканні на будь - який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.

// const productTable = document.getElementById('productTable');
// const productDetails = document.getElementById('productDetails');

// productTable.addEventListener('click', function (event) {
//   // Якщо натиснуто не на рядок, повертаємося
//   if (event.target.tagName !== 'TD') {
//     return;
//   }
//   const row = event.target.parentNode;
//   const productName = row.cells[0].textContent;
//   const productPrice = row.cells[1].textContent;
//   productDetails.textContent = `Ви вибрали ${productName} за ${productPrice}.`;
// });

//TODO:======================
// Завдання 17
// Створіть HTML сторінку з формою,
// яка містить поле введення для введення
// імені користувача та кнопку.При натисканні
// на кнопку відобразіть повідомлення з привітанням з іменем користувача.

// const usernameInput = document.getElementById("username");
// const greetingButton = document.getElementById("greetingButton");
// const greetingMessage = document.getElementById("greetingMessage");

// greetingButton.addEventListener("click", function () {
//   const username = usernameInput.value;
//   greetingMessage.textContent = `Привіт, ${username}!`;
// });
