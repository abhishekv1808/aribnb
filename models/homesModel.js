
const {ObjectId} = require('mongodb');
const {getDB} = require('../utils/databaseUtils');


module.exports = class Homes {

    constructor( ownerName, houseName, location, price, guests, imageURL,description , _id){
        this.ownerName = ownerName;
        this.houseName = houseName;
        this.location = location;
        this.price = price;
        this.guests = guests;
        this.imageURL = imageURL;
        this.description = description;
        if (_id ) {
            this._id = _id;
        }
    }

    save(){
        const db = getDB();
        if(this._id) { //update
        const updateFeilds = {
                ownerName : this.ownerName,
                houseName : this.houseName,
                location  :this.location,
                price :  this.price,
                guests : this.guests,
                imageURL : this.imageURL,
                description : this.description
                };
                console.log(this.id);
                return db.collection('Homes').updateOne({_id: new ObjectId(String(this._id))}, {$set: updateFeilds});
        }else{ //insert
            return db.collection("Homes").insertOne(this); 
        }
    }


    static fetchAll(){
        const db = getDB();
        return db.collection("Homes").find().toArray(); 
    }

    static findById(homeId){
        const db = getDB();
        return db.collection("Homes").findOne({_id : new ObjectId(String(homeId))});

    }

    static deleteById(homeId){
        const db = getDB();
        return db.collection("Homes").deleteOne( {_id : new ObjectId(String(homeId))}); 

    }



}

