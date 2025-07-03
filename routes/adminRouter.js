const express = require('express');
const adminRouter  = express.Router();
const {getadminPortal, getRegisterHome, postRegisterHome, getadminHomes, postdeleteHome, getEditHome, postEditHome} = require('../controllers/adminController');


adminRouter.get('/admin-portal', getadminPortal);
adminRouter.get('/register-home', getRegisterHome);
adminRouter.post('/register-home', postRegisterHome);
adminRouter.get('/admin-homes', getadminHomes);
adminRouter.get('/delete-home/:_id', postdeleteHome);



adminRouter.get('/edit-home/:_id', getEditHome);
adminRouter.post('/edit-home', postEditHome);



module.exports = adminRouter;

