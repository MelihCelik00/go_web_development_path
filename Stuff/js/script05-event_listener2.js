let counter = 0;
let counterText = document.querySelector("p#counterText");
let increaseBtn = document.querySelector("button#increaseCounter");
let decreaseBtn = document.querySelector("button#decreaseCounter");

counterText.innerHTML = counter;

increaseBtn.addEventListener("click", clickButton);
decreaseBtn.addEventListener("click", clickButton);


function clickButton(){
    console.log(this.id);

    if (this.id == "increaseCounter"){
        counterText.innerHTML = counter+=1;
    }
    else{
        counterText.innerHTML = counter-=1;
    }
}
