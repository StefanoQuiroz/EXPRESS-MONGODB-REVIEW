require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT;

const connectDB = require('./config/config');
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', require('./routes/route'));

app.listen(PORT , ()=>{
    console.log(`1 : Server Lock and Loading on PORT: ${PORT}`);
})