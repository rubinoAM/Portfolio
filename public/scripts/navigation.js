if($(window).width()>550){
    $('.welcome').click(()=>{
        $('.transition-box').css('top','0');
        setTimeout(()=>{
            $('.main-container').css('transition','none');
            $('.main-container').css('left','0');
            $('.main-container').css('top','0');
            setTimeout(()=>{
                $('.main-container').css('transition','1s cubic-bezier(.32,0,.46,1)');
                $('.transition-box').css('top','100vh');
            },200);
        },300);
        mobileNav('#e44661','#fff');
    });

    $('.work').click(()=>{
        $('.transition-box').css('top','0');
        setTimeout(()=>{
            $('.main-container').css('transition','none');
            $('.main-container').css('left','-100vw');
            $('.main-container').css('top','0');
            setTimeout(()=>{
                $('.main-container').css('transition','1s cubic-bezier(.32,0,.46,1)');
                $('.transition-box').css('top','100vh');
            },200);
        },300);
        mobileNav('#ffa544','#08151a');
    });

    $('.resume').click(()=>{
        $('.transition-box').css('top','0');
        setTimeout(()=>{
            $('.main-container').css('transition','none');
            $('.main-container').css('left','-100vw');
            $('.main-container').css('top','-100vh');
            setTimeout(()=>{
                $('.main-container').css('transition','1s cubic-bezier(.32,0,.46,1)');
                $('.transition-box').css('top','100vh');
            },200);
        },300);
        mobileNav('#b4bd3e','#08151a');
    });

    $('.about').click(()=>{
        $('.transition-box').css('top','0');
        setTimeout(()=>{
            $('.main-container').css('transition','none');
            $('.main-container').css('left','-100vw');
            $('.main-container').css('top','-200vh');
            setTimeout(()=>{
                $('.main-container').css('transition','1s cubic-bezier(.32,0,.46,1)');
                $('.transition-box').css('top','100vh');
            },200);
        },300);
        mobileNav('#13ac8b','#f7fefc');
    });

    $('.links').click(()=>{
        $('.transition-box').css('top','0');
        setTimeout(()=>{
            $('.main-container').css('transition','none');
            $('.main-container').css('left','-200vw');
            $('.main-container').css('top','-200vh');
            setTimeout(()=>{
                $('.main-container').css('transition','1s cubic-bezier(.32,0,.46,1)');
                $('.transition-box').css('top','100vh');
            },200);
        },300);
        mobileNav('#4c18ad','#f7fdff');
    });
}