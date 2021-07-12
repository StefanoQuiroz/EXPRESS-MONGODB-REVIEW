const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Este campo es obligatorio"]
    },
    lastName: {
        type: String,
        required: [true, "Este campo es obligatorio"]
    },
    age: {
        type: Number,
        required: [true, "Este campo es obligatorio"]
    } 
}, {timestamps:true})

const User = mongoose.model("newUser", UserSchema);

module.exports = User;