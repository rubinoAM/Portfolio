$(document).ready(()=>{
    $('.box1').addClass('active-box');
});

$('.bootup-btn').click(()=>{
    $('.bootup').css('opacity','0');
    setTimeout(()=>{
        $('.bootup').css('display','none');
    },500);
})

let mobileToggled = false;

$('.nav-hamburger').click(()=>{
    if(mobileToggled == false){
        $('.mobile-nav').css('display','flex');
        setTimeout(()=>{
            $('.mobile-nav').css('opacity','100');
        },100);
        mobileToggled = true;
    }
    else{
        $('.mobile-nav').css('opacity','0');
        setTimeout(()=>{
            $('.mobile-nav').css('display','none');
        },200);
        mobileToggled = false;
    }
});

$('.mobile-link').click(()=>{
    $('.mobile-nav').css('transition','none');
    $('.mobile-nav').css('opacity','0');
    $('.mobile-nav').css('display','flex');
    if(mobileToggled == true){
        mobileToggled = false;
    }
    setTimeout(()=>{
        $('.mobile-nav').css('transition','0.2s ease-out opacity');
    },500);
});

document.addEventListener('keydown',(e)=>{
    if(e.code == "ArrowRight"){
        $('.mobile-nav').css('transition','none');
        $('.mobile-nav').css('opacity','0');
        $('.mobile-nav').css('display','flex');
        if(mobileToggled == true){
            mobileToggled = false;
        }
        setTimeout(()=>{
            $('.mobile-nav').css('transition','0.2s ease-out opacity');
        },500);
    } else if(e.code == "ArrowLeft"){
        $('.mobile-nav').css('transition','none');
        $('.mobile-nav').css('opacity','0');
        $('.mobile-nav').css('display','flex');
        if(mobileToggled == true){
            mobileToggled = false;
        }
        setTimeout(()=>{
            $('.mobile-nav').css('transition','0.2s ease-out opacity');
        },500);
    }
});

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

function mobileNav(bgColor,textColor){
    $('.mobile-nav').css('background-color',bgColor);
    $('.mobile-link').css('color',textColor);
}

const boxOne = document.querySelector('.box1');
const boxTwo = document.querySelector('.box2');
const boxThree = document.querySelector('.box3');
const boxFour = document.querySelector('.box4');
const boxFive = document.querySelector('.box5');
let boxArray = [boxOne,boxTwo,boxThree,boxFour,boxFive];

$(window).resize(()=>{
    if($(window).width()>550){
        boxShift("0","0");
        mobileNav('#e44661','#fff');
        for(let i=0;i<boxArray.length;i++){
            $(boxArray[i]).css('display','block');
            if($(boxArray[i]).hasClass('active-box')){
                $(boxArray[i]).removeClass('active-box');
            }
        }
    } else {
        boxShift("0","0");
        mobileNav('#e44661','#fff');
        for(let i=1;i<boxArray.length;i++){
            $(boxArray[i]).css('display','none');
        }
        $(boxOne).addClass('active-box');
    }
});