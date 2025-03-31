const questions = [
    {
        question: "What Admiral in the rebellion, a member of the Mon Calamari race, famously exclaimed “It’s a trap!” during the climactic space battle at the end of “Return Of The Jedi?”",
        answers: [
            { text: "Han Solo", correct: false },
            { text: "Admiral Ackbar", correct: true },
            { text: "Admiral Dune", correct: false }
        ]
    },
    {
        question: "Who was the first character to speak in the first Star Wars movie?",
        answers: [
            { text: "R2-D2", correct: false },
            { text: "Princess Leia", correct: false },
            { text: "C3PO", correct: true }
        ]
    },
    {
        question: "Clocking in at 2 hours and 32 minutes (according to its IMDB.com runtime), which of the 9 movies in the Skywalker Saga is the longest?",
        answers: [
            { text: "The Last Jedi", correct: true },
            { text: "A New Hope", correct: false },
            { text: "Revenge of the Sith", correct: false }
        ]
    },
    {
        question: "What is Kylo Ren’s real name?",
        answers: [
            { text: "Zack Solo", correct: false },
            { text: "Ben Solo", correct: true },
            { text: "Alex Solo", correct: false }
        ]
    },
    {
        question: "How many languages does C3PO claim to speak?",
        answers: [
            { text: "100", correct: false },
            { text: "Over 6,000,000", correct: true },
            { text: "over 100,000", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const submitButton = document.getElementById("submit-button");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.style.display = "none";
    submitButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = "true";
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    answerButtons.innerHTML = "";
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    if (isCorrect) {
        score++;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        submitButton.style.display = "block"
        endQuiz();
    }
}

function endQuiz() {
    nextButton.style.display = "none";
    submitButton.style.display = "block";
}

submitButton.addEventListener("click", () => {
    scoreElement.innerText = `You scored ${score} out of ${questions.length}`;
    scoreElement.style.display = "block";
});

startQuiz()
