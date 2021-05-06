
//remember me
const rmCheck = document.getElementById("rememberMe");
const emailInput = document.getElementById("email");
 //para restringir correos
 let emailsInvalidos = ['@gmail', '@hotmail', '@outlook']; 
 let cont = 0;
  function getData (){
     let email = document.getElementById('emailR').value;
     const validarCorreo = (correo, correosInvalidos) => {
         for(let i = 0; i < correosInvalidos.length; i++) {
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

function lsRememberMe() {
  if (rmCheck.checked && emailInput.value !== "") {
    localStorage.username = emailInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}



// funcion para validar campo select y option
function showSelected()
{
/* Para obtener el texto */
let combo = document.getElementById("rol");
let selected = combo.options[combo.selectedIndex].text;
if(selected== 'Admin'){
document.getElementById("p").style.display="none";
}
else{
  document.getElementById("p").style.display="flex";
}
}

//cambiar entre pestañas
function changeRegister(){
  document.getElementById("box-login").style.display="block";
  document.getElementById("box-register").style.display="none";
}


