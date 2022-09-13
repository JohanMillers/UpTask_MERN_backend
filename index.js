import express from "express";
import connetarDB from "./config/db.js";

const app = express();

connetarDB();

app.listen(4000, () => {
    console.log("Servidor corriendo en el puesto 4000")
});

