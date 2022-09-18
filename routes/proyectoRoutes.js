import express from 'express';
import {
    obtenerProyectos,
    nuevoProyecto,
    obtenerProyecto,
    editarProyecto,
    eliminarProyecto,
    agregarColaborador,
    eliminarColaborador,
    obtenerTareas
} from '../controllers/proyectoController.js';
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router
    .route("/")
    .get(checkAuth, obtenerProyectos)
    .post(checkAuth, nuevoProyecto);

router
    .route("/:id")
    .get(checkAuth, obtenerProyecto)
    .put(checkAuth, editarProyecto)
    .delete(checkAuth, eliminarProyecto);//Delete para eliminar un recurso completo

router.get("/tareas/:id", checkAuth, obtenerTareas);
router.post("/agregar-colaborador/:id", checkAuth, agregarColaborador);
//Para elimina una parte del recurso
router.post("/agregar-colaborador/:id", checkAuth, eliminarColaborador);
//Para elimina una parte del recurso


export default router;