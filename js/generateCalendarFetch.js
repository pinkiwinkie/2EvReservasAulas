/* ---GENERATE CALENDAR--- */
function formatDate(date) {
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0'); 
  var yyyy = date.getFullYear();
  return yyyy + '-' + mm + '-' + dd;
}

function generateWeeklyCalendar(jsonHours, holidays, days) {
  var weeklyCalendarContainer = document.getElementById("weekCalendar");
  weeklyCalendarContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar el nuevo contenido

  var table = document.createElement("table");
  table.border = "1";

  // Crear la fila de la cabecera con los números de los días y los nombres de los días de la semana
  var headerRow = document.createElement("tr");
  for (var i = 0; i < days.length; i++) {
      var th = document.createElement("th");
      th.textContent = days[i];
      headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  // Resto del código para generar el calendario...
  for (var i = 0; i < jsonHours.length; i++) {
      var tr = document.createElement("tr");
      var tdCalendar = document.createElement("td");
      tdCalendar.appendChild(document.createTextNode(jsonHours[i].start_time + " - " + jsonHours[i].end_time));
      tr.appendChild(tdCalendar);
      for (var j = 0; j < days.length; j++) {
          var td = document.createElement("td");
          var currentDay = new Date(currentDate);
          currentDay.setDate(currentDay.getDate() - currentDay.getDay() + j);
          var formattedDate = formatDate(currentDay);
          var holiday = holidays.find(holiday => holiday.holiday_date === formattedDate);
          if (holiday) {
              td.style.backgroundColor = "gray";
              td.appendChild(document.createTextNode(holiday.holiday_name));
          } else {
              var CalendarForDay = jsonHours[i];
              if (CalendarForDay && formattedDate in CalendarForDay) {
                  td.appendChild(document.createTextNode(CalendarForDay[formattedDate].start_time + " - " + CalendarForDay[formattedDate].end_time));
              }
          }
          tr.appendChild(td);
      }
      table.appendChild(tr);
  }

  weeklyCalendarContainer.appendChild(table);
}

function loadWeekSchedule() {
  // Obtener la lista de festivos
  fetch("http://localhost/2EvReservasAulas/services/serviceHoliday/holidayService.php", {
      method: "GET"
  })
  .then((res) => res.json())
  .then((holidays) => {
      // Obtener los datos del calendario
      fetch("http://localhost/2EvReservasAulas/services/serviceCalendar/calendarService.php", {
          method: "GET"
      })
      .then((res) => res.json())
      .then((data) => {
          updateMonth();
          var days = ["Horario", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
          generateWeeklyCalendar(data, holidays, days);
      })
      .catch(error => console.error('Error:', error));
  })
  .catch(error => console.error('Error:', error));
}

function updateMonth() {
  var monthCurrentElement = document.querySelector('.monthCurrent');
  var currentMonth = currentDate.toLocaleDateString('default', { month: 'long' });
  var currentYear = currentDate.getFullYear();
  monthCurrentElement.textContent = `${currentMonth} ${currentYear}`;
}

function loadPreviousWeek() {
  currentDate.setDate(currentDate.getDate() - 7);
  updateMonth();
  loadWeekSchedule();
}

function loadNextWeek() {
  currentDate.setDate(currentDate.getDate() + 7);
  updateMonth();
  loadWeekSchedule();
}

var currentDate = new Date();

// Lógica para cargar la semana anterior y la próxima semana
document.querySelector('.prev-btn').addEventListener("click", loadPreviousWeek);
document.querySelector('.next-btn').addEventListener("click", loadNextWeek);

loadWeekSchedule();
