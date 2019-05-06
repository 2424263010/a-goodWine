$(function(){
	setInterval(function(){
		$(".content-top-ul li img:last-of-type").hide();
		$(".content-top-ul li img:last-of-type").delay(1500).animate({"display":"block"});
	},3000)
})
