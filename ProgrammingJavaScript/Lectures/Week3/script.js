// User defined functions:
// 1. Function declarations:

// function keyin() {
//   console.log("Keyin College");
// }

// function add(a, b) {
//   return a + b;
// }

// // 2.Function Expressions:

// var add = function (a, b) {
//   return a + b;
// };

// // 3. Arrow Functions (ES5 ES6 - Advanced)

// var add = (a, b) => a + b;

// ------------------------------------------

// function log(a) {
//   console.log(a);
// }

// log();

// log("hello");

// log("hello", "world");

// function log(x) {
//   console.log(arguments.length, arguments[0], arguments[1]);
// }

// log();

// log("hello");

// log("hello", "world");

// function sum() {
//   let count = arguments.length; //0 , 2, 4
//   let total = 0;
//   for (let i = 0; i < count; i++) {
//     total += arguments[i]; //0, arguments[0]=1, total = 1+2 = 3
//   }

//   return total;
// }

// console.log(sum());
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3, 4));

// function sum(...numbers) {
//   let total = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total;
// }

// console.log(sum());
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3, 4));

// function updateSalary(currentSalary, value, bonus) {
//   //   return bonus ? currentSalary + value * bonus : currentSalary + value;

//   if (bonus) {
//     return currentSalary + value * bonus;
//   } else {
//     return currentSalary + value;
//   }
// }

// console.log(updateSalary(1000, 300));
// console.log(updateSalary(1000, 300, 2));

// var first = "Alan";
// var name = first + "Smith";

var song = "The little quick brown fox jumps over the lazy dog.";

// function addPeriod(str) {
//   //   if (str.endsWith(".")) {
//   //     return str;
//   //   } else {
//   //     return str + ".";
//   //   }

//   return str.endsWith(".") ? str : str + ".";
// }

var x = "hello";

function addPeriod(str) {
  var lastPos = str.length - 1; //???

  return str.charAt(lastPos) === "." ? str : str + ".";
}

console.log(addPeriod("Hello."));
console.log(addPeriod(song));
