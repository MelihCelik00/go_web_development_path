// import fs from "fs"; 
const fs = require("fs");

fs.readFile("./txtfiles/password.txt", 'utf8', (err, res) => {
    if (err) console.log(err);
    console.log(res);
    console.log("data reading is finished!")
});

fs.writeFile("./txtfiles/example.txt", "New file!", "utf8", (err) => {
    if (err) console.log(err);
    console.log("File is created successfully!")
});
