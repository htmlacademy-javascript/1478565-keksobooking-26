// Функция, возвращающая случайное целое число из переданного диапазона включительно.

const getRandomPositiveInt = (a, b) => {
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max.
  // нижнюю границу диапазона мы округляем к ближайшему большему целому с помощью Math.ceil,
  // а верхнюю границу - к ближайшему меньшему целому с помощью Math.floor
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

getRandomPositiveInt(5, 35);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

const getRandomPositiveFloat = (a, b, digit = 3) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digit);

};

getRandomPositiveFloat(1.195, 1.2, 3);
