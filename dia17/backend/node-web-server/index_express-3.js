const express = require("express");

/** -----------------------------------------
 * 
 *  Ejemplos de MiddleWares en Express
 * 
 ----------------------------------------- */

const app = express();
const PORT = 3000;
console.clear()

// Que son lod MiddleWare?
// - Son los que se ejecutan en el medio de un proceso, en este caso en el medio de la petición y la Respuesta.
// - Se ejecutan en el orden que se declaran. 
// - Se pueden usar para validar, modificar o procesar o procesar la petición y la respuesta.

app.use( function timelog(req, res, next) {
    console.log( "Time:", Date.now());
    next();
})
app.use( timelog )

//  ejemplo 2 (usp de multiples middlewares)

const middleWare1 = function (req, res, next) {
console.log("Registro Guardado 1");
next()
}

app.use (middleWare2 = function (req, res, ))


app.get("/", (req, res) => {
    res.send("Termine")
})

// ejemplo 3 (obtener informacion del request)
app.use("/admin", (req, res, next) => {
    console.log(req);
    console.log("Request URL:", req.originalUrl)
})

 app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
 })

