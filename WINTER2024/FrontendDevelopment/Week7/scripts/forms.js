let form = document.querySelector("#registration");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;

  document.querySelector("#nm").innerText = parseInt(name) + parseInt(email);

  //   document.querySelector("#nm").innerText = name.toUpperCase();
  //   document.querySelector("#em").innerText = email;

  e.preventDefault();
}

// the value always comes out as string.. so you will always need to convert it if doing a mathematical calculation..
