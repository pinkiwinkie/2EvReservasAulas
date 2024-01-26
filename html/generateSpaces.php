<?php
include "./include/header.php";
?>
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
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
<script src="../js/mainPage.js"></script>
<script src="../js/generateSpacesFetch.js"></script>
</body>

</html>