// Генерация случайного числа от 0 до 1000
var randomNumber = Math.floor(Math.random() * 10001);

// Вывод случайного числа на страницу
document.getElementById("randomNumber").innerText =
  "Случайное число: " + randomNumber;
