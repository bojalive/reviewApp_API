const mongoose = require("mongoose")


mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/review_app")
.then(()=>{
    console.log("Mongo Db Connected Succesfully")
}).catch(ex=>{
    console.log("Problem",ex)
})


//module.exports = mongoose