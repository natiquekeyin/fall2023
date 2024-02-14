let tree = document.querySelector("#tree");

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

setInterval(() => {
  tree.src = loadTreeUrl();
}, 1000);
