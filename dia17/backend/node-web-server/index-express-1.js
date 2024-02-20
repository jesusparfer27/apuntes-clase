const express = require  ("express")

const miApp = express()
console.clear()

/**
 * 
 * Ejemplos de rutas con Express
 * 
 */

miApp.get("/", (req, res) => {
    res.send("Bienvenidos a expressJS!")
    console.log("El usuario entró al home")
})

miApp.get("/perfil", (req, res) => {
    res.send("Bienvenidos a Perfil");
    console.log("El usuario entro al Perfil")
})

// Métodos mas comunes: GET, POST, PUT, DELETE, OPTIONS
// METODOS

miApp.post("/users", (req, res) => {
    res.send("Seccion Usuarios con POST")
    console.log("El usuario realizó un POST a users")
})

miApp.get("/users", (req, res) => {
    res.send("Seccion Usuarios con GET")
    console.log("El usuario realizó un POST a users")
})

// El metodo All habilita cualquier método anterior
miApp.all("/metodos", (req, res) => {
    res.send("<h3>Soporta todos los métodos (GET, POST, PUT, DELETE, OPTIONS)</h3>")
    console.log("El usuario realizó un Post a users")
})

miApp.route("/Libros")
.get( (req, res) => {
    res.send("Obtener Libros")
})
.post( (req, res) => {
    res.send("Agregar un nuevo Libro")
})
.put( (req, res) => {
    res.send("Actualizar un libro X")
})

miApp.get("/jsonUser", (req, res) =>{
res.json({nombre: "Sofia", id: 5, edad: 25})
})

miApp.get("/jsonUser", (req, res) =>{
    res.status(404);
    res.type("json");
    res.json({nombre: "Sofia", id:5, edad: 25})

    res.status(404).json({message: "Not found"})
    })

miApp.get("*", (req, res) => {
    res.send("<h3>404 Not found: </h3>")
    console.log("Usuarios accede a ruta inexistente")
})

miApp.listen(8080, () => {
    console.log("Servidor express corriendo en puerto 8080")
})