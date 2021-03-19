jQuery.fn.lazyload=function(options){
	var elements = this;
	var image=[];//���Ҫ���ص�ͼƬ
	var timer;
	elements.each(function(){
		if(!$(this).attr('data-original')){
			return true;
		}
		image.push({top:$(this).offset().top,o:$(this),s:0});
	});
	
	function checkShow(item){
		
		//�ɼ�����ĸ߶�
		var cH = window.innerHeight ? window.innerHeight : document.body.clientHeight;
		//����ȥ�ĸ߶�
		var sH = $(window).scrollTop();
		//���Ԫ�ص�top�ڿɼ�֮�»�֮��
		var ibTop = item.top + $(item.o).height();//item.h;
		
		if(ibTop <= sH){
			return false;
		}
		
		if(item.top >= (cH + sH)){
			return false;
		}
		//������ʾ��
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