'use strict';

(function () {

  /**
   * Создаем волшебника
   * @return {Object}
   */
  var createWizard = function () {
    var wizard = {
      name: window.getRandomElement(window.data.NAMES) + ' ' + window.getRandomElement(window.data.LAST_NAMES),
      coatColor: window.getRandomElement(window.data.COAT_COLORS),
      eyesColor: window.getRandomElement(window.data.EYES_COLORS)
    };
    return wizard;
  };

  var wizards = [];
  for (var i = 0; i < window.data.WIZARDS_AMOUNT; i++) {
    var newWizard = createWizard();
    wizards.push(newWizard);
  }

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
  document.querySelector('.setup-similar').classList.remove('hidden');

  /**
   * Создаем Html-node волшебника
   * @param  {Object} wizard
   * @return {Html-node}
   */
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();

  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(renderWizard(wizards[j]));
  }

  similarListElement.appendChild(fragment);
})();
