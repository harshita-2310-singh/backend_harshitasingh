 //statefull authentication
const express=require('express');
const session=require('express-session');
const FileStore=require('session-file-store')(session)
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(
  session({
    secret:"mysecretkey",
    resave:false,
    saveUninitialized:false,
    // cookie:{
    //   maxAge:60*60*1000
    // }
  })
)
app.set('view engine', 'ejs');
app.get("/login",(req,res)=>{
 return res.render("login");
})
app.post("/login",(req,res)=>{
  const {udata}=req.body;
  req.session.uname="udata";
 res.redirect("/home");
})
app.get("/home", (req, res) => {
   if(!req.session.uname){
      return res.redirect("login")
  }else{
       return res.render("home",{uname:req.session.uname})
  }

  res.render("home",{uname:req.session.uname});
});

app.get("/logout",(req,res)=>{
    req.session.destroy(()=>{
        res.render("login");
    })
})

app.listen(3000,()=>{
  console.log("http://localhost:3000");
})
