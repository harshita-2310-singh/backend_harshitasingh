const express = require("express");
const path = require("path");
const app = express();
const public = path.join(__dirname, './public');

app.use(express.static(public));    

 app.get("", (req,res) => {
    res.sendFile(`${public}/index.html`);
 });

app.get("/about", (req,res) => {
    res.sendFile(`${public}/about.html`);
 });

 app.get("/contact", (req,res) => {
    res.sendFile(`${public}/contact.html`);
 });

  app.get("/profile", (req,res) => {
    res.sendFile(`${public}/profile.html`);
 });

  app.get("/home", (req,res) => {
    res.sendFile(`${public}/home.html`);
 });
 app.get("/dashboard", (req,res) => {
    res.sendFile(`${public}/dashboard.html`);
 });
 

app.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
})
/*
flow diageram ero level 1 level 2 level (figma)
prd project requirement document 15-20pageXOffset(reallife)--------not important 
refernces kaha se padhenge 
refrence
*/ 



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
