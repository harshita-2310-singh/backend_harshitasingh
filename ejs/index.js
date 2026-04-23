const express =require("express");
const app=express();

app.set('view engine',"ejs")
app.get('',(req,res)=>{
    let student={name : 'Harshita',
                 rollno:32,
                 email:"xyz@gmail.com",
                 age:20,
                 hobbies:["sleeping","eating"]
    }
    res.render("home",{stv :student})//{student}then in ejs write student.name

})

app.listen(3000,()=>{
console.log("server is running:http://localhost:3000/")
});
