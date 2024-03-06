<?php
include "./include/header.php"
?>
<!-- CALENDAR -->
<main>
  <div class="container">
    <div class="reservationForm">
      <h2>Realizar reserva</h2>
      <form id="reservationForm">
        <label for="space">Aula:</label>
        <select name="space" id="space">
          
        </select>
        <label for="startDate">Fecha de inicio:</label>
        <input type="date" id="startDate" name="startDate">
        <label for="endDate">Fecha de fin:</label>
        <input type="date" id="endDate" name="endDate">
        <label for="startTime">Hora de inicio:</label>
        <input type="time" id="startTime" name="startTime">
        <label for="endTime">Hora de finalización:</label>
        <input type="time" id="endTime" name="endTime">
        <button type="submit">Reservar</button>
      </form>
    </div>
    <div class="calendarContainer">
      <div>
        <button class="morningCalendar">Mañana</button>
        <button class="eveningCalendar">Tarde</button>
      </div>
      <div class="calendarHeader">
        <div class="btn prev-btn" onclick="loadPreviousWeek()">
          <i class="bi bi-chevron-left"></i>Semana anterior
        </div>
        <div class="monthCurrent"></div>
        <div class="btn next-btn" onclick="loadNextWeek()">
          Próxima semana<i class="bi bi-chevron-right"></i>
        </div>
      </div>
      <div id="weekCalendar">
      </div>
    </div>
  </div>
</main>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
<script src="../js/mainPage.js"></script>
<script src="../js/generateCalendarFetch.js"></script>
<script src="../js/makeBookings.js"></script>
</body>

</html>