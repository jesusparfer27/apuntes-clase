import express from "express";
import cors from 'cors';
import {fullDomain, PORT} from './config/config.js'

const app = express();
console.clear()

// middleWares
app.use(cors());
app.use(express.json()); // Leer datos Json de req.body
app.use(express.urlencoded({extended:false}));// leer datos de urlEncoded de req.body

//  Importar metofod de Sequelize
import { Sequelize, DataTypes } from "sequelize";

// Crear una instancia de Sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/datos.sqlite'
});

//  Definir modelos (tablas)
const Users = sequelize.define('Usuarios', {
    email: DataTypes.STRING, //DATE, integer, number, boolean
    password: DataTypes.STRING,
    edad: DataTypes.INTEGER,
})

// Sincronizar mis modelos con mi DB (crear tablas en caso de que no existan)
// sequelize.sync({ force: true });
sequelize.sync({ alter: true})
// force: borra los datos anteriores
// alter: te vuelve a actualizar 

app.get ("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send("<h1>HOLAAA</h1>");
});

app.get("/users", async (req, res) => {
    const users = await Users.findAll();
    res.json(users)
});

app.post("/users", async (req, res) => {
    const user = await Users.create(req.body) // cree el usuario con (req.body)
    res.json(user) // Recibí la respuesta llamando la variable user
})

app.put("/users/:id", async ( req, res) => {
    const user = await Users.findByPk(req.params.id);
    if (user){
        await user.update(req.body);
        res.json(user);
    } else {
        res.status(404).json({msg:"usuario no encontrado"});
    }
    // console.log("user es:", user)
    // res.json(user)
}) 

app.delete("/users/:id", async (req, res) => {
    const user = await Users.findByPk(req.params.id)
    if (!user) { res.status(404).json({msg:"usuario no encontrado"}); return; }
    const userViejo=user;
    await user.destroy();
    res.json({msg:"usuario eliminado correctamente"})
    }
)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: ${fullDomain}`)
})

