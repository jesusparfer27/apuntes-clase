// import { misDatos } from "../db/libros.js"
import { response } from 'express';
import mysql from 'mysql2/promise'
// const listaLibros = misDatos.libros;

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database:'libros',
});

const responseApi = {
    data: [],
    msg: "",
    status: "ok"
}

export const getAllLibros = async (req, res) => {

     const [results, fields] = await connection.query(
             'SELECT * FROM `libros`'

         );

    responseApi.data = results;
    responseApi.msg = "Obtener TODOS los libros";
    responseApi.status = "ok";
    res.status(200).send(responseApi);
}

export const getLibroById = async (req, res) => {
    const id_libro = req.params.id;

    const myQuery=`SELECT libros.*, autores.autor FROM libros 
    JOIN autores ON (libros.id_autor = autores.id)
    WHERE libros.id = ${id_libro}
    AND libros.deleted_at IS NULL`;
    
    console.log(myQuery);


    const [results, fields] = await connection.query (myQuery);


    responseApi.data = results;
    responseApi.msg = "Obtener libro por ID";
    responseApi.status = "ok";
    res.status(200).send(responseApi);
}

export const updateLibro = async (req, res) => {

    //recibir datos del body
    console.log(req.body)
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
    res.status(200).send(responseApi);
}

export const createLibro = async (req, res) => {
        // ejemplo sequelize
        // delete req.body.id; // quito el id=0; que envío desde el front
        // const newBook = await Libros.create(req.body)

        //  ejemplo MySQL
    const {titulo, id_autor, cali=0, lanzamiento="", editorial="", precio=0, cant_vendidos=0, num_paginas=0 } = req.body;

    if(titulo=="" || id_autor == 0) {
        responseAPI.msg = "Error al creal libro";
        responseAPI.status = "error";
        res.status(400).send(responseAPI);
        return;
    }

    const sqlQuery=`INSERT INTO libros
    (libro, id_autor, calificacion, lanzamiento, editorial, precio, cant_vendidos, num_paginas)
    VALUES libros
    ('${titulo}', '${id_autor}', '${cali}', '${lanzamiento}', '${editorial}', '${precio}', '${cant_vendidos}', '${num_paginas}', '${created_at}', '${updated_at}', '${deleted_at}')`

    const [newBook, fields] = await connection.query(sqlQuery); 

    responseAPI.data=newBook;
    responseAPI.msg="Crear nuevo libro";
    responseAPI.status="ok";
    res.status(200).send(responseAPI)

  
}

export const deleteLibro = async (req, res) => {

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