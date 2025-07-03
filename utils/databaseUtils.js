const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoURL = 'mongodb+srv://abhishekv1808:' + encodeURIComponent('Grow@$@2025') + '@aribnb.xvmlcnz.mongodb.net/?retryWrites=true&w=majority&appName=aribnb';

let _db;

const mongoConnect = (callback)=>{
    MongoClient.connect(mongoURL).then(client =>{
        console.log("Connected to MongoDB airbnb-practise Database")
        _db = client.db("airbnb-practise");
        callback();
    }).catch(err =>{
        console.log(err);
    });
}

const getDB = ()=>{

    if(_db){
        return _db;
    }else{
        throw "No Database found";
    }
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;