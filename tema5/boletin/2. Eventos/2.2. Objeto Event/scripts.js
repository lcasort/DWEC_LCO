////////////////////////////////////////////////////////////////////////////////
// Implementa una aplicación que abra una ventana emergente (alert) al pulsar //
// una tecla sobre un campo de texto. La ventana debe mostrar la tecla que se //
// ha pulsado.                                                                //
////////////////////////////////////////////////////////////////////////////////
document.querySelector('.x').addEventListener('keydown', showAlertPopUp, false);

function showAlertPopUp(e) {
    alert('Has presionado la tecla: ' + e.key);
}