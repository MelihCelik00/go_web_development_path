let inputDOM = document.querySelector("input#task");
let addButtonDOM = document.querySelector("#liveToastBtn");
let todoList = document.querySelector("ul#list");
const alertDOM = document.querySelector("p#alert");

const toastAlertFunc = () => `
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Hey buddy!</strong> You can't write empty task...
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    </div>
`;

const closeAlertInTime = (delayTime = 2000) => {
    setTimeout(()=>{$(".alert").alert("close")},delayTime);
};
    

addButtonDOM.addEventListener("click", addItem);

function addItem(event){
    event.preventDefault();
    // console.log("clicked!!!");
    const isEmpty = taskString => !taskString.trim().length;
    
    if(isEmpty(inputDOM.value)){
        // console.log("empty and alert will come!");
        alertDOM.innerHTML = toastAlertFunc();
        closeAlertInTime
    }else{

        // create new li element
        let liDOM = document.createElement('li');
        // append task value to li value
        liDOM.innerHTML = inputDOM.value;
        // append li to ul dom
        todoList.appendChild(liDOM);
        // empty input box
        inputDOM.innerHTML = "";
    }

    
}
