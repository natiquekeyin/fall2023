window.addEventListener("DOMContentLoaded", function () {
  // get referenc to the form of html page...

  let form = document.querySelector("#book-form");

  form.addEventListener("submit", function (e) {
    var title = document.querySelector("#title").value;
    var author = document.querySelector("#author").value;
    var isbn = document.querySelector("#isbn").value;
    // now pass these three values to the function addBookToList() that will add the above book to the list on the bottom of the page....
    addBookToList(title, author, isbn); //end of October 12 lecture

    e.preventDefault();
  });

  //   this function will create a new row in the table of html page and add that data to the row of the table and show the data...
  function addBookToList(t, a, i) {
    // step1: create a new row...

    if (t === "" || a === "" || i === "") {
      showAlert("No field should be empty", "error");
    } else {
      var row = document.createElement("tr");
      row.innerHTML = `<td>${t}</td><td>${a}</td><td>${i}</td><td ><button class="delete">X</button></td>`;

      // append the row to the book-list ...section..
      document.querySelector("#book-list").appendChild(row);
      clearFields(); //to clear the fields
      showAlert("Book successfully added", "success");
    }
  }

  function clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }

  function showAlert(m, c) {
    // document.querySelector("#notification").innerText = m;
    var div = document.createElement("div");
    div.innerText = m;
    div.className = c;
    div.id = "box";

    document.querySelector("#notification").appendChild(div);

    setTimeout(function () {
      document.querySelector("#box").remove();
    }, 3000);
  }

  // to catch the delete button, associate a click event to the book-list area and catch the evt.target to check if delete button is clicked and remvoe the row....

  this.document
    .querySelector("#book-list")
    .addEventListener("click", function (evt) {
      deleteBook(evt.target);
    });

  function deleteBook(elemToDelete) {
    if (elemToDelete.className === "delete") {
      elemToDelete.parentElement.parentElement.remove(); //button is elemToDelete..so take its parent which is <td> .. take its partent which <tr> and remvoe it.....
      showAlert("Book deleted successfully", "success");
    } else {
      showAlert("Wrong area! click on X", "error");
    }
  }
});

// Persistant storage with localstorage ...
// Using the concept of OOP ..class and objects...
// Todo list type applicaiton...
