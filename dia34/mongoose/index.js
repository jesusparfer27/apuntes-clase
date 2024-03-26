import express from "express"
import cors from "cors"

import mongoose from "mongoose"

const app = express();
console.clear();

// uso de middlewares
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const connect = async() => {
    const DB_USER=""
    const DB_PASS=""
    const DB_DATABASE= "cei"
    const DB_url=`mongodb+srv://${USER}jesusparfer:${PASS}moneyS3jirhQT@jesus-valencia27.yfixy8t.mongodb.net/CEI`;
    await mongoose.connect(url)
    .then(() => console.log("Conectando a MongoDB Atlas ONLINE"))
    .catch(e => console.log("Error en la conexión", e))
}
connect();

const options= {
    collection: "usuarios",
    strict: true, // solo almacena los elementos que están en nuestro esquema
    collation: {
        locale: "es",
        strength: 3// fuerza del tipado al hacer búsquedas
    }
}

const alumnoSchema = new mongoose.Schema( {
    name: String,
    username: String,
    email: String,
    edad: Number,
    isAdmin: Boolean,
    hobbies: Array
}, options);

const Alumno = mongoose.model("Alumno", alumnoSchema)

app.get("/", async(req, res, next) => {

    const result= await Alumno.find() 
    res.json(result);
})

app.get("/nombre/:nombre/:edad", async(req, res, next) => {

    const {nombre, edad} = req.params;

    // obtener todos los datos de todos los alumnos
    const result= await Alumno.find({name:nombre, edad:edad}).select({edad:0}) 
    res.json(result);
})


app.get("/usuarios/:id", async(req, res, next) => {

    const {id} = req.params

    const result= await Alumno.findById(id) 
    res.json(result);
})

app.post("/usuarios2", async (req, res, next) => {
    
    const nuevoUsuario = new Alumno ({
    name: "Lucas",
    username: "luquitas",
    edad: 18,
    isAdmin: true,
    hobbies: ["futbol", "basquet", "programación Full stack"],
    libroFavorito: "Harry Potter"
});
await nuevoUsuario.save();

// Devolver el registro recién agregado
res.json(nuevoUsuario) // incluye el _id

// Para devolver todos los alumnos
const todosLosUsuarios = await Alumno.find()

res.json(todosLosUsuarios)
})

app.post("/usuarios", async (req, res, next) => {
    
const {name, username, edad, isAdmin, hobbies} = req.body 

    const nuevoUsuario = new Alumno ({
    name: name,
    username: username,
    edad: edad,
    isAdmin: isAdmin,
    hobbies: hobbies,
});
await nuevoUsuario.save();

// devolver el registro recién agregado
res.json(nuevoUsuario) // incluye el _id

// para devolver todos los alumnos
// const todosLosUsuarios = await Alumno.find()

//res.json(todosLosUsuarios)
});

app.put("/usuarios/:id", async (req, res, next) => {
    
    const {id} = req.params
    const {name, username} = req.body

    try {

    const alumnoEditado =  await Alumno.findByIdAndUpdate(
        id,
         { name, username },
         { new: true } // new: true nos va a devolver el usuario actualizado
         );
    
    // Devolver el registro recién agregado
    res.json(alumnoEditado);
} catch (error) {
    res.json(error)
}
});

app.delete("/usuarios/:id", async (req, res, next) => {
    const {id} = req.params;
    const alumnoEliminado = await Alumno.findByIdAndDelete(id)

    res.json(alumnoEliminado)
  
});

app.listen(3000, () => {
    console.log("Server running on port http://localhost:3000")
}) 

// $eq:    (equal) es igual al valor especificado.
// $ne:    (not equal) no es igual al valor especificado.
// $gt:    (greater than) es mayor que el valor especificado.
// $gte:   (greater or equal) es mayor o igual al valor especificado.
// $lt:    (lower than) es menor que el valor especificado.
// $lte:   (lower or equal) es menor o igual al valor especificado.
// $in:    (in) está en un array.
// $nin:   (not in) no está en un array.
// $exists: campo existe o no.
// $regex: coincide con la expresión regular especifica

app.get("/operadores", async (req, res, next) => {
    // usuarios mayores de 18 y menores de 65
    const usuario = await Alumno.find({edad : {$gt:18, $lt:65} })
    // Usuarios que NO son admin
    const userNotAdmin = await Alumno.find ( {isAdmin: {$ne: true}} )
    // Usuarios que Juegan al Futbol o al volley
    const jugadoresDeFutbol = await Alumno.find ( {hobbies : { $in: ["futbol", "volley"] }})
    // Usuarios que tengan el CAMPO hobbies
    const usersConHobbies = await Alumno.find ({hobbies: {$exists: true}})
    res.json(jugadoresDeFutbol)
})