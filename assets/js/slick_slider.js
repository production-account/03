$(document).ready(() => {
  $(".sec03_slider").slick({
    autoplay: false,
    arrows: false,
    fade: true,
    asNavFor: ".sec03_thumbnail",
    adaptiveHeight: true,
  });
  $(".sec03_thumbnail").slick({
    slidesToShow: 12,
    asNavFor: ".sec03_slider",
    focusOnSelect: true,
    adaptiveHeight: true,
  });
});
$(document).ready(() => {
  $('.sec05-slider').slick({
    // adaptiveHeight: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    arrows: true,
    responsive: [
      //   {
      //     breakpoint: 960,
      //     settings: {
      //     arrows: true,
      //     centerMode: true,
      //     centerPadding: '40px',
      //     adaptiveHeight: true,
      //     slidesToShow: 1
      //   }
      // },
      {
        breakpoint: 480,
        settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '30px',
        adaptiveHeight: true,
        slidesToShow: 1
      }
    }]
  });
});
$(document).ready(() => {
  $(".sec08-slider").not('.slick-initialized').slick({
    adaptiveHeight: true,
    centerMode: true,
    autoplay: true,
    dots: true,
    slidesToShow: 3,
    responsive: [{
      breakpoint: 960,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        adaptiveHeight: true,
        slidesToShow: 3,
      }
    },
    { 
      breakpoint: 480,
      settings: {
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
      } 
    }]
  });
});
$(document).ready(() => {
  $(".sec06_slider").slick({
    autoplay: false,
    arrows: false,
    fade: true,
    asNavFor: ".sec06_thumbnail",
    adaptiveHeight: true,
  });
  $(".sec06_thumbnail").slick({
    slidesToShow: 11,
    asNavFor: ".sec06_slider",
    focusOnSelect: true,
    adaptiveHeight: true,
  });
});
$(document).ready(() => {
  $('.slider').slick()
  .on('setPosition', function(event, slick) {
    slick.$slides.css('height', slick.$slideTrack.height() + 'px');
  });
});
