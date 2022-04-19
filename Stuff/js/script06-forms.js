let formDOM = document.querySelector("#userForm");
formDOM.addEventListener("submit", formSubmit);

function formSubmit(event){
    event.preventDefault();
    console.log("operation successful")
    
    let scoreInputDOM = document.querySelector("#score");
    //console.log(scoreInputDOM.value)
    localStorage.setItem('Score', scoreInputDOM.value);

    

}