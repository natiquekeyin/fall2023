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
  fetch("./data/data1.txt")
    .then((res, rej) => {
      if (res.status !== 200) {
        rej("Error");
      } else {
        return res.text();
      }
    })
    .catch((message) => {
      document.querySelector("#output").innerHTML = `ERROR: ${message}`;
    })
    .then((data) => {
      //   console.log(data);
      document.querySelector(
        "#output"
      ).innerHTML = `The data received is: ${data}`;
    });
}
