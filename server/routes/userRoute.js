const express = require('express');
const userController = require('../controllers/userController');

const Router = express.Router()

Router
 .route('/')
 .post(userController.createUser)
 .get(userController.getAllUsers)

Router
 .route('/login')
 .post(userController.login)

module.exports = Router