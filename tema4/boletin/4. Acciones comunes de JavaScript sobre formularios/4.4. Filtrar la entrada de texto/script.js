// Con keypress deja moverse y borrar y con keydown no.
document.getElementById('edad').addEventListener('keypress', callback, false);

function callback(e) {
    let res = Number.parseInt(e.key);
    console.log(e.key);
    if(isNaN(res) && e.key!='Backspace') {
        e.preventDefault();
    }
}