// Importamos la base de datos
import {productos} from "../db/db.js";
import {categorias} from "../db/db.js";

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// MAIN /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * Método para inicializar los listeners necesarios.
 */
function iniciarListeners()
{
    window.addEventListener("load", cargarProductos);  
    window.addEventListener("load", mostrarFiltrosCategoria); 
}

// Inicializamos los listeners.
iniciarListeners();

////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
//                                AUX. METHODS                                //
////////////////////////////////////////////////////////////////////////////////

/**
 * Método para cargar todos los productos de la página.
 */
function cargarProductos()
{
    let div = document.querySelector("#products-container");

    for (const p of productos) {
        div.innerHTML += crearHTMLProducto(p);
    }
}

/**
 * Método para crear el HTML de un producto.
 * @param {Object} p 
 * @returns 
 */
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

/**
 * Método para mostrar el formulario de filtrado por categoría.
 */
function mostrarFiltrosCategoria()
{
    let div = document.querySelector("#filter-container");

    let aux = '';
    for (const c of categorias) {
        aux += crearHTMLCategoria(c);
    }

    div.innerHTML += `
    <form>
        <fieldset id="filtro-categoria" name="filtro-categoria">
        <legend>Filtros por categoría:</legend>`
    + aux +`
        </fieldset>
    </form>`;
}

/**
 * Método para crear el HTML de una categoría.
 * @param {Object} c 
 * @returns 
 */
function crearHTMLCategoria(c) {
    const{id,nombre} = c;
    return `
    <div class="contenedor-categoria">
        <input type="checkbox" id="${id}" name="${id}" value="${id}">
        <label for="${id}">${nombre}</label>
    </div>
    `;
}

////////////////////////////////////////////////////////////////////////////////