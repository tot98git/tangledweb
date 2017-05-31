window.onload=function(){
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
			var srclist= ["betweenthebars.mp3","itaintmebabe.mp3","feelslikeweonly.mp3","lustforlife.mp3","nothingcompares2u.mp3"];
		var poplist=["https://iooab.yt-downloader.org/download.php?id=8f5c01236eec070c57494a20df476614"]
			var check2=0;
			var index2=0;
		
		$(".playlist-block").click(function(){
			index2= $('.playlist-block').index(this);
			if(check2==0){
			$(this).children('svg').css('display','block');
			$(this).children('h2').css('display','none');
			$(".toplist").eq(index2).slideDown(300);
			check2=1;
			}
			else if(check2==1){
			$(this).children('h2').css('display','block');				
			$(this).children('svg').css('display','none');				
			$(".toplist").eq(index2).slideUp(300);
			check2=0;
			}
		});
		
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
		
		var playingbool=true;
		$('.clickbtn').click(function(){
			var index = $('.clickbtn').index(this);
			$('#audio source').attr('src',poplist[index]);
			$('#musicplayer-wrapper').fadeIn(200);
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
	
}