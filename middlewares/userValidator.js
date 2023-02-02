const {check,validationResult} = require("express-validator")


exports.userValidator = [
    check("name").trim().not().isEmpty().withMessage("The Name is Empty "),
    check("email").trim().not().isEmpty().normalizeEmail().isEmail().withMessage("The email is not valid"),
    check("password").trim().not().isEmpty().withMessage("The password is missing").isLength({min:8,max:20}).withMessage("enter password strongly")
];


exports.validate = (req,res,next)=>{
    const error = validationResult(req).array();
        if(error.length>0){
          return  res.status(401).json({error:error[0].msg})
        }
        next();
}