let body = document.body;
let pic = document.querySelector("#pic1");

function handlePic(evt) {
  console.log("Tree clicked");
  evt.stopPropagation();
}

function handleClick(e) {
  console.log("Body Clicked");
}

body.addEventListener("click", handleClick);
pic.addEventListener("click", handlePic);
