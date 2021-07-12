const User = require('../models/user.models');

const findAllUsers = async(req, res) => {
    try{
        const users = await User.find({});
        res.json(users);
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
}

const findOneSingleUser = async(req,res) => {
    const {id} = req.params;
    try{
        const user = await User.findOne({_id: id});
        res.json(user);
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
}

const createNewUser = async(req,res) => {
    //const newData = req.body;
    try{
        const newUser = await User.create(req.body);
        res.json(newUser);
        //res.sendStatus(200);
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
}

const updateUser = async(req, res) => {
    try{
        const updateUser = await User.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
        res.json(updateUser);
    }
    catch(err){
        console.error(err);
        res.sendStatus(500)
    }
}

const deleteUser = async(req, res) => {
    try{
        const deleteUser = await User.deleteOne({_id: req.params.id})
        res.json(deleteUser);
        res.sendStatus(200);
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
}

module.exports = {findAllUsers, findOneSingleUser, createNewUser, updateUser, deleteUser};