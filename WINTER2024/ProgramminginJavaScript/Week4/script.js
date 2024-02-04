// function raiseAge(x) {
//   let age = 20;
//   var z = 10;
//   const c = 30; // const and we will change the value in future..

//   x = x + 20;
//   c = c + 10;
//   if (x > 30) {
//     let y = 10;
//     console.log(age);
//     console.log(x);
//     console.log(y);
//   }

//   console.log(y);
//   return x;
// }
// //console.log(z); //not accessible..
// raiseAge(19);
//console.log(age); //age cannot be accessed here becasue age is a function level variable inside raiseAge function....

// var n1 = 122;
// n1 = 234.22;
// n1 = "keyin";
// n1 = "keyin"; // single quote also represent a string datatype..
// n1 = "keyin" + 4; //concatenation vs addition...
// n1 = 12 + 12;

// n1 = true;
// let c = null;
// n1 = `hello`;
// console.log(typeof c);

// var x;
// x = 12;
// console.log(x++); //12 (int:13)
// console.log(++x); //14 (int: 14)

// x = 1;
// console.log(x--); //1
// console.log(x--); //0
// console.log(--x); //-2

// var x = "10";

// if (x === 10) {
//   console.log("Hello");
// } else {
//   console.log("Bye");
// }

// almost always use === in comparisons in javascript...
// Functions:

// function declarations:

// function add(a, b) {
//   return "hello";
// }

// console.log(add(5, 4));

// function expression is a way to make a function as value of a variable...

// anonymous function..

let add = function (a, b) {
  return a + b;
};

console.log(add(5, 4));
