// console.log(fetch("./data/data.txt"));

// fetch("./data/data.txt")
//   .then((res) => {
//     return res.text();
//   })
//   .then((data) => {
//     console.log(data);
//   });

document.querySelector("#btn1").addEventListener("click", loadData);

function loadData() {
  fetch("./data/data.txt")
    .then((res) => {
      return res.text();
    })

    .then((data) => {
      //   console.log(data);
      document.querySelector(
        "#output"
      ).innerHTML = `The data received is: ${data}`;
    });
}

// Get user & Get users for practice -

document.querySelector("#btn4").addEventListener("click", loadAPI);

function loadAPI() {
  fetch("https://api.github.com/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = "";
      data.forEach((user) => {
        output += `<div class="profile"> <h3>${user.id}-${user.login}</h3> <img src="${user.avatar_url}" alt="ProfilePic" class="pic"/> <br>
        Want to know more about me click on <a href="${user.html_url}">More...</a>  </div>`;
      });
      document.querySelector("#output").innerHTML = output;
    });
}

const fetchData = async () => {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
  // console.log(data);

  let output = "";
  data.forEach((user) => {
    output += `<div class="profile"> <h3>${user.id}-${user.login}</h3> <img src="${user.avatar_url}" alt="ProfilePic" class="pic"/> <br>
    Want to know more about me click on <a href="${user.html_url}">More...</a>  </div>`;
  });
  document.querySelector("#output").innerHTML = output;
};

const fetchData1 = async () => {
  try {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    let output = "";
    data.forEach((user) => {
      output += `<div class="profile"> <h3>${user.id}-${user.login}</h3> <img src="${user.avatar_url}" alt="ProfilePic" class="pic"/> <br>
    Want to know more about me click on <a href="${user.html_url}">More...</a>  </div>`;
    });
    document.querySelector("#output").innerHTML = output;
  } catch (err) {
    document.querySelector(
      "#output"
    ).innerHTML = `<strong>API data not recieved because: ${err}</strong>`;
  }
};

document.querySelector("#btn5").addEventListener("click", fetchData1);
