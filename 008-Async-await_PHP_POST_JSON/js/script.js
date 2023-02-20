document.getElementById("idProducto").addEventListener("input", obtenerProducto, false);

/* Si utilizamos una expresión "await" dentro de una función,
    dicha función tiene que ser declarada como asíncrona "async"
*/
async function obtenerProducto(e) {
    const idProducto = e.target.value;
    /* Utilizar "async-await" es exactamente lo mismo que utilizar
        "fetch-then", pero ofrece un código más fácil de entender
        porque tiene una sintaxis más secuencial sin necesidad
        de utilizar funciones (que en realidad son callbacks)
    */
   // Esperamos a que "fetch" devuelva algo
    const respuesta = await fetch(`tienda.php`, {
            method : "POST",
            /* El "content-type" debe coincidir con el tipo que se envíe
                en el "body" (más abajo). Si vamos a enviar un json, habría
                que especificar el "content-type" "application/json"
            */
            headers : {
                "content-type" : "application/x-www-form-urlencoded"
            },
            body : `idProducto=${idProducto}`
        });
    // Esperamos a que se lea la respuesta del cuerpo y se devuelva como JSON
    const producto = await respuesta.json();
    muestraProductoHTML(producto);

    /*
    CÓDIGO DEL EJEMPLO CON FETCH SIN ASYNC-AWAIT, PARA COMPARAR
    fetch(`tienda.php`, {
            method : "POST",
                headers : {
                    "content-type" : "application/x-www-form-urlencoded"
                },
                body : `idProducto=${idProducto}`
            })
            .then(respuesta => respuesta.json())
            .then(producto => muestraProductoHTML(producto))
            .catch(error => console.log('Problema con Fetch:' + error.message));
    */
}

function muestraProductoHTML(producto) {
    const contenedor = document.getElementById("contenedorProducto");
    
    const {id, nombre, categoria, imagen, precio, vendedor, stock} = producto;

    contenedor.innerHTML = `
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
    </article>
    `;

}