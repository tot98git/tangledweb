window.onload=function(){
	$(window).scroll(function(){
		console.log(wScroll);
		var wScroll=$(this).scrollTop();
		if(wScroll<241){
			$("header img").css("transform","scale("+wScroll/100+"px)");
		}
		else if(wScroll>544 && wScroll!=1330){
			$(".top-header").css({'position':'fixed',
			'height':'7%',
			'animation':'menuani 0.3s ease-in-out'});
			$(".article-info").css('position','fixed');
			$(".article-info").css('top','100px');
			$(".article-info").css('width','10%');
			document.getElementsByTagName("aside")[0].style.position="fixed";
			document.getElementsByTagName("aside")[0].style.top="50px";
		}
		
		else{
			//$(".top-header").css('animation','none'});
			$(".top-header").css('position','relative');
			$(".top-header").css('height','15%');			
			$(".main-header-item img").css("transform","scale(1)");
			$(".article-info").css('position','relative');	
			$(".article-info").css('width','20%');						
			document.getElementsByTagName("aside")[0].style.position="relative";
		}
		});
		$('.read-more-item').mouseover(function(){
			$(this).children('h3').css({'display':'block','animation-play-state':'running'});
			
		});	
}