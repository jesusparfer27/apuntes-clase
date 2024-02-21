// const Express
import express from "express";

// const PORT= 3000
import {PORT} from './config.js'
import {timeLog} from './middlewares/logger.js'

import * as xmlbuilder from xmlbuilder


/**
 * MOSTRAR DISTINTOS TIPOS DE DATOS EN RESPUESTA
 * 
 *  - Responde en JSON
 *  - Response en XML
 *  - Response en HTML
 *  - rESPONSE EN yml (NO LA UTILIZAREMOS)
 * 
 */


const app = express();
console.clear();

const datos = {
    id: 25,
    name: "Maria Soledad",
    email: "maria.soledad@mail.com"
}

app.use(timeLog)

app.get("/resp-json", (req, res) => {
// convertir mi objeto JS a un String JSON
    const jsonData = JSON.stringify(datos)
    res.setHeader("Content-Type", "application/json")
    res.send(jsonData)
})

app.get("/resp-xml", (req, res) => {

    const xml = xmlbuilder.create('data')
    .ele('id', data.id)
    .up()
    .ele('name', data.name)
    .up()
    .ele('email', datos.email)
    .end();

    res.header('Content-type', 'application/xml');
    res.send(xml)
})

app.get("/usuarios/:idusuario/:nombre", (req, res) => {

    console.log(req);
    //  recibimos parametros
    const idUsuario=req.params.idusuario;
    const nombre=req.params.nombre;

    constjsonData = JSON.stringify(datos);
    res.setHeader("Content-Type", "application/json");
    res.send(jsonData);
})

app.get("/usuarios", (req, res) => {
    const jsonData = JSON.stringify(datos);
    res.setHeader("Content.Type", "application/json");
    res.send(jsonData);
})

