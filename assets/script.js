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
//  define question one by one
var firstIN = document.querySelector("[data-number='1']");
var secondIn = document.querySelector("[data-number='2']");
const thirdIn =document.querySelector("[data-number='3']");
const fourthIn =document.querySelector("[data-number='4']");
const fifthIn =document.querySelector("[data-number='5']");
const submitOne = document.querySelector("#submitOne");
const submitTwo = document.querySelector("#submitTwo");
const submitThird = document.querySelector("#submitThree");
const submitFourth = document.querySelector("#submitFour");
const submitFifth = document.querySelector("#submitFive");
const lastShown = document.querySelector("#lastShown");

startGame.addEventListener("click", function () {
    
    firstIN.style.display = "block";
})

submitOne.addEventListener("click", function () {
   firstIN.style.display= "none";
   secondIn.style.display = "block";
}
)
submitTwo.addEventListener("click", function () {
    secondIn.style.display= "none";
    thirdIn.style.display = "block";
 }
 )
 submitThird.addEventListener("click", function () {
    thirdIn.style.display= "none";
    fourthIn.style.display = "block";
 }
 )
 submitFourth.addEventListener("click", function () {
    fourthIn.style.display= "none";
    fifthIn.style.display = "block";
 }
 )
 submitFifth.addEventListener("click", function () {
   fifthIn.style.display = "none";
   lastShown.style.display = "block";
 })
 

// iterate through numbers to call each form one after another
var formTests = document.querySelectorAll(".testForm");
let score = 0;


// a function that if i lose reduce time by 5 sec!!


// var testDivs = document.querySelectorAll(".test");
// var testNumbers = [];
// // var testNumbers = testDivs.getAttribute("data-number")
// for (var i=0; i<testDivs.length; i++){
//     var dataNumber = testDivs[i].getAttribute("data-number");
//     if (dataNumber !==null){
//         testNumbers.push(dataNumber);
//     }

// }
// for (var j=0; j<testNumbers.length; j++) {
//     var numbers = testNumbers[j];
// }

// i have to make test submit to have one correct value and others false?
formTests.forEach(function(formTest) {
    formTest.addEventListener("submit", function(event) {
        event.preventDefault();
        var selectedOnes = formTest.querySelector("input[name]:checked");
        if (selectedOnes) {
            var dScore = selectedOnes.getAttribute("data-score")
            if (dScore == "true") {
                score += 20;
            }else {
                deductTime(5);
            }
        }
        localStorage.setItem("overAllScore", score);
        console.log(score); 
        document.querySelector("#lastScore").innerHTML = score;

    })
})
function deductTime(seconds) {
    let currentTime = parseInt(timeLeft.textContent, 10);
    currentTime -= seconds;
    if (currentTime < 0) {
      currentTime = 0; // Ensure time doesn't go negative
    }
    timeLeft.textContent = currentTime;
  }
 
// i should add eventlistener to start button so when i click test div s start showing one after another.
// overall score
function overall() {
    var allScore = localStorage.getItem("overAllScore");
    lastScore.textContent = allScore;
    

}
