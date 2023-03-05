const express = require('express');
const UserController = require('../controllers/user');

const userRouter = express.Router();

userRouter.get('/', UserController.showUsers);
userRouter.get('/:id', UserController.getUserById);

module.exports = userRouter;