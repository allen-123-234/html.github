// 題庫
const questions = [
	{ question: "1 + 1 = ?", answer: "2" },
	{ question: "2 + 2 = ?", answer: "4" },
	{ question: "3 + 3 = ?", answer: "6" },
	{ question: "4 + 4 = ?", answer: "8" },
	{ question: "5 + 5 = ?", answer: "10" }
];

// 獲取元素
const scoreElement = document.getElementById("score");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");

// 初始化
let score = parseInt(localStorage.getItem("score")) || 0;
let currentQuestionIndex = Math.floor(Math.random() * questions.length);

scoreElement.innerText = score;
questionElement.innerText = questions[currentQuestionIndex].question;

// 提交答案
submitButton.addEventListener("click", () => {
	if (answerElement.value === questions[currentQuestionIndex].answer) {
		score++;
		scoreElement.innerText = score;
		localStorage.setItem("score", score);

		currentQuestionIndex = Math.floor(Math.random() * questions.length);
		questionElement.innerText = questions[currentQuestionIndex].question;

		answerElement.value = "";
	} else {
		currentQuestionIndex = Math.floor(Math.random() * questions.length);
		questionElement.innerText = questions[currentQuestionIndex].question;

		answerElement.value = "";
	}
});

// 下一題
nextButton.addEventListener("click", () => {
	currentQuestionIndex = Math.floor(Math.random() * questions.length);
	questionElement.innerText = questions[currentQuestionIndex].question;

	answerElement.value = "";
});

// 重置積分

