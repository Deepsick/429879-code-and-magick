'use strict';

(function () {

  var KEY_CODES = {
    esc: 27,
    enter: 13
  };

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupInput = document.querySelector('.setup-user-name');


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

  var successHandler = function () {
    setup.classList.add('hidden');
  };

  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), successHandler, window.backend.errorHandler);
    evt.preventDefault();
  });
})();
