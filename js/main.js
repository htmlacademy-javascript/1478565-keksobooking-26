const TYPES_OF_HOUSING = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIME = ['12:00', '13:00', '14:00'];
const HOUSING_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const HOUSING_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const lat = {
  MIN: 35.65000,
  MAX: 35.70000,
};

const lng = {
  MIN: 139.70000,
  MAX: 139.80000,
};

const DIGITS = 5;

const pricePerNight = {
  MIN: 1000,
  MAX: 10000,
};

const descriptionOfTheRoom = 'Просторная квартира в центре города с потрясающим видом из окна.';
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

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

const getRandomPositiveFloat = (a, b, digits) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};

//Функция, которая перемешивает элементы массива

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getImgNumber = (imgNumber) => {
  if (imgNumber < 10) {
    return `0${imgNumber}`;
  }
  return imgNumber;
};

const adsList = [];

for (let i = 0; i < 10; i++) {
  adsList.push({
    author: {
      avatar: `img/avatars/user${getImgNumber(i + 1)}.png`
    },
    offer: {
      title: 'Просторная квартира в самом центре города',
      address: `${getRandomPositiveFloat(lat.MIN, lat.MAX, DIGITS)}, ${getRandomPositiveFloat(lng.MIN, lng.MAX, DIGITS)}`,
      price: getRandomPositiveInt(pricePerNight.MIN, pricePerNight.MAX),
      type: TYPES_OF_HOUSING[getRandomPositiveInt(0, TYPES_OF_HOUSING.length - 1)],
      rooms: getRandomPositiveInt(1, 10),
      guests: getRandomPositiveInt(1, 20),
      checkin: TIME[getRandomPositiveInt(0, TIME.length - 1)],
      checkout: TIME[getRandomPositiveInt(0, TIME.length - 1)],
      features: shuffleArray(HOUSING_FEATURES).slice(0, getRandomPositiveInt(0, HOUSING_FEATURES.length)),
      description: descriptionOfTheRoom,
      photos: shuffleArray(HOUSING_PHOTOS).slice(0, getRandomPositiveInt(0, HOUSING_PHOTOS.length))
    },
    location: {
      lat: getRandomPositiveFloat(lat.MIN, lat.MAX, DIGITS),
      lng: getRandomPositiveFloat(lng.MIN, lng.MAX, DIGITS)
    }
  });
}

export {adsList};


