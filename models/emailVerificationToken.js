const mongoose  = require("mongoose")
const bcrypt = require("bcrypt")
const emailVerificationTokenSchema = mongoose.Schema({
    modelId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required : true
    },
    token:{
        type:String,
        required:true
    },
    CreatedAt:{
        type:Date,
        expires:3600,
        default:Date.now()
    }
})

emailVerificationTokenSchema.pre("save", async function (next){
    if(this.Modified("password")){
        this.password = await bcrypt.hash(this.password,11)
    }
    next();
})

module.exports = mongoose.model("EmailVerificationToken", emailVerificationTokenSchema)