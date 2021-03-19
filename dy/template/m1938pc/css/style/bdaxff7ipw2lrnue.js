$(document).ready(function(){
	
function IsPC(){  
	var userAgentInfo = navigator.userAgent;
	var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
	var flag = true;  
	for (var v = 0; v < Agents.length; v++) {  
	if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
	}  
	return flag;  
}
if (IsPC()) {
	$(window).on('scroll',function(){
		var st = $(document).scrollTop();
		if( st>0 ){
			$('#widget-weixin').fadeIn(function(){
			});
		}else{
			$('#widget-weixin').fadeOut(function(){
			});
		}	
	});
	$(".widget-weixin").click(function(){
		$(".widget-weixin").remove();
	});
}
});