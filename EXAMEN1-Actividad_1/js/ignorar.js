const sliderAncho = document.querySelector("#rangeWidth");
sliderAncho.value = 300;
const valorAncho = document.querySelector("#widthValue");
sliderAncho.addEventListener("input", function() {valorAncho.innerHTML = this.value});

const sliderAlto = document.querySelector("#rangeHeight");
sliderAlto.value = 300;
const valorAlto = document.querySelector("#heightValue");
sliderAlto.addEventListener("input", function() {valorAlto.innerHTML = this.value});

const contenedorBotones = document.querySelector(".buttonContainer");
contenedorBotones.addEventListener("click", identificaBoton);

function identificaBoton(event) {
    event.preventDefault();
    if(event.target.classList.contains("new")) {
        crearNuevaVentana();
    }else if(event.target.classList.contains("resize")) {
        redimensionarVentana();
    }else if(event.target.classList.contains("close")) {
        cerrarVentana();
    }
}