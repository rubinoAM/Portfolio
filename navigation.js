$('.welcome').click(()=>{
    //Make square shift up, then fade in page
    $('.main-container').css('transition','none');
    $('.main-container').css('left','0');
    $('.main-container').css('top','0');
    setTimeout(()=>{
        $('.main-container').css('transition','1s cubic-bezier(.32,0,.46,1)');
    },200);
});

$('.work').click(()=>{
    $('.main-container').css('transition','none');
    $('.main-container').css('left','-100vw');
    $('.main-container').css('top','0');
    setTimeout(()=>{
        $('.main-container').css('transition','1s cubic-bezier(.32,0,.46,1)');
    },200);
});

$('.resume').click(()=>{
    $('.main-container').css('transition','none');
    $('.main-container').css('left','-100vw');
    $('.main-container').css('top','-100vh');
    setTimeout(()=>{
        $('.main-container').css('transition','1s cubic-bezier(.32,0,.46,1)');
    },200);
});

$('.about').click(()=>{
    $('.main-container').css('transition','none');
    $('.main-container').css('left','-100vw');
    $('.main-container').css('top','-200vh');
    setTimeout(()=>{
        $('.main-container').css('transition','1s cubic-bezier(.32,0,.46,1)');
    },200);
});

$('.links').click(()=>{
    $('.main-container').css('transition','none');
    $('.main-container').css('left','-200vw');
    $('.main-container').css('top','-200vh');
    setTimeout(()=>{
        $('.main-container').css('transition','1s cubic-bezier(.32,0,.46,1)');
    },200);
});