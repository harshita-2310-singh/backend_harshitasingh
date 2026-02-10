const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const date = new Date();

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  fs.appendFile(
    "userlogData.txt",
    `${date} | ${pathname} : new record\n`,
    (err) => {
      if (err) console.log(err);
    }
  );

  switch (pathname) {
    case "/":
      res.end("Welcome home page");
      break;

    case "/about":
      res.end("Welcome to about us");
      break;

    default:
      res.statusCode = 404;
      res.end("404 error");
  }
});

server.listen(4000, "localhost", (err) => {
  if (err) console.log(err);
  console.log("Server is listening on http://localhost:4000");
});
