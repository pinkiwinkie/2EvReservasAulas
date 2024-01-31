<?php
include "./include/header.php"
?>
<!-- CALENDAR -->
<main>
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
</main>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
<script src="../js/mainPage.js"></script>
<script src="../js/generateCalendarFetch.js"></script>
</body>

</html>