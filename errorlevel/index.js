const errorhandel=require("./middleware/errorHandeler")
const express=require("express")

const app=express();
app.get("/",(req,res)=>{
    res.send("welcome to home page")
})

app.use((req,res,next)=>{
    const error=new Error("something went wrong")
    error.statusCode=404;
    error.status="failed"
    next(error)
})
app.use(errorhandel)
app.listen(3000,()=>{
   

})