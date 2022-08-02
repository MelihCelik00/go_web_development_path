const fs = require('fs');

fs.writeFile("./json/employees.json", "{'name': 'Employee 1', 'salary': '2000'},", 'utf8', (err) => {
    if (err) console.log(err);
    console.log("Json file for employees is created successfully!");
});

fs.readFile("./json/employees.json", 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log("JSON Data: \n", data, "\n");
    console.log("data reading is finished!");
});

fs.appendFile("./json/employees.json", "\n{'name': 'Senior Employee 1', 'salary': '5000'},", "utf8", (err) => {
    if (err) console.log(err);
    console.log("New data added to the file!!!!");
});

fs.unlink("./json/employees.json", (err) => {
    if (err) console.log(err);
    console.log("Successfully deleted.");
});
