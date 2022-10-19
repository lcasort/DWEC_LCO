let nuevaVentana = null;
let ventanaCreada = false;

function crearNueva() {
  if (!ventanaCreada) {
    nuevaVentana = window.open("https://www.debian.org", "", "height=400,width=800");
    ventanaCreada = true;
  } else {
    console.log("Ventana ya creada!!!");
  }
}

function cerrarNueva() {
  if (ventanaCreada) {
    nuevaVentana.close();
    nuevaVentana = null;
    ventanaCreada = false;
  } else {
    console.log("Ventana aun no creada!!!");
  }
}

function enfocar() {
  if (ventanaCreada) {
    nuevaVentana.focus();
  } else {
    console.log("Ventana aun no creada!!!");
  }
}

function desenfocar() {
  if (ventanaCreada) {
    nuevaVentana.blur();
  } else {
    console.log("Ventana aun no creada!!!");
  }
}