$(document).ready( function () {  
  $('.replies').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: rand(1, 4)
  });
  
  $('.navbar').affix({
    offset: {
      top: topContentHeight()
    } 
  });
  
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function topContentHeight () {
    return $('.first-content-wrapper').height();
  }
  
  $(window).resize(function(){
    $('.navbar').affix({
      offset: {
        top: topContentHeight()
      } 
    });
  });
  
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
      // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  // appearing effect for otzivi
  
  function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  const sliderImages = document.querySelectorAll('.slide-in');
  function checkSlide() {
    sliderImages.forEach(sliderImage => {
      // half way through the image
      var sliderImageHeight = $(sliderImage).height();
      const slideInAt = (window.scrollY + window.innerHeight) - (sliderImageHeight / 2);
      //bottom of the image
      const imageBottom = sliderImage.offsetTop + sliderImageHeight;
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY > imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
      } else {
        sliderImage.classList.remove('active');
      }
    });
  }
  window.addEventListener('scroll', debounce(checkSlide, 15));
})