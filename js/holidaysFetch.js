var addHolidayButton = document.getElementById("addHolidayButton");
addHolidayButton.addEventListener("click", function (e) {
  e.preventDefault();

  let nameInput = document.getElementById("nameHoliday");
  let dateInput = document.getElementById("dateHoliday");

  let name = nameInput.value
  let date = dateInput.value

  let formattedDate = date.split("/").reverse().join("/");

  let dates = new FormData()
  dates.append('holiday_date', formattedDate);
  dates.append('holiday_name', name);

  if (date === "" || name === "") {
    alert("Introduce valores");
  } else {
    fetch("http://localhost/2EvReservasAulas/services/serviceHoliday/holidayService.php",
      {
        method: "POST",
        body: dates,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data == "noInsertado") {
          alert("El festivo ya existe")
        } else {
          alert("Festivo registrado correctamente");
          name = ""
          date = ""
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        console.log("Datos de FormData:");
        for (let pair of dates.entries()) {
          console.log(pair[0] + ': ' + pair[1]);
        }
        alert("Ocurrió un error al procesar la solicitud: " + error.message);
      });
  }
})