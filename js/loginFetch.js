var buttonLogin = document.getElementById("button-login");

buttonLogin.addEventListener("click", function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let pwd = document.getElementById("pwd").value;

  console.log(email);
  console.log(pwd);

  var dates = new FormData();

  dates.append('email', email);
  dates.append('pwd', pwd);

  console.log(dates);

  if (email === "" || pwd === "") {
    alert("Introduce valores");
  } else {
    fetch(`http://localhost/2EvReservasAulas/services/serviceUser/userService.php?email=${email}&pwd=${pwd}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data == "noConfirmado") {
          alert("Credenciales incorrectas");
        } else {
          localStorage.setItem("user", JSON.stringify(data));
          window.location.href = "./html/mainPage.php";
        }
      })
  }
});