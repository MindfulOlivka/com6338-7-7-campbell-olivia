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

