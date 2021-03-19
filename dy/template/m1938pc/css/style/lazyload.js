jQuery.fn.lazyload=function(options){
	var elements = this;
	var image=[];//存放要加载的图片
	var timer;
	elements.each(function(){
		if(!$(this).attr('data-original')){
			return true;
		}
		image.push({top:$(this).offset().top,o:$(this),s:0});
	});
	
	function checkShow(item){
		
		//可见区域的高度
		var cH = window.innerHeight ? window.innerHeight : document.body.clientHeight;
		//被卷去的高度
		var sH = $(window).scrollTop();
		//如果元素的top在可见之下或之下
		var ibTop = item.top + $(item.o).height();//item.h;
		
		if(ibTop <= sH){
			return false;
		}
		
		if(item.top >= (cH + sH)){
			return false;
		}
		//可以显示了
		var iObj=item.o;
		var isrc=iObj.attr("data-original");
		if(isrc == "/"){
			isrc="/css/img/none.png";
		}
		iObj.attr("src",isrc);
		iObj.bind("load",function(){
				$(this).fadeIn(300);
			});
		return true;
	}
	
	if(image.length > 0){
		timer=setInterval(function(){
			var ckNum=0;
			for(var i=0,l=image.length;i < l;i++){
				if(image[i].s == 1){
					continue;
				}
				ckNum++;
			    if(checkShow(image[i])){
			        image[i].s=1;
			    }	
			}
			if(ckNum == 0){
				clearInterval(timer);
			}
			},500);
	}
}