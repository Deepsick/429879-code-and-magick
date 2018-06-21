'use strict';

(function () {

  /**
   * Получаем случайный элемент массива array
   * @param  {Array} array
   * @return {Any}
   */
  window.getRandomElement = function (array) {
    var randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
  };
})();
