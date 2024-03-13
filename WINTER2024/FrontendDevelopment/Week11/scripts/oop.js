let form = document.querySelector("#book-form");

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

  showAlert(m, c) {
    let div = document.createElement("div");
    div.innerHTML = `<p>${m}</p>`;
    // console.log(div);
    div.className = c;
    div.id = "box";
    let container = document.querySelector(".container");
    container.insertBefore(div, form); // insert div before form

    setTimeout(function () {
      document.querySelector("#box").remove();
    }, 1000);
  }

  deleteBook(elemToDelete) {
    if (elemToDelete.className === "delete") {
      // console.log("Right area");

      elemToDelete.parentElement.parentElement.remove();
      this.showAlert("Book deleted successfully", "success");
    } else {
      this.showAlert("You clicked wrong area", "error");
    }
  }
}

// Store class will be used to stroe and retrieve teh books we have added to the local storage...

class Store {
  static addBook(book) {
    var books = Store.getBooks(); //read the memory if there are any books stored already
    books.push(book); //push the "book" to the books array you got in last step

    localStorage.setItem("books", JSON.stringify(books)); //we need to convert our array to json to store in memroy- stringify() converts a normal array to JSON array...{"name":"ALan"}
  }
  static getBooks() {
    var books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books")); //parse() method converts teh json data into normal java script objects...
    }
    return books;
  }
  static displayBooks() {
    var books = Store.getBooks();
    books.forEach((book) => {
      var objBook = new Book();
      objBook.addBookToList(book);
    });
  }
  static removeBooks(remBook) {
    // read the books from memory..
    // filter the books by leaving out the book passed as paramter "remBook"
  }
}

// first I will need to create object of this calss..

window.addEventListener("DOMContentLoaded", function (e) {
  Store.displayBooks();
  form.addEventListener("submit", function (e) {
    var title = document.querySelector("#title").value;
    var author = document.querySelector("#author").value;
    var isbn = document.querySelector("#isbn").value;

    var book = new Book(title, author, isbn);
    if (book.title === "" || book.author === "" || book.isbn === "") {
      book.showAlert("no field shoud be empty", "error");
    } else {
      book.addBookToList(book); //call the addBookToList() mehtod here...
      book.clearFields();
      Store.addBook(book);
      book.showAlert("Book successfully added", "success");
    }

    e.preventDefault();
  });

  document.querySelector("#data").addEventListener("click", function (evt) {
    var book = new Book(); //create this object to get access to delteBook() method
    book.deleteBook(evt.target);
    Store.removeBooks(evt.target); //this call will remove the book from the local storage by calling remvoeBook() method from Store class...
    evt.preventDefault();
  });
});

// end of function
