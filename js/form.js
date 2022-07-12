const notice = document.querySelector('.notice');
const adForm = notice.querySelector('.ad-form');
const interactiveElements = adForm.querySelectorAll('.ad-form__element');
const uploadingPhotoElement = adForm.querySelector('.ad-form-header__input');
const mapForm = document.querySelector('.map__filters');
const mapFilters = mapForm.querySelectorAll('.map__filter');
const mapFeatures = mapForm.querySelector('.map__features');

const addDisabled = (arrayOrElement) => {
  if (arrayOrElement.length) {
    arrayOrElement.forEach((element) => {
      element.setAttribute('disabled', 'disabled');
    });
  } else {
    arrayOrElement.setAttribute('disabled', 'disabled');
  }
};

const addActive = (arrayOrElement) => {
  if (arrayOrElement.length) {
    arrayOrElement.forEach((element) => {
      element.removeAttribute('disabled');
    });
  } else {
    arrayOrElement.removeAttribute('disabled');
  }
};

const toggleDisabled = (isDisabled) => {
  adForm.classList.toggle('ad-form--disabled', isDisabled);
  mapForm.classList.toggle('map__filters--disabled', isDisabled);

  if (isDisabled) {
    addDisabled(interactiveElements);
    addDisabled(mapFilters);
    addDisabled(uploadingPhotoElement);
    addDisabled(mapFeatures);
  } else {
    addActive(interactiveElements);
    addActive(mapFilters);
    addActive(uploadingPhotoElement);
    addActive(mapFeatures);
  }
};

toggleDisabled(true);
export {toggleDisabled};
