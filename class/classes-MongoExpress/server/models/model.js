const mongoose = require('mongoose');

const RazaSchema = new mongoose.Schema({
    tipo: String,
    pais: {
        codigo: String,
        nombre: String
    },
    colores: Array  
})

const AnimalSchema = new mongoose.Schema({
    nombre: {
        type:String,
        required : [true, "El nombre del animal es requerido"],
        minlength : [2, "No puede tener un nombre tan corto"]
    },
    cantidadPatas: {
        type: Number,
        required: [true, "Debe ingresar la cantidad de patas del animal"],
        max: [4, "No conozco animales con mas de 4 patas"]
    },
    color: String,
    raza : [RazaSchema]
    /* raza : {
        tipo: String,
        pais: {
            codigo: String,
            nombre: String
        },
        colores: Array 
    } */
}, {timestamps:true}); 

const Animal = mongoose.model("animales", AnimalSchema);

module.exports = Animal;