let idIntv = null;
let intvCreated = false;
let delay = 2000;

function createInterval()
{
    if(!intvCreated) {
        delay = prompt('Introduce el intervalo:');
        idIntv = setInterval(escribirMensaje, delay);
        intvCreated = true;
    } else {
        console.log('Intervalo ya creado.');
    }
}

function escribirMensaje()
{
    console.log('Este mensaje se imprime cada 2 segundos');
}

function deleteInterval()
{
    if(intvCreated) {
        clearTimeout(idIntv);
        idIntv = null;
        intvCreated = false;
    } else {
        console.log('Intervalo aún no creado.');
    }
}