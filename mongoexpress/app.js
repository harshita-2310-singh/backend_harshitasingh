const express=require("express");
const app=express()
const mongoose=require("mongoose")
app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb://127.0.0.1:27017/My_DB?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.8.1/").then(()=>{
    console.log("Database connected")})
   .catch((err) => {
    console.log("Error connecting DB:", err);
});
const newSchema=new mongoose.Schema({
    First_name:{
     type:String,
     required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    contact:{
        type:String,
        required:true
    }
},{timestamps:true})
const User=mongoose.model('User',newSchema);
app.post('/User',(req,res)=>{
const data=req.body;
const User=await.user.create(data);
res.json(User)

})
