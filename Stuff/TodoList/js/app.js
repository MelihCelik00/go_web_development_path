let inputDOM = document.querySelector("input#task");
let addButtonDOM = document.querySelector("#liveToastBtn");
let todoList = document.querySelector("ul#list");
const alertDOM = document.querySelector("p#alert");
let taskItems = document.getElementsByClassName("taskItem");
// let storageIdCounter = localStorage.getItem("localStorageCounter") ? Number(localStorage.getItem("localStorageCounter")) : 0;
let taskArrList = localStorage.getItem("ItemList");

let tempTaskList = [];


const toastAlertFunc = (type, msg) => `
<div class="alert alert-${type} alert-dismissible fade show" role="alert">
<strong>Hey buddy!</strong> ${msg}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
`;

const closeAlertInTime = (delayTime = 2000) => {
    setTimeout(() => { $(".alert").alert("close") }, delayTime);
};

function alert(alertType, message, closeDelay = 2000) {
    toastAlertFunc(alertType, message);
    closeAlertInTime(closeDelay);
}

function checkItem(task) {

    taskItems = document.getElementsByClassName("taskItem");
    console.log(tempTaskList);
    console.log(task);
    for (let j = 0; j < tempTaskList.length; j++) {

        if (tempTaskList[j] == task) {
            console.log(taskItems[j]);
            console.log(task);
            return true;
        }
    }


};


function DeleteItem(element) {
    todoList.removeChild(element);
    return 0;
}

addButtonDOM.addEventListener("click", addItem);

function addItem(event) {
    event.preventDefault();
    // console.log("clicked!!!");
    const isEmpty = taskString => !taskString.trim().length;

    if (isEmpty(inputDOM.value)) {
        // console.log("empty and alert will come!");
        alertDOM.innerHTML = toastAlertFunc("warning", "You can't write empty task...");
        closeAlertInTime();
    } else {
        if (checkItem(inputDOM.value)) {
            alertDOM.innerHTML = toastAlertFunc("danger", "Don't write duplicate tasks!");
            closeAlertInTime(2500);
            inputDOM.value = "";
        } else {
            // create new li element 
            let liDOM = document.createElement('li');
            liDOM.classList.add('taskItem');
            liDOM.innerHTML = inputDOM.value;
            tempTaskList.push(inputDOM.value);
            let iconDOM = document.createElement("i")
            iconDOM.classList.add("bi", "bi-x-lg", "close")
            iconDOM.setAttribute("aria-label", "Close");
            // append task value to li value
            // add class to li

            iconDOM.addEventListener("click", function () { DeleteItem(liDOM) });

            liDOM.append(iconDOM);
            //iconDOM.classList.add("bi","bi-x-lg","close")
            // append li to ul dom
            todoList.appendChild(liDOM);

            localStorage.setItem("ItemList", JSON.stringify(liDOM.innerHTML));

            //console.log(liDOM);
            //console.log(localStorage.getItem("ItemList"));

            // empty input box
            inputDOM.value = "";
        }
    }



}
