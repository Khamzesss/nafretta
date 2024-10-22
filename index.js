function submitQuiz() {
  const answers = {
    q1: "Суши",
    q2: "Пицца",
    q3: "Картошка фри",
    q4: "Шаурма",
    q5: "Конечно же NaFretta",
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

  if (score === totalQuestions) {
    resultDiv.innerHTML +=
      '<a href="https://vk.com/im?sel=330843747"> Маа шаа Аллах1, у тебя получилось! Нажми на этот текст</a>';
  }
}
