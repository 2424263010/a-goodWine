$(function() {
	gundong();
	sousuo();

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

	function sousuo(){
        $(".select_box").mouseenter(function(event){   
            event.stopPropagation();
            $(this).find(".option").toggle();
        });
        $(".option li").click(function(){
            var check_value=$(this).text();
            var zlValue = $('.option li:eq(1)').html();
            var bqValue = $('.option li:eq(2)').html();
            $(this).parent().siblings(".select_txt").text(check_value);
            $("#select_value").val(check_value);
            $('.option').hide();
            if(check_value == zlValue) {
            	
                $('#searchPlaceholder').prop('placeholder','中低价川酒');
            }else if(check_value == bqValue) {
            	
                $('#searchPlaceholder').prop('placeholder','中低价川酒');
            }else {
            
                $('#searchPlaceholder').prop('placeholder','中低价川酒');
            }
        });
    }
})