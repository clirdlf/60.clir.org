"use strict";function handleTopAnimation(){var o=$(window).scrollTop();o>10?$("#site-nav").addClass("navbar-solid"):$("#site-nav").removeClass("navbar-solid")}console.log("'Allo 'Allo!"),$(window).scroll(function(){handleTopAnimation()}),$(window).load(function(){handleTopAnimation()}),smoothScroll.init();