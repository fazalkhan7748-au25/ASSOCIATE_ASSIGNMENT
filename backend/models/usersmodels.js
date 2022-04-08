const mongoose = require('mongoose')

const userSchema = mongoose.Schema({


    emailid:{
        type:String,
        required:[true,"please enter your email"],
        unique:true
    },

    password:{
        type:String,
        required:[true,"please enter your password here"]
    },

    movie:{
        type:String,
        required:[true,"please app movie name"],
        
    },

    rating:{
        type:Number,
        required:[true,"please give 4 "]

    },

    releaseDate:{
        type:String,
        required:[true,"please add release date"]
    },



})

module.exports = mongoose.model('User',userSchema)
