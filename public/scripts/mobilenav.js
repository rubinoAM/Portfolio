$('.welcome').click(()=>{
    $('.transition-box').css('display','block');
    setTimeout(()=>{
        $('.transition-box').css('top','0');
        setTimeout(()=>{
            for(let i=0;i<boxArray.length;i++){
                if($(boxArray[i]).hasClass('active-box')){
                    $(boxArray[i]).css('display','none');
                    $(boxArray[i]).removeClass('active-box');
                }
            }
        },255);
    }, 50);
    setTimeout(()=>{
        $('.box1').addClass('active-box');
        $('.box1').css('display','block');
        setTimeout(()=>{
            $('.transition-box').css('top','100vh');
        },250);
        setTimeout(()=>{
            $('.transition-box').css('display','none');
        },350);
    },350);
    mobileNav('#e44661','#fff');
});

$('.work').click(()=>{
    $('.transition-box').css('display','block');
    setTimeout(()=>{
        $('.transition-box').css('top','0');
        setTimeout(()=>{
            for(let i=0;i<boxArray.length;i++){
                if($(boxArray[i]).hasClass('active-box')){
                    $(boxArray[i]).css('display','none');
                    $(boxArray[i]).removeClass('active-box');
                }
            }
        },255);
    }, 50);
    setTimeout(()=>{
        $('.box2').addClass('active-box');
        $('.box2').css('display','block');
        setTimeout(()=>{
            $('.transition-box').css('top','100vh');
        },250);
        setTimeout(()=>{
            $('.transition-box').css('display','none');
        },350);
    },350);
    mobileNav('#ffa544','#08151a');
});

$('.resume').click(()=>{
    $('.transition-box').css('display','block');
    setTimeout(()=>{
        $('.transition-box').css('top','0');
        setTimeout(()=>{
            for(let i=0;i<boxArray.length;i++){
                if($(boxArray[i]).hasClass('active-box')){
                    $(boxArray[i]).css('display','none');
                    $(boxArray[i]).removeClass('active-box');
                }
            }
        },255);
    }, 50);
    setTimeout(()=>{
        $('.box3').addClass('active-box');
        $('.box3').css('display','block');
        setTimeout(()=>{
            $('.transition-box').css('top','100vh');
        },250);
        setTimeout(()=>{
            $('.transition-box').css('display','none');
        },350);
    },350);
    mobileNav('#b4bd3e','#08151a');
});

$('.about').click(()=>{
    $('.transition-box').css('display','block');
    setTimeout(()=>{
        $('.transition-box').css('top','0');
        setTimeout(()=>{
            for(let i=0;i<boxArray.length;i++){
                if($(boxArray[i]).hasClass('active-box')){
                    $(boxArray[i]).css('display','none');
                    $(boxArray[i]).removeClass('active-box');
                }
            }
        },255);
    }, 50);
    setTimeout(()=>{
        $('.box4').addClass('active-box');
        $('.box4').css('display','block');
        setTimeout(()=>{
            $('.transition-box').css('top','100vh');
        },250);
        setTimeout(()=>{
            $('.transition-box').css('display','none');
        },350);
    },350);
    mobileNav('#13ac8b','#f7fefc');
});

$('.links').click(()=>{
    $('.transition-box').css('display','block');
    setTimeout(()=>{
        $('.transition-box').css('top','0');
        setTimeout(()=>{
            for(let i=0;i<boxArray.length;i++){
                if($(boxArray[i]).hasClass('active-box')){
                    $(boxArray[i]).css('display','none');
                    $(boxArray[i]).removeClass('active-box');
                }
            }
        },255);
    }, 50);
    setTimeout(()=>{
        $('.box5').addClass('active-box');
        $('.box5').css('display','block');
        setTimeout(()=>{
            $('.transition-box').css('top','100vh');
        },250);
        setTimeout(()=>{
            $('.transition-box').css('display','none');
        },350);
    },350);
    mobileNav('#4c18ad','#f7fdff');
});