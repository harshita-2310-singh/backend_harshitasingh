const url = require("url");

const website = "https://www.example.com/products?category=books&id=10";

// Parse URL
const parsedUrl = url.parse(website, true);

console.log("Host:", parsedUrl.host);
console.log("Pathname:", parsedUrl.pathname);
console.log("Query Params:", parsedUrl.query);
