	$(document).ready(function(e) {
        $('.shouqi').click(function(){
			$('header').css('margin-top','-80px').css('overflow','inherit');});
        $('.fangxia').click(function(){
			$('header').css('margin-top','0px').css('overflow','hidden');});
		$('.service_inner .left').hover(function(){
			$(this).find('ul').css('top','13%');
			$(this).find('.sev_bot').css('bottom','0');
			$(this).css('background','rgba(255,255,255,1)');
			},function(){
			$(this).find('ul').css('top','26%');
			$(this).find('.sev_bot').css('bottom','-26%');
			$(this).css('background','rgba(255,255,255,0)');
			});
		$('.work_nav li').click(function(){
			var lit=$(this).attr('date');
			$('.scb').hide();
			$(lit).fadeIn(500);
			$('.work_nav li').removeClass();
			$(this).addClass('changecolor');
			return false;
			});
		$('.logo_t').click(function(){
			$('.nav_t>ul').slideDown("fast");
			});
		$('.nav_t').hover(function(){},function(){
			$('.nav_t>ul').slideUp("fast");
			});
		 $('.work_main').kxbdSuperMarquee({
		distance:305,
		time:1000,
		duration:30,
		direction: 'left',
		btnGo:{left:'#goL',right:'#goR'}
		});
		$('.work_main ul li').hover(function(){
			$(this).css('border-bottom','4px solid rgba(255,68,68,1)');
			$(this).find('.beijin').css('background','rgba(0,0,0,0.2)');
			$(this).find('img').css('width','275px');
			$(this).find('h4').css('color','rgba(255,255,255,1)');
			$(this).find('p').css('color','rgba(255,255,255,0.7)');
			},function(){
			$(this).css('border-bottom','4px solid rgba(255,255,255,0.4)');
			$(this).find('.beijin').css('background','rgba(0,0,0,0)');
			$(this).find('img').css('width','275px');
			$(this).find('h4').css('color','rgba(255,255,255,0.5)');
			$(this).find('p').css('color','rgba(255,255,255,0.3)');
			})
		$('.about_skill p').hover(function(){
			$(this).css('color','#000');
			$(this).find('span').css('background-color','#f33');
			},function(){
			$(this).css('color','#666');
			$(this).find('span').css('background-color','#ccc');
			})
		$('.down').click(function(){
			$('body,html').animate({scrollTop:$(window).height()*0.965},300);
			})

			$('.fancybox').fancybox();
	
    });
$(function(){  
        //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失  
        $(function () {  
            $(window).scroll(function(){  
                if ($(window).scrollTop()<$(window).height()*0.5){  
                    $("#home1").addClass('yangshi');  
                }  
                else  
                {  
                    $("#home1").removeClass();  
                }  
            });  
    
            $("#home1").click(function(){  
                $('body,html').animate({scrollTop:0},300);  
                return false;  
            });  
        });  
        $(function () {  
            $(window).scroll(function(){  
                if ($(window).scrollTop()>$(window).height()*0.5&&$(window).scrollTop()<$(window).height()*1.5){  
                    $("#service1").addClass('yangshi'); 
                }  
                else  
                {  
                    $("#service1").removeClass(); 
                }  
            });  
    
            $("#service1").click(function(){  
                $('body,html').animate({scrollTop:$(window).height()*0.94},300);  
                return false;  
            });  
        });  
        $(function () {  
            $(window).scroll(function(){  
                if ($(window).scrollTop()>$(window).height()*1.5&&$(window).scrollTop()<$(window).height()*2.5){  
                    $("#work1").addClass('yangshi');  
                }  
                else  
                {  
                    $("#work1").removeClass(); 
                }  
            });  
    
            $("#work1").click(function(){  
                $('body,html').animate({scrollTop:($(window).height()*0.94+730)},300);  
                return false;  
            });  
        });  
        $(function () {  
            $(window).scroll(function(){  
                if ($(window).scrollTop()>$(window).height()*2.5&&$(window).scrollTop()<$(window).height()*3.5){  
                    $("#about1").addClass('yangshi');  
                }  
                else  
                {  
                    $("#about1").removeClass(); 
                }  
            });  
    
            $("#about1").click(function(){ 
                $('body,html').animate({scrollTop:$(window).height()*0.94+1410},300);  
                return false;  
            });  
        });  
        $(function () {  
            $(window).scroll(function(){  
                if ($(window).scrollTop()>$(window).height()*3.5&&$(window).scrollTop()<$(window).height()*5){  
                    $("#contact1").addClass('yangshi'); 
                }  
                else  
                {  
                    $("#contact1").removeClass(); 
                }  
            });  
    
            $("#contact1").click(function(){  
                $('body,html').animate({scrollTop:$(window).height()*0.94+2210},300);  
                return false;  
            });  
        });  
    });  