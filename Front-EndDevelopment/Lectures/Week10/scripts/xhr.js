document.querySelector("#btn1").addEventListener("click", loadData);

function loadData() {
  // 1. create xhr object
  const xhr = new XMLHttpRequest();
  //   2. configure it
  xhr.open("GET", "./data/data.txt");

  //   3. what to do when data loads...
  xhr.onload = function () {
    if (this.status === 200) {
      //   console.log(this.responseText);
      document.querySelector("#output").innerText = this.responseText;

      //   200 OK
      //  300 moved
      // 400 resource not found
      // 500 server error
    }
  };

  // 4. Make the request...
  xhr.send();
}

document.querySelector("#btn2").addEventListener("click", loadJSON);

function loadJSON() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./data/user.json");
  xhr.onload = function () {
    if (this.status === 200) {
      //   console.log(this.responseText);
      //   const output = JSON.parse(this.responseText); //JSON.parse will convert the JSON data into normal javascript objects and we can read it then ...
      //   document.querySelector("#output").innerText = output.name;

      let user = JSON.parse(this.responseText);
      const output = `<ul><li>ID: ${user.id}</li><li>Name:${user.name}</li><li>Email:${user.email}</li><li>Phone:${user.phone}</li></ul>`;

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
      let users = JSON.parse(this.responseText);
      let output = "";

      users.forEach((user) => {
        output += `<li>ID: ${user.id}</li><li>${user.name}</li><hr>`;
      });

      document.querySelector("#output").innerHTML = output;
    }
  };

  xhr.send();
}

document.querySelector("#btn4").addEventListener("click", loadAPI);

function loadAPI() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://reqres.in/api/users");
  xhr.onload = function () {
    if (this.status === 200) {
      let output = "";
      const response = JSON.parse(this.responseText);
      response.data.forEach((value) => {
        output += `<div class="box">ID: ${value.id} <br> <img src="${value.avatar}" class="pic"/> <br> First Name ${value.first_name} <br> Email: ${value.email} <br></div>`;
      });
      document.querySelector("#output").innerHTML = output;
    }
  };

  xhr.send();
}

document.querySelector("#btn5").addEventListener("click", loadGithub);

function loadGithub() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users");
  xhr.onload = function () {
    if (this.status === 200) {
      let output = "";
      const response = JSON.parse(this.responseText);
      response.forEach((value) => {
        output += `<div class="box">ID: ${value.id} <br> <img src="${value.avatar_url}" class="pic"/> <br> First Name ${value.first_name} <br> Email: ${value.email} <br> My Web Address is <a href = "${value.url}">More..</a></div>`;
      });
      document.querySelector("#output").innerHTML = output;
    }
  };

  xhr.send();
}
