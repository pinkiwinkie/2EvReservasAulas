/* ---GENERATE CALENDAR--- */ 
function formatDate(date) {
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0'); 
  var yyyy = date.getFullYear();
  return yyyy + '-' + mm + '-' + dd;
}

var currentDate = new Date();

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

function updateMonth() {
  var monthCurrentElement = document.querySelector('.monthCurrent');
  var currentMonth = currentDate.toLocaleDateString('default', { month: 'long' });
  var currentYear = currentDate.getFullYear();
  monthCurrentElement.textContent = `${currentMonth} ${currentYear}`;
}

function generateWeeklyCalendar(jsonHours) {

  var weeklyCalendarContainer = document.getElementById("weekCalendar");
  weeklyCalendarContainer.innerHTML = "";
  var table = document.createElement("table");
  table.HTMLTableElement.border = "1";

  var days = ["Horario", " Lunes", " Martes", " Miércoles", " Jueves", " Viernes", " Sábado", " Domingo"]; 
  var headerRow = document.createElement("tr");

  for (var i = 0; i < days.length; i++) {
    var th = document.createElement("th");
    if (i > 0) {
      var currentDay = new Date(currentDate);
      currentDay.setDate(currentDay.getDate() - currentDay.getDay() + i - 1);

      th.appendChild(document.createTextNode(formatDate(currentDay).split('-')[2]));
    }
    th.appendChild(document.createTextNode(days[i]));
    headerRow.appendChild(th);
  }

  table.appendChild(headerRow);

  for (var i = 0; i < jsonHours.length; i++) {
    var tr = document.createElement("tr");

    var tdCalendar = document.createElement("td");
    tdCalendar.appendChild(document.createTextNode(jsonHours[i].start_time + " - " + jsonHours[i].end_time));
    tr.appendChild(tdCalendar);

    var currentDay = new Date(currentDate);
    currentDay.setDate(currentDay.getDate() - currentDay.getDay());

    for (var j = 1; j < days.length; j++) {
      var td = document.createElement("td");

      var formattedDate = formatDate(currentDay);

      var CalendarForDay = jsonHours[i];
      if (CalendarForDay && formattedDate in CalendarForDay) {
        if (j === 0) {
          td.appendChild(document.createTextNode(CalendarForDay[formattedDate].start_time + " - " + CalendarForDay[formattedDate].end_time));
        }
      }

      tr.appendChild(td);
      currentDay.setDate(currentDay.getDate() + 1);
    }

    table.appendChild(tr);
  }
  weeklyCalendarContainer.appendChild(table);
}

function loadWeekSchedule() {
  fetch("http://localhost/2EvReservasAulas/services/serviceCalendar/calendarService.php", {
    method: "GET"
  })
    .then((res) => res.json())
    .then((data) => {
      updateMonth();
      generateWeeklyCalendar(data);
    })
    .catch(error => console.error('Error:', error));
}

loadWeekSchedule();


