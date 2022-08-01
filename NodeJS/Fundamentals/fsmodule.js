// import fs from "fs"; 
const fs = require("fs");

// Read already created file

fs.readFile("./txtfiles/password.txt", 'utf8', (err, res) => {
    if (err) console.log(err);
    console.log(res);
    console.log("data reading is finished!")
});

// Create new file

fs.writeFile("./txtfiles/example.txt", "New file!", "utf8", (err) => {
    if (err) console.log(err);
    console.log("File is created successfully!")
});

fs.writeFile("./json/example.json", "{'name': 'Melih', 'age': '21'}", 'utf8', (err) => {
    if (err) console.log(err);
    console.log("Json file is created successfully!")
});

// Update File

fs.appendFile("./txtfiles/example.txt", "\nSecond row!!!", "utf8", (err) => {
    if (err) console.log(err);
    console.log("New data added to the file!!!!")
});

// Delete file

// fs.unlink("./json/example.json", (err) => {
//     if (err) console.log(err);
//     console.log("File is deleted!!!!")
// });