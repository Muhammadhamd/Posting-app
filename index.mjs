import express from "express"

const app = express();
const PORT = process.env.PORT || 200;

// const {readDb , writedb} = require('./dbfunctions.mjs')

app.use(express.static('public'))


app.post("/", (req, res)=>{

    console.log(req.body.querySnapshot)
})


app.listen(PORT , ()=> console.log("server is;sitenming on" , PORT))