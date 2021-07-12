const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.DB, {
            useNewUrlParser:true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log("Established connection to the database with Mongoose");
    }
    catch(err){
        console.error(err);
    }
}

module.exports = connectDB;