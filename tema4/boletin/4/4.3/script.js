document.getElementById('edad').addEventListener('change', noEsNumero, true);

function noEsNumero() {
    if(isNaN(this.value)) {
        alert('No es un numero');
    }
}