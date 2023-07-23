import express from "express"
const router = express.Router();
import path from "path"
const __dirname = path.resolve()


router.get("/login",(req ,res , next)=>{

    res.sendFile(path.join(__dirname ,"public/signup.html"))
    console.log()
})

export default router 