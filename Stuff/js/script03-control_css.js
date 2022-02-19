
let loremIpsum = document.querySelector("p#lorem-ipsum");

loremIpsum.classList.add("textClass");
loremIpsum.classList.add("title");
console.log(loremIpsum.classList);

loremIpsum.classList.remove("textClass", "title");
loremIpsum.classList.add("Lorem", "Ipsum", "Dolor", "Sit", "Amet");

console.log(loremIpsum.classList);