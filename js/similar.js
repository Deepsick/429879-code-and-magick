'use strict';

(function () {
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyeslInput = document.querySelector('.setup-wizard-appearance input[name = "eyes-color"]');
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatlInput = document.querySelector('.setup-wizard-appearance input[name = "coat-color"]');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = wizardFireball.querySelector('input');

  /**
   * Показываем похожих магов на основе данных с сервера
   * @param  {Array} wizards
   */
  var successHandler = function (wizards) {
    listWizards = wizards.slice();
    updateWizards();
  };

  var listWizards = [];
  var url = 'https://js.dump.academy/code-and-magick/data';
  window.backend.getData(url, successHandler, window.utils.errorHandler);

  /**
   * Сравниваем по алфавиту
   * @param  {String} left
   * @param  {String} right
   * @return {Number}
   */
  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var coatColor;
  wizardCoat.addEventListener('click', function () {
    coatColor = window.utils.changeColor(wizardCoat, 'fill', window.data.COAT_COLORS);
    wizardCoatlInput.value = coatColor;
    updateWizards();
  });

  var eyeColor;
  wizardEyes.addEventListener('click', function () {
    eyeColor = window.utils.changeColor(wizardEyes, 'fill', window.data.EYES_COLORS);
    wizardEyeslInput.value = eyeColor;
    updateWizards();
  });

  wizardFireball.addEventListener('click', function () {
    wizardFireballInput.value = window.utils.changeColor(wizardFireball, 'background-color', window.data.FIREBALL_COLORS);
  });

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyeColor) {
      rank += 1;
    }

    return rank;
  };

  var updateWizards = function () {
    window.wizards.render(listWizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };
})();
