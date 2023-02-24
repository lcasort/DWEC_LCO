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
       // Esperamos a que "fetch" devuelva algo
        const respuesta = await fetch(`citasClientes.php`, {
                method : "POST",
                /* El "content-type" debe coincidir con el tipo que se envíe
                    en el "body" (más abajo). Si vamos a enviar un json, habría
                    que especificar el "content-type" "application/json"
                */
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify({
                    metodo: "getClientes"
                })
            });
        // Esperamos a que se lea la respuesta del cuerpo y se devuelva como JSON
        const respuestaJSON = await respuesta.json();
        return respuestaJSON;
    }

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


    static async getCitasCliente()
    {
        // Esperamos a que "fetch" devuelva algo
        const respuesta = await fetch(`citasClientes.php`, {
            method : "POST",
            /* El "content-type" debe coincidir con el tipo que se envíe
                en el "body" (más abajo). Si vamos a enviar un json, habría
                que especificar el "content-type" "application/json"
            */
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({
                metodo: "getCitasCliente",
                nifCliente: localStorage.getItem('nif')
            })
        });
        // Esperamos a que se lea la respuesta del cuerpo y se devuelva como JSON
        const respuestaJSON = await respuesta.json();
        return respuestaJSON;
    }
}