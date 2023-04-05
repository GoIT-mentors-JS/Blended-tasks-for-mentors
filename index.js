// TODO:=========================================
// ЗАДАЧА 1

// Якщо імейл і пароль користувача збігаються, зберігайте дані з форми при сабмите
// у локальне сховище і змінюй кнопку login на logout і роби поля введення
// Недоступними зміни.

// При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці logout повертає все до початкового вигляду і видаляє дані користувача
// З локального сховища.

// Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// повідомляти про помилку.

// const USER_DATA = {
//   email: "user@mail.com",
//   password: "secret",
// };

// TODO:=========================================

// ЗАДАЧА 2

// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.

// const form = document.querySelector("#task-form");
// const taskList = document.querySelector("#task-list");
// const input = document.querySelector('input[name="taskName"]');

// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// form.addEventListener("submit", addTask);

// function addTask(event) {
//   event.preventDefault();

//   const task = input.value.trim();

//   if (task !== "") {
//     tasks.push(task);
//     input.value = "";
//     renderTasks();
//     saveTasks();
//   }
// }

// function deleteTask(event) {
//   const taskIndex = event.target.dataset.index;
//   tasks.splice(taskIndex, 1);
//   renderTasks();
//   saveTasks();
// }

// function renderTasks() {
//   taskList.innerHTML = "";

//   tasks.forEach((task, index) => {
//     const li = document.createElement("li");
//     li.innerText = task;
//     const button = document.createElement("button");
//     button.innerText = "Видалити";
//     button.dataset.index = index;
//     button.addEventListener("click", deleteTask);

//     li.appendChild(button);
//     taskList.appendChild(li);
//   });
// }

// function saveTasks() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// renderTasks();

// TODO:=========================================

// ЗАДАЧА 3
// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем

// const refs = {
//   body: document.querySelector("body"),
//   checkbox: document.querySelector(".checkbox"),
// };

// const themeKey = "theme";

// const themeValueLight = "light-theme";
// const themeValueDark = "dark-theme";

// const getTheme = localStorage.getItem(themeKey);

// // if (getTheme === themeValueDark) {
// //   refs.body.classList.add("dark");
// //   refs.checkbox.checked = true;
// // }

// // if (getTheme === themeValueLight) {
// //   refs.body.classList.add("light");
// //   refs.checkbox.checked = false;
// // }

// switch (getTheme) {
//   case themeValueDark:
//     refs.body.classList.add("dark");
//     refs.checkbox.checked = true;
//     break;
//   case themeValueLight:
//     refs.body.classList.add("light");
//     refs.checkbox.checked = false;
//     break;
//   default:
//     refs.body.classList.add("light");
//     refs.checkbox.checked = false;
// }

// refs.checkbox.addEventListener("click", () => {
//   if (refs.checkbox.checked === false) {
//     localStorage.setItem(themeKey, themeValueLight);
//     refs.body.classList.add("light");
//     refs.body.classList.remove("dark");
//   }

//   if (refs.checkbox.checked === true) {
//     localStorage.setItem(themeKey, themeValueDark);
//     refs.body.classList.add("dark");
//     refs.body.classList.remove("light");
//   }

//   console.log(refs.checkbox.checked);
// });
