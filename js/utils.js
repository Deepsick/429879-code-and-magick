'use strict';

(function () {

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

  window.utils = {
    getRandomElement: getRandomElement,
    changeColor: changeColor
  };
})();
