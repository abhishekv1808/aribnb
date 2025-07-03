const Homes = require('../models/homesModel');

exports.getadminPortal= (req, res,next)=>{
    Homes.fetchAll().then((registerHomes)=>{
        res.render('../views/admin/admin-portal.ejs', {pageTitle : "admin Portal | airbnb", registerHomes : registerHomes});
    })
}

exports.getRegisterHome= (req, res,next)=>{
    const editing = false;
    res.render('../views/admin/edit-home.ejs', {pageTitle : "Home Registration | airbnb", editing :editing});
}

exports.getadminHomes= (req, res,next)=>{
    Homes.fetchAll().then((registeredHomes =>{
        res.render('../views/admin/admin-homes.ejs', {pageTitle : "Admin Homes | airbnb", registeredHomes : registeredHomes});
    }));
}


exports.getEditHome = (req, res,next)=>{
    const homeId = req.params._id;
    const editing = req.query.editing === 'true';
    Homes.findById(homeId).then(homes =>{
        console.log(homeId);
        res.render('../views/admin/edit-home.ejs', {pageTitle : "Home Registration | airbnb", homes : homes, editing : editing});
    })
}

exports.postEditHome = (req,res,next)=>{
   const{ownerName, houseName, location, price, guests, imageURL,description,_id} = req.body;
   const home = new Homes( ownerName, houseName, location, price, guests, imageURL,description , _id);
   home.save().then(result =>{
    console.log('Homes Updated Successfully', result);
    res.redirect('/admin-homes');
   }).catch(err=>{
    console.log(err);
   })
}

exports.postdeleteHome = (req,res,next)=>{
     const homeId = req.params._id;
     Homes.deleteById(homeId).then(()=>{
            res.redirect('/admin-homes');
     }).catch((err)=>{
        console.log(err);
    });
}

exports.postRegisterHome = (req,res,next)=>{
   const{ownerName, houseName, location, price, guests, imageURL,description} = req.body;
   const home = new Homes(ownerName, houseName, location, price, guests, imageURL,description);
   home.save().then((result)=>{
    console.log(result)
    res.render('../views/admin/register-done.ejs', {pageTitle :"Registration Done | airbnb"});
   }).catch((err)=>{
    console.log(err);
   })

}