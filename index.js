var questionsArr = [
    {
        question: '1. What is the estimated age of the universe?',
        answer: '13.8 billion years',
        options: [
            '13.8 billion years',
            '4.6 billion years',
            '10 million years',
            '100 trillion years',
        ]
    },
       {
        question: '2. What is the name of the galaxy that contains our solar system?',
        answer: 'Milky Way Galaxy',
        options: [
            'Andromeda Galaxy',
            'Milky Way Galaxy',
            'Orion Nebula',
            'Sombrero Galaxy',
        ]
    },
       {
        question: '3. What is the force that opposes gravity and causes the expansion of the universe to accelerate?',
        answer: 'Dark energy',
        options: [
            'Electromagnetic force',
            'Strong nuclear force',
            'Weak nuclear force',
            'Dark energy',
        ]
    },
       {
        question: '4. What is the most abundant element in the universe?',
        answer: 'Hydrogen',
        options: [
            'Hydrogen',
            'Carbon',
            'Oxygen',
            'Gold',
        ]
    },
       {
        question: '5. Which of the following is not a type of black hole?',
        answer: 'Quasar',
        options: [
            'Stellar black hole',
            'Supermassive black hole',
            'Microscopic black hole',
            'Quasar',
        ]
    }
]

// Create text elements and variables

var quiz = document.querySelector("#quiz")
var timer = document.querySelector("#timer")
var timer = document.createElement("p")
var question = document.createElement("p")
var finalScoreEl = document.createElement("p")
var answerBtn = document.createElement("button")
var score
var finalScore
var currentQuestion
var timeLeft
var timerEl

// start a countdown timer by decrementing the timeLeft variable
// update the timer on the webpage
// handle what happens when the timer reaches 0 (either moving to the next question or ending the quiz)

function startTimer() {
  timerEl = setInterval(function () {
    timeLeft--                           // decrement var by 1
    if (timeLeft > 0) {
      timer.textContent = timeLeft            // display the remaining time
    } else {
      clearInterval(timerEl)                  // stop timer if
      currentQuestion++                            // move to the next question
      if (currentQuestion < questionsArr.length) {
        getQuestion()                           // display next question
      } else {
        endQuiz()
      }
    }
  }, 1000);
}


// if the start button is clicked begin the quiz
// or if a button within the choices is clicked validate the answer
// update the score
// move to the next question
// end the quiz

quiz.onclick = function (e) {                         // assign function to when click happens
  if (e.target.id === "start-quiz") {                 // if start quiz clicked trigger function
    getQuestion();                                    // display the question
  } else if (
    e.target.parentElement.id === "choices" &&             // check if parent el  = to our choices
    e.target.tagName === "BUTTON"                        // check if only btn was clicked
  ) {
    if (e.target.textContent === questionsArr[currentQuestion].answer) {    // check if correct answer is clicked
      score++;                                   // if yes raise the score
    }
    clearInterval(timerEl);                      // stop timer
    currentQuestion++;                                 // move to the next question
    if (currentQuestion < questionsArr.length) {           // check if this question is not the last one
      getQuestion();                                   // display next question
    } else {
      endQuiz();                                       // end quiz and display final score
    }
  }
};

