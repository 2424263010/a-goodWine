$(function() {
	//评价内容
	var tell = /^1(3|4|5|7|8|9)\d{9}$/;
	$('.m4l-code').click(function() {
		console.log($('.m4l-te').eq(1).val())
		if(tell.test($('.m4l-te').eq(1).val())==""){
			alert("手机号不能为空！")
		}else if(tell.test($('.m4l-te').eq(1).val()) == false) {
			alert('请正确输入手机号');
		} 
		
	});

	$('.m4-right').find('input').click(function() {
		var a = $('#m4r-1').find('input:radio:checked').val();
		var b = $('#m4r-2').find('input:radio:checked').val();
		var c = $('#m4r-3').find('input:radio:checked').val();

		if(a == undefined) {
			a = '';
		} else {
			a += ';';
		}
		if(b == undefined) {
			b = '';
		} else {
			b += ';';
		}
		if(c == undefined) {
			c = '';
		} else {
			c += ';';
		}
		var str = a+b+c;
		$('.m4l-tea').html(str);
	});
	
	$(".m4l-btn").click(function  () {
		var val1 = $(".m4l-te").eq(0).val()
		var val2 = $(".m4l-te").eq(1).val()
		var val3 = $(".m4l-yz").val()
		var val4 = $(".m4l-tea").val()
		
		if (val1 ==""|| val2 =="" ||val3 ==""||val4 =="") {
			alert("请检查内容是否填写完整！")
		}
	})
	
	//放大镜内容
	
	
	//鼠标进入图片时出现放大镜，鼠标移出后放大镜消失
	$(".jzoom").mouseover(function  () {
		$(".sm_zoom").css("display","block")
		$(".bigzoom").css("display","block")
	})
	$(".jzoom").mouseout(function  () {
		$(".sm_zoom").css("display","none")
		$(".bigzoom").css("display","none")
	})
	//拖动鼠标让放大镜移动
	$(".jzoom").mousemove(function  (e) {
		//相对于事件源的坐标位置
		var x = event.pageX-$(".jzoom").offset().left-$(".sm_zoom").width()/2;
		var y = event.pageY-$(".jzoom").offset().top-$(".sm_zoom").height()/2
		//控制范围左侧超出
		if (x<0) {
			x = 0
		}
		//右侧超出
		if (x>$(".jzoom").width()-$(".sm_zoom").width()) {
			x = $(".jzoom").width()-$(".sm_zoom").width()
		}
		if (y <0) {
			y = 0;
		}
		if (y>$(".jzoom").height()-$(".sm_zoom").height()) {
			y = $(".jzoom").height()-$(".sm_zoom").height()
		}
		
		$(".sm_zoom").css({
			left:x+"px",
			top:y+"px"
			
		})
		
		$(".bigzoom>img").css({
			left:-x*$(".bigzoom").width()/$(".sm_zoom").width()+"px",
			top:-y*$(".bigzoom").height()/$(".sm_zoom").height()+"px"
		})
		
		//处理图片修改图片的地址的功能还未能实现
		var arr = $(".img_list").find("li")
		for (let i = 0;i < arr.length;i++) {
			
			arr.eq(i).click(function  () {
				
				$(".jzoom").find("img").attr("src",arr.eq(i).find("img").attr("src"));
				$(".bigzoom").find("img").attr("src",$(this).find("img").attr("src"));
				$(this).css("border","1px solid red")
				$(this).siblings().css("border","none")
			})	
				
		}
		/*arr.on("click",function  () {
				console.log("aa",$(this).find("img").attr("src"))
				$(".jzoom").find("img").attr("src",$(this).find("img").attr("src"));
				$(".bigzoom").find("img").attr("src",$(this).find("img").attr("src"));
				
			})	*/
	})
	for (let i = 0;i < $(".right_nav").find("span").length;i++) {
			$(".right_nav").find("span").eq(i).click(function  () {
				$(this).css("border-bottom","red 2px solid")
				$(this).siblings().css("border","none");
				$(".xiangqing").children("div").eq(i).css("display","block")
				$(".xiangqing").children("div").eq(i).siblings().css("display","none")
				
			})
		}
	//星星评分
	var flag = false;
	var index = 0;
	for (let j =0;j<$(".score").children().length;j++) {
		
		$(".score").children().eq(j).mousemove(function  () {
			for (var k = 0;k < $(".score").children().length;k++) {
				$(this).css("background","url(../img/stark2.png)")			
			}
			for (var k=0;k <= j;k++) {	
				$(this).css("background","url(../img/stars2.png)")	
			}
			
		})
		//鼠标移出后
		$(".score").children().eq(j).mouseout(function  () {
			for (var k = 0;k < $(".score").children().length;k++) {
				$(this).css("background","url(../img/stark2.png)")
			}
			if (flag) {
				for (var k = 0;k < index; k++) {
					$(this).css("background","url(../img/stars2.png)")
				}
				
			}
			
		})
		//鼠标单击
	
		$(".score").children().eq(j).click(function  () {
				flag = true;
				index = j;
				
			})
		
	}
	
	
})