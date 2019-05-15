$(function() {
	gundong();
	sousuo();
	lunbo();
    bgRed();
    btnList();
    touxiang();
    xinxizhanshi();
	function gundong() {
		var num = 0;

		function goLeft() {
			//根据你给的尺寸，可变的
			if(num == -500) {
				num = 0;
			}
			num -= 1;
			$(".scroll").css({
				left: num
			})
		}
		//设置滚动速度
		var timer = setInterval(goLeft, 20);
		//设置鼠标经过时滚动停止
		$(".scroll").hover(function() {
				clearInterval(timer);
			},
			function() {
				timer = setInterval(goLeft, 20);
			});
	}

	function sousuo() {
//		$(".select_box").mouseenter(function(event) {
//			event.stopPropagation();
//			$(this).find(".option").toggle();
//			$(this).parent().siblings().find(".option").hide();
//		});
         $(".select_box").hover(function(){
         	$(this).find("ul").show();
         },function(){
         	$(this).find("ul").hide();
         })
		$(".option li").click(function() {
			var check_value = $(this).text();
			var zlValue = $('.option li:eq(1)').html();
			var bqValue = $('.option li:eq(2)').html();
			$(this).parent().siblings(".select_txt").text(check_value);
			$("#select_value").val(check_value);
			$(".option").hide();
			if(check_value == zlValue) {

				$('#searchPlaceholder').prop('placeholder', '中低价川酒');
			} else if(check_value == bqValue) {

				$('#searchPlaceholder').prop('placeholder', '中低价川酒');
			} else {

				$('#searchPlaceholder').prop('placeholder', '中低价川酒');
			}
		});
	}

	function lunbo() {
		var t = n = 0,
			count;
		$(document).ready(function() {
			count = $("#banner_list a").length;
			$("#banner_list a:not(:first-child)").hide();
			$("#banner_info").html($("#banner_list a:first-child").find("img").attr('alt'));
			$("#banner_info").click(function() {
				window.open($("#banner_list a:first-child").attr('href'), "_blank")
			});
			$("#banner li").click(function() {
				var i = $(this).text() - 1; //获取Li元素内的值，即1，2，3，4
				n = i;
				if(i >= count) return;
				$("#banner_info").html($("#banner_list a").eq(i).find("img").attr('alt'));
				$("#banner_info").unbind().click(function() {
					window.open($("#banner_list a").eq(i).attr('href'), "_blank")
				})
				$("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
				document.getElementById("banner").style.background = "";
				$(this).addClass("on");
				$(this).siblings().removeClass();
			});
			t = setInterval(showAuto, 4000);
			$("#banner").hover(function() {
					clearInterval(t)
				},
				function() {
					t = setInterval(showAuto, 4000);
				});
		})

		function showAuto() {
			n = n >= (count - 1) ? 0 : ++n;
			$("#banner li").eq(n).trigger('click');
		};

	}
    function bgRed(){
    	$(document).ready(function(){
    		$(".a_area122 ul").find("li").hover(function(){
    	    $(this).children().css({"color":"white"});
    	    $(this).find("span").css("background","none");
  			$(this).addClass("on");
  			$(this).siblings().removeClass();
           
    		},function(){
    			 $(this).parent().parent().find("li").removeClass();
    			 $(this).children().css({"color":"black"});
    			 $(this).find("span").css("background","");
    			 $(this).find("font").css("color","red");
    		})
    	})
    }
    
    function btnList(){
    	$(document).ready(function(){
    		$(".lidiv").find("button").hover(function(){
    			$(this).find($(".btnxianshi")).css("display","block");
    			
    		},function(){
    			$(this).find($(".btnxianshi")).css("display","none");
    			
    		})
    	})
  }
    function touxiang(){
    	$(".touxiang").hover(function(){
    		$(".dengluzhece").css("display","block");
    	},function(){
    		$(".dengluzhece").css("display","none");
    	})
    }
    function xinxizhanshi(){
    //	console.log($(".a_area04btm1 h3").find("a").eq(1)[0])
    	$(".a_area04btm1 h3").find("a").eq(1).hover(function(){
    		$(this).css({"color":"red"});
    	    $(".a_area04btm1Nav1").find("ul").css("display","block");
    	    $(".a_area04btm1Nav4").find("ul").css("display","none") 
    	},function(){
    		$(this).css({"color":" "});
    	    $(".a_area04btm1Nav1").find("ul").css("display","none");
    	    $(".a_area04btm1Nav4").find("ul").css("display","block") 
    	})
    	
    	$(".a_area04btm1 h3").find("a").eq(2).hover(function(){
    		$(this).css({"color":"red"});
    	    $(".a_area04btm1Nav2").find("ul").css("display","block");
    	    $(".a_area04btm1Nav4").find("ul").css("display","none") 
    	},function(){
    		$(this).css({"color":" "});
    	    $(".a_area04btm1Nav2").find("ul").css("display","none");
    	    $(".a_area04btm1Nav4").find("ul").css("display","block") 
    	})
    	
    	$(".a_area04btm1 h3").find("a").eq(3).hover(function(){
    		$(this).css({"color":"red"});
    	    $(".a_area04btm1Nav3").find("ul").css("display","block");
    	    $(".a_area04btm1Nav4").find("ul").css("display","none") 
    	},function(){
    		$(this).css({"color":" "});
    	    $(".a_area04btm1Nav3").find("ul").css("display","none");
    	    $(".a_area04btm1Nav4").find("ul").css("display","block") 
    	})
    	
    	$(".a_area04btm1 h3").find("a").eq(4).hover(function(){
    		$(this).css({"color":"red"});
    	   
    	    $(".a_area04btm1Nav4").find("ul").css("display","block") 
    	},function(){
    		$(this).css({"color":" "});
    	    $(".a_area04btm1Nav4").find("ul").css("display","block") 
    	})
    	
    	}
      

})