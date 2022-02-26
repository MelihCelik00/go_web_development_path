let inputDOM = document.querySelector("input#task");
let addButtonDOM = document.querySelector("#liveToastBtn");
let todoList = document.querySelector("ul#list");
const alertDOM = document.querySelector("p#alert");
let taskItems = document.getElementsByClassName("taskItem");
let storageIdCounter = localStorage.getItem("localStorageCounter") ? Number(localStorage.getItem("localStorageCounter")) : 0;

const toastAlertFunc = (type, msg) => `
<div class="alert alert-${type} alert-dismissible fade show" role="alert">
<strong>Hey buddy!</strong> ${msg}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
`;

const closeAlertInTime = (delayTime = 2000) => {
    setTimeout(()=>{$(".alert").alert("close")},delayTime);
};

function alert(alertType, message, closeDelay=2000){
    toastAlertFunc(alertType, message);
    closeAlertInTime(closeDelay);
}

function checkItem(task){
    
    taskItems = document.getElementsByClassName("taskItem");
    for(let i = 0; i < taskItems.length; i++){
        if(taskItems[i].innerHTML == task){
            // console.log(taskItems[i]);
            // console.log(task);
            return true;
        }
    }

};

function createListItem(li){

}

// DeleteItem(){

// }

addButtonDOM.addEventListener("click", addItem);

function addItem(event){
    event.preventDefault();
    // console.log("clicked!!!");
    const isEmpty = taskString => !taskString.trim().length;
    
    if(isEmpty(inputDOM.value)){
        // console.log("empty and alert will come!");
        alertDOM.innerHTML = toastAlertFunc("warning","You can't write empty task...");
        closeAlertInTime();
    }else{
        if(checkItem(inputDOM.value)){
            alertDOM.innerHTML = toastAlertFunc("danger","Don't write duplicate tasks!");
            closeAlertInTime(2500);
            inputDOM.value="";
        }else{
            // create new li element
            let liDOM = document.createElement('li');
            // append task value to li value
            liDOM.innerHTML = inputDOM.value;
            // add class to li
            liDOM.classList.add('taskItem');
            
            // append li to ul dom
            todoList.appendChild(liDOM);
            if(localStorage.getItem("localStorageCounter"))
                localStorage.setItem(`Task ${++storageIdCounter}`, JSON.stringify(liDOM.innerHTML));
                localStorage.setItem("localStorageCounter", storageIdCounter);
            
            // empty input box
            inputDOM.value = "";
        }
    }
        

    
}
