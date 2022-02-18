// Let's work with Document Object Model which means DOMs, vamos!

let h2 = document.getElementById("title-header-2");
console.log(h2.innerHTML);
console.log(h2.innerHTML = "Change Lorem Ipsum");
console.log(h2.innerHTML);

let link = document.querySelector("ul#listID>li>a");
link.innerHTML += " --- changing of link information"
console.log(link.innerHTML);