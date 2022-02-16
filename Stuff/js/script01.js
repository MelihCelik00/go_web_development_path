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

alert("PASSWORD: " + DATABASE_PASSWORD);

// booooooooolean
  
console.log(Boolean(1n)); 
console.log(Boolean(-1n));
console.log(Boolean(Infinity));
console.log(Boolean({}));
console.log(Boolean(Symbol()));
