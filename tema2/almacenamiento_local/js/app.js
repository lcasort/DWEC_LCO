// Elemento contenedor global
const globalContainer = document.querySelector('#global-container');

// Cargamos los listeners de la página
loadEventListeners();

function loadEventListeners() {
    globalContainer.addEventListener('click', identifySource);
}

// Callback que se invoca cuando se hace clic sobre el contenedor global
function identifySource(event) {
    event.preventDefault();
    if(event.target.classList.contains('add')) {
        const product = getProduct(event.target);
        addProduct(product)
    }else if(event.target.classList.contains('remove')) {
        const product = getProduct(event.target);
        removeProduct(product);
    }
}

/**
 * 
 * @param {object} target 'botón' sobre el que se hace clic
 * @returns producto que se va a añadir o eliminar del carrito
 */
function getProduct(target) {
    const dataContainer = target.parentElement.parentElement;
    const article = dataContainer.parentElement;
    const id = article.id;
    const name = dataContainer.querySelector('h4').textContent;
    let price = dataContainer.querySelector(':nth-child(2)').textContent;
    let soldBy = dataContainer.querySelector(':nth-child(3)').textContent;
    let units = dataContainer.querySelector(':nth-child(4)').textContent;
    
    ////////////////////////COMIENZA EL CÓDIGO DEL ALUMNADO/////////////////////////////
    //Tratamiento del precio (debe ser un número). El valor se almacena en la variable "price"
    price = parseFloat(price.slice(0,-1).replaceAll(',', '.'));

    //Tratamiento del vendedor (sólo debe quedarse el nombre del vendedor). El valor se almacena en la variable "soldBy"
    soldBy = soldBy.split(' ').splice(2,2).join(' ');

    //Tratamiento del número de unidades (sólo debe quedarse el número de unidades, un número). El valor se almacena en la variable "units"
    units = parseInt(units.split(' ')[1]);

    ////////////////////////TERMINA EL CÓDIGO DEL ALUMNADO/////////////////////////////
    const product = {
        'id': id,
        'name': name,
        'price': price,
        'soldBy': soldBy,
        'units': units
    };
    return product;
}

/**
 * Método que añade al localStorage el producto aportado como parámetro.
 * Se almacena con clave = del producto y valor = a la serialización del producto.
 * Si el elemento ya existe, no se almacena y se devuelve false.
 * @param {object} product producto a añadir en localStorage.
 * @returns true si se almacena correctamente y false si no se puede almacenar.
 */
function addProduct(product) {
    ////////////////////////COMIENZA EL CÓDIGO DEL ALUMNADO/////////////////////////////

    // Cuando sí se añada un producto al localStorage, imprime el carrito de la compra
    // para ayudarte a depurar (y déjalo en el código)
    if(localStorage) {
        if(!localStorage.getItem(product.id)) {
            localStorage.setItem(product.id, JSON.stringify(product));
            printShoppingCart();
            return true;
        }
    } else {
        throw new Error('No tienes soporte para LocalStorage!');
    }

    return false;
    ////////////////////////TERMINA EL CÓDIGO DEL ALUMNADO/////////////////////////////
}

/**
 * Método que elimina del localStorage el producto aportado como parámetro.
 * Se buscará por el 'id' del producto.
 * Si el elemento no existe en el localStorage, se devuelve false.
 * @param {object} product producto a eliminar del localStorage.
 * @returns true si se ha eliminado correctamente y false si
 * no se puede eliminar porque no existe en localStorage.
 */
function removeProduct(product) {
    ////////////////////////COMIENZA EL CÓDIGO DEL ALUMNADO/////////////////////////////

    
    // Cuando sí se elimina un producto del localStorage, imprime el carrito de la compra
    // para ayudarte a depurar (y déjalo en el código)
    if(localStorage) {
        if(localStorage.getItem(product.id)) {
            localStorage.removeItem(product.id);
            printShoppingCart();
            return true;
        }
    } else {
        throw new Error('No tienes soporte para LocalStorage!');
    }

    return false;
    ////////////////////////TERMINA EL CÓDIGO DEL ALUMNADO/////////////////////////////
}

/**
 * Método que imprime por consola todo el carrito de la compra.
 * Formato de ejemplo:
 * 
 * ----------Productos del carrito:
 * --Id: 001
 *   Nombre: Placa base
 *   Precio: 120,30€
 *   Vendido por: Amazonia
 *   Número de unidades que quedan: 20
 */
function printShoppingCart() {
    ////////////////////////COMIENZA EL CÓDIGO DEL ALUMNADO/////////////////////////////

    if(localStorage) {
        console.log('----------Productos del carrito:');
        for(let key in localStorage) {
            let values = JSON.parse(localStorage.getItem(key));
            if(values) {
                console.log('-- Id: ' + key);
                console.log('  Nombre: ' + values['name']);
                let precio = values['price'].toString().replaceAll('.',',') + '€';
                console.log('  Precio: ' + precio);
                console.log('  Vendido por: ' + values.soldBy);
                console.log('  Número de unidades que quedan: ' + values.units);
            }
        }
    } else {
        throw new Error('No tienes soporte para LocalStorage!');
    }

    ////////////////////////TERMINA EL CÓDIGO DEL ALUMNADO/////////////////////////////
}

/**
 * Método que comprueba si un producto está almacenado en el localStorage.
 * @param {object} product producto que hay que comprobar si está almacenado en localStorage.
 * @returns true si el producto está almacenado en el localStorage, false en caso contrario.
 */
function isProductStored(product) {
    ////////////////////////COMIENZA EL CÓDIGO DEL ALUMNADO/////////////////////////////
    
    if(localStorage) {
        if(localStorage.getItem(product.id)) {
            return true;
        }
    } else {
        throw new Error('No tienes soporte para LocalStorage!');
    }

    return false;

    ////////////////////////TERMINA EL CÓDIGO DEL ALUMNADO/////////////////////////////
}