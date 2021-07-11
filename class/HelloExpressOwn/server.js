const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const users = [
    {name: "Pedro", lastName: "Fort"},
    {name: "Stefano", lastName: "Quiroz"}
]

app.get('/api/users', (req, res)=> {
    res.json(users);
})

app.get('/api/users/:id', (req, res)=> {
    console.log(req.params.id);
    res.json(users[req.params.id]);
})

app.post("/api/users", (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.json({status: "ok"});
})

app.put('/api/users/:id', (req,res) => {
    const id = req.params.id;
    users[id] = req.body;
    res.json({status: "updated"})
})

app.delete('/api/users/:id', (req, res) => {
    const id = req.params.id;
    users.splice(id, 1);
    res.json({status: "delete"})
})

app.listen(PORT, ()=> {
    //const server = app.listen(PORT, ()={}) ...
    //console.log(`Server lock and loading in Port: ${server.address().port} `)
    console.log(`1 : Server lock and loading in Port: ${PORT}`)
})