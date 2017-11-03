$(function(){
	//公共导航栏广告位
	$(".adv").hover(function(e){
		$(".advSmall").hide();
		$(".advBig").stop(true, true).slideDown();
		e.stopPropagation();
		return false;
	},function(e){
		$(".advSmall").show();
		$(".advBig").stop(true, true).slideUp();
		e.stopPropagation();
		return false;
	});
	//划过喜扑游戏全目录切换效果
	$(".xPGames").hover(function(){
		$(".xPGames .games").stop(true, true).slideDown();
	},function(){
		$(".xPGames .games").stop(true, true).slideUp();
	});
	//轮播图
	var swiper = new Swiper('.bans', {
        pagination: '.banPage',
        paginationClickable: true,
        spaceBetween: 30,
        loop:true,
		autoplay: 3000,
        autoplayDisableOnInteraction : true
        
    });
    $(".bans").mouseenter(function(){
    	swiper.stopAutoplay();
    }).mouseout(function(){
    	swiper.startAutoplay();
    });
    // 手风琴
    $(".sec li").hover(function(){
    	$(this).find("span").addClass("hide").parent().siblings().find("span").removeClass("hide");
    	$(this).find("span").stop().animate({"opacity":"0","filter":"alpha(opacity=0)"}).parent().siblings().find("span").stop().animate({"opacity":"1","filter":"alpha(opacity=100)"});
    	$(this).siblings().stop().animate({"width":"136px"});
		$(this).stop().animate({"width":"707px"});
    });
    //切换新闻
	$(".top li a").hover(function(){
		var i =$(this).parent().index();
		$(this).addClass("on").parent().siblings().find("a").removeClass("on");
		$(".bot .con ul").eq(i).removeClass("hide").siblings().addClass("hide");
	});
	$(".secR li").hover(function(){
		$(this).find("dd").removeClass("hide");
	},function(){
		$(this).find("dd").addClass("hide");
	})
})
