console.log('\'Allo \'Allo!');

$(window).scroll(function(){
  handleTopAnimation();
});

$(window).load(function(){
    handleTopAnimation();
});

function handleTopAnimation() {
  var top = $(window).scrollTop();

  if (top > 10) {
    $('#site-nav').addClass('navbar-solid');
  } else {
    $('#site-nav').removeClass('navbar-solid');
  }
}

smoothScroll.init();
