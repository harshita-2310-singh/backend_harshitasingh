const fs = require("fs");

fs.appendFile("logs.txt", "Student logged in at 10:30 AM\n", (err) => {
    if (err) console.log("Error appending data:", err);
    else console.log("Line appended!");
});
