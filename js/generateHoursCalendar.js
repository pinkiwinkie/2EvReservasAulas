const patioCount = parseInt(document.getElementById("patioCount").value);
const newForm = document.getElementById("newForm");
const patiosForm = document.getElementById("patiosForm");
const horarioForm = document.getElementById("horarioForm");

const titleHours = document.querySelector(".titleHours");
const iconoCalendar = document.querySelector(".iconoCalendar");
const icon = document.querySelector(".icon");

const courseStartDate = document.getElementById("courseStartDate");
const courseEndDate = document.getElementById("courseEndDate");

document.addEventListener("DOMContentLoaded", function () {
  horarioForm.addEventListener("submit", function (event) {
    event.preventDefault();

    patiosForm.innerHTML = "";

    for (let i = 0; i < patioCount; i++) {
      let patioDiv = document.createElement("div");
      patioDiv.classList.add("input-group", "mt-1");

      let startTimeLabel = document.createElement("span");
      startTimeLabel.classList.add("input-group-text");
      startTimeLabel.textContent = `Inicio del patio ${i + 1}`;

      let startTimeInput = document.createElement("input");
      startTimeInput.id = `startTimePatio${i}`;
      startTimeInput.classList.add("form-control");
      startTimeInput.type = "time";
      startTimeInput.required = true;

      let durationLabel = document.createElement("span");
      durationLabel.classList.add("input-group-text");
      durationLabel.textContent = `Duración del patio ${i + 1} (minutes)`;

      let durationInput = document.createElement("input");
      durationInput.id = `durationPatio${i}`;
      durationInput.classList.add("form-control");
      durationInput.type = "number";
      durationInput.min = "1";
      durationInput.required = true;

      patioDiv.appendChild(startTimeLabel);
      patioDiv.appendChild(startTimeInput);
      patioDiv.appendChild(durationLabel);
      patioDiv.appendChild(durationInput);

      patiosForm.appendChild(patioDiv);
    }

    newForm.style.display = "block";
    horarioForm.style.display = "none";
    titleHours.style.display = "none";
    iconoCalendar.style.display = "none";
    icon.style.display = "none";

    let courseStartDateValue = courseStartDate.value.trim();
    let courseEndDateValue = courseEndDate.value.trim();

    fetch(
      "http://localhost/2EvReservasAulas/services/serviceCourse/courseService.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fechaInicio: courseStartDateValue,
          fechaFin: courseEndDateValue,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Curso añadido:", data);
        alert("Curso añadido");
      })
      .catch((error) => {
        console.error("Error al agregar el curso:", error);
        // Aquí puedes mostrar un mensaje de error al usuario si lo deseas
      });

    let submitPatiosButton = document.createElement("button");
    submitPatiosButton.setAttribute("type", "submit");
    submitPatiosButton.setAttribute("id", "submitPatiosButton");
    submitPatiosButton.classList.add("btn", "btn-info", "text-white");
    submitPatiosButton.textContent = "Confirmar";

    let buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add(
      "buttons",
      "d-flex",
      "justify-content-between",
      "mt-4"
    );
    buttonsContainer.appendChild(submitPatiosButton);

    patiosForm.appendChild(buttonsContainer);

    submitPatiosButton.addEventListener("click", function (event) {
      event.preventDefault();
      alert("hola");

      let classStartTime = document.getElementById("horaInicio").value;
      let classEndTime = document.getElementById("horaFin").value;
      let classDuration = document.getElementById("duracionClase").value;

      let classes = [];
      let patios = [];

      for (let i = 0; i < patioCount; i++) {
        let startTime = document.getElementById(`startTimePatio${i}`).value;
        let duration = parseInt(document.getElementById(`durationPatio${i}`).value);
        patios.push({ startTime, duration });
      }
      //console.log(patios);

      let currentTime = classStartTime;

      while (currentTime < classEndTime) {
        let startParts = currentTime.split(":");
        let startMinutes = parseInt(startParts[0]) * 60 + parseInt(startParts[1]);
        let endMinutes;

        let isPatio = false;
        let patioDuration = 0;

        // Comprobamos si la hora actual es un patio
        for (let i = 0; i < patios.length; i++) {
          let patioStartParts = patios[i].startTime.split(":");
          let patioStartMinutes = parseInt(patioStartParts[0]) * 60 + parseInt(patioStartParts[1]);

          if (patioStartMinutes === startMinutes) {
            isPatio = true;
            patioDuration = patios[i].duration;
            break;
          }
        }

        // Si es un patio, usamos la duración del patio
        if (isPatio) {
          endMinutes = startMinutes + patioDuration;
        } else {
          endMinutes = startMinutes + parseInt(classDuration);
        }

        let hours = Math.floor(endMinutes / 60);
        let minutes = endMinutes % 60;
        let nextTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
        classes.push({
          "start_time": currentTime,
          "end_time": nextTime
        });
        currentTime = nextTime;

    }
    console.log(classes);

    // Insertar la información de las clases en la tabla `calendario` de la base de datos
    let classesJSON = JSON.stringify(classes);
    console.log(classesJSON);
    insertClassesToDatabase(classesJSON);
  });

  // Función para insertar las clases en la base de datos
  function insertClassesToDatabase(classes) {
    fetch(
      "http://localhost/2EvReservasAulas/services/serviceCalendar/calendarService.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: classes,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Clases añadidas:", data);
        // Aquí puedes mostrar un mensaje de éxito al usuario si lo deseas
      })
      .catch((error) => {
        console.error("Error al agregar las clases:", error);
        // Aquí puedes mostrar un mensaje de error al usuario si lo deseas
      });
  }
});
});
