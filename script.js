window.onload=function(){
		var news = document.getElementsByClassName("second-article");
		var newsIndex=0;
		var prevNews = news[0];
		var currentNews = news[1];
		var nextNews = news[2];
		var tempNews = news[0];
		rotateNewsInterval();
		function rotateNewsInterval(){setInterval(function(){rotateNews();assignVar();},15000);
		}
		function rotateNews(){
			prevNews.style.transform="rotateX(90deg)";
			setTimeout(function(){
			currentNews.style.display="block";
			setTimeout(function(){
			currentNews.style.transform="rotateX(0deg)";},400);
			prevNews.style.display="none";
			prevNews.style.transform="rotateX(-90deg)";
			},1400);
		}
			function assignVar(){setTimeout(function(){tempNews = prevNews;
			prevNews=currentNews;
			currentNews=nextNews;
			nextNews=tempNews;},2205);
		}
		
		
			
		// Header's slider
		setInterval(function(){changeSlides(+1);},30000);
		var click1=document.getElementById("click1");
		var click2=document.getElementById("click2");
		var slides = document.getElementsByClassName("main-header-item");		
		var slidesIndex = 0;
		var prevSlide=slides[0];

		click1.onclick=function(){
			changeSlides(-1);
		}
		click2.onclick=function(){
			changeSlides(+1);
		}
		function changeSlides(m){

			if((slidesIndex==slides.length-1 && m==+1)||(slidesIndex==0&m==-1)){
				slidesIndex=0;
			}
			else{
				slidesIndex=slidesIndex+m;
			}
			prevSlide.style.opacity="0";
			setTimeout(function(){
			prevSlide.style.display="none";
			prevSlide.style.opacity="1";
			},100);
			setTimeout(function(){	slides[slidesIndex].style.display="block";			
			},100);
				setTimeout(function(){slides[slidesIndex].style.opacity="1";
				prevSlide=slides[slidesIndex];},110);
		}
		//Article's slider
		var artIndex=0;
		var btn1 = document.getElementById("btn1");
		var btn2 = document.getElementById("btn2");
		var artSlides = document.getElementsByClassName("article-block");
		var prevArt=artSlides[0];
		btn1.onclick=function(){
			changeArt(-1);
		}
		btn2.onclick=function(){
			changeArt(+1);
		}
		function changeArt(m){
			if((artIndex==artSlides.length-1 && m==1)||(artIndex==0 && m==-1)){
				artIndex=0;
			}
			else{
				artIndex=artIndex+m;
			}
			prevArt.style.opacity="0";
			setTimeout(function(){prevArt.style.display="none"; prevArt.style.opacity="1";},100);
			setTimeout(function(){artSlides[artIndex].style.display="block";},200);
			setTimeout(function(){artSlides[artIndex].style.opacity="1";
			prevArt=artSlides[artIndex];
			},210);
		}
		//work on this
				$(window).scroll(function(){
					var wScroll=$(this).scrollTop();
		console.log(wScroll);
		if(wScroll<544 && wScroll>120){
			$(".main-header-item img").css("transform","scale("+wScroll/120+")");
			document.getElementsByTagName("aside")[0].style.position="relative";
		}
		else if(wScroll>544 && wScroll!=1330){
			$(".main-header-item img").css("transform","scale(1)");
			document.getElementsByTagName("aside")[0].style.position="fixed";
			document.getElementsByTagName("aside")[0].style.top="0px";
		}
		else{
			$(".main-header-item img").css("transform","scale(1)");
			document.getElementsByTagName("aside")[0].style.position="relative";
		}
		});
					//Audio player
		var volctrl = document.getElementById("vol_control");
		var playbtn = document.getElementById("playpausebtn");
		var seekctrl = document.getElementById("seek_control");

				function readableDuration(seconds) {
				sec = Math.floor( seconds );    
				min = Math.floor( sec / 60 );
				min = min >= 10 ? min : '0' + min;    
				sec = Math.floor( sec % 60 );
				sec = sec >= 10 ? sec : '0' + sec;    
				return min + ':' + sec;
			}
			console.log(audio.duration);
	
		var srclist= ["betweenthebars.mp3","itaintmebabe.mp3","feelslikeweonly.mp3","lustforlife.mp3","nothingcompares2u.mp3"];
		var playingbool=true;
		$('.clickbtn').click(function(){
			var index = $('.clickbtn').index(this);
			$('#musicplayer-wrapper').fadeIn(200);
			$('#audio source').attr('src',"audio/"+srclist[index]);
			$('#audio')[0].load();									
			$('#vol_control input').change(function(){
			audio.volume=$('#vol_control input').val();
			});		
			$('#audio').bind('canplay',function(){
			$('#seek_control input').attr('max',audio.duration);
			});
	
			$('#seek_control input').change(function(){
			audio.currentTime=$('#seek_control input').val();
			});
			$('#songname').html( $(this).parents().siblings("span").children('h3').html());
				audio.onchange = function(){
				audio.currentTime=$('#seek_control input').val();	
				}
				audio.ontimeupdate = function(){
				$('#seek_control input').val(audio.currentTime);
				$('#duration').html(readableDuration(audio.currentTime));

				}
			$('.musicplayer').children('img').attr('src',$(this).siblings('.imgsrc').attr('src'));
			$('#audio')[0].play();
			$('#playpausebtn').children('img').attr('src','gjw-images/pausebtn.png');

			
		});
		$('#playpausebtn').click(function(){
			if(playingbool==false){
				$('#audio')[0].play();
				playingbool=true;
				$(this).children('img').attr('src','gjw-images/pausebtn.png');			

			}
			else if(playingbool==true){
				$('#audio')[0].pause();
				playingbool=false;
				$(this).children('img').attr('src','gjw-images/playbtn.png');			

			}
		});
		//events defining
				var check = 0;
			$(".toplist .list-item").click(function(){
				var index = $('.list-item').index(this);
				if(check==0){
				$(this).next("div").slideDown(300);
				$(this).css("border-bottom","0px solid black");	
				check=1;
				}
				else if(check==1){
				$(this).next("div").slideUp(300);
				$(this).css("border-bottom","1px solid black");	
				check=0;
					
				}
				
			});
			

}