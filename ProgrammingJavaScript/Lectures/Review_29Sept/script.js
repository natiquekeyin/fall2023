// Declaring Variables(that variates..different values)

// console.log("Hello Keyin");
// var x;
// x = 100;
// console.log("The value of x is", x);

// let age;
// age = 20;
// console.log("You are " + age + " years old");

// +, -, * , /

// let age = 20;
// console.log("The age is " + age);
// age = age + 10;
// console.log("The new age is " + age);

// console.log(2 + 2);
// console.log("2" + 2);

// Functions

// reusable piece of codes.. write once use as many times as you want
// Functions are used to perform particular tasks, and we don't need to write the same code over and over .. function takes care of all executions...

// var x = 5;
// console.log(x * x);
// console.log("------");
// x = 6;
// console.log(x * x);
// console.log("------");
// x = 7;
// console.log(x * x);

// a function square that prints the square of a number...

// function square(x) {
//   console.log(x * x);
// }

// square(7);

// A function may not receive any parameters..

// function foo() {
//   console.log("Keyin College");
// }

// function keyin() {
//   console.log("Keyin COllege");
//   console.log("The best in NL");
//   console.log("Your ultimate destination");
// }

// keyin();

// function add() {
//   var n1 = 10;
//   var n2 = 20;
//   console.log(n1 + x + n2);
// }

// add();

// add(5,10)....n1=5... n2=10;
// function add(n1, n2) {
//   var x = 10;
//   console.log(n1 + n2 + x);
// }

// add(5, 10);

// function add(x1, x2) {
//   var result = x1 + x2;
//   return result;
// }

// // console.log(add(5, 10));

// var x = add(5, 10);
// console.log(x);

// function can output a lot of things
// function always returns something it can ba a value OR undefined..
// function can accept any number parameters too...

// function addition(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// console.log(addition(3, 4, 5));

// function changeCase(name) {
//   return name.toUpperCase();
// }

// console.log(changeCase("keyin"));

function giveFirst(str) {
  return str[0].toUpperCase();
}

console.log(giveFirst("noman"));
