const MODELO_EVENTO_BURBUJEO = "burbujeo";
const MODELO_EVENTO_CAPTURA = "captura";

let modeloEvento = MODELO_EVENTO_BURBUJEO;

const model = document.getElementById("models");
model.selected = MODELO_EVENTO_BURBUJEO;
const abuelo = document.getElementById("abuelo");
const padre = document.getElementById("padre");
const hijo = document.getElementById("hijo");

anadirManejadoresEventos();

function anadirManejadoresEventos() {
  model.addEventListener("change", establecerModeloEvento, false);
  abuelo.addEventListener("click", identificar, false);
  padre.addEventListener("click", identificar, false);
  hijo.addEventListener("click", identificar, false);
}

function establecerModeloEvento(e) {
  e.preventDefault();
  const element = e.target;
  if (haCambiadoModelo(element)) {
    abuelo.removeEventListener("click", identificar);
    padre.removeEventListener("click", identificar);
    hijo.removeEventListener("click", identificar);

    modeloEvento = element.value;
    const esCaptura = esModeloCaptura(element);
    abuelo.addEventListener("click", identificar, esCaptura);
    padre.addEventListener("click", identificar, esCaptura);
    hijo.addEventListener("click", identificar, esCaptura);
  }
}

function identificar(e) {
  console.log(`Elemento cliqueado: ${this.id}`);
}

function haCambiadoModelo(element) {
  return (
    (eraModeloCaptura() && !esModeloCaptura(element)) ||
    (!eraModeloCaptura() && esModeloCaptura(element))
  );
}

function esModeloCaptura(element) {
  return element.value === MODELO_EVENTO_CAPTURA;
}

function eraModeloCaptura() {
  return modeloEvento === MODELO_EVENTO_CAPTURA;
}