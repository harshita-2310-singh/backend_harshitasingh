 const http=require("http");
   http.createServer((req,res)=>{
   console.log(req);
    res.end("Welcome to server node js");
 }).listen(8080,'localhost',(err)=>{
    if(err) console.log(err);
    console.log("Server is listening on http://localhost:8080");
 });