import { Router } from "express";
import { createFlower, deleteFlower, getAllFlowers, getCategoriasFlowers, getFlowerById, updateFlower } from "../controllers/plantas_controllers.js";

const router = Router();


router.get("/flowers", getAllFlowers)
router.get("/flowers/:id", getFlowerById)
router.post("/flowers", createFlower)
router.put("/flowers/:id",updateFlower)
router.delete ("/flowers/:id", deleteFlower)

router.get("/autores", getAllAutores)
router.put("/autores/:id", updateAutor)
router.get("/librosCategorias/:id", getCategoriasLibros)

router.post("/login",getUser )
router.post("/register",registerUser )

export default router