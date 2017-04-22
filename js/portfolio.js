$(function () {

    'use strict'

/*$(window).scroll(function(){
    console.log('jestem tu');
})*/

    
var okno = $(window);
var menu = $('#main-nav');
/* to trzeba dodac bo po f5 sie wykrzaczy*/
if (okno.scrollTop() >= 100){
    menu.addClass('scroll');
}    
/* po skrolu dodaj klase do menu - i efekty*/    
    okno.scroll(function(){
        
        console.log(okno.scrollTop());
        if(okno.scrollTop() >=100){
            menu.addClass('scroll');
        }else{
            menu.removeClass('scroll');
        } 
    });
    
/*jazda START-------- po dokumencie smooth linki do sekcji*/    
$(document).on('click', 'a[href^="#"]', function(event){
    event.preventDefault();

var menuHeight = $('#main-nav').height();    
    
    
/* to poniżej -100 obniża skrola zeby nie obcinalo

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 100}, 500);
*/    
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - menuHeight}, 500);
    
    });
    
/* JAZDA STOP--------------------------------------------*/
    
});
    
