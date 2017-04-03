$(document).ready()
$(window).scroll(function(){
    if ($(document).scrollTop() >50 ){
        $('nav').addClass('shrink');
    }else{
        $('nav').removeClass('shrink');
    }
});

$('a.scrollTo').on('click', function(){
var scrollTo=$(this).attr('data-scrollTo');

$('html, body').animate({

scrollTop : $('#'+scrollTo).offset().top
}, 2000);

return  false;

});




