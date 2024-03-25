// easyFetch({
//     url:"mi/url",
//     method: "PUT",
//     body: FormData,
//     timeout: 3000,
//     callback: (data)=>{console.log("MIS DATOS", data)}
// })


/**
 * Realiza una petición fetch
 * - Con gestión de errores básica
 * - Incluye señal de Abort incluida de máximo 5 segundos
 * 
 * @param {Object}          fetchOptions                     - Opciones de nuestra solicitud fetch 
 * 
 * @param {string}          fetchOptions.url                 - La url a la que se realizará la petición 
 * @param {string}          [fetchOptions.metodo="GET"]      - El método HTTP de nuestra solicitud (GET, POST, PUT, DELETE, etc) 
 * @param {objeto|null}     [fetchOptions.body=null]         - El cuerpo de la petición que convertiremos a JSON
 * @param {number}          [fetchOptions.timeout=5000]      - Tiempo de espera máximo en milisegundos antes de abortar la petición
 * @param {function|null}   fetchOptions.callback            - Función que se ejecuta luego de recibir los datos.
 * 
 * @param {Promise|void}                                     - Devuelve una promesa que resuelve los datos de la respiesta si no se proporciona una función de callback.
 * @returns 
 */

export const easyFetch = async ({
    url, method = "GET", body = null, timeout = 5000, callback = null
}) => {
    const controller = new AbortController();
    const abortTimeout = setTimeout(() => controller.abort(), timeout)

    const fetchOptions = {
        method,
        headers: {
            'Content-Type': "application/json",
        },
        signal: controller.signal
    }

    if (body)
        fetchOptions.body = JSON.stringify(body);

    try {
        const response = await fetch(url, fetchOptions);
        clearTimeout(abortTimeout);

        if (!response.ok)
            throw new Error(response.statusTexts);

        const data = await response.json()

        if (callback)
            callback(data);
        else
            return data;

    } catch (error) {
        console.log(error)
    }


}