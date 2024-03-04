import { misDatos } from "../db/libros.js"

const listaLibros = misDatos.libros;

//  Importar metofod de Sequelize
import { Sequelize, DataTypes } from "sequelize";

// Crear una instancia de Sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/datos.sqlite'
});

//  Definir modelos (tablas)
const Libros = sequelize.define('Libros', {
    // email: DataTypes.STRING, //DATE, integer, number, boolean
    // password: DataTypes.STRING,
    // edad: DataTypes.INTEGER,
    titulo: DataTypes.STRING, //DATE, INTEGER, NUMBER, BOOLEAN...
    autor: DataTypes.STRING,
    categoría: DataTypes.STRING
})

sequelize.sync({alter: true}); // actualiza las columnas de las tablas si hay diferencias

const responseApi = {
    data: listaLibros,
    msg: "",
    status: "ok"
}

export const getAllLibros = async  (req, res) => {
    
    const libros = await Libros.findAll();

    // responseApi.data = listaLibros;
    responseApi.data = libros;
    responseApi.msg = "Obtener TODOS los libros";
    responseApi.status = "ok";
    res.status(200).send(responseApi);
    
}

export const getLibroById = async (req, res) => {

    const libros = await Libros.findByPk();

    responseApi.data = libros;
    responseApi.msg = "Obtener 1 libro";
    responseApi.status = "ok";
    res.status(200).send(responseApi);
}
export const updateLibro = async(req, res) => {
    const Libro = await Libros.findByPk(req.params.id);º
    if (!Libro) {
        responseApi.msg="Libro no encontrado";
        responseApi.status="ok";
        res.status(404).send(responseAPI);
        return;
    }

    await Libro.update(req.body);
    // respondo con la nueva lista de libros ACTUALIZADA
    responseAPI.data=Libro;
    response.msg="Actualizar libro con valores especificos";
    response.status="ok";
    console.log(req.body)
    res.status(200).send(responseApi);
    const {id, titulo, autor, categoria} = req.body


    //buscar libro por id
    const index = listaLibros.findIndex(libro => libro.id == id)

    //actualizo libro

    listaLibros[index] = {
        ...listaLibros[index], 
        titulo,
        autor,
        categoria
    }
    //respondo con la nueva lista

    responseApi.data = listaLibros
    responseApi.msg = "Actualizado ";
    responseApi.status = "ok";
}

export const createLibro = (req, res) => {

    const {titulo, autor, categoria} = req.body

    const newId =  Math.random();
    listaLibros.push({
        id:newId,
        titulo,
        autor,
        categoria
        
    })

    // listaLibros.push(nuevoLibro);
    responseApi.data = listaLibros;
    responseApi.msg = "Creado nuevo libro";
    responseApi.status = "ok";
    res.status(200).send(responseApi);    
}

export const deleteLibro = (req, res) => {

    const idLibro = req.params.id
    const index = listaLibros.findIndex( libro => libro.id == idLibro )

    if(index != -1){
        responseApi.data = listaLibros[index];
        listaLibros.splice(index,1)
        responseApi.msg = "Eliminado";
        responseApi.status = "ok";
        res.status(200).send(responseApi);
    }else{
        responseApi.msg = "NO se encontró para elimiar";
        res.status(404).send(responseApi);
    }
   
}