import express from "express"
const router = express.Router();

import {registrar } from '../controllers/usuarioController.js';

//Autenticancion, Registro y Confirmacion de Usuarios

router.post("/", registrar); //Crear un nuevo usuario




export default router;