// const Express
import express from "express";

// const POORT= 3000
import {PORT} from './config.js'
import {timeLog} from './middlewares/logger.js'


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

app.listen