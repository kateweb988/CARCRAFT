
document.addEventListener("DOMContentLoaded", () => {
  class ItcTabs {
    constructor(target, config) {
      const defaultConfig = {};
      this._config = Object.assign(defaultConfig, config);
      this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
      this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
      this._eventShow = new Event('tab.itc.change');
      this._init();
      this._events();
    }
    _init() {
      this._elTabs.setAttribute('role', 'tablist');
      this._elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute('role', 'tab');
        this._elPanes[index].setAttribute('role', 'tabpanel');
      });
    }
    show(elLinkTarget) {
      const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
      const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
      const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
      if (elLinkTarget === elLinkActive) {
        return;
      }
      elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
      elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
      elLinkTarget.classList.add('tabs__btn_active');
      elPaneTarget.classList.add('tabs__pane_show');
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
    }
    showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
      this._elTabs.addEventListener('click', (e) => {
        const target = e.target.closest('.tabs__btn');
        if (target) {
          e.preventDefault();
          this.show(target);
        }
      });
    }
  }

  // инициализация .tabs как табов
  new ItcTabs('.tabs');
});
document.addEventListener("DOMContentLoaded", function () {
  // Sticky nav
  $(window).scroll(function () {
    if ($(this).scrollTop() > 2) {
      $('.nav').addClass("sticky");
    }
    else {
      $('.nav').removeClass("sticky");
    }
  });


});
document.addEventListener("DOMContentLoaded", function () {
  var blackEl = $('.main, .item__block, .main__block, .art, .team, .news'), // Берем темные элементы
    header = $('.nav'),
    classChange = 'white-elements-header'; // Стилизованный класс,который будет присваиваться шапке
  $(window).on('scroll', function () {
    var thisWindow = $(this),
      scrollPositions = parseFloat(thisWindow.scrollTop()); // Получаем кординаты при скроллинге
    header.removeClass(classChange); // Удаляем класс,если он УЖЕ присвоен
    blackEl.each(function (index, element) { // перебираем все элементы,где присутствует темный фон
      var blackBlockTop = parseFloat($(element).offset().top), // Получаем начало блока
        blackBlockBottom = parseFloat($(element).outerHeight() + blackBlockTop); // Получаем конец блока
      if (scrollPositions > blackBlockTop && blackBlockBottom > scrollPositions) { // Сравниваем с кординатами скролла 
        header.addClass(classChange);
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var blackE = $('section'), // Берем темные элементы
    header = $('.header__box'),
    classChange = 'pp'; // Стилизованный класс,который будет присваиваться шапке
  $(window).on('scroll', function () {
    var thisWindow = $(this),
      scrollPositions = parseFloat(thisWindow.scrollTop()); // Получаем кординаты при скроллинге
    header.removeClass(classChange); // Удаляем класс,если он УЖЕ присвоен
    blackE.each(function (index, element) { // перебираем все элементы,где присутствует темный фон
      var blackBlockTop = parseFloat($(element).offset().top), // Получаем начало блока
        blackBlockBottom = parseFloat($(element).outerHeight() + blackBlockTop); // Получаем конец блока
      if (scrollPositions > blackBlockTop && blackBlockBottom > scrollPositions) { // Сравниваем с кординатами скролла 
        header.addClass(classChange);
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  new WOW().init();
});
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper1', {
    slidesPerView: 1,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  });
});
// svg
$(function () {
  jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Check if the viewport is set, else we gonna set it if we can.
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }

      // Replace image with new SVG
      $img.replaceWith($svg);

    }, 'xml');

  });
});
