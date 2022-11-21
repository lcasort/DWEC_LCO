const contenedorBotones = document.querySelector(".buttonContainer");
contenedorBotones.addEventListener("click", identificaBoton);

function identificaBoton(event) {
    event.preventDefault();
    if(event.target.classList.contains("age")) {
        calcularEdad();
    }else if(event.target.classList.contains("delete")) {
        borraFechaNacimiento();
    }
}