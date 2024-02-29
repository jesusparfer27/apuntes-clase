import express from 'express'
import { PORT, fullDomain, domain } from './config/config.js';
import { setHeaders } from './middlewares/setHeaders.js';
import { logger } from './middlewares/logger.js';
import cors from 'cors'
import indexRouter from './routes/index.routes.js';

const app = express()
console.clear();


//Uso de middlewares
app.use(cors());
app.use(setHeaders);
app.use(express.json());
app.use(logger);
app.use(express.urlencoded({extended:false}));

//  Importar metofod de Sequelize
import { Sequelize, DataTypes } from "sequelize";

// Crear una instancia de Sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/datos.sqlite'
});

//  Definir modelos (tablas)
const Libros = sequelize.define('Libros', {
    email: DataTypes.STRING, //DATE, integer, number, boolean
    password: DataTypes.STRING,
    edad: DataTypes.INTEGER,
})

app.use("/API/v1/", indexRouter)

//Rutas
app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    const landingHTML = `<h1>Bienvenidos a la API de tus libros favoritos</h1>`
    res.send(landingHTML)

})


//Listen del server

app.listen(PORT, () => {
    console.log(`Server Running in ${fullDomain}`)
})
