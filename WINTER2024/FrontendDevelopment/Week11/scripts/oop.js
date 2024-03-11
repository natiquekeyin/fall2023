class Book {
  constructor(t, a, i) {
    this.title = t;
    this.author = a;
    this.isbn = i;
  }

  addBookToList(book) {
    var row = document.createElement("tr");
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td><button class="delete">X</button></td>`;

    document.querySelector("#book-list").appendChild(row);
  }

  clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }

  showAlert() {}
}

window.addEventListener("DOMContentLoaded", function (e) {
  let form = document.querySelector("#book-form");

  form.addEventListener("submit", function (e) {
    var title = document.querySelector("#title").value;
    var author = document.querySelector("#author").value;
    var isbn = document.querySelector("#isbn").value;

    var book = new Book(title, author, isbn);
    if (book.title === "" || book.author === "" || book.isbn === "") {
      alert("no field shoud be empty");
    } else {
      book.addBookToList(book); //call the addBookToList() mehtod here...
      book.clearFields();
    }

    e.preventDefault();
  });
});
