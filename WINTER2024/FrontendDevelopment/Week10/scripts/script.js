// No script should run untill the whole DOM tree is loaded in the memory of the browser

window.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("#book-form");

  form.addEventListener("submit", function (e) {
    var title = document.querySelector("#title").value;
    var author = document.querySelector("#author").value;
    var isbn = document.querySelector("#isbn").value;

    addBookToList(title, author, isbn);
    clearFields();

    e.preventDefault();
  });
  // addBookToList() will create a new row in the table on html page...
  function addBookToList(t, a, i) {
    if (t === "" || a === "" || i === "") {
      alert("No field should be empty");
    } else {
      var row = document.createElement("tr");
      row.innerHTML = `<td>${t}</td><td>${a}</td><td>${i}</td>`;

      // console.log(row);

      document.querySelector("#book-list").appendChild(row);
    }
  }

  function clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
});
