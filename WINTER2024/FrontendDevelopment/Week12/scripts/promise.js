// how to define a promise
// let p = new Promise((resolve, reject) => {
//   let a = 2 + 5;

//   if (a == 4) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });
// // how to use/call a promise
// // p.then().catch(); if resolve() ..then executes... if reject() ...catch executes

// p.then((message) => {
//   console.log("This is the then " + message);
// }).catch((message) => {
//   console.log("This is the catch" + message);
// });

let posts = [
  {
    id: 1,
    author: "author1",
    text: "Post1",
  },
  { id: 2, author: "author2", text: "Post2" },
  { id: 3, author: "author3", text: "Post3" },
];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      let error = true;
      if (!error) {
        resolve();
      } else {
        reject("Error:Something bad happened");
      }
    }, 3000);
  });
}

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      document.querySelector(
        "#output"
      ).innerHTML += `<ul><li>${post.id}</li><li>${post.author}</li><li>${post.text}</li></ul>`;
    });
  }, 1000);
}

// createPost({ id: 4, author: "author4", text: "Post4" });
// getPosts();

createPost({ id: 4, author: "author4", text: "Post4" })
  .then(getPosts)
  .catch((message) => {
    document.querySelector(
      "#output"
    ).innerHTML = `ERROR: LOOK AT THE MESSAGE: ${message}`;
  });
