import misDatos from '../db/datos.js'

const listaLibros = misDatos.libros;

// Formato de Respuesta
const responseAPI = {
    data: listaLibros,
    msg:"",
    status:"ok"
}

export const getAllLibros = (req, res) => {
       responseAPI.data="",
       responseAPI.msg="Obtener libros";
       responseAPI.status="ok"
       res.status(200).send(responseAPI) 
}

export const createLibro = (req, res) => {
    responseAPI.data="",
    responseAPI.msg="Obtener libros";
    responseAPI.status="ok"
    res.status(200).send(responseAPI)
}

export const deleteLibro = (req, res) => {
responseAPI.data="",
responseAPI.msg="Obtener libros";
responseAPI.status="ok"
res.status(200).send(responseAPI)
}

export const getLibroById = (req, res) => {
responseAPI.data="",
responseAPI.msg="Obtener libros";
responseAPI.status="ok"
res.status(200).send(responseAPI)
}

export const updateLibro = (req, res) => {
// recibir datos del body (json)
console.clear();
console.log(req.body);
const {id, titulo, autor, categoria } = req.body;

// obtener de la lista de libros, el libro a editar (id)
const index= listaLibros.findIndex(libro => libro.id == id)

//  actualizar el libro con los nuevos valores
listaLibros[index] = {
    ...listaLibros[index],
    titulo,
    autor,
    categoria
}

// respondo con la nueva lista de libros Actualizada

responseAPI.data="",
responseAPI.msg="Actualizar libro con valores específicos";
responseAPI.status="ok"
res.status(200).send(responseAPI)
}
