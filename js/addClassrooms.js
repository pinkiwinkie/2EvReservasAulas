var bAddClass = document.getElementById("addClassButton");
var bGenerateClass = document.getElementById("generateClassButton");
var jsonClassroom = [];

bAddClass.addEventListener("click", function () {
  let classroom = document.getElementById("classroom");

  let data = {
    "space_name": classroom.value
  }

  jsonClassroom.push(data);
  classroom.value = ""
})

bGenerateClass.addEventListener("click", function () {
  fetch("http://localhost/2EvReservasAulas/services/serviceSpace/serviceSpace.php", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsonClassroom),
  })
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
    if (data === "insertado") {
      alert("Aulas registradas correctamente");
      classroom.value = "";
    } else {
      alert("Error al registrar aulas");
    }
  })
  .catch((error) => {
    console.error('Error:', error);
    alert("Error en la solicitud al servidor");
  });
});
