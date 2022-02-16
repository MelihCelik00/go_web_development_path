// First of all let's go with the basics. 
// Further details are gonna be there but let's remember JavaScript.

let linkedinPage;
console.log("Just declared: " + linkedinPage);

linkedinPage = "https://www.linkedin.com/in/melihsafacelik/"
console.log("Added link as a string: " + linkedinPage)

let password = "1234";
console.log(password);

// Wrong usage of let
/*
console.log(fullName);
let fullName = "Melih Safa Celik";
*/

fullName = "Lorem Ipsum Dolor";
console.log(fullName);

fullName += "Add Some Stuff";
console.log(fullName + " Added to the console.log");

// let is ok but what about const :)

const DATABASE_PASSWORD = "1234";
console.log(DATABASE_PASSWORD);

//alert("PASSWORD: " + DATABASE_PASSWORD);

// booooooooolean
  
console.log(Boolean(1n)); 
console.log(Boolean(-1n));
console.log(Boolean(Infinity));
console.log(Boolean({}));
console.log(Boolean(Symbol()));

// Let's work with data types.
console.log("--Let's work with data types--")

let price = 111;
let stringPrice = "111";
let hasPassword = true;

console.log(
    "price: ",
    typeof(price),
    "also, ",
    Number.isInteger(price)
    
)

console.log(
    "string price: ",
    typeof(stringPrice),
    "also, ",
    Number.isInteger(stringPrice)
)

console.log(
    "has password? -> ",
    typeof(hasPassword),
    "nan? -> ",
    Number.isNaN(hasPassword)
)


String(123) // “123” explicit
123 + '' // “123”    implicit

// let's look at template literals

let username = "melihsafa.c";
const DOMAIN = "gmail.com";

let email = username + "@" + DOMAIN;

// but that's not so practical

let literals = `
Welcome dear ${username} to the system.
Your account that recently login is ${username}@${DOMAIN} .
Today is ${new Date().getDate()} ${new Date().getMonth()} - ${new Date().getDay()} and you log in at ${new Date().getHours()}.
`;

console.log(email);

console.log(literals);

