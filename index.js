import express from "express";
import dotenv from "dotenv";
import cors from 'cors';

import connetarDB from "./config/db.js";

import usuarioRoutes from './routes/usuarioRoutes.js';
import proyectoRoutes from './routes/proyectoRoutes.js';
import tareaRoutes from './routes/tareaRoutes.js';



const app = express();
app.use(express.json())

dotenv.config();

connetarDB();

//Configura CORS
const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
    origin: function (origin, callback) {
        console.log(origin);
        if (whitelist.includes(origin)) {
            //Puede consultar la API
            callback(null, true);
        } else {   
            //No esta permitido
            callback(new Error("Error de Cors"));
        }
    },
};

app.use(cors(corsOptions));

//Routing
app.use("/api/usuarios", usuarioRoutes)
app.use("/api/proyectos", proyectoRoutes)
app.use("/api/tareas", tareaRoutes)


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puesto ${PORT}`)
});

