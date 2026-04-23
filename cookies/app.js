const express=require("express")
const app=express()
const cookieParser=require("cookie-parser")
app.use(cookieParser()) //to read data from the cookies
app.get("/set-cookie",(req,res)=>{
    res.cookie("Uname","hide-and-seeek",{
        maxAge:24*60*60*1000,
        httpOnly:true,
        secure:false
    })
    res.send("cookie is setup sucessully")
})
app.get("/getcookies",(req,res)=>{
    const data=req.cookies.Uname
    if(data){
    res.send(req.cookies)
}
else{
    res.send("no info")
}})
app.get("/deletecookie",(req,res)=>{
     res.clearCookie("Uname")
    res.send("cookie deleted")
})

app.listen(8000,()=>{
    console.log("http://localhost:8000")
})

