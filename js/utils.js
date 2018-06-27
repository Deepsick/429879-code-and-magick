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

  /**
   * Показываем окно с ошибкой, если данные не загрузились
   * @param  {String} errorMessage
   */
  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.utils = {
    getRandomElement: getRandomElement,
    changeColor: changeColor,
    errorHandler: errorHandler
  };
})();
