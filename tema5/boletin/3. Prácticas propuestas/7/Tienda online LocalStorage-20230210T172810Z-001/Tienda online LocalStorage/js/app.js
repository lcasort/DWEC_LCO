// Importamos las funciones del controlador
import {ControladorBD, ControladorCarrito} from "./controller.js";



////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// MAIN /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * Método para inicializar los listeners necesarios.
 */
function iniciarListeners()
{
    // Listeners para cargar los productos de la página.
    document.addEventListener("DOMContentLoaded", cargarProductos, false);  
    document.addEventListener("DOMContentLoaded", mostrarFiltrosCategoria,
    false);

    // Listener para añadir un producto a un carrito.
    document.querySelector("#products-container").addEventListener("click",
    annadirProductoCarritoEvento, false);

    // Listener para vaciar el carrito.
    document.querySelector("#vaciar-carrito").addEventListener("click",
    vaciarCarritoEvento, false);

    // Listener para eliminar un producto del carrito.
    document.querySelector("#lista-carrito").addEventListener("click",
    eliminarProductoCarritoEvento, false);

    // Listener para filtrar los productos.
    document.querySelector("#filter-container").addEventListener("input",
    filtrarBusquedaEvento, false);
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

    const productos = ControladorBD.getProductos();
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
    const categorias = ControladorBD.getCategorias();
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

/**
 * Método para añadir un producto al carrito.
 * @param {Event} e 
 */
function annadirProductoCarritoEvento(e) {
    e.preventDefault();

    // Comprobamos que hemos hecho click en el botón de añadir al carrito.
    const boton = e.target;
    if(boton.classList.contains("add")) {
        // Cogemos el id del producto (<article>).
        const id = boton.parentNode.parentNode.parentNode.id;
        // Recogemos el producto de la base de datos.
        const prod = ControladorBD.getProducto(id);
        // Añadimos el producto al carrito.
        ControladorCarrito.annadirProducto(prod);
    }

    // Actualizamos el carrito (HTML).
    actualizarCarrito();
}

/**
 * Método para actualizar el HTML del carrito.
 */
function actualizarCarrito()
{
    // Vaciamos el HTML del carrito.
    vaciarCarrito();
    // Llenamos el HTML del carrito.
    llenarCarrito();
}

/**
 * Método para vaciar el HTML del carrito.
 */
function vaciarCarrito()
{
    document.querySelector('#lista-carrito tbody').innerHTML = '';
}

/**
 * Método para llenar el HTML del carrito.
 */
function llenarCarrito()
{
    // Recogemos todos los productos del carrito.
    const productos = ControladorCarrito.getProductos();

    // Iteramos los productos y vamos agregando nuevas filas el cuerpo de la
    // tabla de productos del carrito.
    productos.forEach(p => {
        const{id,nombre,categoria,imagen,precio,vendedor,stock,cantidad} = p;
        // Generamos una fila nueva.
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${imagen}">
        </td>
        <td>${nombre}</td>
        <td>${precio}€</td>
        <td>${cantidad}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}">X</a>
        </td>
        `;

        // La agregamos al cuerpo de la tabla de productos del carrito.
        document.querySelector('#lista-carrito tbody').appendChild(row);
    });
}

////////////////////////////////////////////////////////////////////////////////

/**
 * Método para vaciar el carrito por completo.
 * @param {Event} e 
 */
function vaciarCarritoEvento(e)
{
    // Vaciamos el HTML del carrito.
    vaciarCarrito();
    // Vaciamos los productos almacenados en memoria del carrito.
    ControladorCarrito.vaciarCarrito();
}

////////////////////////////////////////////////////////////////////////////////

/**
 * Método para eliminar un producto del carrito.
 * @param {Event} e 
 */
function eliminarProductoCarritoEvento(e)
{
    e.preventDefault();

    // Comprobamos que hemos pulsado el botón para eliminar un producto.
    const boton = e.target;
    if(boton.classList.contains("borrar-curso")) {
        // Obtenemos el id del producto.
        const id = boton.getAttribute("data-id");
        // Eliminamos el producto de la memoria del carrito.
        ControladorCarrito.eliminarProducto(id);
    }

    // Actualizamos el carrito.
    actualizarCarrito();
}

////////////////////////////////////////////////////////////////////////////////

/**
 * Método para filtrar la búsqueda de productos.
 * @param {Event} e 
 */
function filtrarBusquedaEvento(e)
{
    const checkbox = e.target;

    // Compprobamos que el input sea de tipo checkbox.
    if(checkbox.getAttribute("type") === "checkbox") {
        // Recogemos todos los checkboxes.
        let checkboxesCategorias = document.querySelectorAll("#filter-container input[type=checkbox]");
        // Filtramos y nos quedamos solo con los id de las categorías que hayan
        // sido seleccionadas (checked).
        // >>> Le ponemos el spread operator porque checkboxesCategorias es un
        //     NodeList y no tiene los método de Array.
        checkboxesCategorias = [...checkboxesCategorias].filter(c => c.checked)
        .map(c => c.id);

        // Obtenemos los productos de las categorías seleccionadas.
        let prodsFiltrados = ControladorBD.getProductosPorCategorias(checkboxesCategorias);

        // Vaciamos el contenido de la página de productos.
        const container = document.querySelector("#products-container");
        container.innerHTML = "";

        // Si no hay productos que cumplan el filtrado, los mostramos todos.
        if(prodsFiltrados.length === 0) {
            prodsFiltrados = ControladorBD.getProductos();
        }

        // Iteramos los productos y vamos generando y añadiendo el HTML de cada
        // uno.
        prodsFiltrados.forEach(p =>
            {
                container.innerHTML += crearHTMLProducto(p);
            }
        );
    }
}