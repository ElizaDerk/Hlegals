$(function() {
    $('.tabs nav a').on('click', function() {
      show_content($(this).index());
    });
    
    show_content(0);
  
    function show_content(index) {
      // Make the content visible
      $('.tabs .content.visible').removeClass('visible');
      $('.tabs .content:nth-of-type(' + (index + 1) + ')').addClass('visible');
  
      // Set the tab to selected
      $('.tabs nav a.selected').removeClass('selected');
      $('.tabs nav a:nth-of-type(' + (index + 1) + ')').addClass('selected');
    }
});



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


$( document ).ready(function() {
  $( '.menu-icon' ).click(function() {
      $( '.menu' ).toggleClass('active')
  });
});


$(document).ready(function(){
  $('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
});

