import express from "express";
import dotenv from "dotenv";
import connetarDB from "./config/db.js";
import usuarioRoutes from './routes/usuarioRoutes.js';



const app = express();
app.use(express.json())

dotenv.config();

connetarDB();

//Routing
app.use("/api/usuarios", usuarioRoutes)
app.use("/api/proyectos",usuarioRoutes)


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puesto ${PORT}`)
});

