//Carregando módulos
    const express = require('express');
    const handlebars = require('express-handlebars');
    const bodyParse = require('body-parser');
    const app = express();
    const admin = require('./routes/admin')
    const path = require("path")
    //const mongoose = require('monsgoose')
//Configurações
    //Body Parser
        app.use(bodyParse.urlencoded({extended:true}));
        app.use(bodyParse.json());

    //HandleBars
    app.engine('handlebars',handlebars({defaltLayout:'main'}));
    app.set('view engine','handlebars');
    //Mongoose
        //EM breve
    //Public
        app.use(express.static(path.join(__dirname,"public")))
//Rotas

    app.get('/',(req,res) => {
        res.send("Página principal")
    })

    app.use('/admin',admin)


//Outros
const PORT = 8081
app.listen(PORT,() => {
    console.log("Server Runnig on localhost:8081")
})
