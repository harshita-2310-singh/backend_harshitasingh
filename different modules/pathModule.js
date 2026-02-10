const path = require("path");

const filePath = "/users/arjun/documents/report.txt";

console.log("Base name:", path.basename(filePath));   
console.log("Directory:", path.dirname(filePath));    
console.log("Extension:", path.extname(filePath));    


const joinedPath = path.join("users", "arjun", "photos", "image.png");
console.log("Joined Path:", joinedPath);
