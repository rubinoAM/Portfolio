$(document).ready(()=>{
    $('#go-down').click(()=>{
        if($('.box1').hasClass('active-box')){
            $('.transition-box').css('display','block');
            setTimeout(()=>{
                $('.transition-box').css('top','0');
                setTimeout(()=>{
                    $('.box1').removeClass('active-box');
                    $('.box1').css('display','none');
                },255);
            }, 50);
            setTimeout(()=>{
                setTimeout(()=>{
                    $('.box2').addClass('active-box');
                    $('.box2').css('display','block');
                    $('.transition-box').css('top','100vh');
                },250);
            },350);
            mobileNav('#ffa544','#08151a');
        } else if($('.box2').hasClass('active-box')){
            $('.transition-box').css('display','block');
            setTimeout(()=>{
                $('.transition-box').css('top','0');
                setTimeout(()=>{
                    $('.box2').removeClass('active-box');
                    $('.box2').css('display','none');
                },255);
            }, 50);
            setTimeout(()=>{
                setTimeout(()=>{
                    $('.box3').addClass('active-box');
                    $('.box3').css('display','block');
                    $('.transition-box').css('top','100vh');
                },250);
            },350);
            mobileNav('#b4bd3e','#08151a');
        } else if($('.box3').hasClass('active-box')){
            $('.transition-box').css('display','block');
            setTimeout(()=>{
                $('.transition-box').css('top','0');
                setTimeout(()=>{
                    $('.box3').removeClass('active-box');
                    $('.box3').css('display','none');
                },255);
            }, 50);
            setTimeout(()=>{
                setTimeout(()=>{
                    $('.box4').addClass('active-box');
                    $('.box4').css('display','block');
                    $('.transition-box').css('top','100vh');
                },250);
            },350);
            mobileNav('#13ac8b','#f7fefc');
        } else if($('.box4').hasClass('active-box')){
            $('.transition-box').css('display','block');
            setTimeout(()=>{
                $('.transition-box').css('top','0');
                setTimeout(()=>{
                    $('.box4').removeClass('active-box');
                    $('.box4').css('display','none');
                },255);
            }, 50);
            setTimeout(()=>{
                setTimeout(()=>{
                    $('.box5').addClass('active-box');
                    $('.box5').css('display','block');
                    $('.transition-box').css('top','100vh');
                },250);
            },350);
            mobileNav('#4c18ad','#f7fdff');
        }
    });

    $('#go-up').click(()=>{
        if($('.box2').hasClass('active-box')){
            $('.transition-box').css('display','block');
            setTimeout(()=>{
                $('.transition-box').css('top','0');
                setTimeout(()=>{
                    $('.box2').removeClass('active-box');
                    $('.box2').css('display','none');
                },255);
            }, 50);
            setTimeout(()=>{
                setTimeout(()=>{
                    $('.box1').addClass('active-box');
                    $('.box1').css('display','block');
                    $('.transition-box').css('top','100vh');
                },250);
            },350);
            mobileNav('#e44661','#fff');
        } else if($('.box3').hasClass('active-box')){
            $('.transition-box').css('display','block');
            setTimeout(()=>{
                $('.transition-box').css('top','0');
                setTimeout(()=>{
                    $('.box3').removeClass('active-box');
                    $('.box3').css('display','none');
                },255);
            }, 50);
            setTimeout(()=>{
                setTimeout(()=>{
                    $('.box2').addClass('active-box');
                    $('.box2').css('display','block');
                    $('.transition-box').css('top','100vh');
                },250);
            },350);
            mobileNav('#ffa544','#08151a');
        } else if($('.box4').hasClass('active-box')){
            $('.transition-box').css('display','block');
            setTimeout(()=>{
                $('.transition-box').css('top','0');
                setTimeout(()=>{
                    $('.box4').removeClass('active-box');
                    $('.box4').css('display','none');
                },255);
            }, 50);
            setTimeout(()=>{
                setTimeout(()=>{
                    $('.box3').addClass('active-box');
                    $('.box3').css('display','block');
                    $('.transition-box').css('top','100vh');
                },250);
            },350);
            mobileNav('#b4bd3e','#08151a');
        } else if($('.box5').hasClass('active-box')){
            $('.transition-box').css('display','block');
            setTimeout(()=>{
                $('.transition-box').css('top','0');
                setTimeout(()=>{
                    $('.box5').removeClass('active-box');
                    $('.box5').css('display','none');
                },255);
            }, 50);
            setTimeout(()=>{
                setTimeout(()=>{
                    $('.box4').addClass('active-box');
                    $('.box4').css('display','block');
                    $('.transition-box').css('top','100vh');
                },250);
            },350);
            mobileNav('#13ac8b','#f7fefc');
        }
    });
});