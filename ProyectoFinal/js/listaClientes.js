import {ControladorPHP as Controlador} from "./controlador.js";

function inicializarListeners()
{
    document.addEventListener("DOMContentLoaded", mostrarClientesEvento, false); 
}

inicializarListeners();

async function mostrarClientesEvento(e)
{
    const clientes = await Controlador.getClientes();

    let container = document.querySelector("#listado-clientes");
    clientes['datos'].forEach(cliente => {
        container.innerHTML += generarHTMLCliente(cliente);
    });
}

function generarHTMLCliente(cliente)
{
    // Formateamos el NIF.
    const regexNif = /(\d{8})([A-Z])/gm;
    const strNif = cliente.nif;
    const nif = `$1-$2`;
    const resultNif = strNif.replace(regexNif, nif);

    // Formateamos el teléfono.
    const regexTlf = /(\d{3})(\d{2})(\d{2})(\d{2})/gm;
    const strTlf = cliente.telefono;
    const tlf = `$1 $2 $3 $4`;
    const resultTlf = strTlf.replace(regexTlf, tlf);

    return `
    <tr>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <p class="text-sm leading-5 font-medium text-gray-700 text-lg font-bold">${cliente.nombre}</p>
            <p class="text-sm leading-10 text-gray-700">${cliente.apellidos}</p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
            <p class="text-gray-700">${cliente.email}</p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 leading-5 text-gray-700">
            <p class="text-gray-600">${resultNif}</p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 leading-5 text-gray-700">
            <p class="text-gray-600">${resultTlf}</p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
            <a href="#" class="block text-teal-600 hover:text-teal-900 mr-2 crearCita" data-clientenombre="Juan" data-clienteapellidos="Jiménez Gómez" data-clientenif="33489123F">Crear cita</a>
            <a href="#" class="block text-teal-600 hover:text-teal-900 mr-2 verCitas" data-clientenombre="Juan" data-clienteapellidos="Jiménez Gómez" data-clientenif="33489123F">Ver citas</a>
            <a href="#" class="block text-red-600 hover:text-red-900 eliminar" data-clientenombre="Juan" data-clienteapellidos="Jiménez Gómez" data-clientenif="33489123F">Eliminar cliente</a>
        </td>
    </tr>
    `;
}