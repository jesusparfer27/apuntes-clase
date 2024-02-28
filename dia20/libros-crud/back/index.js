import  express  from "express"
import {PORT, domain, fullDomain} from "./config/config.js"
import {logger} from './middlewares/logger.js';
import { setHeaders } from './middlewares/setHeaders.js'
import indexRoutes from './routes/index.routes.js'
import cors from 'cors'; // cors mediante libreria externa

const app = express();
console.clear()

// Uso de MiddleWares
 app.use(cors()) //cross origin resoursce sharing
 app.use (express.json()); // procesa el json para leer con body
 app.use(setHeaders) 
app.use(logger)

//  Rutas
app.get("/", (req, res) => {
    res.setHeader("Content-type", "text/html");
    const landingHTML = `<h1>Bienvenidos a nuestra Api de libros</h1>`;
    res.send(landingHTML)
})

app.use("/API/v1", indexRoutes)

//  Alta de Servidor
app.listen(PORT, () => {
    console.log(`server corriendo en ${fullDomain}`)
})
