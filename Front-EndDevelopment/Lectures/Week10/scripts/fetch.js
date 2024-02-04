document.querySelector("#btn1").addEventListener("click", loadData);

// function loadData() {
//   fetch("./data/data.txt")
//     .then((res) => {
//       return res.text();
//     })
//     .then((data) => {
//       document.querySelector("#output").innerText = data;
//     })
//     .catch((err) => {
//       console.log("Not recieved", err);
//     });
// }

// left btn2 for your own practice...

document.querySelector("#btn3").addEventListener("click", loadJSONS);

function loadJSONS() {
  fetch("./data/users.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   console.log(data);
      let output = "";
      data.forEach((item) => {
        output += `<li>${item.name}</li><li>${item.email}</li> <hr>`;
      });

      document.querySelector("#output").innerHTML = output;
    });
}

document.querySelector("#btn5").addEventListener("click", loadGithub);

function loadGithub() {
  fetch("https://api.github.com/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = "";

      data.forEach((value) => {
        output += `<div class="box">ID: ${value.id} <br> <img src="${value.avatar_url}" class="pic"/> <br> First Name ${value.name} <br> Email: ${value.email} <br> My Web Address is <a href = "${value.url}">More..</a></div>`;
      });
      document.querySelector("#output").innerHTML = output;
    });
}

// Aysnc/Await... IMPORTANT....
