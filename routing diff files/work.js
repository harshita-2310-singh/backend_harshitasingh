
const http = require("http");
const url = require("url");
const fs = require("fs");
const path =require("path");

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;

  // log user data
  fs.appendFile(
    "userlog.txt",
    `${new Date()} | ${pathname}\n`,
    () => {}
  );

  let filename = "404.html";

  if (pathname === "/") filename = "home.html";
  else if (pathname === "/about") filename= "about.html";
  else if (pathname === "/services") filename = "services.html";
  else if (pathname === "/contact") filename = "contact.html";
  else filename ="404.html";
  const filePath =path.join(__dirname,filename)

  fs.readFile(filePath, (err, data) => {
    if (err) return res.end("Error");
    res.end(data);
  });
});

server.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});
