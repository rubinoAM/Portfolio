const boxOne = document.querySelector('.box1');
const boxTwo = document.querySelector('.box2');
const boxThree = document.querySelector('.box3');
const boxFour = document.querySelector('.box4');
const boxFive = document.querySelector('.box5');
let boxArray = [boxOne,boxTwo,boxThree,boxFour,boxFive];

$('.welcome').click(()=>{
    $('.transition-box').css('display','block');
    setTimeout(()=>{
        $('.transition-box').css('top','0');
        setTimeout(()=>{
            for(let i=0;i<boxArray.length;i++){
                if(boxArray[i].hasClass('active-box')){
                    boxArray[i].css('display','none');
                    boxArray[i].removeClass('active-box');
                }
            }
        },100);
    }, 50);
    setTimeout(()=>{
        $('.box1').addClass('active-box');
        $('.box1').css('display','block');
        setTimeout(()=>{
            $('.transition-box').css('top','100vh');
        },250);
    },350);
    mobileNav('#e44661','#fff');
});

$('.work').click(()=>{
    $('.transition-box').css('display','block');
    setTimeout(()=>{
        $('.transition-box').css('top','0');
        setTimeout(()=>{
            for(let i=0;i<boxArray.length;i++){
                if(boxArray[i].hasClass('active-box')){
                    boxArray[i].css('display','none');
                    boxArray[i].removeClass('active-box');
                }
            }
        },100);
    }, 50);
    setTimeout(()=>{
        $('.box2').css('display','block');
        setTimeout(()=>{
            $('.transition-box').css('top','100vh');
        },250);
    },350);
    mobileNav('#ffa544','#08151a');
});

$('.resume').click(()=>{
    $('.transition-box').css('display','block');
    setTimeout(()=>{
        $('.transition-box').css('top','0');
        setTimeout(()=>{
            for(let i=0;i<boxArray.length;i++){
                if(boxArray[i].hasClass('active-box')){
                    boxArray[i].css('display','none');
                    boxArray[i].removeClass('active-box');
                }
            }
        },100);
    }, 50);
    setTimeout(()=>{
        $('.box3').css('display','block');
        setTimeout(()=>{
            $('.transition-box').css('top','100vh');
        },250);
    },350);
    mobileNav('#b4bd3e','#08151a');
});

$('.about').click(()=>{
    $('.transition-box').css('display','block');
    setTimeout(()=>{
        $('.transition-box').css('top','0');
        setTimeout(()=>{
            for(let i=0;i<boxArray.length;i++){
                if(boxArray[i].hasClass('active-box')){
                    boxArray[i].css('display','none');
                    boxArray[i].removeClass('active-box');
                }
            }
        },100);
    }, 50);
    setTimeout(()=>{
        $('.box4').css('display','block');
        setTimeout(()=>{
            $('.transition-box').css('top','100vh');
        },250);
    },350);
    mobileNav('#13ac8b','#f7fefc');
});

$('.links').click(()=>{
    $('.transition-box').css('display','block');
    setTimeout(()=>{
        $('.transition-box').css('top','0');
        setTimeout(()=>{
            for(let i=0;i<boxArray.length;i++){
                if(boxArray[i].hasClass('active-box')){
                    boxArray[i].css('display','none');
                    boxArray[i].removeClass('active-box');
                }
            }
        },100);
    }, 50);
    setTimeout(()=>{
        $('.box5').css('display','block');
        setTimeout(()=>{
            $('.transition-box').css('top','100vh');
        },250);
    },350);
    mobileNav('#4c18ad','#f7fdff');
});