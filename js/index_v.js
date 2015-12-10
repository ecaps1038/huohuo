
/*＝＝＝＝＝＝＝＝＝＝＝＝＝
全屏背景垂直滚动demo
author:monny
date:2015-11-22

＝＝＝＝＝＝＝＝＝＝＝＝＝＝*/
$(function(){
		   var $index=0;
		   var $wH=$(document).height();
		   var $html='';
		   var $navL=$('#navList'),$mainL=$('#mainList'),$mainLi=$('#mainList li')
		   var $len=$mainLi.length;
		   $mainL.height($wH*$len+'px');
		   $mainLi.height($wH+'px');
		   for(var i=0; i<$len; i++){
			  $html='<li><span>'+$mainLi.eq(i).attr('date')+'</span></li>';
			  $navL.append($html); 
			   }
		var $navLi=$('#navList li')	   
		 $navLi.eq(0).addClass('on');
		 $mainLi.eq(0).addClass('cur');
		 $navLi.click(function(){
				$index=$(this).index();
				scrollp($index);
							   });
		  $(window).mousewheel(function(e,dir){
			if(dir>=1){
				//console.log('鼠标向上滚动')
				$index--;
				if($index<0){$index=3;}
			}else if(dir<=-1){
				//console.log('鼠标向下滚动')
				$index++;
				$index%=4;
			}
			//console.log($index);
			scrollp($index);
			});
		  function scrollp(n){
			  $mainL.stop().animate({'marginTop':-n*$wH+'px'},400);
			  $navLi.eq(n).addClass('on').siblings().removeClass();
			  $mainLi.eq(n).addClass('cur').siblings().removeClass();
			  }
		   });