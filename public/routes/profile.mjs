import express from "express"
const router = express.Router()
import path from "path"
const __dirname = path.resolve()



router.get("/",(req , res , next)=>{
    const pubdir = path.join(__dirname ,"public")
    res.sendFile((path.join(pubdir ,"profile.html" ,)))
    console.log(pubdir)
})


export default router