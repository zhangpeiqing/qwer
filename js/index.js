$(function(){
	$(".zg_address ul li").click(function(){
		$(this).addClass("on").siblings("li").removeClass("on");
		$(".address_section").eq($(this).index()).show().siblings(".address_section").hide();
	})
})