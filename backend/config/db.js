const mongoose = require ('mongoose')

let db="mongodb+srv://fazal:jPvKJQJnPR9UXpVm@attainu.yfhbw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
let dbPass="jPvKJQJnPR9UXpVm"

const connectDB =async()=>{

try{

    const conn = await mongoose.connect(db)
    console.log(`MongoDB Connected : ${conn.connection.host}`)


}
catch(err){

    console.log(err)

}

}
module.exports = connectDB