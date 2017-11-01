$(function(){
	// active
	var $scene = $('#scene').parallax();
	$scene.parallax('scalar', 4, 6);
	window.onload=window.onresize=function(){
		var w = $("body").width();
		var boxW = $(".boxs").width();
		$(".boxs").css({"zoom":w/boxW});
	};
	$(".down dt").hover(function(){
		$(".con").stop(true,true).slideUp();
	},function(){
		$(".con").stop(true,true).slideDown();
	});
	//index
	//公共导航栏广告位
	$(".adv").hover(function(){
		$(".advSmall").hide();
		$(".advBig").stop(true, true).slideDown();
	},function(){
		$(".advSmall").show();
		$(".advBig").stop(true, true).slideUp();
	});
	//划过喜扑游戏全目录切换效果
	$(".xPGames").hover(function(){
		$(".xPGames .games").stop(true, true).slideDown();
	},function(){
		$(".xPGames .games").stop(true, true).slideUp();
	});
})
