'use strict';

//console.log($('p').text());

$(function() {
    /* zmienne */
    var slideCount = $('.single-slide').length;
    var SlideShow = $('.slide-show');
    var SlideShow = 100/slideCount;
    var slideIndex = 0;
    
    /* szerokosc kontenera */
    SlideShow.css('width',slideCount * 100 + '%');
    console.log(slideWidth);


    /* szerokosc i połozenie pojedynczego slidu */
    
    $('.single-slide').each(function(index){
        $(this).css({'width': slideWidth + '%', 'margin-left': index * slideWidth + '%'});
    });

    
    /* Kliknięcie w strzałki */
    $('.prev-slide').click(function() {
        console.log('poprzednie');
    });
    
     $('.next-slide').click(function() {
       var newSlideIndex = slideIndex + 1;
         
       if(newSlideIndex >= slideCount) {
           return;
       }
         
       var marginLeft = (newSlideIndex * (-100)) + '%';
         
      slideShow.animate({'margin-left':marginLeft}, 800, function(){
        slideIndex = newSlideIndex;
    });
    
  });
    
});
