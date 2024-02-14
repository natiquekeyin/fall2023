let body = document.body;

function handleClick(e) {
  document.querySelector("#l2").innerText = "Hello world";

  document.querySelector("#pic1").src = "./images/domtree.jpg";
}

body.addEventListener("click", handleClick);
