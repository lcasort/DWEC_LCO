////////////////////////////////////////////////////////////////////////////////
// Implementa una aplicación que abra una ventana emergente (alert) al pulsar //
// sobre un botón.                                                            //
////////////////////////////////////////////////////////////////////////////////
document.querySelector('.submit_button').addEventListener('click',
showAlertPopUp, false);

function showAlertPopUp(e) {
    alert('Has pulsado un botón.');
}