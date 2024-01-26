<?php
include "./include/header.php";
?>
<main class="d-flex justify-content-around vh-100">
  <div class="bg-white p-5 rounded-5 text-secondary" style="width: 25rem;">
    <div class="d-flex justify-content-center">
      <i class="bi bi-person-circle icon-person" style="font-size: 100px;"></i>
    </div>
    <div class="text-center fs-1 fw-bold">Registro</div>
    <div class="input-group mt-4">
      <div class="input-group-text bg-info">
        <i class="bi bi-person-fill text-white"></i>
      </div>
      <input id="name" class="form-control" type="text" placeholder="Nombre completo">
    </div>
    <div class="input-group mt-1">
      <div class="input-group-text bg-info">
        <i class="bi bi-envelope-fill text-white"></i>
      </div>
      <input id="username" class="form-control" type="text" placeholder="Usuario">
    </div>
    <div class="input-group mt-1">
      <div class="input-group-text bg-info">
        <i class="bi bi-envelope-fill text-white"></i>
      </div>
      <input id="email" class="form-control" type="email" placeholder="Correo electrónico">
    </div>
    <div class="input-group mt-1">
      <div class="input-group-text bg-info">
        <i class="bi bi-lock-fill text-white"></i></i>
      </div>
      <input id="pwd" class="form-control" type="password" placeholder="Contraseña">
    </div>
    <div id="registerButton" class="btn btn-info text-white w-100 mt-4">Registro</div>
  </div>
  <div class="allUsers">
    <h3 class="p-5">Usuarios registrados</h3>
    <div id="users"></div>
  </div>
</main>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
<script src="../js/mainPage.js"></script>
<script src="../js/signUpFetch.js"></script>
</body>

</html>