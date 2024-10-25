// Генерация случайного числа от 0 до 10000
var randomNumber = Math.floor(Math.random() * 10001);

// Вывод случайного числа на страницу
document.getElementById("randomNumber").innerText =
  "Ваш уникальный код: " + randomNumber;
function copyNumber() {
  var number = "+79280001810";
  navigator.clipboard
    .writeText(number)
    .then(() => {
      alert("Номер скопирован: " + number);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}
