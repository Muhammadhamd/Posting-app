import express from "express"
const router = express.Router()
import path from "path"
const __dirname = path.resolve()


router.get("/create-post",(req , res , next)=>{
    res.sendFile((path.join(__dirname , 'public/index.html')))
})



export default router