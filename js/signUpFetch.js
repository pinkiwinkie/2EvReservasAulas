var buttonRegister = document.getElementById('registerButton');

buttonRegister.addEventListener("click", function (e) { 
  e.preventDefault();

  let nameInput = document.getElementById('name');
  let usernameInput = document.getElementById('username');
  let emailInput = document.getElementById('email');
  let pwdInput = document.getElementById('pwd');

  let name = nameInput.value;
  let username = usernameInput.value;
  let email = emailInput.value;
  let pwd = pwdInput.value;

  var dates = new FormData();
  dates.append('names', name);
  dates.append('username', username);
  dates.append('email', email);
  dates.append('pwd', pwd);
  dates.append('user_type',"noAdmin");

  if (name === "" || username === "" || email === "" || pwd === "") {
    alert("Introduce valores");
  } else {
    fetch("http://localhost/proyectoReservasAulas/services/serviceUser/userService.php", {
      method: "POST",
      body: dates,
    })
      .then((res) => res.json())
      .then((data) => { 
        console.log(data);
        if (data == "noInsertado") {
          alert("El usuario ya existe");
        } else {
          alert("Usuario registrado correctamente");
          nameInput.value = "";
          usernameInput.value = "";
          emailInput.value = "";
          pwdInput.value = "";
        }
      });
  }
})