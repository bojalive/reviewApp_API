const express = require("express")
const router = express.Router()
const createUser = require("../controllers/user")
const{userValidator,validate} = require("../middlewares/userValidator")



router.post("/create-user",userValidator,validate, createUser)


module.exports = router