const express = require("express");

const app = express();
const  {result_filter,logFile}  = require("./middleware.js");

app.use(result_filter);
app.use(logFile);



app.get("/", (req, res) => {
    res.send("Home page");
});

app.listen(3000, () => {
    console.log("Server running on port 3000:http://localhost:3000");
});
//application , routing ,error handling 