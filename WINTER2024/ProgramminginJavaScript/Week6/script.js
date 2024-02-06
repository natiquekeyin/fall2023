// var name = "keyin"; //strings are objects (have properties, methods etc inside )
// var name2 = new String("College"); // create a new object of type string having an initial value of "Cellege"

// // console.log(name.length);
// // console.log(name.toUpperCase());

// console.log(name[0].toUpperCase());

// let list = [0, "A", "1", true];
// console.log(list[1]);

// let position = [43.794, -89.2345];

// // // index notation!
// // let lat = position[0];
// // let lng = position[1];

// // destructuring..

// let [lat, lng] = position;

let dateToday = "05/02/2024";
// let today = dateToday.split("/");
// console.log(today[0]);
// console.log(today[1]);
// console.log(today[2]);

// let [day, month, year] = dateToday.split("/");
// // console.log(
// //   "The day is " + day + " And the month is " + month + " and year is " + year
// // );

// console.log(`The day is ${day} and month is ${month} and year is ${year}`);

// let s = "Today is very good weather";
// let [w1, w2, w3, w4, w5] = s.split(" ");

// let emailAddress = "johnsmith@keyin.com";
// let [, domain] = emailAddress.split("@");

// let [, month, year] = dateToday.split("/");

// let arr1 = [1, 2, 3];

// console.log(arr1.length); //3
// arr1.push(10);
// arr1.push(20);
// arr1.unshift(30);
// arr1.unshift(40);
// console.log(arr1);

// arr1.pop();
// arr1.pop();
// arr1.shift();
// arr1.shift();
// console.log(arr1);

// console.log(arr1.join(" "));

// create a new list from given list.. and apply some operations on each element of it....

// let list = [1, 2, 3, 4];
// //let listCopy = [];
// // by using for loop
// for (let i = 0; i < list.length; i++) {
//   let element = list[i];
//   element += 3;
//   listCopy.push(element);
// }

// // by using forEach() ...
// list.forEach(function (element) {
//   listCopy.push(element + 3);
// });

// list.forEach((element) => {
//   listCopy.push(element + 3);
// });

// // by using the map() fnction...

// let listCopy = list.map(function (element) {
//   return element + 3;
// });

// let listCopy1 = list.map((element) => element + 3);

// console.log(listCopy);

// let list = [10, 12, 1, 3, 4];

// // let newList = list.filter(function (x) {
// //   return x < 10;
// // });

// let newList1 = list.map(function (x) {
//   return x + 10;
// });

// console.log(newList1);

// let s = "Learning JavaScript. is always fun";

// function addPeriod(value) {
//   //   if (value.endsWith(".")) {
//   //     return value;
//   //   } else {
//   //     return value + ".";
//   //   }

//   //   return value.endsWith(".") ? value : `${value}.`;
//   let lastPos = value.length - 1;
//   return value.lastIndexOf(".") != lastPos ? `${value}.` : value;
// }

// console.log(addPeriod("hello."));
// console.log(addPeriod(s));

// Write a function makeSentence() that takes a string and checks if first letter is capital, if not makes it capital and return.. if yes returns the sentence..
