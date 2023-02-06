////////////////////////////////// APARTADO A //////////////////////////////////
// Al hacer clic sobre cualquier elemento marcado con el atributo accion      //
// valor destacar, se aplique la clase CSS destacado a todos los párrafos que //
// contengan la palabra definida por el atributo contenido.                   //
// Utiliza la función destacar implementada en la actividad anterior.         //
////////////////////////////////////////////////////////////////////////////////
document.querySelector('button[data-accion=destacar]').addEventListener('click', highlightP, false);

function highlightP(e) {
    const w = e.target.attributes['data-contenido'].value;
    destacar(w);
}

////////////////////////////////// APARTADO B //////////////////////////////////
// Al hacer clic sobre cualquier elemento marcado con el atributo accion      //
// valor eliminarDestacados, se elimine la clase destacado de todos los       //
// párrafos que la tengan.                                                    //
// Utiliza la función eliminarDestacados implementada en la actividad         //
// anterior.                                                                  //
////////////////////////////////////////////////////////////////////////////////
document.querySelector('button[data-accion=eliminarDestacados]').addEventListener('click', removeHighlightP, false);

function removeHighlightP(e) {
    eliminarDestacados();
}



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

function eliminarDestacados()
{
    let ps = document.querySelectorAll('p');
    for (let i = 0; i < ps.length; i++) {
        if(ps[i].classList.contains('destacado')) {
            ps[i].classList.remove('destacado');
        }
    }
}

////////////////////////////////////////////////////////////////////////////////