const Joke = require('../models/model');

const findJokes = async(req, res) => {
    try{
        const jokes = await Joke.find({});
        res.json(jokes)
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
}

const findOneJoke = async(req, res) => {
    const id = req.params.id;
    try{
        const joke = await Joke.findOne({_id: id});
        res.json(joke)
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
}

const createJoke = async(req, res) => {
    const newData= req.body;
    try{
        const newJoke = await Joke.create(newData);
        res.json(newJoke)
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
}

const updateJoke = async(req, res) => {
    const id = req.params.id;
    const newData = req.body;
    try{
        const updateJokes = await Joke.findOneAndUpdate({_id:id}, newData, {new:true});
        res.json(updateJokes)
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
}

const removeJoke = async(req, res) => {
    const id = req.params.id;
    try{
        const remove = await Joke.deleteOne({_id:id});
        res.json(remove);
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
}

module.exports = {findJokes, findOneJoke, createJoke, updateJoke, removeJoke};