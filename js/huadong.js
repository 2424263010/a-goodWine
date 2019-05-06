function gundong(trr,kuan) {
		var num = 0;

		function goLeft() {
			//根据你给的尺寸，可变的
			if(num == -kuan) {
				num = 0;
			}
			num -= 1;
			$(trr).css({
				left: num
			})
		}
		//设置滚动速度
		var timer = setInterval(goLeft, 20);
		//设置鼠标经过时滚动停止
		$(trr).hover(function() {
				clearInterval(timer);
			},
			function() {
				timer = setInterval(goLeft, 20);
			});
	}

	