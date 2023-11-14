//Traemos las dependecnias que necesitamos
const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
const { MongoClient } = require("mongodb");
const bodyParser = require('body-parser');
//const Postostroutes = require ('./routes/post');


//middlewares 
//app.use('/Libros',app);



//Se llama  al body Parser
app.use(bodyParser.json());



//Connection String
const url = 'mongodb+srv://sena:sena@senacluster.9mtxxjm.mongodb.net/?retryWrites=true&w=majority';

//Connection Cliente
const client = new MongoClient (url);
async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas :)");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}





app.listen(3000, () => {
    console.log("Server Run is run....");
});
//Ruta Para el Main de la Pagina 
app.get('/',(req,res) => {
    res.send('<h1> MAIN OF THE PAGE :) <h1>');
});
//POST para el Main de la Pagina Web 
app.post('/',(req,res) => {
    res.send('Post on the Main Page ;) ');
});
/*
//GET de la Ruta /Libros
app.get('/Libros',(req, res) => {
    res.json([
        {title : 'Titulo del libro'}
    ]);
});

//POST para La ruta /Libros
app.post('/Libros',(req,res) => {
    res.json([
        {
            title:{
                type: String,
                require: true
            },
            description:{
                type: String,
                require: true
            },
            Date:{
                type: Date ,
                default: Date.now
            }
        }
    ]);
});*/
