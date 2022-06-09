// Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomNumber (from, to) {
  if (from >= 0 && to > 0 && from < to) {
    from = Math.ceil(from);
    to = Math.floor(to);

    return Math.floor(Math.random() * (to - from + 1)) + from;
  }
  return undefined;
}

getRandomNumber(5, 35);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function getRandomFloat (from, to, dec) {
  if (from >= 0 && to > 0 && from < to) {
    return Number((Math.random() * (to - from) + from).toFixed(dec));
  }
  return undefined;
}

getRandomFloat(1.195, 1.2, 3);
