import mongoose, { connections } from "mongoose";

const connetarDB = async () => {
    try {
        const connections = await mongoose.connect("mongodb+srv://root:root1@cluster0.5zlk0qg.mongodb.net/uptask?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }
        );

        const url = `${connections.connection.host}:${connections.connection.port}`

        console.log(`MongoDB Conectado en : ${url}`)
        
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
}

export default connetarDB;