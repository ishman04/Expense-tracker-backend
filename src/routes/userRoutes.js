const express = require('express');
const { newUser, getDetails } = require('../controllers/userController');
const { isLoggedIn, isUser } = require('../validation/authValidator');

const userRouter = express.Router();

userRouter.post('/',newUser);
userRouter.get('/:id',isLoggedIn,isUser,getDetails);

module.exports = userRouter;