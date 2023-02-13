// Importamos la base de datos
import {productos} from "../db/db.js";

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// MAIN /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function iniciarListeners()
{
    window.addEventListener("load", cargarProductos);   
}

iniciarListeners();

////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
//                                AUX. METHODS                                //
////////////////////////////////////////////////////////////////////////////////

function cargarProductos()
{
    let div = document.querySelector("#products-container");

    for (const p of productos) {
        div.innerHTML += crearHTMLProducto(p);
    }
}

function crearHTMLProducto(p)
{
    const{id,nombre,categoria,imagen,precio,vendedor,stock} = p;
    return `
    <article id="${id}" class="location-listing" data-categoria="${categoria}">
        <div class="location-image">
            <a href="#">
                <img src="${imagen}" alt="${nombre}">
            </a>
        </div>
        <div class="data">
            <h4>${nombre}</h4>
            <p class="price">${precio}€</p>
            <p>Vendido por <strong>${vendedor}</strong></p>
            <p>Quedan ${stock} unidades</p>
            <div class="button-container">
                <a class="button add" href="#" target="_blank">Añadir al carrito</a>
            </div>
        </div>
    </article>`;
}

////////////////////////////////////////////////////////////////////////////////