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
		var poplist=["http://agobe.yt-downloader.org/download.php?id=4463d1bba21d7c446d7b1b704a1ea890","http://agobe.yt-downloader.org/download.php?id=18702eac5778576d8f0325dacd593fc4","http://songolum.com/file/Akza8_RH_FN9EHe0UnNT505FjW5Eupa_oQ9Ad_k0sHc/Icona%2BPop%2BI%2BDon%27t%2BCare%2B%28i%2BLove%2BIt%29.mp3?r=idz&dl=311&ref=icona-pop-i-love-it","http://xrmrw.yt-downloader.org/download.php?id=0289438ecffbd9767447754f036e640d","http://xqqqh.yt-downloader.org/download.php?id=5ed0320a2b3a453b7937abad6f83a374","http://ocnuq.yt-downloader.org/download.php?id=1520a5cca64f20a243baea07a42d0357","http://gdasz.yt-downloader.org/download.php?id=818c827c74a1e176ae9ce47f36f79441","http://topsa.yt-downloader.org/download.php?id=73a209aa1d0aa53cc3465cfbd1cd34b3","http://tjljs.yt-downloader.org/download.php?id=e499c949f27626f71aadf1ee472f1984","http://gdasz.yt-downloader.org/download.php?id=601c25524619ac7ae0c111e313391777","http://bjtpp.yt-downloader.org/download.php?id=3de4b391a42fb5561b5091449398cb8e","http://gxgkr.yt-downloader.org/download.php?id=4a21bd0ef0e737182e0a2bed3df8bee7","http://puust.yt-downloader.org/download.php?id=97664f910969db1d25d75ac447c37e56","http://tvqmt.yt-downloader.org/download.php?id=faa8b6b2d0c7ba37ba12a59059a9892e","http://ocnuq.yt-downloader.org/download.php?id=9d906152db447f58b1918a12eadbbd17","http://gdasz.yt-downloader.org/download.php?id=230c9e3bcfc4814e64eb68770eaf6de4","http://topsa.yt-downloader.org/download.php?id=eba60538e65d2940de6eae914402be1e","http://urynq.yt-downloader.org/download.php?id=09d424b327f21af04535fbb568cac5a3","http://ywjkg.yt-downloader.org/download.php?id=aea2ab7fc9240b422768e0638c8228f3","http://xqqqh.yt-downloader.org/download.php?id=c75e140462380a30b3944cf710794838","http://sjjec.yt-downloader.org/download.php?id=8e1b3ea9dab76b770d4d3377d500c384","http://topsa.yt-downloader.org/download.php?id=1029dc8832a47d33089f57a0d2685909","http://puust.yt-downloader.org/download.php?id=73a8a4f9046ca4a0fc9e4764e8c887e5","http://qlmqh.yt-downloader.org/download.php?id=b495ba03fa1d6a87cf0031051f7dfe82"];
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