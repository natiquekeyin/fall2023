// Finding the reference to the paragraph element

var p = document.querySelector("#p1");

// apply an onclick event to the p
p.onclick = function () {
  //   alert("P clicked!");

  document.querySelector("#p2").innerText = "I am changed now!";
};

var pic = document.querySelector("#pic");
pic.onclick = function () {
  var p = document.querySelector("#pic1");
  p.src = "./images/pic2.jpg";
  document.querySelector("#p2").innerText = "NICE PICTURE ....";
};
