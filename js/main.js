/*global $, smoothScroll*/

'use strict';
function clir60() {
  var clir = ' \r\n                                                                               \r\n  .g8\"\"\"bgd `7MMF\'      `7MMF\'`7MM\"\"\"Mq.      ,.-==-.        .6*\"              \r\n.dP\'     `M   MM          MM    MM   `MM.  ,pd\'      `g.   ,M\'                 \r\ndM\'       `   MM          MM    MM   ,M9  ,P   ,dMb.A  Y. ,Mbmmm.    ,pP\"\"Yq.  \r\nMM            MM          MM    MMmmdM9  ,P   dP  ,MP  j8 6M\'  `Mb. 6W\'    `Wb \r\nMM.           MM      ,   MM    MM  YM.  8:  dM\'  dM   d\' MI     M8 8M      M8 \r\n`Mb.     ,\'   MM     ,M   MM    MM   `Mb.Wb  YML.dML..d\'  WM.   ,M9 YA.    ,A9 \r\n  `\"bmmmd\'  .JMMmmmmMMM .JMML..JMML. .JMM.Wb  ``\"\"^`\"\'     WMbmmd9   `Ybmmd9\'  \r\n                                           `M..     .,!                        \r\n                                             `Ybmmd\'                           \r\n';
  console.log(clir);
}

clir60();

function handleTopAnimation() {
  var top = $(window).scrollTop();

  if (top > 10) {
    $('#site-nav').addClass('navbar-solid');
  } else {
    $('#site-nav').removeClass('navbar-solid');
  }
}

$(window).scroll(function(){
  handleTopAnimation();
});

$(window).load(function(){
    handleTopAnimation();
});



smoothScroll.init();
