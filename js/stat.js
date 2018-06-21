'use strict';

(function () {

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_GAP = GAP * 3;
  var BAR_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var BAR_GAP = 50;
  var PLAYER_COLOR = 'rgba(255, 0, 0, 1)';

  /**
   * Рисуем облако, в котором будет статистика
   * @param  {Object} ctx
   * @param  {Number} x
   * @param  {Number} y
   * @param  {Number} width
   * @param  {Number} height
   * @param  {String} color
   */
  var renderCloud = function (ctx, x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y + height / 2);
    ctx.lineTo(x + width / 8, y + height / 8);
    ctx.lineTo(x + width / 2, y);
    ctx.lineTo(x + (width / 8) * 7, y + height / 8);
    ctx.lineTo(x + width, y + height / 2);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x, y + height);
    ctx.lineTo(x, y + height / 2);
    ctx.closePath();
    ctx.fill();
  };

  /**
   * Получаем самый большой элемент массива
   * @param  {Array} array
   * @return {number}
   */
  var getMaxElement = function (array) {
    var maxElement = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] > maxElement) {
        maxElement = array[i];
      }
    }

    return maxElement;
  };

  /**
   * Отрисовываем статистику на экран
   * @param  {Object} ctx
   * @param  {Array} names
   * @param  {Array} times
   */
  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#ffffff');

    ctx.fillStyle = '#000000';
    ctx.font = 'PT Mono 16px';
    ctx.textBaseline = 'top';
    ctx.fillText('Ура вы победили!', CLOUD_WIDTH / 2, CLOUD_Y + GAP * 2);
    ctx.fillText('Список результатов:', CLOUD_WIDTH / 2, CLOUD_Y + GAP + FONT_GAP);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      var currentbarHeight = (BAR_HEIGHT * times[i]) / maxTime;
      times[i] = Math.round(times[i]);

      ctx.fillStyle = '#000000';
      ctx.fillText(names[i], CLOUD_X + GAP * 5 + BAR_WIDTH * i + BAR_GAP * i, CLOUD_HEIGHT - GAP * 2.5);
      ctx.fillText(times[i], CLOUD_X + GAP * 5 + BAR_WIDTH * i + BAR_GAP * i, CLOUD_HEIGHT - BAR_GAP * 3.5 - FONT_GAP + BAR_HEIGHT - currentbarHeight);
      var saturation = (Math.floor(Math.random() * 101)).toString() + '%';
      var rivalColor = 'hsl(240,' + saturation + ', 50%)';
      ctx.fillStyle = rivalColor;
      if (names[i] === 'Вы') {
        ctx.fillStyle = PLAYER_COLOR;
      }
      ctx.fillRect(CLOUD_X + GAP * 5 + BAR_WIDTH * i + BAR_GAP * i, CLOUD_HEIGHT - BAR_GAP * 3.5 + BAR_HEIGHT - currentbarHeight, BAR_WIDTH, currentbarHeight);
    }
  };
})();

