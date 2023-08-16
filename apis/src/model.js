const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({

    fname : { type : String},
    lname : { type : String},
    email : {type : String ,unique : true , required : true},
    phone : { type : Number ,unique : true  , required : true},
    message : { type : String }
}, {timestamps : true})

module.exports = mongoose.model('user', UserSchema)