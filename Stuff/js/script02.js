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

/* Ekstralar */

var header1 = document.getElementsByClassName("header-1-class");
var header2 = document.getElementsByClassName("header-2-class");

for(let i = 0; i < header1.length; i++){
    header1[i].style.color = "red";
}

for(let j = 0; j < header2.length; j++){
    header2[j].style.color = "blue";
}


// ------- Reach nth (first and last in this case) item of list ------- //


let item1 = document.querySelector("ul#list>li:first-child");
console.log(item1);
console.log(item1.innerHTML);

let item2 = document.querySelector("ul#list>li:last-child");
console.log(item2);
console.log(item2.innerHTML);

item1.innerHTML = "First item!";
item2.innerHTML = "Last item!";

// Let's add new item to the list!

let ulDOM = document.querySelector("ul#list");
let liDOM = document.createElement('li');

liDOM.innerHTML = "Newly created item."

ulDOM.append(liDOM) // Append to end of the list
ulDOM.prepend(liDOM) // Append to the head of the list

//////////////////////////////////////////////////////

let inData = document.querySelector("input#inputData");
let btn = document.querySelector("button#clickBtn");

// console.log(inData);
// console.log(btn);

btn.addEventListener("click", function(){
    let li = document.createElement("li");
    li.textContent = inData.value;
    ulDOM.append(li);
    inData.value = "";
});
