// Week5 file..
// Object data type...
// var x = 10;
// var name = ["Alan", "Bob"];
// var num = [1, 2, 3];

// var obj = {}; //Empty Object Literal

// var c1 = { course: "Programming", college: "Keyin" };
// console.log(c1.course); //dot notation to access object data
// console.log(c1.college);

// console.log(c1["course"]); //index notation...
// console.log(c1["college"]);

// let user = {
//   firstName: "Alan",
//   lastName: "Smith",
//   email: "alan@gmail.com",
//   loggedIn: false,
//   level: 3,
// };

// console.log(user);

// console.log(user);
// user.login();
// console.log(user);
// user.logout();
// console.log(user);

// let user = {
//   firstName: "Alan",
//   lastName: "Smith",
//   email: "alan@gmail.com",
//   loggedIn: false,
//   level: 3,
//   login: function () {
//     this.loggedIn = true;
//   },
//   logout: function () {
//     this.loggedIn = false;
//   },
// };

// let user1 = {
//   firstName: "Bob",
//   lastName: "Smith",
//   email: "bob@gmail.com",
//   loggedIn: true,
//   level: 2,
//   login: function () {
//     this.loggedIn = true;
//   },
//   logout: function () {
//     this.loggedIn = false;
//   },
// };

// let user2 = {
//   firstName: "Christina",
//   lastName: "Lee",
//   email: "chris@gmail.com",
//   loggedIn: true,
//   level: 3,
//   login: function () {
//     this.loggedIn = true;
//   },
//   logout: function () {
//     this.loggedIn = false;
//   },
// };

// console.log(user1.lastName);
// console.log(user.email);

// Constructor function to create objects...
// A constructor funtion ALWAYS Starts with a capital letter...

// function User(f, l, e, v) {
//   this.firstName = f;
//   this.lastName = l;
//   this.email = e;
//   this.level = v;
//   this.department = "HR";
//   this.loggedIn = false;

//   this.login = function () {
//     this.loggedIn = true;
//   };
//   this.logout = function () {
//     this.loggedIn = false;
//   };
// }

// let alan = new User("Alan", "Smith", "alan@gmail.com", 3);
// let bob = new User("Bob", "Woolmer", "bob@gmail.com", 2);
// let chris = new User("Christina", "Lee", "chris@gmail.com", 2);

// console.log(alan.department);
// alan.department = "IT";
// console.log(alan);

// var was a legacy way of declaring variables in JS. ES5 and ES6 (advanced versions of javascript were introduced, they defined two new ways of definging variables ... let and const...)
// var has a function level scope. var will only be available in a function where it is defined not outside of it...

// let has a block level scope :)

// const is a constant value that once defined cannot be changed...

// function A() {
//   var x = 10;
//   let y = 20;
//   const z = 30;

//   //   for (let i = 0; i < 5; i++) {
//   //     console.log(i);
//   //     // console.log("The value of x is", x);
//   //     // console.log("The value of y is", y);
//   //   }

//   //   console.log(z); //
//   //   z = z + 10;
//   //   console.log(z);
// }

// A();

// function User(f, l, e, v) {
//   this.firstName = f;
//   this.lastName = l;
//   this.email = e;
//   this.level = v;
//   this.department = "HR";
//   this.loggedIn = false;

//   this.login = function () {
//     this.loggedIn = true;
//   };
//   this.logout = function () {
//     this.loggedIn = false;
//   };
// }

// let alan = new User("Alan", "Smith", "alan@gmail.com", 3);
// let bob = new User("Bob", "Woolmer", "bob@gmail.com", 2);
// let chris = new User("Christina", "Lee", "chris@gmail.com", 2);

// Prototypal inheritance ...
// All those methods or properties that we don't want EVERY OBJECT to carry, we put them in the prototype of the constructor method...we can call them when needed, but THEY WOULD NOT BECOME the part of the code when we create the objects...

// function User(f, l, e, v) {
//   this.firstName = f;
//   this.lastName = l;
//   this.email = e;
//   this.level = v;
// }

// User.prototype.department = "HR";
// User.prototype.loggedIn = false;
// User.prototype.login = function () {
//   this.loggedIn = true;
// };

// User.prototype.logout = function () {
//   this.loggedIn = false;
// };

// let alan = new User("Alan", "Smith", "alan@gmail.com", 2);
// console.log(alan);
// alan.login();
// console.log(alan);

// let users = [
//   {
//     firstName: "Ala",
//     lastName: "Smith",
//     email: "alan@gmail.com",
//     loggedIn: false,
//     level: 3,
//     login: function () {
//       this.loggedIn = true;
//     },
//     logout: function () {
//       this.loggedIn = false;
//     },
//   },
//   {
//     firstName: "Bob",
//     lastName: "Smith",
//     email: "bob@gmail.com",
//     loggedIn: true,
//     level: 1,
//     login: function () {
//       this.loggedIn = true;
//     },
//     logout: function () {
//       this.loggedIn = false;
//     },
//   },
//   {
//     firstName: "tina                                           ",
//     lastName: "Smith",
//     email: "christina@gmail.com",
//     loggedIn: false,
//     level: 4,
//     login: function () {
//       this.loggedIn = true;
//     },
//     logout: function () {
//       this.loggedIn = false;
//     },
//   },
//   {
//     firstName: "Christina",
//     lastName: "Smith",
//     email: "christina@gmail.com",
//     loggedIn: true,
//     level: 4,
//     login: function () {
//       this.loggedIn = true;
//     },
//     logout: function () {
//       this.loggedIn = false;
//     },
//   },
//   {
//     firstName: "Chr",
//     lastName: "Smith",
//     email: "christina@gmail.com",
//     loggedIn: false,
//     level: 4,
//     login: function () {
//       this.loggedIn = true;
//     },
//     logout: function () {
//       this.loggedIn = false;
//     },
//   },
//   {
//     firstName: "Christina",
//     lastName: "Smith",
//     email: "christina@gmail.com",
//     loggedIn: false,
//     level: 4,
//     login: function () {
//       this.loggedIn = true;
//     },
//     logout: function () {
//       this.loggedIn = false;
//     },
//   },
// ];

