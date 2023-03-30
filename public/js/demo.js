"use strict";

// keys settings
$('.keys__disabled .keys__button').on('click', function () {
  $('.keys__disabled').hide();
  $('.keys__confirm').show();
});
$('.keys__confirm .keys__button').on('click', function () {
  $('.keys__confirm').hide();
  $('.keys__enabled').show();
});
$('.keys__enabled .keys__button').on('click', function () {
  $('.keys__enabled').hide();
  $('.keys__disabled').show();
}); // 2fa settings

$('.security__enabled .security__button').on('click', function () {
  $('.security__enabled').hide();
  $('.security__disabled').show();
});
$('.security__disabled .security__button').on('click', function () {
  $('.security__disabled').hide();
  $('.security__enabled').show();
}); // change password

$('.password__button').on('click', function () {
  $('.password__form').hide();
  $('.password__wrap').show();
}); // sign in scan

$('.entry__scan').on('click', function () {
  $('.entry__form').hide();
  $('.entry__wrap').show();
}); // sign up

$('.registration__form > .registration__button').on('click', function () {
  $('.registration__form').hide();
  $('.registration__confirm').show();
});
$('.registration__confirm .registration__button').on('click', function () {
  $('.registration__confirm').hide();
  $('.registration__code').show();
}); // change password

$('.login__form > .login__button').on('click', function () {
  $('.login__form').hide();
  $('.login__verification').show();
});
$('.login__verification .login__button:nth-child(2)').on('click', function () {
  $('.login__verification').hide();
  $('.login__new').show();
}); // nav

$('.nav').each(function () {
  var _this = $(this),
      _thisLink = _this.find('.nav__link');

  _thisLink.on('click', function (e) {
    e.preventDefault();

    _this.find('.nav__link').removeClass('active');

    $(this).addClass('active');
  });
}); // registration

$(document).ready(function () {
  if (window.location.hash) {
    var hash = window.location.hash;
    $('[data-id="' + hash + '"]').addClass('registered');
  }
});
$('.header__el:last-child').on('click', function () {
  $('.header').removeClass('registered');
}); // notifications

$('.notifications__top .notifications__button:nth-child(2)').on('click', function () {
  $('.notifications__item').removeClass('active');
}); // notifications

$('.notifications__top .notifications__button:nth-child(3)').on('click', function () {
  $('.notifications__body').hide();
});
$('.header__item_notifications .header__button:nth-child(2)').on('click', function () {
  $('.header__notification').removeClass('header__notification_new');
});

(function () {
  $('.notifications__control .notifications__button:first-child').on('click', function () {
    $('.notifications__group .checkbox__input').prop('checked', true).attr('checked', 'checked');
  });
  $('.notifications__control .notifications__button:nth-child(2)').on('click', function () {
    $('.notifications__group .checkbox__input').prop('checked', false).removeAttr('checked');
  });
})();