$(function  () {
	
	//登录界面账户输入框失去焦点
		$("#username").blur(function () {
			var username = /^.{3,16}$/
			if ($(this).val() == "" || username.test($(this).val())==false) {
				$(this).next().html("用户名在4到20个字符,请确认！")
				$(this).next().css({"background":"url(../img/onError.gif) no-repeat 0 2px","color":"red"})
			}
		})
		//密码界面输入框失去焦点
		$("#password").blur(function  () {
			var password = /^[A-Za-z0-9]{6,16}$/
			if ($(this).val()=="") {
				$(this).next().html("密码不能为空请确认")
				$(this).next().css({"background":"url(../img/onError.gif) no-repeat 0 2px","color":"red"})
			}else if (password.test($(this).val()) == false) {
				$(this).next().html("新密码由6-16个字符组成，请确认")
				$(this).next().css({"background":"url(../img/onError.gif) no-repeat 0 2px","color":"red"})
			}
		})
		//确认密码
		
		$("#repassword").blur(function() {
			var psw1 = $("#password").val()
			var psw2 = $("#repassword").val()
			console.log(psw1,psw2);
			if (psw2=="") {
				$(this).next().html("确认密码不能为空")
				$(this).next().css({"background":"url(../img/onError.gif) no-repeat 0 2px","color":"red"})
			}else if(psw2 !== psw1){
				
				$(this).next().html("两次密码输入不一致，请确认！")
				$(this).next().css({"background":"url(../img/onError.gif) no-repeat 0 2px","color":"red"})
			}
		})
		//练习电话
		$("#tell").blur(function() {
			var tell = /^1(3|5|7|8|9)\d{9}$/
			
				if ($(this).val()=="") {
					$(this).next().html("手机号码不能为空")
					$(this).next().css({"background":"url(../img/onError.gif) no-repeat 0 2px","color":"red"})
				}else if (tell.test($(this).val())==false) {
					$(this).next().html("你输入的手机号码格式不正确")
					$(this).next().css({"background":"url(../img/onError.gif) no-repeat 0 2px","color":"red"})
				}
			
		})
		//邮箱
		$("#email").blur(function() {
			var email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
			if ($(this).val()=="") {
					$(this).next().html("邮箱地址不能为空")
					$(this).next().css({"background":"url(../img/onError.gif) no-repeat 0 2px","color":"red"})
			}else if (tell.test($(this).val())==false) {
					$(this).next().html("你输入的邮箱格式不正确，请确认")
					$(this).next().css({"background":"url(../img/onError.gif) no-repeat 0 2px","color":"red"})
				}		
		})
		
		//点击刷新验证码
		$(".code-num").click(function  () {
			var arr = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

			var str = "";
			for (var i=0;i<4;i++) {
				var a = arr[Math.floor(Math.random()*62)]
				str+=a
			}
			$(this).html(str)
		})
		
		$("#codenum").blur(function() {
			var code1 = $(".code-num").html().toUpperCase()
			var code2 = $(this).val().toUpperCase()
			if (code2 == "") {
				alert("验证码为空");
			}else if(code2 !== code1){
				alert("输入的验证码有误，请重新输入")
			}
		})
			
		//获取手机验证码
		$("#phoncode").click(function() {
			var pc1 = $("#phone-num").val()
			var pc2 = $("#tell").val()
			var tell = /^1(3|5|7|8|9)\d{9}$/
			if (pc1 == "") {
				alert("手机号不能为空");
			}else if(tell.test(pc1)==false){
				alert("你输入的手机格式不正确")
			}else if(pc1!==pc2){
				alert("请和注册手机号保持一致")
			}
			$(this).css({"background":"#666","color":"green"})
			
			//倒计时60秒的计时器
			var timer =null;
			var time = 60;
			var time=setInterval(function() {
				time--;
				$(this).val(time);
				console.log(time)

			},1000)
		})
		
	
})