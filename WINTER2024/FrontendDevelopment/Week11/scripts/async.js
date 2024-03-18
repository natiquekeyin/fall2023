// let posts = [
//   {
//     id: 1,
//     author: "author1",
//     text: "Post1",
//   },
//   { id: 2, author: "author2", text: "Post2" },
//   { id: 3, author: "author3", text: "Post3" },
// ];

// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 3000);
// }

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach((post) => {
//       document.querySelector(
//         "#output"
//       ).innerHTML += `<ul><li>${post.id}</li><li>${post.author}</li><li>${post.text}</li></ul>`;
//     });
//   }, 1000);
// }

// createPost({ id: 4, author: "author4", text: "Post4" }); //taking 3 seconds
// getPosts(); // takes 1 second to execute..

document.querySelector("#btn1").addEventListener("click", loadData);

function loadData() {
  // 1. create an XHR object
  const xhr = new XMLHttpRequest();
  // 2.configure the request....
  xhr.open("GET", "./data/data.txt");
  // 3. Action on receving the data
  xhr.onload = function () {
    if (this.status === 200) {
      //   console.log(this.responseText);
      document.querySelector(
        "#output"
      ).innerHTML = `<strong>${this.responseText}</strong>`;
    }
  };
  //   4. Execute the request
  xhr.send();
}

document.querySelector("#btn2").addEventListener("click", loadJSON);

function loadJSON() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./data/user.json");
  xhr.onload = function () {
    if (this.status === 200) {
      const user = JSON.parse(this.responseText);
      //   console.log(user.email);
      const output = `<ul><li>ID:${user.id}</li><li>Name:${user.name}</li><li>Email:${user.email}</li><li>Company:${user.company}</li><li>Phone:${user.phone}</li><ul>`;

      document.querySelector("#output").innerHTML = output;
    }
  };
  xhr.send();
}

document.querySelector("#btn3").addEventListener("click", loadJSONS);

function loadJSONS() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./data/users.json");
  xhr.onload = function () {
    if (this.status === 200) {
      const users = JSON.parse(this.responseText);
      let output = "";

      users.forEach((user) => {
        output += `<ul class="list"><li>ID:${user.id}</li><li>Name:${user.name}</li><li>Email:${user.email}</li><li>Company:${user.company}</li><li>Phone:${user.phone}</li></ul>`;
      });

      document.querySelector("#output").innerHTML = output;
    }
  };
  xhr.send();
}

document.querySelector("#btn4").addEventListener("click", loadAPI);

function loadAPI() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://reqres.in/api/users?page=1");

  // POST, PUT, DELETE...
  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let output = "";

      response.data.forEach((user) => {
        output += `<div class="profile"><h3> ${user.first_name}</h3>
        <img src = "${user.avatar}" width="100" class="pic"/>  <p>${user.last_name} <br>  ${user.email}  
        <br/></div>`;
      });

      document.querySelector("#output").innerHTML = output;
    }
  };

  xhr.send();
}
