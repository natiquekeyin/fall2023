// let square = (n) => {
//   return n * n;
// };

// let square1 = (n) => n * n;

// let add = (a, b) => {
//   return a + b;
// };

// let add1 = (a, b) => {
//   let c = a + b;
//   return c;
//   return d;
//   return foo;
// };

// console.log(add1(4, 5));

// let foo = () => {
//   let x = 2;
//   if (x > 10) return "hello";
//   else return "bye";
// };

// console.log(foo());

// function myLog(a) {
//   console.log(a);
// }

// // myLog("correct");
// //myLog("also", "correct");

// myLog();

// function myLog(a) {
//   console.log(arguments.length, a, arguments[0]);
// }

// // arguments[0], arguments[1], arguments[2]

// // myLog("correct");
// // myLog("also", "correct");

// myLog();

// function mySum() {
//   let count = arguments.length; //6
//   let total = 0;

//   for (let i = 0; i < count; i++) {
//     total += arguments[i];
//   }
//   return total;
// }

// console.log(mySum(11, 32, 63, 34, 15, 12));

// "rest"  "spread"
// function mySum(x, y, ...numbers) {
//   // x will be assigned 12 and y will be assigned 93 and rest will be the array
//   let total = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total;
// }
// console.log(mySum(12, 93, 10)); // numbers[0]=12, numbers[1]=93

// console.log(mySum());

// There can be only one ...numbers in one function...

//  true, false, tuthy and falsy..

// Example of Ternary operator..
// var x = 2;

// x > 18 ? console.log("Welcome") : console.log("Bye");

// function updateScore(currentScore, value, bonus) {
//   if (bonus) {
//     return currentScore + value * bonus;
//   } else {
//     return currentScore + value;
//   }
// }

// function something(x) {
//   var y;
//   y = x > 18 ? "Welcome" : "Bye";
//   return y;
// }

// function updateScore(currentScore, value, bonus) {
//   return bonus ? currentScore + value * bonus : currentScore + value;
// }

// function updateScore(currentScore, value, bonus) {
//   bonus = bonus || 1; //Logical OR...
//   return currentScore + value * bonus;
// }

// function updateScore(currentScore, value, bonus) {
//   return currentScore + value * (bonus || 1);
// }

// function updateScore(currentScore, value, bonus = 1) {
//   return currentScore + value * bonus;
// }

// let updateScore1 = (currentScore, value, bonus = 1) =>
//   currentScore + value * bonus;

// console.log(updateScore(10, 3)); //13
// console.log(updateScore(10, 3, 2)); //16

// var team = "1inches12";

// console.log(team);

// console.log(parseInt(team));

var team = "1a";

console.log(isNaN(team));
