// const posts = [
//   { title: "Post1", author: "Author1", body: "Post1 body here" },
//   { title: "Post2", author: "Author2", body: "Post2 body here" },
//   { title: "Post3", author: "Author3", body: "Post3 body here" },
// ];

// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//     // cb();
//   }, 3000);
// }

// function getPosts() {
//   setTimeout(function () {
//     let output = "";
//     posts.forEach(function (post) {
//       output += `${post.author}<br>`; //+ concatenate the previous output with new one
//     });
//     document.querySelector("#data").innerHTML = output;
//   }, 1000);
// }

// createPost({ title: "Post4", author: "Author4", body: "Post4 body here" });
// getPosts();

// how to define promise in JS?

// let p = new Promise(); we define a new promise...

// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;

//   if (a == 2) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

// p.then((message) => {
//   console.log("This is in then " + message);
// }).catch((error) => {
//   console.log("This is catch " + error);
// });

// const onMyBirthday = (isKayoSick) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!isKayoSick) {
//         resolve(2);
//       } else {
//         reject(new Error("I am sad"));
//       }
//     }, 2000);
//   });
// };

// onMyBirthday(true)
//   .then((message) => {
//     console.log(`I have ${message} cakes! Thanks Kayo!`);
//   })
//   .catch((error) => {
//     console.log(`Alas! we dont have any cakes, the message is ${error}`);
//   })
//   .finally(() => {
//     console.log("Party is going on");
//   });

// Try completing the guessing game from freecodecamp article...
//https://www.freecodecamp.org/news/learn-promise-async-await-in-20-minutes/
