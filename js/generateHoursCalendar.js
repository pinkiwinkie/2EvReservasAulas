const patioCount = parseInt(document.getElementById("patioCount").value);
const newForm = document.getElementById("newForm");
const patiosForm = document.getElementById("patiosForm");
const horarioForm = document.getElementById("horarioForm");

const titleHours = document.querySelector(".titleHours")
const iconoCalendar = document.querySelector(".iconoCalendar")
const icon = document.querySelector(".icon");

const courseStartDate = document.getElementById("courseStartDate")
const courseEndDate = document.getElementById("courseEndDate")
const submitPatiosButton = document.getElementById("submitPatiosButton")

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

    fetch("http://localhost/2EvReservasAulas/services/serviceCourse/courseService.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fechaInicio: courseStartDateValue,
        fechaFin: courseEndDateValue
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Curso añadido:', data);
        alert("Curso añadido");
      })
      .catch(error => {
        console.error('Error al agregar el curso:', error);
        // Aquí puedes mostrar un mensaje de error al usuario si lo deseas
      });

    let submitPatiosButton = document.createElement("button");
    submitPatiosButton.setAttribute("type", "submit");
    submitPatiosButton.setAttribute("id", "submitPatiosButton");
    submitPatiosButton.classList.add("btn", "btn-info", "text-white");
    submitPatiosButton.textContent = "Confirmar";

    let buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons", "d-flex", "justify-content-between", "mt-4");
    buttonsContainer.appendChild(submitPatiosButton);

    patiosForm.appendChild(buttonsContainer);
  });

  submitPatiosButton.addEventListener("click", function (event) {
    event.preventDefault();

    for (let i = 0; i < patioCount; i++) {
      const startTimePatio = document.getElementById(
        `startTimePatio${i}`
      ).value;
      const durationPatio = parseInt(
        document.getElementById(`durationPatio${i}`).value
      );
    }
  });
});
