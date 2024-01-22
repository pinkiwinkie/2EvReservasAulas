var addSpaceButton = document.getElementById("addSpace");
var registerSpaceButton = document.getElementById("registerSpaceButton");

addSpaceButton.addEventListener("click", function () {
  //div input-group mt,4
  let mainDiv = document.createElement("div");
  mainDiv.classList.add("input-group", "mt-4");

  //div input-group-text bg-info
  let iconDiv = document.createElement("div");
  iconDiv.classList.add("input-group-text", "bg-info");

  //i
  let iconI = document.createElement("i");
  iconI.classList.add("bi", "bi-person-fill", "text-white");

  iconDiv.appendChild(iconI);
  mainDiv.appendChild(iconDiv);

  //input
  let input = document.createElement("input");
  input.classList.add("form-control");
  input.type = "text";
  input.placeholder = "Tipo de aula y piso";
  input.name = "nameSpace";
  input.setAttribute("data-index", Date.now());

  mainDiv.appendChild(input);

  //mainContainer

  let containerInput = document.getElementById("containerInput");
  containerInput.appendChild(mainDiv);
});

registerSpaceButton.addEventListener("click", function () {

  let firstInput = document.getElementById("weeksOfBook");
  let inputs = document.querySelectorAll("#containerInput input");
  console.log(inputs);

  let data = [];
  let isEmpty = false;

  if(isNaN(firstInput.value)){
    alert("inserte un número válido");
  }

  data.push({
    index: firstInput.getAttribute("data-index"),
    value: firstInput.value,
  });

  inputs.forEach(function (input) {
    let value = input.value;
    let index = input.getAttribute("data-index");

    if (value == "") {
      isEmpty = true;
      return;
    }

    data.push({
      index: index,
      value: value,
    });
  });

  if (isEmpty) {
    alert("Inserte valores");
    return;
  }
  console.log(data);
  
  fetch("http://localhost/2EvReservasAulas/services/serviceSpace/serviceSpace.php", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => { 
      console.log(data);
      if (data == "noInsertado") {
        alert("El espacio ya existe");
      } else {
        alert("Espacio registrado correctamente");
      }
    });
});