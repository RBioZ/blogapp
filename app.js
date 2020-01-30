//Carregando módulos
    const express = require('express');
    const handlebars = require('express-handlebars');
    const bodyParse = require('body-parser');
    const app = express();
    //const mongoose = require('monsgoose')
//Configurações


//Rotas

//Outros
const PORT = 8081
app.listen(PORT,() => {
    console.log("Server Runnig on localhost:8081")
})
