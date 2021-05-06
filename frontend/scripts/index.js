
//remember me
const rmCheck = document.getElementById("rememberMe");
const emailInput = document.getElementById("email");
//para restringir correos
let emailsInvalidos = ['@gmail', '@hotmail', '@outlook'];
let cont = 0;
function getData() {
  let email = document.getElementById('emailR').value;
  const validarCorreo = (correo, correosInvalidos) => {
    for (let i = 0; i < correosInvalidos.length; i++) {
      cont = correo.indexOf(correosInvalidos[i], i);
      if (cont !== -1) {
        alert(`No se acepta correos que lleven ${correosInvalidos[i]} Intenta con otro.`)
        break;
      }
    }
  }
  validarCorreo(email, emailsInvalidos)

}


// para almacenar en local storage el email
if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  emailInput.value = localStorage.username;
} else {
  rmCheck.removeAttribute("checked");
  emailInput.value = "";
}

//validamos que los campos esten vacios, si estan vacidos devuelve un false por ende no lo direcciona a ninguna parte
//pero si no estavacio o el valor que demos,devuelve false y no correra lsrememberME
function validar() {
  //obteniendo el valor que se puso en campo text del formulario
  campos = document.getElementById("email").value;
  //la condición
  if (campos.length < 5) {
    return false;
  }
  return true;
}

function lsRememberMe() {
  //si la funcion validar es verdadera nos direccion a la pagina que seleccionemos, admin o user.
  if (validar() == true) {
    let combo = document.getElementById("rol");
    let selected = combo.options[combo.selectedIndex].text;
    if (selected == 'Admin') {
      window.open('./admin.html', '_self')
    }
    else {
      window.open('./user.html', '_self')
    }
  }
//seccion para enviar al localstorage
  if (rmCheck.checked && emailInput.value !== "") {
    localStorage.username = emailInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}

// funcion para validar campo select y option
function showSelected() {
  /* Para obtener el texto */
  let combo = document.getElementById("rol");
  let selected = combo.options[combo.selectedIndex].text;
  if (selected == 'Admin') {
    document.getElementById("p").style.display = "none";
  }
  else {
    document.getElementById("p").style.display = "flex";
  }
}

//cambiar entre pestañas
function changeRegister() {
  document.getElementById("box-login").style.display = "block";
  document.getElementById("box-register").style.display = "none";
}


