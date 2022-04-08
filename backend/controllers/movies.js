const { JsonWebTokenError } = require('jsonwebtoken')
const userSchema =require('../models/usersmodels')

exports.getallmovies= async(req,res)=>{
    const data = await userSchema.find()
    console.log(data)
    res.status(200).json({
        status:"ok",
        message:data
    })
}
exports.createmovies=async(req,res)=>{
    const data = await userSchema.create(req.body)
    console.log("hi")
    console.log(req.data,req.body)
}


// const genrateToken = (req,res)=>{

// return jwt.sign({id},process.env.JWT_SECRET,{                //////this function is genrate a token 
//     expiresIn:
// })

// }