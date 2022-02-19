function timeFunc(){
    let currDate = new Date();
    let tDiv = document.getElementById("timeDiv");
    tDiv.style.color = '#'+Math.floor(Math.random()*16777215).toString(16);


    let hours = checkMorningTimes(currDate.getHours());
    let minutes = checkMorningTimes(currDate.getMinutes());
    let seconds = checkMorningTimes(currDate.getSeconds());

    let timeOnScreen = document.querySelector("div#timeDiv");
    let time = hours + ":" + minutes + ":" + seconds
    timeOnScreen.innerHTML = time

    setTimeout(timeFunc, 1000)

};

function checkMorningTimes(t){
    if(t < 10)
        t = "0" + t
    return t;
};

user_name = prompt("Enter your name: ");

let greetingText = document.getElementById("greeting");

greetingText.innerHTML += ` Welcome ${user_name}!`

