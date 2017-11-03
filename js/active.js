$(function(){
	// active
	var $scene = $('#scene').parallax();
	$scene.parallax('scalar', 4, 6);
	window.onload=window.onresize=function(){
		var w = $("body").width();
		var boxW = $(".activeBoxs").width();
		$(".activeBoxs").css({"zoom":w/boxW});
	};
	$(".down dt").hover(function(){
		$(".con").stop(true,true).slideUp();
	},function(){
		$(".con").stop(true,true).slideDown();
	});
})
