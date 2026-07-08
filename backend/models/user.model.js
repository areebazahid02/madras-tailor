const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
    },
    address:{
        type:String,
    },
    phone:{
        type:String,
        required:true,
    },
    service:{
        type:String,
        required:true,
    },
    size:{
        type:String,
        required:true,
    },
      date: {
      type: Date,
      default: Date.now
     },

},
   {
      timestamps:true
});

const userBookingModel = mongoose.model("user",userSchema);

module.exports = userBookingModel;