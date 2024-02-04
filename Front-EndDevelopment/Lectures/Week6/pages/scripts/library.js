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
    var row = document.createElement("tr");
    row.innerHTML = `<td>${t}</td><td>${a}</td><td>${i}</td>`;

    document.querySelector("#book-list").appendChild(row);
  }
});