// console.log(users[0].firstName);
// console.log(users[1].firstName);
// console.log(users[2].firstName);

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i].firstName);
// }

// users.forEach(function (user) {
//   console.log(user.firstName);
// });

// users.forEach((user) => {
//   console.log(user.email);
// });

// let newUsers = users.map((user) => user.email.trim().toUpperCase());

// let newUsers = users.map((user) => user.email.startsWith("c"));
// console.log(newUsers);

// users.forEach((user) => {
//   if (user.firstName.length > 5) {
//     console.log(user);
//   }
// });

// function User(f, l, e, v) {
//   this.firstName = f;
//   this.lastName = l;
//   this.email = e;
//   this.level = v;
// }

// User.prototype.department = "HR";
// User.prototype.loggedIn = false;
// User.prototype.login = function () {
//   this.loggedIn = true;
// };

// User.prototype.logout = function () {
//   this.loggedIn = false;
// };
// let obj1 = new User("Brad", "Green", "brad@gmail.com", 3);

// // console.log(obj1.department);

// obj1.department = "IT";
// obj1.loggedIn = "true";
// console.log(obj1);

// function User(f, l, e, v) {
//   this.firstName = f;
//   this.lastName = l;
//   this.email = e;
//   this.level = v;
//   this.hobbies = ["reading", "gym"];
//   this.pref = {
//     color: "red",
//     model: "Audi",
//   };
// }

// var obj1 = new User("Alan", "Smith", "alan@gmail.com", 3);
// console.log(obj1.pref.model);

// Example:

// var people = [];
// // constructor function Person..
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// function addPerson(name, age) {
//   var p = new Person(name, age);
//   people.push(p); //insert the newly created person in people array
// }

// addPerson("George", 32);
// addPerson("Christina", 31);
// addPerson("Doug", 25);

// console.log(people);

// Write a function called totalAge() that calculates the total age of all people in array...
// [Vanessa]
// function totalAge() {
//   var total = 0;
//   people.forEach(function (person) {
//     if (person.age) {
//       total += person.age;
//     }
//   });
//   return total;
// }
// var total = totalAge();
// console.log("Total Age:", total);

// function totalAge() {
//   var total = 0;
//   for (var i = 0; i < people.length; i++) {
//     total += people[i].age;
//   }
//   return total;
// }
// var total = totalAge();
// console.log("Total Age:", total);

// function totalAge() {
//   var total = 0;
//   people.forEach((person) => {
//     total += person.age;
//   });
//   return total;
// }
// var total = totalAge();
// console.log("Total Age:", total);

// [Evan Harte]
// function totalAge(array) {
//   var total = 0;
//   for (i = 0; i < array.length; i++) {
//     total += array[i].age;
//   }
//   return total;
// }

// console.log(totalAge(people));

var books = [
  { title: "Good morning", author: "Stephen", isbn: 1234, readingStatus: true },
  {
    title: "Good Afternoon",
    author: "Chris",
    isbn: 3234,
    readingStatus: false,
  },
  { title: "Good night", author: "Braden", isbn: 1134, readingStatus: true },
];

// Write a function that tells about the reading status of each book like following: "Already Read Good morning by Stephen", "You still need to read Good Afternoon by Chris"

// [Scot's solution]
// function readingStatus() {
//   books.forEach((book) => {
//     if (book.readingStatus == true) {
//       console.log("Already read", book.title, " by", book.author);
//     } else {
//       console.log("You still need to read", book.title, " by", book.author);
//     }
//   });
// }

// function readingStatus() {
//   books.forEach((book) => {
//     book.readingStatus === true
//       ? console.log(`Already read ${book.title} by ${book.author}`)
//       : console.log(`You still need to read ${book.title} by ${book.author}`);
//   });
// }

// readingStatus();

// function Vehicle(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.displayDetails = function () {
//     console.log(`Make ${this.make}: Model ${this.model}: Year ${this.year}`);
//   };
// }

// var elantra = new Vehicle("Hyundai", "Elantra", 2010);

// elantra.displayDetails();

var books = [
  { title: "Good morning", author: "Stephen", isbn: 1234, readingStatus: true },
  {
    title: "Good Afternoon",
    author: "Chris",
    isbn: 3234,
    readingStatus: false,
  },
  { title: "Good night", author: "Braden", isbn: 1134, readingStatus: true },
];

// Write a function that takes the book object as parameter and stores the new book in above books array..
