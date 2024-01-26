<?php
include "./include/header.php";
?>
<main class="d-flex ms-5 vh-100">
  <div class="row">
    <div class="col-6">
      <div class="d-flex justify-content-center align-items-center container-add-calendar">
        <div class="p-5 rounded-5 text-secondary" style="width: 25rem;">
          <div class="d-flex justify-content-center">
            <i class="bi bi-calendar-fill" style="font-size: 100px;"></i>
          </div>
          <div class="text-center fs-2 fw-bold">Añadir calendario</div>
          <div class="input-group mt-4">
            Hora inicio
            <input id="startTime" class="ms-2 form-control" type="time">
          </div>
          <div class="input-group mt-1">
            Hora final 
            <input id="endTime" class="ms-2 form-control" type="time" placeholder="Hora de fin">
          </div>
          <div id="addCalendarButton" class="btn btn-info text-white w-100 mt-4">Crear</div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="d-flex justify-content-center align-items-center container-add-calendar">
        <div class="p-5 rounded-5 text-secondary" style="width: 25rem;">
          <div class="d-flex justify-content-center">
            <i class="bi bi-person-circle icon-person" style="font-size: 100px;"></i>
          </div>
          <div class="text-center fs-2 fw-bold">Crear aulas</div>
          <div id="containerInput">
            <div class="input-group mt-4">
              <div class="input-group-text bg-info">
                <i class="bi bi-person-fill text-white"></i>
              </div>
              <input name="nameSpace" class="form-control" type="text" placeholder="Tipo de aula y piso" data-index="000">
            </div>
          </div>
          <div id="registerSpaceButton" type="button" class="btn btn-info text-white w-100 mt-4">Crear espacios</div>
        </div>
      </div>
    </div>
  </div>
</main>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
<script src="../js/mainPage.js"></script>
<script src="../js/generateCalendarFetch.js"></script>
</body>

</html>