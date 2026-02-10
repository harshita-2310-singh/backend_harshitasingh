const fs = require("fs");

fs.writeFile("logs.txt", "Activity Log:\n", (err) => {
    if (err) {
        console.log("Error creating file:", err);
    } else {
        console.log("File created successfully!");
    }
});
