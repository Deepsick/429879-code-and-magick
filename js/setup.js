'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomElement = function (array) {
  var randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
};

var WIZARDS = [
  {
    name: getRandomElement(NAMES) + ' ' + getRandomElement(LAST_NAMES),
    coatColor: getRandomElement(COATCOLORS),
    eyesColor: getRandomElement(EYESCOLORS)
  },
  {
    name: getRandomElement(NAMES) + ' ' + getRandomElement(LAST_NAMES),
    coatColor: getRandomElement(COATCOLORS),
    eyesColor: getRandomElement(EYESCOLORS)
  },
  {
    name: getRandomElement(NAMES) + ' ' + getRandomElement(LAST_NAMES),
    coatColor: getRandomElement(COATCOLORS),
    eyesColor: getRandomElement(EYESCOLORS)
  },
  {
    name: getRandomElement(NAMES) + ' ' + getRandomElement(LAST_NAMES),
    coatColor: getRandomElement(COATCOLORS),
    eyesColor: getRandomElement(EYESCOLORS)
  }
];


var setup = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

setup.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = WIZARDS[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = WIZARDS[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = WIZARDS[i].eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < WIZARDS.length; i++) {
  fragment.appendChild(renderWizard(WIZARDS[i]));
}

similarListElement.appendChild(fragment);


