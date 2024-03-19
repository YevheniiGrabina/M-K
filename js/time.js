var countDownDate = new Date("April 24, 2024 12:00:00").getTime();

// Обновляем таймер каждую секунду
var x = setInterval(function() {

  // Получаем текущее время
  var now = new Date().getTime();

  // Разница между текущим временем и временем окончания отсчета
  var distance = countDownDate - now;

  // Вычисляем дни, часы, минуты и секунды
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Выводим результат в элемент с id="countdown"
  document.getElementById("countdown").innerHTML = "ЗАЛИШИЛОСЬ: " + days + "д " + hours + "г "
  + minutes + "хв " + seconds + "с ";

  // Если отсчет закончился, выводим сообщение
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Время истекло!";
  }
}, 1000);