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