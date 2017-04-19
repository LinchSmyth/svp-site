$(document).ready( function () {
  $('.replies').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: rand(1, 4)
  });
  
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
})