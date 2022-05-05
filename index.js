
const express = require('express');
const app = express();
const router = require('./productosRouter');
const PORT = 8000;

const server = app.listen(PORT,()=>{
    console.log(`Servidor listo en el puerto ${PORT} ✅`);
})



app.use("/api/addproductos",express.static('../Desafio 4'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use("/api",router);

server.on("error", (error) => console.log("Hubo un error " + error));