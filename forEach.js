var Person = function (name) {
  this.name = name;
};
Person.prototype.say = function (phrase) {
  console.log(`${this.name} says ${phrase}`);
};
Person.prototype.mumble = function (phrases) {
  phrases.forEach(function (phrase) {
    this.say(phrase);
  });
  // each(
  //   phrases,
  //   function (phrase) {
  //     this.say(phrase);
  //   },
  //   this,
  // );
};
// Person.prototype.mumble = function (phrases) {
//   phrases.forEach(function (phrase) {
//     this.say(phrase);
//   }, this);
// };
var johnDoe = new Person('Kiwi');
johnDoe.mumble(['Hello, World!', 'JS is great', "I'm designer and i don't have job"]);

function each(arr, callback, thisArg) {
  for (let i = 0; i < arr.length; i = i + 1) {
    callback.call(thisArg, arr[i], i, arr);
  }
}
