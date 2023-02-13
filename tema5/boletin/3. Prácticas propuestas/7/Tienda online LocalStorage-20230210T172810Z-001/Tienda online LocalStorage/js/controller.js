// Importamos la base de datos
import {productos, categorias} from "../db/db.js";
import {Util} from "./util.js";



////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// CONTROLADOR BD ////////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 

export class ControladorBD
{
    static getProductos()
    {
        return productos;
    }

    static getProducto(id)
    {
        const pArray = productos.filter(prod => prod.id === id);
        return pArray.length === 0 ? null : pArray;
    }

    static getCategorias()
    {
        return categorias;
    }

    static getCategoria(id)
    {
        const cArray = categorias.filter(cat => cat.id === id);
        return cArray.length === 0 ? null : pArray;
    }

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
    static vaciarCarrito()
    {
        localStorage.clear();
    }

    static eliminarProducto(id)
    {
        localStorage.removeItem(id);
    }

    static getProducto(id)
    {
        return JSON.parse(localStorage.getItem(id));
    }

    static existeProducto(id)
    {
        ControladorCarrito.getProducto(id) !== null;
    }

    static getCantidadProducto(id)
    {
        const prod = ControladorCarrito.getProducto(id);
        return prod ? prod.cantidad : 0;
    }

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