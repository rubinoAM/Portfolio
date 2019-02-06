$(document).ready(()=>{
    $('#go-down').click(()=>{
        if($('.main-container').offset().left == 0 && $('.main-container').offset().top == 0){
            boxShift('-100vw','0');
            colorShift('.box1','#ffa544','#e44661');
            preventScroll();
            resetScroll('.box1',0);
            unfixImage('.hor-spread');
        }
        else if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == 0){
            boxShift('-100vw','-100vh');
            colorShift('.box2','#b4bd3e','#ffa544');
            preventScroll();
            resetScroll('.box2',0);
        }
        else if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == -($(window).height())){
            boxShift('-100vw','-200vh');
            colorShift('.box3','#2b594f','#b4bd3e');
            preventScroll();
            resetScroll('.box3',0);
        }
        else if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == -($(window).height()*2)){
            boxShift('-200vw','-200vh');
            colorShift('.box4','#002d40','#2b594f');
            preventScroll();
            resetScroll('.box4',0);
        }
    });

    $('#go-up').click(()=>{
        if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == 0){
            boxShift('0','0');
            colorShift('.box2','#e44661','#ffa544');
            preventScroll();
            resetScroll('.box2',0);
        }
        else if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == -($(window).height())){
            boxShift('-100vw','0');
            colorShift('.box3','#ffa544','#b4bd3e');
            preventScroll();
            resetScroll('.box3',0);
        }
        else if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == -($(window).height()*2)){
            boxShift('-100vw','-100vh');
            colorShift('.box4','#b4bd3e','#2b594f');
            preventScroll();
            resetScroll('.box4',0);
        }
        else if($('.main-container').offset().left == -($(window).width()*2) && $('.main-container').offset().top == -($(window).height()*2)){
            boxShift('-100vw','-200vh');
            colorShift('.box5','#2b594f','#002d40');
            preventScroll();
            resetScroll('.box5',0);
        }
    });
});