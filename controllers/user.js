const User = require("../models/index")
const EmailVerificationToken = require("../models/emailVerificationToken")
const nodemailer = require("nodemailer")

const createUser = async(req,res)=>{
    const {name,email,password} = req.body
   
    const newUser = new User({name,email,password})
    await newUser.save()

    let OTP="";

    for(let i=0 ; i<5; i++){
     let num = Math.round(Math.random()*5)
      OTP +=num
    }

    const createEmailVerificationToken = async(req,res)=>{
        const newToken = new EmailVerificationToken({owner:newUser._id,token:OTP})
   
    await newToken.save();
    }
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "d910ff516a4cd1",
          pass: "28c1c762017f04"
        }
      });

      transport.sendMail({
        from:"verification@reviewapp.com",
        to:newUser.email,
        subject:"Email Verification",
        html:`
        <h1>Your Email OTP is ${OTP}</h1>
        `
      })
    res.status(201).json({mesaage:"Verify Email "})
}


module.exports = createUser