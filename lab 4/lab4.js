// Quiz Questions Array
const quizQuestions = [
    {
        question: "What is the capital of India?",
        answer: "new delhi"
    },
    {
        question: "Which language is used to style web pages?",
        answer: "css"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answer: "var"
    },
    {
        question: "What does HTML stand for?",
        answer: "hyper text markup language"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        answer: "//"
    }
];

// Function to run the quiz
function runQuiz() {
    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);

        if (userAnswer === null) {
            alert("Quiz cancelled.");
            return;
        }

        userAnswer = userAnswer.toLowerCase().trim();

        if (userAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct answer!");
        } else {
            alert(
                "Wrong answer!\nCorrect answer is: " +
                quizQuestions[i].answer
            );
        }
    }

    alert(
        "Quiz Completed!\nYour Score: " +
        score +
        " out of " +
        quizQuestions.length
    );
}

// Run the quiz
runQuiz();
