class Book {
  // a special method called constructor
  constructor(t, a, i) {
    this.title = t;
    this.author = a;
    this.isbn = i;
  }

  addBookToList(book) {
    var row = document.createElement("tr");
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td ><button class="delete">X</button></td>`;
    document.querySelector("#book-list").appendChild(row);
  }

  clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }

  showAlert(m, c) {
    var div = document.createElement("div");
    div.innerText = m;
    div.className = c;
    div.id = "box";
    document.querySelector("#notification").appendChild(div);
    setTimeout(function () {
      document.querySelector("#box").remove();
    }, 3000);
  }

  deleteBook(elemToDelete) {
    if (elemToDelete.className === "delete") {
      elemToDelete.parentElement.parentElement.remove(); //button is elemToDelete..so take its parent which is <td> .. take its partent which <tr> and remvoe it.....
      showAlert("Book deleted successfully", "success");
    } else {
      showAlert("Wrong area! click on X", "error");
    }
  }

  static test() {
    console.log("tsting");
  }
}

class Store {
  // this Store class will be used for multiple purposes,i)Store books in local storage,ii) retrieve books from locatl storage, iii)delete books from local storage...
  //   static classes, static functions ,static variables...
  //   static functions can be called from a class without creating object of that class
  //static memebers are  Class level memebers...
  // non static members are called object members...

  static getBooks() {
    var books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }

  static addBook(book) {
    var books = Store.getBooks();
    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));
  }

  static displayBooks() {
    var books = Store.getBooks();
    books.forEach((book) => {
      var objBook = new Book();
      objBook.addBookToList(book);
    });
  }

  static removeBook() {
    // write this code as practice for today...
  }
}

let form = document.querySelector("#book-form");

form.addEventListener("submit", function (e) {
  var title = document.querySelector("#title").value;
  var author = document.querySelector("#author").value;
  var isbn = document.querySelector("#isbn").value;
  var book = new Book(title, author, isbn);

  if (book.title === "" || book.author === "" || book.isbn === "") {
    book.showAlert("Now field shoud be empty", "error");
  } else {
    book.addBookToList(book);

    book.showAlert("Book Successfully added", "success");
    Store.addBook(book);
    book.clearFields();
  }
  e.preventDefault();
});

document.querySelector("#book-list").addEventListener("click", function (evt) {
  var book = new Book();
  book.deleteBook(evt.target);
  Store.removeBook(); //WRITE THIS CODE FOR PRACTICE...

  evt.preventDefault();
});

document.addEventListener("DOMContentLoaded", Store.displayBooks);
