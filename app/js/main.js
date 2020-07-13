$(function(){


    var mixer = mixitup('.products__inner-box');

    $('.rate-star').rateYo({
        rating: 5,
        starWidth: "12px",
        starHeight: "12px",
        spacing: "3px",
        readOnly: true
      });


    $('.product-slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true,
        variableWidth: true

    });

    
    
});