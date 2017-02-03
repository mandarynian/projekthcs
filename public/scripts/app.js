//button scrollujący do gory
$('.btn').click(function() {
  $('html, body').animate({
    scrollTop: $(".p-h").offset().top
  }, 1300);
});
//kontent menu
$('#bt1').click(function() {
  $('.art-cont-flex .left-bottom-col').each(function() {
    $('.art-cont-flex .left-bottom-col').removeClass('show');
    $('.art-cont-flex .left-bottom-col').removeClass('show2');
    $('.art-cont-flex .left-bottom-col').removeClass('show3');
    $('.art-cont-flex .left-bottom-col').removeClass('show4');
    $('.art-cont-flex .left-bottom-col').addClass('show1');
  });
});
$('#bt2').click(function() {
  $('.art-cont-flex .left-bottom-col').each(function() {
    $('.art-cont-flex .left-bottom-col').removeClass('show');
    $('.art-cont-flex .left-bottom-col').removeClass('show1');
    $('.art-cont-flex .left-bottom-col').removeClass('show3');
    $('.art-cont-flex .left-bottom-col').removeClass('show4');
    $('.art-cont-flex .left-bottom-col').addClass('show2');
  });
});
$('#bt3').click(function() {
  $('.art-cont-flex .left-bottom-col').each(function() {
    $('.art-cont-flex .left-bottom-col').removeClass('show');
    $('.art-cont-flex .left-bottom-col').removeClass('show2');
    $('.art-cont-flex .left-bottom-col').removeClass('show1');
    $('.art-cont-flex .left-bottom-col').removeClass('show4');
    $('.art-cont-flex .left-bottom-col').addClass('show3');
  });
});
$('#bt4').click(function() {
  $('.art-cont-flex .left-bottom-col').each(function() {
    $('.art-cont-flex .left-bottom-col').removeClass('show');
    $('.art-cont-flex .left-bottom-col').removeClass('show2');
    $('.art-cont-flex .left-bottom-col').removeClass('show3');
    $('.art-cont-flex .left-bottom-col').removeClass('show1');
    $('.art-cont-flex .left-bottom-col').addClass('show4');
  });
});

//kontent menu dla mniejszych rozdzielczosci
$('#bt5').click(function() {
  $('.articl-content-991 .cont-991').each(function() {
    $('.articl-content-991 .cont-991').removeClass('show-991-5');
    $('.articl-content-991 .cont-991').removeClass('show-991-2');
    $('.articl-content-991 .cont-991').removeClass('show-991-3');
    $('.articl-content-991 .cont-991').removeClass('show-991-4');
    $('.articl-content-991 .cont-991').addClass('show-991-1');
  });
});
$('#bt6').click(function() {
  $('.articl-content-991 .cont-991').each(function() {
    $('.articl-content-991 .cont-991').removeClass('show-991-5');
    $('.articl-content-991 .cont-991').removeClass('show-991-1');
    $('.articl-content-991 .cont-991').removeClass('show-991-3');
    $('.articl-content-991 .cont-991').removeClass('show-991-4');
    $('.articl-content-991 .cont-991').addClass('show-991-2');
  });
});
$('#bt7').click(function() {
  $('.articl-content-991 .cont-991').each(function() {
    $('.articl-content-991 .cont-991').removeClass('show-991-5');
    $('.articl-content-991 .cont-991').removeClass('show-991-2');
    $('.articl-content-991 .cont-991').removeClass('show-991-1');
    $('.articl-content-991 .cont-991').removeClass('show-991-4');
    $('.articl-content-991 .cont-991').addClass('show-991-3');
  });
});
$('#bt8').click(function() {
  $('.articl-content-991 .cont-991').each(function() {
    $('.articl-content-991 .cont-991').removeClass('show-991-5');
    $('.articl-content-991 .cont-991').removeClass('show-991-2');
    $('.articl-content-991 .cont-991').removeClass('show-991-3');
    $('.articl-content-991 .cont-991').removeClass('show-991-1');
    $('.articl-content-991 .cont-991').addClass('show-991-4');
  });
});
