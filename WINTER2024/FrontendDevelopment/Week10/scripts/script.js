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
      showAlert("No field should be empty", "error");
    } else {
      var row = document.createElement("tr");
      row.innerHTML = `<td>${t}</td><td>${a}</td><td>${i}</td><td><button class="delete">X</button></td>`;

      // console.log(row);

      document.querySelector("#book-list").appendChild(row);
      showAlert("Book successfully added", "success");
    }
  }

  function clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }

  function showAlert(m, c) {
    let div = document.createElement("div");
    div.innerHTML = `<p>${m}</p>`;
    // console.log(div);
    div.className = c;
    div.id = "box";
    let container = document.querySelector(".container");
    container.insertBefore(div, form);

    setTimeout(function () {
      document.querySelector("#box").remove();
    }, 1000);
  }

  // to catch the delete button, associate a click event to the data area...

  document.querySelector("#data").addEventListener("click", function (evt) {
    // console.log(evt.target);
    deleteBook(evt.target);
  });

  function deleteBook(elemToDelete) {
    // console.log(elemToDelete);

    if (elemToDelete.className === "delete") {
      // console.log("Right area");

      elemToDelete.parentElement.parentElement.remove();
      showAlert("Book deleted successfully", "success");
    } else {
      showAlert("You clicked wrong area", "error");
    }
  }
});

// Convert above functional code to the Object oriented code! Means we want to introduce the concept of "CLASSES" and objects in JavaScript!... OOP...
