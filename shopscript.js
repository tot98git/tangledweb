window.onload=function(){

	$('#closemodal').click(function(){
		$('.modal-container').fadeOut(300);
	});
	$('.color').click(function(){
		$(this).css('border','3px solid navy');
	});
	$('.shop-item-wrapper').click(function(){
		var articlename = $(this).children('.left-span').html();
		var price = $(this).children('.right-span').html();
		var imgsrc = $(this).children('img').attr('src');
		$('.modal-container').fadeIn(300);
		$('.modal').children('h1').html(articlename);
		$('.modal').children('#item-price').html(price);
		$('#modal-img').attr('src',imgsrc);
	});
}