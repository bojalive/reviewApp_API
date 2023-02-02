const express = require("express")
const app = express();
require("./db")



const userRoute = require("./routes/user")
app.use(express.json())
app.use(userRoute)

app.listen(8000,()=>{
    console.log("Listening in Port 8000")
})