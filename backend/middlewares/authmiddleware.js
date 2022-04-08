const user = require ('../models/usersmodels')
const asyncHandler = require('express-async-handler')
const jwt = require ('jsonwebtoken')
const req = require('express/lib/request')
const res = require('express/lib/response')


const protect = asyncHandler(async(req,res,next)=>{
let token 

if (req.headers.authorization){

    try{

        token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token,process.env.jwt_secret)
        req.user =await user.findById(decoded.id)


    }
    catch(err){
        res.status(401)
        throw new Error("not authorized")


    }

}
else{
    res.status(401)
    throw new Error("not authirized")
}

}) 


module.exports= {protect}