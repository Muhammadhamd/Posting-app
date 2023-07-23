import express from "express"
import path from "path"
const app = express();
const __dirname = path.resolve() 
import publicRoutes from "./public/index.mjs"
app.use(express.json())

// app.use(express.static('public'))
app.post("/",(req , res ,next)=>{

    const {user} = req.body
    console.log(user)
})

app.use(publicRoutes)
app.use(express.static(__dirname))

const PORT = process.env.PORT || 100;

app.listen(PORT , ()=> console.log("server is;sitenming on" , PORT))