$(document).ready(()=>{
    $('#go-right').click(()=>{
        if($('.main-container').offset().left == 0 && $('.main-container').offset().top == 0){
            boxShift('-100vw','0');
            colorShift('.box1','#dd4','#44d');
            resetScroll('.box1',0);
        }
        else if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == 0){
            boxShift('-100vw','-100vh');
            colorShift('.box2','#9df','#dd4');
            resetScroll('.box2',0);
        }
        else if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == -($(window).height())){
            boxShift('-100vw','-200vh');
            colorShift('.box3','#0e1','#9df');
            resetScroll('.box3',0);
        }
        else if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == -($(window).height()*2)){
            boxShift('-200vw','-200vh');
            colorShift('.box4','#ab0','#0e1');
            resetScroll('.box4',0);
        }
    });

    $('#go-left').click(()=>{
        if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == 0){
            boxShift('0','0');
            colorShift('.box2','#44d','#dd4');
            resetScroll('.box2',0);
        }
        else if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == -($(window).height())){
            boxShift('-100vw','0');
            colorShift('.box3','#dd4','#9df');
            resetScroll('.box3',0);
        }
        else if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == -($(window).height()*2)){
            boxShift('-100vw','-100vh');
            colorShift('.box4','#9df','#0e1');
            resetScroll('.box4',0);
        }
        else if($('.main-container').offset().left == -($(window).width()*2) && $('.main-container').offset().top == -($(window).height()*2)){
            boxShift('-100vw','-200vh');
            colorShift('.box5','#0e1','#ab0');
            resetScroll('.box5',0);
        }
    });

    document.addEventListener('keydown',(e)=>{
        if(e.code == "ArrowRight"){
            if($('.main-container').offset().left == 0 && $('.main-container').offset().top == 0){
                boxShift('-100vw','0');
                colorShift('.box1','#dd4','#44d');
                resetScroll('.box1',0);
            }
            else if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == 0){
                boxShift('-100vw','-100vh');
                colorShift('.box2','#9df','#dd4');
                resetScroll('.box2',0);
            }
            else if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == -($(window).height())){
                boxShift('-100vw','-200vh');
                colorShift('.box3','#0e1','#9df');
                resetScroll('.box3',0);
            }
            else if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == -($(window).height()*2)){
                boxShift('-200vw','-200vh');
                colorShift('.box4','#ab0','#0e1');
                resetScroll('.box4',0);
            }
        } else if(e.code == "ArrowLeft"){
            if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == 0){
                boxShift('0','0');
                colorShift('.box2','#44d','#dd4');
                resetScroll('.box2',0);
            }
            else if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == -($(window).height())){
                boxShift('-100vw','0');
                colorShift('.box3','#dd4','#9df');
                resetScroll('.box3',0);
            }
            else if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == -($(window).height()*2)){
                boxShift('-100vw','-100vh');
                colorShift('.box4','#9df','#0e1');
                resetScroll('.box4',0);
            }
            else if($('.main-container').offset().left == -($(window).width()*2) && $('.main-container').offset().top == -($(window).height()*2)){
                boxShift('-100vw','-200vh');
                colorShift('.box5','#0e1','#ab0');
                resetScroll('.box5',0);
            }
        }
    });
})

function boxShift(left,top){
    $('.main-container').css('left',left);
    $('.main-container').css('top',top);
}

function colorShift(box,color1,color2){
    setTimeout(()=>{
        $(box).css('background-color',color1)
    },600);
    setTimeout(()=>{
        $(box).css('background-color',color2)
    },1000);
}

function resetScroll(box,y){
    setTimeout(()=>{
        $(box).scrollTop(y);
    },1000);
}