import { Router } from 'express';
import { getAllLibros, getLibroById, deleteLibro, updateLibro, createLibro} from '../controllers/libros.controller.js'
const router = Router();

// formato de Respuesta
const responseAPI = {
    data: [],
    msg: "",
    status: "ok"
}

//  todos
router.get ( "/libros", getAllLibros)

//  CRUD: Create Read Update Delete
router.post("/libros", createLibro); //create
router.delete("/libros", deleteLibro); // delete
router.get("/libros/:id", getLibroById); // 
router.put("/libros/:id", updateLibro); //update

export default router;