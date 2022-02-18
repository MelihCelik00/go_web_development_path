// Let's work with Document Object Model which means DOMs, vamos!

let h2 = document.getElementById("title-header-2");
console.log(h2.innerHTML);
console.log(h2.innerHTML = "Change Lorem Ipsum");
console.log(h2.innerHTML);

// let link = document.querySelector("ul#listID>li>a");
let link = document.querySelector("#linkID");
// link.innerHTML += " --- changing of link information"
link.innerHTML = "Go to Google!"
console.log(link.innerHTML);
link.style.color = "red"; // add css style tag to the html tag
link.classList.add('btn'); // add class to the html tag


// ------- Prompt Function ------- //

/*let full_Name = prompt("Please enter your name: ");

console.log(`${full_Name} has entered!`);


let greeting = document.querySelector("#title-header-2");

greeting.innerHTML = `Welcome <small style="color:green">${full_Name}</small>`;

*/