// // Async/Await... easiest amongst all..
// // we make async functions that have the capability to await for any promises to be done ..

// // an async function returns a promise..

// // async function myFunc() {
// //   return "Hello";
// // }

// // myFunc().then((m) => console.log(m));

// // async function myFunc() {
// //   const promise = new Promise((resolve, reject) => {
// //     setTimeout(() => resolve("Hello"), 5000);
// //   });

// //   const res = await promise;
// //   return res;
// // }

// // myFunc().then((res) => console.log(res));

// async function loadData() {
//   let number = document.querySelector("#num").value;
//   let response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
//   const data = await response.json();
//   console.log(data);
//   let output = "";
//   data.forEach((value) => {
//     output += value.title;
//   });
// }

// document.querySelector("#btn").addEventListener("click", loadData);

// // loadData().then((data) => console.log(data));

// // async function loadData() {
// //   let response = await fetch("data.txt");
// //   response = await response.text();

// //   return response;
// // }

// // loadData().then((data) => console.log(data));

// // async function fetchData() {
// //   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
// //   const data = await response.json();
// //   console.log(data);
// // }

// // fetchData();

// // const fetchData = async () => {
// //   const res = await fetch("https://restcountries.eu/rest/v2/alpha/col"); // fetch() returns a promise, so we need to wait for it

// //   const country = await res.json(); // res is now only an HTTP response, so we need to call res.json()

// //   console.log(country); // Columbia's data will be logged to the dev console
// // };

// // fetchData();

async function fetchData() {
  let number = document.querySelector("#num").value;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${number}`
  );
  const data = await response.json();
  //console.log(data);
  document.querySelector("#output").innerText = data.title;
}

document.querySelector("#btn").addEventListener("click", fetchData);
