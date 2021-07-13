const mongoose = require('mongoose');
const DB = process.env.DB;
const connectDB = async() => {
    try{
        await mongoose.connect(DB, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
        })
    console.log(`Established connection to MongoDB with Mongoose`);
    }
    catch(err){
        console.error(err);
    }
}

module.exports = connectDB;