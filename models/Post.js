//Creacion de la plantilla para el CRUD
const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({

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
});
module.exports = mongoose.model('Post', PostSchema);