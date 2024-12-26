const express = require('express');
const { logUserIn } = require('../controllers/authController');

const authRouter = express.Router()

authRouter.post('/login',logUserIn)

module.exports = authRouter;