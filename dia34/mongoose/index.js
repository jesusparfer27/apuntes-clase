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
    const USER=""
    const PASS=""
    const url=`mongodb+srv://${USER}jesusparfer:${PASS}moneyS3jirhQT@jesus-valencia27.yfixy8t.mongodb.net/CEI`;
    await mongoose.connect(url)
    .then(() => console.log("Conectando a MongoDB Atlas ONLINE"))
    .catch(e => console.log("Error en la conexión", e))
}
connect();

const options= {
    collection: "usuarios"
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

app.listen(3000, () => {
    console.log("Server running on port http://localhost:3000")
}) 