import express  from "express";
import sum from "./sum.js";

const app= express();
const PORT=8080;

app.listen(PORT,()=>[
    console.log("app is listening on port 8080")
])

app.get("/home",(req,res)=>{
    res.send({
        msg:"I am a root"
    })
})

app.get("/sum/:a/:b",(req,res)=>{
    const {a, b}= req.params;

    res.json({
        ans: sum(parseInt(a),parseInt(b))
    })
})