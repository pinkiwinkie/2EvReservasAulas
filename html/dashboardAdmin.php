<?php
include "./include/header.php"
?>

<main>
  <div class="mainContainer">
    <div class="row">
      <div class="d-flex justify-content-around vh-100">
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
      </div>
    </div>
    <div class="row">
      <div class="d-flex justify-content-center align-items-center container-add-calendar">
        <div class="p-5 rounded-5 text-secondary" style="width: 25rem;">
          <div class="d-flex justify-content-center">
            <i class="bi bi-calendar-fill" style="font-size: 100px;"></i>
          </div>
          <div class="text-center fs-3 fw-bold">Añadir calendario</div>
          <div class="input-group mt-4">
            <div class="input-group-text bg-info">
              <i class="bi bi-person-fill text-white"></i>
            </div>
            <input id="nameCalendar" class="form-control" type="text" placeholder="Nombre del calendario">
          </div>
          <div class="input-group mt-1">
            <div class="input-group-text bg-info">
              <i class="bi bi-envelope-fill text-white"></i>
            </div>
            <input id="startTime" class="form-control" type="text" placeholder="Hora de inicio (hh:mm)">
          </div>
          <div class="input-group mt-1">
            <div class="input-group-text bg-info">
              <i class="bi bi-envelope-fill text-white"></i>
            </div>
            <input id="endTime" class="form-control" type="text" placeholder="Hora de fin (hh:mm)">
          </div>
          <div class="input-group mt-1">
            <div class="input-group-text bg-info">
              <i class="bi bi-lock-fill text-white"></i></i>
            </div>
            <input id="numPatios" class="form-control" type="text" placeholder="Número de patios">
          </div>
          <div class="input-group mt-1">
            <div class="input-group-text bg-info">
              <i class="bi bi-lock-fill text-white"></i></i>
            </div>
            <input id="startHourPatio" class="form-control" type="text" placeholder="Hora de comienzo del patio*">
          </div>
          <div class="input-group mt-1">
            <div class="input-group-text bg-info">
              <i class="bi bi-lock-fill text-white"></i></i>
            </div>
            <input id="timePatios" class="form-control" type="text" placeholder="Duración patio">
          </div>
          <div class="input-group mt-1">
            <div class="input-group-text bg-info">
              <i class="bi bi-lock-fill text-white"></i></i>
            </div>
            <input id="timeClasses" class="form-control" type="text" placeholder="Duración clases">
          </div>
          <div id="addCalendarButton" class="btn btn-info text-white w-100 mt-4">Crear</div>
          <p class="mt-4">* Si hay más de un patio, separar las horas por comas</p>
        </div>
      </div>
    </div>
  </div>
</main>
<script src="../js/mainPage.js"></script>
<script src="../js/signUpFetch.js"></script>
</body>

</html>