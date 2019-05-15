$(function(){
	//计算展会倒计时
	$(".content_left div").each(function(){
		var startTime = new Date($(this).find("dl").find("span").html());
		var endTime = new Date($(this).find("dl").find("em").html());
		var oDate = new Date();
		var time1 =Math.ceil((startTime - oDate  )/1000/3600/24);
		var time2 =Math.ceil((endTime - oDate)/1000/3600/24 + 1);
		
		if(time1>0){
			$(this).find("p").find("em").html(time1);
		}
		if(time1<=0 && time2>=0){
			$(this).find("p").html("正在开幕中");
		}
		if(time2<0){
			$(this).find("p").html("会展已经结束")
		}
		
	});
	
	/*$.get("http://47.112.21.225:8080/wine-0.0.1-SNAPSHOT/listExhibition.do",{},function(data){
		console.log(data);
		$(".content_left div").each(function(){
			$(this).find("dt").html(data.data[$(this).index()].name);
			$(this).find("span").html(data.data[$(this).index()].time);
			
		});
		
		
	})*/
	
})
