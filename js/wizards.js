'use strict';

(function () {

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  /**
   * Скрываем блок с похожими волшебниками
   */
  var showSimilarList = function () {
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  /**
   * Создаем Html-node волшебника
   * @param  {Object} wizard
   * @return {Html-node}
   */
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var render = function (wizardsList) {
    var fragment = document.createDocumentFragment();
    var list = wizardsList.slice();
    for (var i = 0; i < window.data.WIZARDS_AMOUNT; i++) {
      var wizard = list[0];
      fragment.appendChild(renderWizard(wizard));
      var wizardIndex = list.indexOf(wizard);
      list.splice(wizardIndex, 1);
    }
    similarListElement.innerHTML = '';
    similarListElement.appendChild(fragment);

    showSimilarList();
  };

  window.wizards = {
    render: render
  };
})();
