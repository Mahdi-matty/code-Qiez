var timeLef= document.querySelector("#timeLeft");
let startGame = document.querySelector("#startBtn");
let time = 60;

startGame.addEventListener("click", function timeRemain() {
    timeLef.textContent =  time ;
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
const scoreDiv = document.querySelector("#scoreDiv");
// let playerX = document.querySelector("#name").value;
const finalSubmit = document.querySelector("#finalSubmit");
// let lastList = document.querySelector("#lastList");
let submitedScore = JSON.parse(localStorage.getItem("submitedScore")) || [];

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
//    fifthIn.style.display = "none";
   lastShown.style.display = "block";
   document.querySelector("h2").style.display= "none";
   document.querySelector("main").style.display= "none";
   document.querySelector("#topLeft").style.display = "none";
   scoreDiv.style.display = "block"
 })

 finalSubmit.addEventListener("click", function() {
    
    var allScore = localStorage.getItem("overAllScore");
    let playerX = document.querySelector("#name").value;
    submitedScore.push({name: playerX, score:allScore});
    submitedScore.sort((a, b) => b.score - a.score)
    var ul = document.querySelector("#lastList");
    ul.innerHTML = "";
    for (let i=0; i<submitedScore.length; i++) {
        var li = document.createElement("li");
        li.textContent= `${submitedScore[i].name}, ${submitedScore[i].score}`;
        lastList.appendChild(li);
        localStorage.setItem("submitedScore", JSON.stringify(submitedScore));

        document.querySelector("#topPlayer").style.display= "block";
    }
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
                // deductTime(5);
                time -= 5;
                timeLef.textContent =time;
                
            }
        }
        localStorage.setItem("overAllScore", score);
        console.log(score); 
        document.querySelector("#lastScore").innerHTML = score;

    })
})
// function deductTime(seconds) {
//     let currentTime = parseInt(timeLeft.textContent, 10);
//     currentTime -= seconds;
//     if (currentTime < 0) {
//       currentTime = 0; 
//     }
//     timeLef.textContent = currentTime;
//   }
  
 
// i should add eventlistener to start button so when i click test div s start showing one after another.
// overall score
// function overall() {
//     var allScore = localStorage.getItem("overAllScore");
//     lastScore.textContent = allScore;
    

// }
