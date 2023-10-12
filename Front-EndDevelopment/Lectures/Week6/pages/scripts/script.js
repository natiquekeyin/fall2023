// dog.onclick = function () {
//   console.log("dog clicked!");
// };
// get reference of the dog picture in js

// var dog = document.getElementById("dog");
// associate an event with dog element...

//   dog.addEventListener("click", handleClick);

//   function handleClick(e) {
//     dog.src =
//       "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60";

//     e.stopPropagation();
//   }

window.addEventListener("DOMContentLoaded", function () {
  var dog = document.querySelector("#dog");
  var next = document.querySelector("#next");

  next.addEventListener("click", handleClick);

  function handleClick(e) {
    dog.src = nextDogImageUrl();
    e.stopPropagation();
  }

  var currentDogIndex = 0;
  function nextDogImageUrl() {
    currentDogIndex++;

    if (currentDogIndex === dogs.length) {
      currentDogIndex = 0;
    }

    return dogs[currentDogIndex];
  }

  var load = document.querySelector("#load");

  load.addEventListener("click", loadUrls);

  function loadUrls(e) {
    var ol = document.createElement("ol");
    dogs.forEach(function (url) {
      var li = document.createElement("li");
      li.innerHTML = `<a href="${url}">${url}</a>`;
      ol.appendChild(li);
    });

    document.querySelector("#url-list").appendChild(ol);
  }

  this.setTimeout(function () {
    next.remove();
    load.remove();
  }, 3000);

  this.setInterval(function () {
    dog.src = nextDogImageUrl();
  }, 1000);
});

// setTimeout();
// setInterval();
