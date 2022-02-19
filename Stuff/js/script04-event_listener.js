let eventP = document.querySelector("p#event");

//eventP.addEventListener("click", domClick);
eventP.addEventListener("mouseover", domOver);

function domClick() {
    console.log("CLICKED!!!");
    console.log(this.innerHTML = "hoppp changed!");
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red";

}

function domOver() {
    this.style.color = "green";
    this.style.fontSize = "larger";
 }