
window.onload=function(){
// 出场动画
var page01=document.querySelector('.page01');
var page02=document.querySelector('.page02');
var page03=document.querySelector('.page03');
var page04=document.querySelector('.page04');
var page05=document.querySelector('.page05');
var wait_float=document.querySelector('.wait_float');

page01.className='page01 page01_curr';
page02.className='page02 page02_curr';
page03.className='page03 page03_curr';
page04.className='page04 page04_curr';
page05.className='page05 page05_curr';


$('.wait_float').animate({display:"none",zIndex:"5"},2500);

	// 根据可视区域的大小调整宽高
	size();
	function size(){
		var screenW=document.documentElement.clientWidth;
		var screenH=document.documentElement.clientHeight;
		var contain=document.querySelector('.contain');
		contain.style.width=screenW+'px';
		contain.style.height=screenH+'px';
	}
	window.onload=window.onresize=function(){
		size()
	};
	// border渐显效果
	$('li .center_box').hover(function(){
		$(this).siblings('.bg_border').addClass('fade_border');
		$('.tab_btn').hide();
	},function(){
		$(this).siblings('.bg_border').removeClass('fade_border');
		$('.tab_btn').show();
	})
//滚屏
	var n=0;
// 右边轮播
	var lastClickTime = new Date().getTime();
	var delay = 1000; // transition的延迟
	$('.btn_prev').click(function(){
		if (new Date().getTime() - lastClickTime < delay) {
		    return;
		}
		lastClickTime = new Date().getTime();
		$('.screen_slide li').addClass('li_prev').siblings('li').removeClass('li_next');
		n--;
		if(n<0){
			n=6;
			$('.screen_slide li').eq(n).addClass('active').siblings('').removeClass('active');
			$('.screen_slide li').eq(0).addClass('prev1').siblings('li').removeClass('prev1').removeClass('prev');}
		else{
			$('.screen_slide li').eq(n).addClass('active').siblings('').removeClass('active');
			$('.screen_slide li').eq(n+1).addClass('prev1').siblings('li').removeClass('prev1').removeClass('prev');
		}		
	});
// 右边轮播
	$('.btn_next').click(function(){
		if (new Date().getTime() - lastClickTime < delay) {
		    return;
		}
		lastClickTime = new Date().getTime();
		$('.screen_slide li').addClass('li_next').siblings('li').removeClass('li_prev');
		n++;
		if(n>6){
			n=0;
			$('.screen_slide li').eq(6).addClass('prev').siblings('li').removeClass('prev').siblings('li').removeClass('prev1');
			$('.screen_slide li').eq(n).addClass('active').siblings('li').removeClass('active');
		}else{
			$('.screen_slide li').eq(n-1).addClass('prev').siblings('li').removeClass('prev');
			$('.screen_slide li').eq(n).addClass('active').siblings('li').removeClass('active');
		}	
		aa(n);	
	});
	aa(n);
	function aa(n){
		// 滚轴事件
		window.onmousewheel=function(ev){
			if (new Date().getTime() - lastClickTime < delay) {
			    return;
			}
			lastClickTime = new Date().getTime();
				if(ev.wheelDelta>0){
					// console.log('向上');
					$('.screen_slide li').addClass('li_prev').siblings('li').removeClass('li_next');
					n--;
					if(n<0){
						n=6;
						$('.screen_slide li').eq(n).addClass('active').siblings('').removeClass('active');
						$('.screen_slide li').eq(0).addClass('prev1').siblings('li').removeClass('prev1').removeClass('prev');}
					else{
						$('.screen_slide li').eq(n).addClass('active').siblings('').removeClass('active');
						$('.screen_slide li').eq(n+1).addClass('prev1').siblings('li').removeClass('prev1').removeClass('prev');
					}
				}else{
					$('.screen_slide li').addClass('li_next').siblings('li').removeClass('li_prev');
					n++;
					if(n>6){
						n=0;
						$('.screen_slide li').eq(6).addClass('prev').siblings('li').removeClass('prev').siblings('li').removeClass('prev1');
						$('.screen_slide li').eq(n).addClass('active').siblings('li').removeClass('active');
					}else{
						$('.screen_slide li').eq(n-1).addClass('prev').siblings('li').removeClass('prev');
						$('.screen_slide li').eq(n).addClass('active').siblings('li').removeClass('active');
					}	
				}
		}	
	}


//视差
	window.onmousemove=function(ev){
		var screen_slide=document.querySelector('.screen_slide');
		var img=screen_slide.querySelectorAll('.img');
		for(var i=0;i<img.length;i++){
			img[i].style.transform='translate('+(ev.pageX-document.documentElement.clientWidth/2)/80+'px,'+(ev.pageY-document.documentElement.clientHeight/2)/80+'px)';
		}
		
	}





}


