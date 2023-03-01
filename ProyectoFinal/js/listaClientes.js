import {ControladorPHP as Controlador} from "./controlador.js";


////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// MAIN ///////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////

/**
 * Método que inicializa los listeners.
 */
function inicializarListeners()
{
    // Listener para cargar los datos de los clientes de manera asíncrona.
    document.addEventListener("DOMContentLoaded", mostrarClientesEvento, false);

    // Listener para ir al formulario de registro de clientes.
    document.querySelector("#crearCliente").addEventListener("click",
    irFormularioRegistroCliente, false);

    // Listener para los links de crear cita, ver citas y eliminar cliente.
    document.querySelector("#listado-clientes").addEventListener("click",
    comprobarClick, false);
}

inicializarListeners();

////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// AUX. METHODS /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 

/**
 * Método que muestra los clientes en la tabla.
 */
async function mostrarClientesEvento()
{
    const clientes = await Controlador.getClientes();

    let container = document.querySelector("#listado-clientes");
    clientes['datos'].forEach(cliente => {
        container.innerHTML += generarHTMLCliente(cliente);
    });
}

/**
 * Método que genera el código HTML del cliente pasado por parámetro.
 * @param {Object} cliente 
 * @returns Código HTML para la fila correspondiente a un cliente.
 */
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
            <a href="#" class="block text-teal-600 hover:text-teal-900 mr-2 crearCita" data-clientenombre="${cliente.nombre}" data-clienteapellidos="${cliente.apellidos}" data-clientenif="${cliente.nif}">Crear cita</a>
            <a href="#" class="block text-teal-600 hover:text-teal-900 mr-2 verCitas" data-clientenombre="${cliente.nombre}" data-clienteapellidos="${cliente.apellidos}" data-clientenif="${cliente.nif}">Ver citas</a>
            <a href="#" class="block text-red-600 hover:text-red-900 eliminar" data-clientenombre="${cliente.nombre}" data-clienteapellidos="${cliente.apellidos}" data-clientenif="${cliente.nif}">Eliminar cliente</a>
        </td>
    </tr>
    `;
}

/**
 * Método que redirige al formulario de registro de clientes.
 */
function irFormularioRegistroCliente()
{
    window.location.href = "./nuevo-cliente.html";
}


function guardarDatosLocalStorage(campo)
{
    const nombre = campo.getAttribute('data-clientenombre');
    const apellidos = campo.getAttribute('data-clienteapellidos');
    const nif = campo.getAttribute('data-clientenif');
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellidos', apellidos);
    localStorage.setItem('nif', nif);
}

function crearCita(campo)
{
    guardarDatosLocalStorage(campo);
    window.location.href = './nueva-cita.html';
}

function verCitas(campo)
{
    guardarDatosLocalStorage(campo);
    window.location.href = './lista-citas.html';
}

async function eliminarPaciente(campo)
{
    const res = confirm(`¿Seguro que desea eliminar al cliente ${campo.getAttribute('data-clientenombre')} ${campo.getAttribute('data-clienteapellidos')}?`);
    if(res) {
        const respuesta = await Controlador.eliminarCliente(campo.getAttribute('data-clientenif'));
    }
}

function comprobarClick(e)
{
    const campo = e.target;
    if(campo.classList.contains('crearCita')) {
        crearCita(campo);
    } else if (campo.classList.contains('verCitas')) {
        verCitas(campo);
    } else if (campo.classList.contains('eliminar')) {
        eliminarPaciente(campo);
    } else {
        e.preventDefault();
    }
}

////////////////////////////////////////////////////////////////////////////////