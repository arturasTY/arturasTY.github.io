$(document).ready(function(){
    smoothScroll.init();
    NavToggle();
    SkillBar();
    StripScroll();
    labelMove();
    returnToTop();
    portfolioBelt();
});

$(window).scroll(function(){
   StripScroll();
});

function NavToggle() {
    $('.nav-toggle, .site-nav li').on('click', function(e){
        //e.preventDefault();
        $('.site-nav, .ion-navicon, .nav-toggle').toggleClass('is-open');
    });
}

function SkillBar() {
    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},2400);
	});
}

function StripScroll(){
    var wScroll = $(window).scrollTop();
    $('.strip-holder').css('background-position', 'center -'+ wScroll +'px');
}

function labelMove() {
    $('.field-input').focus(function(){
        $(this).parent().addClass('is-focused has-label');
    });

    $('.field-input').blur(function(){
       $parent = $(this).parent();

       if($(this).val()== '') {
           $parent.removeClass('has-label');
       }
       $parent.removeClass('is-focused');
    });
}

function returnToTop() {
    $('i.top').click(function(e) {
        $('body,html').animate({
            scrollTop : 0
        }, 500);
    });
}

function portfolioBelt() {

    $('.cta-more-block a').click(function(e){
       e.preventDefault();
       $('.examples-belt').css('left', '-101%');
       $(this).hide();
       $('.more-info').show();
    });

    $('i.back').click(function(){
       $('.examples-belt').css('left', '0%');
       $('.cta-more-block a').show();
       $('.more-info').hide(500);
    });

}
