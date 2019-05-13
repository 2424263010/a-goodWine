$(function(){
	$("header").find("ul:first-child").find("li").hover(function(){
		if($(this).children("span").length > 0){
			$(this).parent().next().css({"display":"block"});
		}
	},function(){
		$(this).parent().next().css({"display":"none"});
	})
	
	
})
