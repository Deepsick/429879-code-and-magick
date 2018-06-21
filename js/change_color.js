'use strict';

(function () {

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
    var color = window.getRandomElement(colors);
    if (property === 'background-color') {
      element.style.backgroundColor = color;
    } else if (property === 'fill') {
      element.style.fill = color;
    }
    return color;
  };

  wizardCoat.addEventListener('click', function () {
    wizardCoatlInput.value = changeColor(wizardCoat, 'fill', window.data.COAT_COLORS);
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyeslInput.value = changeColor(wizardEyes, 'fill', window.data.EYES_COLORS);
  });

  wizardFireball.addEventListener('click', function () {
    wizardFireballInput.value = changeColor(wizardFireball, 'background-color', window.data.FIREBALL_COLORS);
  });
})();
