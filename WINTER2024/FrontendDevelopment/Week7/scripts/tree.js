let tree = document.querySelector("#tree");
let body = document.body;

tree.addEventListener("click", function (e) {
  tree.src = loadTreeUrl();
  e.stopPropagation();
});

let currentUrl = 0;
function loadTreeUrl() {
  if (currentUrl === links.length - 1) {
    currentUrl = 0;
  }

  currentUrl++;
  return links[currentUrl];
}

body.addEventListener("click", function (e) {
  document.querySelector("#posX").innerText = e.clientX;

  document.querySelector("#posY").innerText = e.clientY;
});

let startButton = document.querySelector("#btn-start");
let endButton = document.querySelector("#btn-end");
let timerId;

startButton.onclick = function (e) {
  // if the user clics it more than once, ignore it once it's running
  if (timerId) {
    return;
  }

  let currentDate = document.querySelector("#p1");
  currentDate.removeAttribute("hidden");

  timerId = setInterval(function () {
    let now = new Date();
    currentDate.innerHTML = now.toLocaleString();
  }, 1000);
};

endButton.onclick = function (e) {
  if (!timerId) {
    return;
  }

  // stop the timer..
  clearInterval(timerId);
  timerId = null;
};

// to get urls from links.js to the page..

let picBtn = document.querySelector("#pics");

picBtn.onclick = function (e) {
  let ol = document.createElement("ol");
  links.forEach((url) => {
    let li = document.createElement("li");
    li.innerHTML = `<a href="${url}"> <img src="${url}" width="200" alt="pic" class="thumb"/> ${url} </a>`;
    ol.appendChild(li);
  });
  document.querySelector("#urls").appendChild(ol);
};
