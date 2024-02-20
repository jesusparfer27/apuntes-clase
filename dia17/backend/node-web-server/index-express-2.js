const express = require("express");

const app = express();

// enviar informacion luego de cumplir 
app.get("/ejemplo/a", (req, res, next) => {
    console.log("La respuesta será enviada luego del timeout");

    setTimeout(() => {
        console.log("Timeout de 2 seg");
        next();
    }, 2000);
}, function (req, res) {
    console.log("Llegaste a la 2da funcion");
    res.send("llegaste a la 2da funcion")
});

// Enviar informacion al usuario, mientras el servidor sigue trabajando
app.get("/ejemplo/b", (req, res, next) => {
    console.log("La respuesta sera enviada antes de finalizar la funcion del timeout")
    next();
    setTimeout(() => {
        console.log("timeout 2 seg")
    }, 2000);
}, (req, res) => {
    res.send("Llegaste a la 2da funcion")
})

// creamos una promesa antes de enviar datos
app.get("/ejemplo/c", (req, res, next) => {
    console.log("La respuesta sera enviada una vez cumplida la promesa")

    new Promise ((resolve, reject) => {

        setTimeout(() => {
            console.log("Timeout 2 seg");
            resolve();
        }, 2000)
        
    }).then ( () => {
        next()
    })

    next();
    setTimeout(() => {
        console.log("timeout 2 seg")
    }, 2000);
}, (req, res) => {
    res.send("Llegaste a la 3da funcion")
})


app.listen(8080, () => {
    console.log("Servidor corriendo en 8080")
})