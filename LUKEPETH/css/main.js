$(window).scroll(function(){
    if ($(document).scrollTop() >50 ){
        $('nav').addClass('shrink');
    }else{
        $('nav').removeClass('shrink');
    }
});
$('#fullpage').fullpage({
    onLeave: function(index, nextIndex, direction){
    var idx = Math.abs(index - nextIndex)*.1;
    $.fn.fullpage.setScrollingSpeed(idx*700);
    }
})