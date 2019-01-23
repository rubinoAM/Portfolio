$('.welcome').click(()=>{
    //Make square shift up, then fade in page
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
});