const fs = require("fs");

fs.writeFile("logs.txt", "New activity log started.\n", (err) => {
    if (err) console.log("Error writing file:", err);
    else console.log("Data written to file!");
});
