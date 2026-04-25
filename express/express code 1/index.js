//const express =require("express");
//const app =express(); // compulsory to create this object otherwise we cannot run express functionality
// express ne server banae ki power routing request methods ko :get post patch put delete
// app.get("/",(req,res)=>{
//     res.send("welcome to home page");

// });
// app.get("/about",(req,res)=>{
//     res.send("welcome to about");

// });
// app.get("/contact",(req,res)=>{
//     res.send("welcome to contact page");

// });
// const express =require("express");
// const app =express(); // compulsory to create this object otherwise we cannot run express functionality
// express ne server banae ki power routing request methods ko :get post patch put delete
// app.get("/",(req,res)=>{
//     res.send("welcome to home page");

// });
// app.get("/about",(req,res)=>{
//     res.send("welcome to about");

// });
// app.get("/contact",(req,res)=>{
//     res.send("welcome to contact page");

// });

// app.get("/search",(req,res)=>{
//     console.log(req.query);
//     res.send("<h1>helooo</h1> :"+req.query);

// });
// app.get("/*",(req,res)=>{
//   res.send("404 page not found");

// });



// app.listen(8000,()=>{
//     console.log("Server is working on http://localhost:8000")
// });

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello Express');
// });
// app.get('/about', (req, res) => {
//   res.send('Hello about');
// });
// app.get('/contact', (req, res) => {
//   res.send('Hello contact');
// });
// app.get('/search', (req, res) => {
//   console.log(req.query);
//   res.send(`<h1>search result found</h1> ${req.query.name}
//     <a href='/about'>Click here about page</a>
//     <a href='/'>Click here home</a>
//     <a href='/contact'>Click here contact</a>`);
// }); 

// app.listen(8000, () => {
//   console.log('Server running on http://localhost:8000');
  
// });

// https://akashchoudhary119857.github.io/node_js_notes/
// reactjs nextjs typescript 
// study status code from 100 to 500   

const express =require("express");
const app= express();
app.get('/search', (req, res) => {
  console.log(req.query);
  const data =req.query.name;
  if (data){
    res.send(data);
  }
  else{
    res.send("no result found ")
  }
 
});
app.listen(8000,()=>{
    console.log('server running on http://localhost:8000');
}) 


/* git bash linux commands 
file system module (syn and async)
**sync me open sync and writesync and write file sync 
http module :server creation ,res req object ,custom header in res a nd req header ,res obj kya kya info contain karta and same for req
url module : path kya hai abosulte and route, path ,domain, protocol, sections ak kya role hai 
url ka use karke manual routing 
parate file ko specilized route but rendering 
path module :abosulte relative ,directory name AND environmnet variables 
os module 
express setup ,requirement , http request method (get ,post ,patch ,delete,put )
get route and different files ko serve kiya (manual routing using express)


*/