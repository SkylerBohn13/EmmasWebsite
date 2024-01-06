const answers = [" "];

const answerElement = document.getElementById("answers");
const answerButton = document.getElementById("answerBtn");
const answer1 = document.getElementById("A1");
const answer2 = document.getElementById("A2");
const answer3 = document.getElementById("A3");
const answer4 = document.getElementById("A4");
const answer5 = document.getElementById("A5");
const answer6 = document.getElementById("A6");
const newFile = document.getElementById("myfile");
let total;
let score = 0;




console.log(answerButton);




answerButton.addEventListener("click", displayAnswers);


function displayAnswers(){
  answerElement.innerHTML = answers.join("<br>");
  total =parseInt(answer1.value)+parseInt(answer2.value)+parseInt(answer3.value)+parseInt(answer4.value)+parseInt(answer5.value)+parseInt(answer6.value);
  console.log(total);
  answerElement.innerHTML = total +"\n";



  alert("YOU GOT A SCORE OF "+ total);
  // Change this to display whatever you want when they click the button!! 
  if(total >= 6){
    answerElement.innerHTML = "You got a score greater than 6!";
  }
  if(total >= 12){
    answerElement.innerHTML = "You got a score greater than 12!";
  }
    if(total === 24){
      answerElement.innerHTML = "You got a score of 24!";
    }
}