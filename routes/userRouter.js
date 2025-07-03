const express = require('express');
const userRouter = express.Router();
const {getHome , getDashboard} = require('../controllers/userController');


userRouter.get('/', getHome);
userRouter.get('/dashboard', getDashboard);




module.exports = userRouter;

