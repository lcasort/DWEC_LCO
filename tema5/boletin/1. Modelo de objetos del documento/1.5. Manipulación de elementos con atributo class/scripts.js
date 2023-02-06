////////////////////////////////// APARTADO A //////////////////////////////////
// function destacar(sPalabra) { ... }                                        //
// Esta función aplica la clase CSS destacado a todos los párrafos del        //
// documento que contengan la palabra recibida como parámetro.                //
////////////////////////////////////////////////////////////////////////////////
function destacar(sPalabra)
{
    let ps = document.querySelectorAll('p');
    for (let i = 0; i < ps.length; i++) {
        if(ps[i].textContent.includes(sPalabra)) {
            ps[i].classList.add('destacado');
        }
    }
}

////////////////////////////////// APARTADO B //////////////////////////////////
// function eliminarDestacados() { ... }                                      //
// Esta función elimina la clase CSS destacado de todos los párrafos del      //
// documento que la tengan.                                                   //
////////////////////////////////////////////////////////////////////////////////
function eliminarDestacados()
{
    let ps = document.querySelectorAll('p');
    for (let i = 0; i < ps.length; i++) {
        if(ps[i].classList.contains('destacado')) {
            ps[i].classList.remove('destacado');
        }
    }
}