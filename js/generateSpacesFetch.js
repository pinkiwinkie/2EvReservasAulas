var bAddSpace = document.getElementById("addClassButton");
var bConfirmSpace = document.getElementById("generateClassButton");
var jsonClassroom = [];

bAddSpace.addEventListener("click", function () {
  let inputClassroom = document.getElementById("classroom");

  let data = {
    "space_name": inputClassroom.value,
  };

  jsonClassroom.push(data);
  inputClassroom.value = "";

  updateClassesDiv()
});

bConfirmSpace.addEventListener("click", function () {
  fetch("http://localhost/2EvReservasAulas/services/serviceSpace/serviceSpace.php", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonClassroom),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data == "insertado") {
          alert("Aulas registradas correctamente");
          inputClassroom.value = "";
        }
      });
})

function updateClassesDiv() {
  let classesDiv = document.getElementById("addedClasses");
  classesDiv.innerHTML = "";

  jsonClassroom.forEach(function (space) {
    let p = document.createElement("p")
    p.textContent = "Space name: " + space.space_name;;
    classesDiv.appendChild(p)
  });
}
