'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_AMOUNT = 4;
var KEY_CODES = {
  esc: 27,
  enter: 13
};

/**
 * Получаем случайный элемент массива array
 * @param  {Array} array
 * @return {Any}
 */
var getRandomElement = function (array) {
  var randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
};

/**
 * Создаем волшебника
 * @return {Object}
 */
var createWizard = function () {
  var wizard = {
    name: getRandomElement(NAMES) + ' ' + getRandomElement(LAST_NAMES),
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYES_COLORS)
  };
  return wizard;
};

var wizards = [];
for (var i = 0; i < WIZARDS_AMOUNT; i++) {
  var newWizard = createWizard();
  wizards.push(newWizard);
}


var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupInput = document.querySelector('.setup-user-name');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
document.querySelector('.setup-similar').classList.remove('hidden');

var SETUP_START_COORDS = {
  x: setup.style.left,
  y: setup.style.top
};

var popupEscPressHadler = function (evt) {
  if (evt.keyCode === KEY_CODES.esc) {
    closePopup();
  }
};

setupInput.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEY_CODES.esc) {
    evt.stopPropagation();
  }
});

/**
 * Показываем попап .setup
 */
var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', popupEscPressHadler);
};

/**
 * Скрываем попап .setup
 */
var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', popupEscPressHadler);
  setup.style.left = SETUP_START_COORDS.x;
  setup.style.top = SETUP_START_COORDS.y;
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEY_CODES.enter) {
    closePopup();
  }
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEY_CODES.enter) {
    openPopup();
  }
});

var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardEyeslInput = document.querySelector('.setup-wizard-appearance input[name = "eyes-color"]');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardCoatlInput = document.querySelector('.setup-wizard-appearance input[name = "coat-color"]');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var wizardFireballInput = wizardFireball.querySelector('input');

/**
 * Меняем цвет свойства property элемента element на случайный цвет из массива colors
 * @param  {Html-node} element
 * @param  {String} property
 * @param  {Array} colors
 * @return {String}
 */
var changeColor = function (element, property, colors) {
  var color = getRandomElement(colors);
  if (property === 'background-color') {
    element.style.backgroundColor = color;
  } else if (property === 'fill') {
    element.style.fill = color;
  }
  return color;
};

wizardCoat.addEventListener('click', function () {
  wizardCoatlInput.value = changeColor(wizardCoat, 'fill', COAT_COLORS);
});

wizardEyes.addEventListener('click', function () {
  wizardEyeslInput.value = changeColor(wizardEyes, 'fill', EYES_COLORS);
});

wizardFireball.addEventListener('click', function () {
  wizardFireballInput.value = changeColor(wizardFireball, 'background-color', FIREBALL_COLORS);
});

/**
 * Создаем Html-node волшебника
 * @return {Html-node}
 */
var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);


