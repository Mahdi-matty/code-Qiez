var timeLef= document.querySelector("#timeLeft");
let startGame = document.querySelector("#startBtn");

startGame.addEventListener("click", function timeRemain() {
    let time = 60;
    let timeInterval = setInterval (function () {
        if (time > 0) {
            time --;
            timeLef.textContent =  time ;

        }else {
            clearInterval(timeInterval);
            timeLef.textContent = "" ;
        }

    }, 1000)
})