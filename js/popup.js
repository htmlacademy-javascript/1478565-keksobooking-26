import {adsList} from './data.js';

const housingTypes = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
  'hotel': 'Отель'
};

const map = document.querySelector('.map');
const mapCanvas = map.querySelector('.map__canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const featuresList = cardTemplate.querySelector('.popup__features');
const photosList = cardTemplate.querySelector('.popup__photos');

const renderFeatures = (features) => {
  const featuresFragment = document.createDocumentFragment();
  features.forEach((feature) => {
    const featuresItem = featuresList.querySelector(`.popup__feature--${  feature}`);
    if (featuresItem) {
      featuresFragment.append(featuresItem);
    }
  });
  return featuresFragment;
};

const renderPhotos = (photos) => {
  const photosFragment = document.createDocumentFragment();
  const photosItem = photosList.querySelector('.popup__photo');
  photos.forEach((photo) => {
    if (photosItem) {
      const el = photosItem.cloneNode();
      el.setAttribute('src', photo);
      photosFragment.append(el);
    }
  });
  return photosFragment;
};

const addContentOrHidden = (element, condition, content) => {
  if (condition) {
    element.textContent = content;
  } else {
    element.setAttribute('hidden', true);
  }
};


const renderCard = (card) => {
  const cardItem = cardTemplate.cloneNode(true);
  const featuresCardList =  cardItem.querySelector('.popup__features');
  const photosCardList = cardItem.querySelector('.popup__photos');
  featuresCardList.innerHTML = '';
  photosCardList.innerHTML = '';

  addContentOrHidden(cardItem.querySelector('.popup__title'), card.offer.title, card.offer.title);
  addContentOrHidden(cardItem.querySelector('.popup__text--price'), card.offer.price, `${card.offer.price} ₽/ночь`);
  addContentOrHidden(cardItem.querySelector('.popup__text--address'), card.offer.address, card.offer.address);
  addContentOrHidden(cardItem.querySelector('.popup__type'), card.offer.type, housingTypes[card.offer.type]);
  addContentOrHidden(cardItem.querySelector('.popup__text--capacity'), (card.offer.rooms && card.offer.guests), `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`);
  addContentOrHidden(cardItem.querySelector('.popup__text--time'), (card.offer.checkin && card.offer.checkout), `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`);
  addContentOrHidden(cardItem.querySelector('.popup__description'), card.offer.description, card.offer.description);
  cardItem.querySelector('.popup__avatar').setAttribute('src', card.author.avatar);

  if (card.offer.features.length) {
    featuresCardList.append(renderFeatures(card.offer.features));
  } else {
    featuresCardList.setAttribute('hidden', true);
  }

  if (card.offer.photos.length) {
    photosCardList.append(renderPhotos(card.offer.photos));
  } else {
    photosCardList.setAttribute('hidden', true);
  }

  mapCanvas.append(cardItem);
};

renderCard(adsList[0]);
// adsList.forEach(renderCard);
