// Importamos la base de datos
import {productos, categorias} from "../db/db.js";
import {Util} from "./util.js";



////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// CONTROLADOR BD ////////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 

export class ControladorBD
{
    /**
     * Método que devuelve todos los productos de la base de datos.
     * @returns 
     */
    static getProductos()
    {
        return productos;
    }

    /**
     * Método que devuelve el producto que corresponde al id pasado por
     * parámetro.
     * @param {Integer} id 
     * @returns 
     */
    static getProducto(id)
    {
        const pArray = productos.filter(prod => prod.id === id);
        return pArray.length === 0 ? null : pArray[0];
    }

    /**
     * Método que devuelve todas las categorías de la base de datos.
     * @returns 
     */
    static getCategorias()
    {
        return categorias;
    }

    /**
     * Método que devuelve la categoría que corresponde al id pasado por
     * parámetro.
     * @param {Integer} id 
     * @returns 
     */
    static getCategoria(id)
    {
        const cArray = categorias.filter(cat => cat.id === id);
        return cArray.length === 0 ? null : pArray;
    }

    /**
     * Método que recibe un array con ids de categorías y devuelve un array con
     * los productos cuya categoría se encuentra dentro de dicho primer array.
     * @param {Array} categoriasSeleccionadas 
     * @returns 
     */
    static getProductosPorCategorias(categoriasSeleccionadas)
    {
        return productos
        .filter(prod => categoriasSeleccionadas.includes(prod.categoria));
    }
}



////////////////////////////////////////////////////////////////////////////////
////////////////////////////// CONTROLADOR CARRITO /////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export class ControladorCarrito
{
    /**
     * Método para borrar el almacenamiento local (vaciar el carrito).
     */
    static vaciarCarrito()
    {
        localStorage.clear();
    }

    /**
     * Método para eliminar un producto del almacenamiento local (eliminar un
     * producto del carrito).
     * @param {Integer} id 
     */
    static eliminarProducto(id)
    {
        localStorage.removeItem(id);
    }

    /**
     * Método para obtener un producto del almacenamiento local (obtener un
     * producto del carrito).
     * @param {Integer} id 
     * @returns 
     */
    static getProducto(id)
    {
        return JSON.parse(localStorage.getItem(id));
    }

    /**
     * Método para comprobar si existe un producto en el almacenamiento local
     * (si existe un producto en el carrito).
     * @param {Integer} id 
     * @returns 
     */
    static existeProducto(id)
    {
        return ControladorCarrito.getProducto(id) !== null;
    }

    /**
     * Método para obtener la cantidad que hay en el almacenamiento local de un
     * producto (cantidad de un producto añadido al carrito).
     * @param {Integer} id 
     * @returns 
     */
    static getCantidadProducto(id)
    {
        const prod = ControladorCarrito.getProducto(id);
        return prod ? prod.cantidad : 0;
    }

    /**
     * Método para añadir un producto al almacenamiento local (al carrito). Si
     * este ya se encontraba almacenado, se aumenta la cantidad.
     * @param {Object} producto 
     */
    static annadirProducto(producto)
    {
        if(producto) {
            const id = producto.id;
            if(ControladorCarrito.existeProducto(id)) {
                producto = ControladorCarrito.getProducto(id);
                producto.cantidad += 1;
            } else {
                producto.cantidad = 1;
            }

            localStorage.setItem(id, JSON.stringify(producto));
        }
    }

    /**
     * Método para obtener todos los productos del almacenamiento local
     * (carrito) con formato JSON almacenados en un array.
     * @returns 
     */
    static getProductos()
    {
        let productosCarrito = [];

        for (let i = 0; i < localStorage.length; i++) {
            const id = localStorage.key(i);
            const prod = JSON.parse(localStorage.getItem(id));
            productosCarrito.push(prod);
        }

        return productosCarrito;
    }
}