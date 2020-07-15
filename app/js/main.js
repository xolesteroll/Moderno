$(function(){
    

    $('.rate-star').rateYo({
        rating: 5,
        starWidth: "12px",
        starHeight: "12px",
        spacing: "2px",
        readOnly: true
      });
    


    $('.product-slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true,
        variableWidth: true

    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

    var mixer = mixitup('.products__inner-box');
    
});