const Animal = require('../models/model');

const findAllAnimals = async(req, res) => {
    try{
        const animal = await Animal.find({});
        res.json(animal);
    }
    catch(err){
        res.json(err);
        console.error(err);
        res.sendStatus(500);
    }
}

const findOneSingleAnimal = async(req,res) => {
    const {id} = req.params;
    try{
        const user = await Animal.findOne({_id: id});
        res.json(user);
    }
    catch(err){
        res.json(err);
        console.error(err);
        res.sendStatus(500);
    }
}

const createNewAnimal = async(req,res) => {
    //const newData = req.body;
    try{
        const newUser = await Animal.create(req.body);
        res.json(newUser);
        //res.sendStatus(200);
    }
    catch(err){
        res.json(err);
        console.error(err);
        res.sendStatus(500);
    }
}

const updateAnimal = async(req, res) => {
    try{
        const updateUser = await Animal.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
        res.json(updateUser);
    }
    catch(err){
        res.json(err);
        console.error(err);
        res.sendStatus(500)
    }
}

const deleteAnimal = async(req, res) => {
    try{
        const deleteUser = await Animal.deleteOne({_id: req.params.id})
        res.json(deleteUser);
        res.sendStatus(200);
    }
    catch(err){
        res.json(err);
        console.error(err);
        res.sendStatus(500);
    }
}

module.exports = {findAllAnimals, findOneSingleAnimal, createNewAnimal, updateAnimal, deleteAnimal};