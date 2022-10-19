let idIntv = null;
let timeoutCreated = false;

function createTimeout()
{
    if(!timeoutCreated) {
        idIntv = setTimeout(alertaEjecucionTemp, 10000);
        timeoutCreated = true;
    } else {
        console.log('Timeout ya creado.');
    }
}

function alertaEjecucionTemp()
{
    alert('Se ha ejecutado el temporizador de 10 segundos');
}

function deleteTimeout()
{
    if(timeoutCreated) {
        clearTimeout(idIntv);
        idIntv = null;
        timeoutCreated = false;
    } else {
        console.log('Timeout aún no creado.');
    }
}