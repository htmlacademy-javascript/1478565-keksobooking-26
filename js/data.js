import {getRandomPositiveFloat, getRandomPositiveInt, getImgNumber, shuffleArray} from './util';

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


const createAdsList = () => {
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
  return adsList;
};

export {createAdsList};


