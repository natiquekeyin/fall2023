var body = document.body;
body.onclick = function (e) {
  document.querySelector("#xPos").innerText = e.clientX;
  document.querySelector("#yPos").innerText = e.clientY;
};

var cat = document.querySelector("#cat");
cat.onclick = function (e) {
  console.log("Cat clicked");
  e.stopPropagation();
};
