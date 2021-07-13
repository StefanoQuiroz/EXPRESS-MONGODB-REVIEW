require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT;
//connect MongoDB with mongoose
const connectDB = require('./config/connectDB');
connectDB();
//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//api routes
app.use('/api', require('./routes/router'));

app.listen(PORT,  ()=> {
    console.log(`1 : Server Lock and Loading at PORT: ${PORT}`);
})