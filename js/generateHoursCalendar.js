document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("horarioForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const cantidadPatios = parseInt(
        document.getElementById("cantidadPatios").value
      );
      const nuevoFormulario = document.getElementById("nuevoFormulario");
      const patiosForm = document.getElementById("patiosForm");

      // Limpiamos el formulario de patios antes de agregar campos nuevos
      patiosForm.innerHTML = "";

      // Creamos los campos para cada patio
      for (let i = 0; i < cantidadPatios; i++) {
        const patioDiv = document.createElement("div");
        patioDiv.classList.add("input-group", "mt-1");

        const horaInicioPatioLabel = document.createElement("span");
        horaInicioPatioLabel.classList.add("input-group-text");
        horaInicioPatioLabel.textContent = `Hora de inicio del patio ${i + 1}`;

        const horaInicioPatioInput = document.createElement("input");
        horaInicioPatioInput.id = `horaInicioPatio${i}`;
        horaInicioPatioInput.classList.add("form-control");
        horaInicioPatioInput.type = "time";
        horaInicioPatioInput.required = true;

        const duracionPatioLabel = document.createElement("span");
        duracionPatioLabel.classList.add("input-group-text");
        duracionPatioLabel.textContent = `Duración del patio ${i + 1
          } (minutos)`;

        const duracionPatioInput = document.createElement("input");
        duracionPatioInput.id = `duracionPatio${i}`;
        duracionPatioInput.classList.add("form-control");
        duracionPatioInput.type = "number";
        duracionPatioInput.min = "1";
        duracionPatioInput.placeholder = "Duración del patio";
        duracionPatioInput.required = true;

        patioDiv.appendChild(horaInicioPatioLabel);
        patioDiv.appendChild(horaInicioPatioInput);
        patioDiv.appendChild(duracionPatioLabel);
        patioDiv.appendChild(duracionPatioInput);

        patiosForm.appendChild(patioDiv);
      }

      nuevoFormulario.style.display = "block";
      document.getElementById("horarioForm").style.display = "none";
      document.querySelector(".titleHours").style.display = "none";
      document.querySelector(".iconoCalendar").style.display = "none";
      document.querySelector(".icon").style.display = "none";
    });

  document
    .getElementById("submitPatiosButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const cantidadPatios = parseInt(
        document.getElementById("cantidadPatios").value
      );

      for (let i = 0; i < cantidadPatios; i++) {
        const horaInicioPatio = document.getElementById(
          `horaInicioPatio${i}`
        ).value;
        const duracionPatio = parseInt(
          document.getElementById(`duracionPatio${i}`).value
        );
        console.log(
          `Patio ${i + 1
          }: Hora de inicio - ${horaInicioPatio}, Duración - ${duracionPatio} minutos`
        );
      }
    });
});
