const { application } = require('express');
const express = require('express');
const app = express();
const router = require('./productosRouter');
const PORT = 8000;

app.listen(PORT,()=>{
    console.log(`Servidor listo en el puerto ${PORT} ✅`);
})


application.use("/api",router);