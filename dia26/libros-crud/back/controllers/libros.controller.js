// import { misDatos } from "../db/libros.js"
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

    const query =`SELECT libros,* FROM libros
    WHERE libros.id = ${id_libro}
    WHERE libros.deleted_at IS NULL`

    // SELECT * FROM posts WHERE id = 2;

    const [results, fields] = await connection.query(query);

    
    responseApi.data = results;
    responseApi.msg = "Obtener libro por ID";
    responseApi.status = "ok";
    res.status(200).send(responseApi);
}
export const updateLibro = (req, res) => {

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
export const createLibro = (req, res) => {

    const {titulo, autor, categoria} = req.body

    const newId =  Math.random();
    listaLibros.push({
        id:newId,
        titulo,
        autor,
        categoria
    })

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