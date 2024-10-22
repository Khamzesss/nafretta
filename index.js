function submitQuiz() {
  const answers = {
    q1: "HTML",
    q2: "Язык стилей",
    q3: "Кот",
    q4: "Мантеш",
  };

  let score = 0;
  let totalQuestions = Object.keys(answers).length;

  for (let question in answers) {
    const userAnswer = document.querySelector(
      `input[name="${question}"]:checked`
    );
    if (userAnswer && userAnswer.value === answers[question]) {
      score++;
    }
  }

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `Вы ответили правильно на ${score} из ${totalQuestions} вопросов.`;
}
