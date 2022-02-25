let inputDOM = document.querySelector("input#task");
let addButtonDOM = document.querySelector("#liveToastBtn");

let formDOM = document.querySelector("#todoForm");
formDOM.addEventListener("click", addItem);

function addItem(event){
    event.preventDefault();

}

function newElement(){
    console.log("clicked!!!!");
}