const express= require("express");
const app=express();
const ReqAge=require("./middleware/middleware.js")
const router=express.Router()
// app.use(ReqAge);

router.use(ReqAge)

app.get("",(req,res)=>{
    res.send("welcome to home page")
})

app.get("/about",ReqAge,(req,res)=>{
    res.send("welcome to about page")
})
router.get("/contact",(req,res)=>{
    res.send("welcome to contact page")
})
app.use(router);
app.listen(3000,()=>{
    console.log("server:http://localhost:3000");
})

// types of error 