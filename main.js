$('.bootup-btn').click(()=>{
    $('.bootup').css('opacity','0');
    setTimeout(()=>{
        $('.bootup').css('display','none');
    },500);
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

function unfixImage(image){
    $(image).css('background-attachment','local');
    setTimeout(()=>{
        $(image).css('background-attachment','fixed')
    },1000);
}

function preventScroll(){
    $('.box').css('overflow-y','hidden');
    setTimeout(()=>{
        $('.box').css('overflow-y','auto');
    },999);
}

/*Transition Box Colors
if($('.main-container').offset().left == 0 && $('.main-container').offset().top == 0){
    $('.transition-box').css('background-color','#e44661');
}
if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == 0){
    $('.transition-box').css('background-color','#ffa544');
}
if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == -($(window).height())){
    $('.transition-box').css('background-color','#b4bd3e');
}
if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == -($(window).height()*2)){
    $('.transition-box').css('background-color','#2b594f');
}
if($('.main-container').offset().left == -($(window).width()) && $('.main-container').offset().top == -($(window).height()*2)){
    $('.transition-box').css('background-color','#002d40');
}*/