$(document).ready(()=>{
    $('#go-down').click(()=>{
        if($('.main-container').offset().left == 0 && $('.main-container').offset().top == 0){
            boxShift('-100vw','0');
            colorShift('.box1','#ffa544','#e44661');
            preventScroll();
            resetScroll('.box1',0);
            unfixImage('.hor-spread');
            mobileNav('#ffa544','#08151a');
        }
        else if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == 0){
            boxShift('-200vw','0');
            colorShift('.box2','#b4bd3e','#ffa544');
            preventScroll();
            resetScroll('.box2',0);
            mobileNav('#b4bd3e','#08151a');
        }
        else if($('.main-container').offset().left == -($(window).width()*2) && $('.main-container').offset().top == 0){
            boxShift('-300vw','0');
            colorShift('.box3','#13ac8b','#b4bd3e');
            preventScroll();
            resetScroll('.box3',0);
            mobileNav('#13ac8b','#f7fefc');
        }
        else if($('.main-container').offset().left == -($(window).width()*3) && $('.main-container').offset().top == 0){
            boxShift('-400vw','0');
            colorShift('.box4','#4c18ad','#13ac8b');
            preventScroll();
            resetScroll('.box4',0);
            mobileNav('#4c18ad','#f7fdff');
        }
    });

    $('#go-up').click(()=>{
        if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == 0){
            boxShift('0','0');
            colorShift('.box2','#e44661','#ffa544');
            preventScroll();
            resetScroll('.box2',0);
            mobileNav('#e44661','#fff');
        }
        else if($('.main-container').offset().left == -($(window).width()*2) && $('.main-container').offset().top == 0){
            boxShift('-100vw','0');
            colorShift('.box3','#ffa544','#b4bd3e');
            preventScroll();
            resetScroll('.box3',0);
            mobileNav('#ffa544','#08151a');
        }
        else if($('.main-container').offset().left == -($(window).width()*3) && $('.main-container').offset().top == 0){
            boxShift('-200vw','0');
            colorShift('.box4','#b4bd3e','#13ac8b');
            preventScroll();
            resetScroll('.box4',0);
            mobileNav('#b4bd3e','#08151a');
        }
        else if($('.main-container').offset().left == -($(window).width()*4) && $('.main-container').offset().top == 0){
            boxShift('-300vw','0');
            colorShift('.box5','#13ac8b','#4c18ad');
            preventScroll();
            resetScroll('.box5',0);
            mobileNav('#13ac8b','#f7fefc');
        }
    });
});