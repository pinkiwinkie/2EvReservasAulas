<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Página principal</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <link rel="stylesheet" href="../styles/mainPage.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
</head>

<body class="vh-100 overflow-hidden">
  <!-- NAVBAR -->
  <nav class="navbar navbar-expand-lg bg-info">
    <div class="container-fluid">
      <!-- LOGO -->
      <p class="fs-4 usernameTitle"></p>
      <!-- TOGGLE BUTTON -->
      <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- SIDEBAR -->
      <div class="offcanvas offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel">
        <!-- SIDEBAR HEADER -->
        <div class="offcanvas-header border-bottom">
          <h5 class="offcanvas-title usernameTitle" id="offcanvasNavbarLabel">Nombre usuario</h5>
          <button type="button" class="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <!-- SIDEBAR BODY -->
        <div class="offcanvas-body bg-info">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item mx-2">
              <a class="nav-link" aria-current="page" href="./mainPage.html">Home</a>
            </li>
            <li class="nav-item mx-2 only-admin">
              <a class="nav-link" href="./generateHolidays.html">Introducir festivos</a>
            </li>
            <li class="nav-item mx-2 only-admin">
              <a class="nav-link" href="./viewBookings.html">Gestionar reservas</a>
            </li>
            <li class="nav-item mx-2 only-admin">
              <a class="nav-link" href="./generatecalendar.html">Generar calendario</a>
            </li>
            <li class="nav-item mx-2 only-admin">
              <a class="nav-link active" href="./generateSpaces.html">Crear espacios</a>
            </li>
            <li class="nav-item mx-2 only-admin">
              <a class="nav-link" href="./registro.html">Añadir Usuario</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="./updatePerfil.html">Configurar perfil</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" id="buttonLogOut" href="#">Cerrar sesión</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <main class="d-flex justify-content-center vh-100">
    <div class="bg-white p-5 rounded-5 text-secondary" style="width: 25rem;">
      <div class="d-flex justify-content-center">
        <i class="bi bi-person-circle icon-person" style="font-size: 100px;"></i>
      </div>
      <div class="text-center fs-1 fw-bold">Crear aulas</div>
      <div id="containerInput">
        <div class="input-group mt-4">
          <div class="input-group-text bg-info">
            <i class="bi bi-person-fill text-white"></i>
          </div>
          <input name="nameSpace" class="form-control" type="text" placeholder="Tipo de aula y piso" data-index="000">
        </div>
      </div>
      <div id="addSpace" type="button" class="btn btn-info text-white w-100 mt-4">+</div>
      <div id="registerSpaceButton" type="button" class="btn btn-info text-white w-100 mt-4">Crear espacios</div>
    </div>
    <div class="p-5 mt-4">
      <div class="d-flex justify-content-center align-items-center">
        Todos los espacios
      </div>
      <hr>
      <div class="containerSpacesGenerated"></div>
    </div>
  </main>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
    crossorigin="anonymous"></script>
  <script src="../js/mainPage.js"></script>
  <script src="../js/generateSpacesFetch.js"></script>
</body>

</html>