const http = require("http");


const PORT = process.env.PORT || 8080;

http.createServer((req, res) => {
  console.log(req.url);
  res.end("Welcome to server node js");
})
.listen(PORT, "localhost", (err) => {
  if (err) console.log(err);
  console.log(`Server is listening on http://localhost:${PORT}`);
});
