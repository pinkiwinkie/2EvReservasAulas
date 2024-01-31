var bAddCalendar= document.getElementById("addCalendarButton");
var bGenerateCalendar = document.getElementById("generateCalendarButton");
var jsonHours = [];

bAddCalendar.addEventListener("click", function () { 
  let startTime = document.getElementById("startTime");
  let endTime = document.getElementById("endTime");

  let data = {
    "start_time": startTime.value,
    "end_time": endTime.value
  }

  startTime.disabled = true;
  jsonHours.push(data);
  startTime.value = endTime.value
  endTime.value = ""

  updateHoursDiv();
})

bGenerateCalendar.addEventListener("click", function () {
  if(confirm("¿Estás seguro de que quieres confirmar? Una vez confirmado, no se podrán modificar")){
    fetch("http://localhost/2EvReservasAulas/services/serviceCalendar/calendarService.php", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonHours),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data == "insertado") {
          alert("Horas registradas correctamente");
          startTime.value = ""
          endTime.value = ""
          endTime.disabled = true;
        }
      });
  }
})

function updateHoursDiv(){
  var horasDiv = document.getElementById("horas");
  horasDiv.innerHTML = ""; // Limpiar el contenido actual

  jsonHours.forEach(function (hour, index) {
    var p = document.createElement("p");
    p.textContent = "Hora " + (index + 1) + ": " + hour.start_time + " - " + hour.end_time;
    horasDiv.appendChild(p);
  });
}