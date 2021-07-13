const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Este campo es obligatorio"],
        minlength : [4, "Este campo debe tener al menos 4 caracteres"]
    },
    punchline : {
        type: String,
        required : [true, "Este campo es obligatorio"],
        minlength : [4, "Este campo debe tener al menos 4 caracteres"]
    }
}, {timestamps:true});

const Joke = mongoose.model("Jokes", JokeSchema);

module.exports = Joke;