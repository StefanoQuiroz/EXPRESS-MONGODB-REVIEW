require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT;

//connect mongoDB with mongoose
const connectDB = require('./config/connectDB');
connectDB();
//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', require('./routes/user.routes'));

app.listen(PORT, ()=>{
    console.log(`1 : Server lock and loading at port: ${PORT}`)
});