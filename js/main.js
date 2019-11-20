$(document).ready(function () {


    if ($(window).outerWidth() <= 1200) {
        $('header').append( $('.me') );
        $('.flexmenu').hide()
    }

    var prevScrollpos = window.pageYOffset;
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('active');
        }
        if ($(window).scrollTop() < 100) {
            $('header').removeClass('active');
        }
    });

});

var navigating = false;
function navTo(target) {
    if ( navigating || $(event.target).hasClass('active') ) {
        return
    } 
    navigating = true;
    $('.menu-item').removeClass('active');
    $(event.target).addClass('active');
    $('.content-tab').fadeOut(function(){
        $('#' + target).fadeIn(function(){
            navigating = false;
        })
    })
    if ($(window).outerWidth() <= 1200) {
        toggleMenu()
    }
}

var fading = false
function toggleMenu() {
    console.log('toggle')
    if (fading) return;
    fading = true;

    $('#menu-toggle').toggleClass('active')
    $('.flexmenu').fadeToggle(function(){
        fading = false;
    })

}