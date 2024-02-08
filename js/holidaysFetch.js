var addHolidayButton = document.getElementById("addHolidayButton");
var divHolidays = document.getElementById(("holidaysDiv"))

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
          nameInput.value = "";
          dateInput.value = "";
          updateListHolidays()
        }
      })
  }
})
updateListHolidays();
function updateListHolidays() {
  fetch("http://localhost/2EvReservasAulas/services/serviceHoliday/holidayService.php",
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        const holidaysListHTML = `
          <table>
            <thead>
              <tr>
                <th>Nombre festivo</th>
                <th>Fecha festivo</th
              </tr>
            </thead>
            <tbody>
              ${data
            .map((holiday) => {
              return `
                  <tr>
                    <td>${holiday.holiday_name}</td>
                    <td>${holiday.holiday_date}</td>
                  </tr>
                `;
            })
            .join("")}
            </tbody>
          </table>
        `;
        divHolidays.innerHTML = holidaysListHTML;
      } else {
        divHolidays.innerHTML = "<p>No hay festivos registrados</p>";
      }
    })
}