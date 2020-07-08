$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $('.navbar').addClass('navbarAnimation');
    } else {
      $('.navbar').removeClass('navbarAnimation');
    }
  });
});