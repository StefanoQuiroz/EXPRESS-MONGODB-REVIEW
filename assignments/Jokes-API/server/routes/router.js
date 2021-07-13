const express = require('express');
const router = express();
const {findJokes, findOneJoke, createJoke, updateJoke, removeJoke} = require('../controllers/controller');

router.get('/jokes', findJokes);
router.get('/jokes/:id', findOneJoke);
router.post('/jokes/new', createJoke);
router.put('/jokes/update/:id', updateJoke);
router.delete('/jokes/delete/:id', removeJoke);

module.exports = router;