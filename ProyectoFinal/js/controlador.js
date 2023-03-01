export class ControladorPHP {

    /**
     * Método que elimina la base de datos para el caso de que se necesite
     * establecer el estado inicial.
     * La siguiente petición al servidor creará de nuevo la base de datos
     * y la rellenará con algunos datos de prueba.
     * @returns Respuesta del servidor en formato JSON
     */
    static async eliminarBD() {
        let respuestaJSON = null;
        try {
            const respuesta = await fetch(`citasClientes.php`, {
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify({
                   metodo: "eliminarBD"
                })
            });
            respuestaJSON = await respuesta.json();
        }catch(error) {
            console.error(error.message);
        }
        return respuestaJSON;
    }

    /**
     * Método que devuelve todos los clientes almacenados en la base de datos.
     * @returns Respuesta del servidor en formato JSON
     */
    static async getClientes()
    {
        const respuesta = await fetch(`citasClientes.php`, {
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify({
                    metodo: "getClientes"
                })
            });

        const respuestaJSON = await respuesta.json();
        return respuestaJSON;
    }

    /**
     * Método que guarda un cliente en la base de datos.
     * @param {Object} c 
     * @returns Respuesta del servidor en formato JSON
     */
    static async setCliente(c)
    {
        let respuestaJSON = null;
        try {
            const respuesta = await fetch(`citasClientes.php`, {
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify({
                    metodo : "setCliente",
                    cliente: c
                })
            });
            respuestaJSON = await respuesta.json();
        }catch(error) {
            console.error(error.message);
        }
        return respuestaJSON;
    }

    /**
     * Método que devuelve todas las citas de un cliente almacenadas en la base
     * de datos.
     * @returns Respuesta del servidor en formato JSON
     */
    static async getCitasCliente()
    {
        const respuesta = await fetch(`citasClientes.php`, {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({
                metodo: "getCitasCliente",
                nifCliente: localStorage.getItem('nif')
            })
        });

        const respuestaJSON = await respuesta.json();
        return respuestaJSON;
    }

    /**
     * Método que guarda una cita asociada a un cliente en la base de datos.
     * @param {Object} c 
     * @returns Respuesta del servidor en formato JSON
     */
    static async setCita(c)
    {
        let respuestaJSON = null;
        try {
            const respuesta = await fetch(`citasClientes.php`, {
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify({
                    metodo : "setCita",
                    cita : c
                })
            });
            respuestaJSON = await respuesta.json();
        }catch(error) {
            console.error(error.message);
        }
        return respuestaJSON;
    }

    /**
     * Método que elimina un cliente de la base de datos.
     * @param {String} nifCliente 
     * @returns Respuesta del servidor en formato JSON
     */
    static async eliminarCliente(nifCliente) {
        let respuestaJSON = null;
        try {
            const respuesta = await fetch(`citasClientes.php`, {
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify({
                   metodo: "eliminarCliente",
                   nif : nifCliente
                })
            });
            respuestaJSON = await respuesta.json();
        }catch(error) {
            console.error(error.message);
        }
        return respuestaJSON;
    }

    /**
     * Método que elimina una cita de la base de datos.
     * @param {String} idCita 
     * @returns Respuesta del servidor en formato JSON
     */
    static async eliminarCita(idCita) {
        let respuestaJSON = null;
        try {
            const respuesta = await fetch(`citasClientes.php`, {
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify({
                   metodo: "eliminarCita",
                   id : idCita
                })
            });
            respuestaJSON = await respuesta.json();
        }catch(error) {
            console.error(error.message);
        }
        return respuestaJSON;
    }
}