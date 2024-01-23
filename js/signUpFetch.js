var buttonRegister = document.getElementById('registerButton');
var divUsers = document.getElementById("users");

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
  dates.append('user_type', "noAdmin");

  if (name === "" || username === "" || email === "" || pwd === "") {
    alert("Introduce valores");
  } else {
    fetch("http://localhost/2EvReservasAulas/services/serviceUser/userService.php", {
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
          updateListUsers();
        }
      });
  }
})
updateListUsers();

function updateListUsers() {
  fetch("http://localhost/2EvReservasAulas/services/serviceUser/userService.php")
    .then((response) => response.json())
    .then((data) => {

      if (data.length > 0) {
        const userListHTML = `
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${data.map((user) => {
                return `
                  <tr>
                    <td>${user.username}</td>
                    <td>${user.names}</td>
                    <td>
                      <button class="btn btn-danger" onclick="deleteUser('${user.email}')">
                        <i class="bi bi-trash"></i> Delete
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        `;

        divUsers.innerHTML = userListHTML;
      } else {
        divUsers.innerHTML = "<p>No hay usuarios registrados</p>";
      }
    })
    .catch((error) => console.error("Error al obtener la lista de usuarios:", error));
}

function deleteUser($email){

  alert($email);
  fetch("http://localhost/2EvReservasAulas/services/serviceUser/userService.php")
  .then((response) => response.json())
  .then((data) => {

  }) .catch((error) => console.error("Error al eliminar: ", error));
}