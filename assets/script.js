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

// i have to make test submit to have one correct value and others false?
formTest = document.querySelector(".testForm")
let score = 0;
formTest.addEventListener("submit", function() {
    if (data-score == true) {
        score = score + 20;
    }else {
        score = score
    }
    localStorage.setItem("overAllScore", score);
})

// i should add eventlistener to start button so when i click test div s start showing one after another.