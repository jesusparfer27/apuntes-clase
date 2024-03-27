import express from 'express'
import cors from 'cors'
import { PORT, fullDomain } from './config/config.js'
// import mysql from 'mysql2/promise'
import indexRouter from './routes/index.routes.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors());

console.clear()


app.use("/API/v1/", indexRouter)

app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send("<h1>Bienvenidos a nuestra API de Flores</h1>")
})



app.listen(PORT, () => {
    console.log(`Running in ${fullDomain}`)
}) 