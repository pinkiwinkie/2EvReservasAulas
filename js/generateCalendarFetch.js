function formatDate(date) {
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0'); 
  var yyyy = date.getFullYear();
  return yyyy + '-' + mm + '-' + dd;
}

function generateWeeklyCalendar(jsonHours, holidays, days, bookings) {
  var weeklyCalendarContainer = document.getElementById("weekCalendar");
  weeklyCalendarContainer.innerHTML = ""; 

  var table = document.createElement("table");
  table.border = "1";

  var headerRow = document.createElement("tr");
  for (var i = 0; i < days.length; i++) {
    var th = document.createElement("th");
    th.textContent = days[i];
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  
  var currentDate = new Date(); 
  var currentDayOfMonth = currentDate.getDate(); 
  var dayOfWeek = currentDate.getDay(); 
  var startingDate = new Date(currentDate); 
  startingDate.setDate(currentDayOfMonth - dayOfWeek);

  for (var i = 0; i < jsonHours.length; i++) {
    var tr = document.createElement("tr");
    var tdCalendar = document.createElement("td");
    tdCalendar.appendChild(document.createTextNode(jsonHours[i].start_time + " - " + jsonHours[i].end_time));
    tr.appendChild(tdCalendar);
    for (var j = 0; j < 7; j++) {
      var td = document.createElement("td");
      if (j !== 0) {
        var currentDay = new Date(startingDate); 
        currentDay.setDate(startingDate.getDate() + j); 
        var formattedDate = formatDate(currentDay);
        var reservationsForDay = bookings.filter(reservation => {
          var reservationStart = new Date(reservation.start_date);
          var reservationEnd = new Date(reservation.end_date);
          return reservationStart.getDate() <= currentDay.getDate() && reservationEnd.getDate() >= currentDay.getDate();
        });
        reservationsForDay.forEach(reservation => {
          var reservationStart = new Date(reservation.start_date);
          var reservationEnd = new Date(reservation.end_date);
          var startHour = parseInt(jsonHours[i].start_time.split(":")[0]);
          var endHour = parseInt(jsonHours[i].end_time.split(":")[0]);
      
          if (currentDay >= reservationStart && currentDay <= reservationEnd) {
              if (reservationStart.getHours() <= endHour && reservationEnd.getHours() >= startHour) {
                  var reservationCell = document.createElement("div");
                  reservationCell.textContent = reservation.email;
                  reservationCell.style.backgroundColor = "lightblue"; 
                  td.appendChild(reservationCell);
              }
          }
      });
      
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
      .then((calendarData) => {
          // Obtener las reservas
          fetch("http://localhost/2EvReservasAulas/services/serviceBookings/bookingsService.php", {
              method: "GET"
          })
          .then((res) => res.json())
          .then((bookings) => {
              updateMonth();
              var days = ["Horario", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
              generateWeeklyCalendar(calendarData, holidays, days, bookings);
          })
          .catch(error => console.error('Error:', error));
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

document.querySelector('.prev-btn').addEventListener("click", loadPreviousWeek);
document.querySelector('.next-btn').addEventListener("click", loadNextWeek);

loadWeekSchedule();


fetch('http://localhost/2EvReservasAulas/services/serviceSpace/serviceSpace.php')
  .then(response => {
    if (!response.ok) {
      throw new Error('Ocurrió un error al obtener las aulas.');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    const spaceSelect = document.getElementById('space');
    if (data && data.length > 0) {
      data.forEach(space => {
        const option = document.createElement('option');
        option.value = space.space_id;
        option.textContent = space.space_name;
        spaceSelect.appendChild(option);
      });
    } else {
      const defaultOption = document.createElement('option');
      defaultOption.textContent = 'No se encontraron aulas disponibles.';
      spaceSelect.appendChild(defaultOption);
    }
  })
  .catch(error => {
    console.error('Error:', error);
    const spaceSelect = document.getElementById('space');
    spaceSelect.innerHTML = '<option value="">Ocurrió un error al obtener las aulas.</option>';
  });
