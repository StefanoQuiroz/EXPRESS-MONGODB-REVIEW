const express = require('express');
const router = express();
const {findAllAnimals, findOneSingleAnimal, createNewAnimal, updateAnimal, deleteAnimal} = require ('../controllers/controler');

router.get('/animales', findAllAnimals);
router.get('/animales/:id', findOneSingleAnimal);
router.post('/animales', createNewAnimal);
router.put('/animales/:id', updateAnimal);
router.delete('/animales/:id', deleteAnimal);

module.exports = router;

  