const Homes = require('../models/homesModel');


exports.getHome = (req, res, next)=>{
    res.render('../views/user/home.ejs', {pageTitle : "Home Page | airbnb"});
}

exports.getDashboard = (req, res, next)=>{
    Homes.fetchAll().then(registeredHomes =>{
        res.render('../views/user/dashboard.ejs', {pageTitle : "Dashboard | airbnb", registeredHomes : registeredHomes });
    })
}