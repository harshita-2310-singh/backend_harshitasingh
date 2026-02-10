const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

  // Parse URL to extract query strings
  const parsedUrl = url.parse(req.url, true);

  // Print required details
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Headers:", req.headers);
  console.log("Query Strings:", parsedUrl.query);

  // Set status code and header WITHOUT using writeHead
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  // GET request response
  if (req.method === "GET") {
    res.end("This is a GET request.");
  }
  // POST request response
  else if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log("POST Body:", body);
      res.end("POST request received with body.");
    });
  }
  // Other methods
  else {
    res.end("Unsupported HTTP method.");
  }

});

server.listen(8080, "localhost", () => {
  console.log("Server running at http://localhost:8080");
});
