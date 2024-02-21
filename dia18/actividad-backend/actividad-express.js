import { misLibros } from './db/db.js'

import express from "express";
    const app = express();



app.get('/libros', (req, res) => {
    console.log(misLibros);
    res.json(misLibros);
   
});

app.get('/libros', (req, res) => {
        const libros = misLibros.find((misLibros => misLibros > 3)
        console.log(libros)
})

    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Servidos escuchando por el puerto ${PORT}`)
    });
