<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title></title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <link rel="stylesheet" href="../styles/mainPage.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
  <link rel="stylesheet" href="../styles/dashboardAdmin.css">
</head>

<body class="vh-100">
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
              <a class="nav-link active" aria-current="page" href="./mainPage.php">Home</a>
            </li>
            <li class="nav-item mx-2 only-admin">
              <a class="nav-link" href="./dashboardAdmin.php">Dashboard</a>
            </li>
            <li class="nav-item mx-2 only-admin">
              <a class="nav-link" href="./viewBookings.php">Gestionar reservas</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" id="buttonLogOut" href="#">Cerrar sesión</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>