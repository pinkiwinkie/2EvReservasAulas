let usernameTitle = document.getElementsByClassName("usernameTitle");
let buttonLogOut = document.getElementById("buttonLogOut");

let user = JSON.parse(localStorage.getItem('user'));
if (user.user_type !== "admin") {
  hiddenElements();
}

for (let i = 0; i < usernameTitle.length; i++) {
  usernameTitle[i].innerHTML = user.username;
}

/* ---HIDE ELEMENTS--- */

function hiddenElements() {
  let elementsAdmin = document.getElementsByClassName("only-admin");
  for (var i = 0; i < elementsAdmin.length; i++) {
    elementsAdmin[i].classList.add('hidden');
  }
}

buttonLogOut.addEventListener("click", function () {
  localStorage.clear();
  window.location.href = "../index.html";
})

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

function generateWeeklySchedule(jsonHours) {
  
  var weeklyScheduleContainer = document.getElementById("weekCalendar");  
  weeklyScheduleContainer.innerHTML = "";
  var table = document.createElement("table");
  table.border = "1";

  var days = ["Horario", " Lunes", " Martes", " Miércoles", " Jueves", " Viernes"];
  var headerRow = document.createElement("tr");

  for (var i = 0; i < days.length; i++) {
    var th = document.createElement("th");
    if (i > 0) {
      var currentDay = new Date(currentDate);
      currentDay.setDate(currentDay.getDate() - currentDay.getDay() + i);

      th.appendChild(document.createTextNode(formatDate(currentDay).split('-')[2])); 
    }
    th.appendChild(document.createTextNode(days[i]));
    headerRow.appendChild(th);
  }

  table.appendChild(headerRow);

  for (var i = 0; i < jsonHours.length; i++) {
    var tr = document.createElement("tr");

    var tdHorario = document.createElement("td");
    tdHorario.appendChild(document.createTextNode(jsonHours[i].start_time + " - " + jsonHours[i].end_time));
    tr.appendChild(tdHorario);

    var currentDay = new Date(currentDate);
    currentDay.setDate(currentDay.getDate() - currentDay.getDay() + 1);

    for (var j = 1; j < days.length; j++) {
      var td = document.createElement("td");

      var formattedDate = formatDate(currentDay);

      var scheduleForDay = jsonHours[i];
      if (scheduleForDay && formattedDate in scheduleForDay) {
        if (j === 0) {
          td.appendChild(document.createTextNode(scheduleForDay[formattedDate].start_time + " - " + scheduleForDay[formattedDate].end_time));
        }
      }

      tr.appendChild(td);
      currentDay.setDate(currentDay.getDate() + 1);
    }

    table.appendChild(tr);
  }
  weeklyScheduleContainer.appendChild(table);
}

function loadWeekSchedule() {
  fetch("http://localhost/2EvReservasAulas/services/serviceCalendar/calendarService.php", {
    method: "GET"
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      updateMonth();
      generateWeeklySchedule(data);
    })
    .catch(error => console.error('Error:', error));
}

loadWeekSchedule();
