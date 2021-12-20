var readlineSync = require("readline-sync");

var score = 0;
var level = 1;

var highScores = [
  {
    name: "Pushpendra",
    score: 6,
  },
]

// array of objects
var questionsLevelOne = [{
  question: "Where do I live?\na. Delhi\nb. Noida\nc. Greater Noida\n",
  answer: "b"
}, {
  question: "My favorite sports?\na. Badminton\nb. Football\nc. Cricket\n",
  answer: "c"
},
{
  question: "How old I am?\na. 24\nb. 23\nc. 25\n",
  answer: "a"
}];

var questionsLevelTwo = [{
  question: "Fav Food?\na. Maggi\nb. Pizza\nc. Other\n",
  answer: "b"
}, {
  question: "My Hobby?\na. Exercising\nb. Reading Books\nc. Swimming\n",
  answer: "a"
},
{
  question: "Fav Movies?\na. Dhammu😁\nb. MI series\nc. Hera Pheri\n",
  answer: "c"
}];

var newUser = {
  name: "",
  score: 0,
}

function welcome() {
  var userName = readlineSync.question("What's your name? ");
  newUser.name = userName;
  console.log("Welcome " + userName + "\nDo you know Pushpendra?");
  console.log("Level : ",level);
}

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!");
    score++;
  } else
    console.log("Wrong!");
  console.log("Current score: ", score);
  console.log("-------------");
}

function game() {
  for (var i = 0; i < questionsLevelOne.length; i++) {
    var currentQuestion = questionsLevelOne[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
  if (score === 3) {
    level++;
    console.log("Nice ! Let's see if you can answer these\nLevel :", level);
    for (var i = 0; i < questionsLevelTwo.length; i++) {
      var currentQuestion = questionsLevelTwo[i];
      play(currentQuestion.question, currentQuestion.answer)
    }
  }
}

function showScores() {
  newUser.score = score;
  console.log("YAY! You SCORED: ", newUser.score);
 
  if (score >= 5) {
    highScores.push(newUser);
  }
  console.log("HighScores")
  for (var i = 0; i < highScores.length; i++) {
    console.log(highScores[i].name, " : ", highScores[i].score);
  }
  console.log("Check out the high scores, if you should be there ping me and I'll update it");
}

welcome();
game();
showScores();