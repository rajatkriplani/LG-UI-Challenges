const questions = [
  { question: "What is 2 + 3?", answer: 5 },
  { question: "What is 7 - 4?", answer: 3 },
  { question: "What is 3 × 4?", answer: 12 },
  { question: "What is 16 ÷ 4?", answer: 4 },
];

let currentQuestionIndex = 0;

const questionText = document.getElementById("questionText");
const answerInput = document.getElementById("answerInput");
const feedback = document.getElementById("feedback");
const checkButton = document.getElementById("checkButton");
const progressBar = document.getElementById("progressBar");
const questionContainer = document.getElementById("questionContainer");
const progressSteps = document.querySelectorAll(".progress-step");

function displayQuestion() {
  if (currentQuestionIndex >= questions.length) {
    questionContainer.innerHTML = "<h2>All done! You've finished all problems.</h2>";
    questionContainer.classList.add("hidden");
    return;
  }

  questionText.textContent = questions[currentQuestionIndex].question;
  answerInput.value = "";
  feedback.textContent = "";
  answerInput.focus();

  progressSteps.forEach(step => step.classList.remove("active"));
  if (progressSteps[currentQuestionIndex]) {
    progressSteps[currentQuestionIndex].classList.add("active");
  }
}

function checkAnswer() {
  const userAnswer = parseInt(answerInput.value, 10);
  const correctAnswer = questions[currentQuestionIndex].answer;

  if (userAnswer === correctAnswer) {
    feedback.style.color = "green";
    feedback.textContent = "Correct!";
    progressSteps[currentQuestionIndex].classList.remove("active");
    progressSteps[currentQuestionIndex].classList.add("completed");

    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = progressPercent + "%";
    currentQuestionIndex++;

    setTimeout(displayQuestion, 800);
  } else {
    feedback.style.color = "#d32f2f";
    feedback.textContent = "Incorrect, try again!";
    answerInput.value = "";
    answerInput.focus();
  }
}

checkButton.addEventListener("click", checkAnswer);
window.onload = function() {
  displayQuestion();
};