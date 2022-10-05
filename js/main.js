$(function () {
  bg_from = 1;
  bg_to = 3;
  bg_now = 1;
  bg_interval = 5;

  setInterval(function () {
    $('.banner__container').removeClass('bg' + bg_now);
    if (bg_now == bg_to) bg_now = 1;
    else bg_now++;
    $('.banner__container').addClass('bg' + bg_now);
  }, bg_interval * 1000);
});