import {ControladorPHP as Controlador} from "./controlador.js";



////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// MAIN ///////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////

/**
 * Método que inicializa los listeners.
 */
function inicializarListeners()
{
    // Listener para cargar los datos de las citas del cliente de manera asíncrona.
    document.addEventListener("DOMContentLoaded", mostrarCitasEvento, false);
}

inicializarListeners();

////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// AUX. METHODS /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 

/**
 * Método que muestra los clientes en la tabla.
 */
async function mostrarCitasEvento()
{
    const citas = await Controlador.getCitasCliente();
    console.log(citas['datos']);
    let container = document.querySelector("#listado-citas");
    citas['datos'].forEach(cita => {
        container.innerHTML += generarHTMLCitas(cita);
    });
}

/**
 * Método que genera el código HTML del cliente pasado por parámetro.
 * @param {Object} cliente 
 * @returns Código HTML para la fila correspondiente a un cliente.
 */
function generarHTMLCitas(cita)
{
    // Formateamos la fecha.
    const regexFecha = /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/gm;
    const strFecha = cita.fecha;
    const fecha = `$3-$2-$1`;
    const resultFecha = strFecha.replace(regexFecha, fecha);

    return `
    <tr>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <p class="text-gray-700"> ${resultFecha} </p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
            <p class="text-gray-700">${cita.hora}</p>
        </td>
        <td class="px-6 py-4 border-b border-gray-200 leading-5 text-gray-700">
            <p class="text-gray-600">${cita.descripcion}</p>
        </td>
        <td class="px-6 py-4 border-b border-gray-200 leading-5 text-gray-700">
            <p class="text-gray-600">${cita.detalles}</p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
            <a href="#" class="block text-red-600 hover:text-red-900 eliminar" data-citaid="${cita.id}" data-nifcliente="${cita.nifCliente}" data-citafecha="${cita.fecha}" data-citahora="${cita.hora}">Eliminar cita</a>
        </td>
    </tr>
    `;
}

////////////////////////////////////////////////////////////////////////////////