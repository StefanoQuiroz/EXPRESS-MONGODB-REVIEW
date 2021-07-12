const express = require('express');
const router = express();
const {findAllUsers, findOneSingleUser, createNewUser, updateUser, deleteUser} = require('../controllers/user.controllers');

router.get('/users', findAllUsers);
router.get('/users/:id', findOneSingleUser);
router.post('/users/new', createNewUser);
router.put('/users/update/:id', updateUser);
router.delete('/users/delete/:id', deleteUser);

module.exports = router;