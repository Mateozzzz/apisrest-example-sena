//EndPoints 

const express = require('express');
const Router = express.Router();


const { json } = require('body-parser');


//Ruta Para el Main de la Pagina
app.get('/',(req,res) => {
    res.send('<h1> MAIN OF THE PAGE :) <h1>');
});

//POST para el Main de la Pagina Web 
app.post('/',(req,res) => {
    res.send('Post on the Main Page ;) ');
});

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
});

//Ruta el Ingreso de Libros
/*Router.post('/libros', (req, res) => {
    const libros = PostSchema(req.body);
    libros.save().then((data) => res,json({menssage:console.error()}));
});
*/






module.exports = Router; 

