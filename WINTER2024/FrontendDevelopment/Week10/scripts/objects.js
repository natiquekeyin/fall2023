// let list = [1, 2, 3, 4];
// list[0] = 1;
// list[1] = 2;

// let x = 10;

// Object datatype:

// let obj = {}; //empty object literal

// let obj1 = { course: "JavaScript", college: "Keyin" };

// // let obj1 = {key:value,key:value};

// let student1 = {
//   name: "Alan Smith",
//   course: "JavaScript",
//   section: "B",
//   school: "Keyin",
// };

// // console.log(student1["name"]); //Index notation!
// console.log(student1.name); // dot notation!- PREFERRED
// console.log(student1.school);

// student1.name = "Bob Smith";
// console.log(student1.name);

// console.log(student1);

// let lat = 45.2223;
// let lng = -90.1234;

// let keyin = [45.2223, -90.1234];

// console.log(keyin[0], keyin[1]);

// let keyin = { lat: 45.2223, lng: -90.1234 };

// console.log(keyin.lng);

// let user = {
//   firstName: "First",
//   lastName: "Last",
//   email: "first@gmail.com",
//   loggedIn: false,
//   level: 3,
// };

// function login(user) {
//   user.loggedIn = true;
// }

// console.log(user);
// login(user);
// console.log(user);

// let users = [
//   {
//     firstName: "First",
//     lastName: "Last",
//     email: "first@gmail.com",
//     loggedIn: false,
//     level: 3,
//   },
//   {
//     firstName: "Second",
//     lastName: "Last",
//     email: "second@gmail.com",
//     loggedIn: true,
//     level: 2,
//   },
//   {
//     firstName: "Third",
//     lastName: "Last",
//     email: "third@gmail.com",
//     loggedIn: false,
//     level: 8,
//   },
// ];

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i].level);
// }

// users.forEach((user) => {
//   console.log(user.level);
// });

// let user = {
//   firstName: "First",
//   lastName: "Last",
//   email: "first@gmail.com",
//   loggedIn: false,
//   level: 3,
//   hobbies: ["cycling", "reading", "whatever"],
//   pref: { color: "red", model: "Volvo" },
//   login: function () {
//     this.loggedIn = true;
//   },
//   logout: function () {
//     this.loggedIn = false;
//   },
// };

// console.log(user.loggedIn);
// user.login();
// console.log(user.loggedIn);
// user.logout();
// console.log(user.loggedIn);

// let user = {
//   firstName: "Alan",
//   lastName: "Smith",
//   email: "alan@gmail.com",
//   loggedIn: false,
//   level: 3,
//   hobbies: ["cycling", "reading", "whatever"],
//   pref: { color: "red", model: "Volvo" },
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
//   level: 7,
//   hobbies: ["reading", "whatever"],
//   pref: { color: "green", model: "Volvo" },
//   login: function () {
//     this.loggedIn = true;
//   },
//   logout: function () {
//     this.loggedIn = false;
//   },
// };

// Constructor function:
// it should alwasy start with a "Capital letter"
// it constructs an object...

function User(f, l, a) {
  this.firstName = f;
  this.lastName = l;
  this.age = a;
  this.loggedIn = false;
  this.section = "A";
  this.college = "Keyin";
  //   this.login = function () {
  //     this.loggedIn = true;
  //   };
  //   this.logout = function () {
  //     this.loggedIn = false;
  //   };
}

User.prototype.login = function () {
  this.loggedIn = true;
};

User.prototype.logout = function () {
  this.loggedIn = false;
};

// let user1 = new User("Alan", "Smith", 22);
// let user2 = new User("Bob", "Woolmer", 22);
// let user1000 = new User("Zak", "Somthig", 24);

// // user1.firstName = "Michael";
// // console.log(user1);

// // console.log(user1);
// // console.log(user2);
// // console.log(user1000);

// user1.login();
// console.log(user1);

let noman = new User("Noman", "Atique", 44);
console.log(noman);
noman.login();
console.log(noman);
noman.logout();
console.log(noman);
