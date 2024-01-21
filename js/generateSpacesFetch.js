var addSpaceButton = document.getElementById("addSpace");
var registerSpaceButton = document.getElementById("registerSpaceButton");

addSpaceButton.addEventListener("click", function(){
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
})

registerSpaceButton.addEventListener("click", function () { 
  var inputs = document.querySelectorAll('#containerInput input');

  var data = [];

  inputs.forEach(function (input) {
    var value = input.value;
    var index = input.getAttribute('data-index');

    data.push({
      index: index,
      value: value
    });
  });
})