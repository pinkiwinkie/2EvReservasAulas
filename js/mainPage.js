let usernameTitle= document.getElementsByClassName("usernameTitle");

let user = JSON.parse(localStorage.getItem('user'));
if (user.user_type !== "admin") {
  hiddenElements();
}

for(let i = 0; i<usernameTitle.length; i++){
  usernameTitle[i].innerHTML = user.username;
}

/* ---HIDE ELEMENTS--- */

function hiddenElements() {
  let elementsAdmin = document.getElementsByClassName("only-admin");
  for (var i = 0; i < elementsAdmin.length; i++) {
    elementsAdmin[i].classList.add('hidden');
  }
}

/* ---CALENDAR--- */

