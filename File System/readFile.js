const fs = require("fs");

fs.readFile("logs.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
    } else {
        console.log("File content:");
        console.log(data);
    }
});
