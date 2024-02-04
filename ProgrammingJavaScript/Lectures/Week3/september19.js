// Introduction to Objects and Object-Oriented Programming

// let s = "Some text";
// let s1 = "Some text";
// let s2 = `some text`; //template literal
// let s3 = new String("Some Text");

// String functions practice......

// JavaScript Array:

// let arr = new Array(1, 2, 3, 4);
// let arr2 = [1, 2, 3];
// let arr3 = [0, "a", true];

// console.log(arr.length);
// console.log(arr2[2]);

// Co ordinates of Keyin St.John Campus:

// let position = [43.796, -79.3485];

// // version 1: index notation:
// // let lat = position[0];
// // let lng = position[1];

// // version2: destructuring

// let [lat, lng] = position;

// let dateString = "19/09/2023";

// let [day, month, year] = dateString.split("/");
// console.log(`The day is ${day}, month is ${month}, and year is ${year}`);

// let emailAddress = "alansmith@keyin.com";

// let [username] = emailAddress.split("@");
// console.log(`The user name is ${username}`);

// Methods of arrays:

// push() to insert an element in an array ..and pop() to remove and elment of an arry..

// let arr = [4, 2, 6];
// arr.unshift(10);
// console.log(arr);

// arr.shift();
// console.log(arr);
// arr.push(10);
// console.log(arr);
// arr.push(20);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);

// By using  a for loop

// let list = [1, 2, 3, 4];
// let listCopy = [];

// for (var i = 0; i < list.length; i++) {
//   let element = list[i];
//   element += 3;
//   listCopy.push(element); //insert the updated element in the listCopy
// }

// console.log(listCopy);

// By using a for-each

// let list = [1, 2, 3, 4];
// let listCopy = [];

//list.forEach(); // for each value of list

// list.forEach(function (n) {
//   var double = n + 3;
//   listCopy.push(double);
// });

// let list = [1, 2, 3, 4];
// let listCopy = list.map(function (n) {
//   return n + 3;
// });

// console.log(listCopy);

// let numbers = [1, 4, 9];
// let doubles = numbers.map(function (num) {
//   return num * 2;
// });

// console.log(doubles);

let cart = [5, 15, 25];
let total = 0;

let withTax = cart.map(function (cost) {
  total += cost;
  return cost * 1.2;
});

console.log(withTax);
console.log(total);

// Convert this program in reverse, in forEach and then for loop???

// forEach actually applies a function and does not necessarily return a new array
// map applies the function and returns the array
