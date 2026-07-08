const mongoose = require('mongoose');

function connectDb(){
    mongoose.connect("mongodb://localhost:27017/madras_tailor")
    .then(()=>{
        console.log("MongoDb connected");
    })
    .catch((err)=>{
        console.log("MongoDb connection error:",err);
    })
}

module.exports = connectDb;