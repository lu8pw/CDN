function setCookie(name, value,times) {  
    var today = new Date();
    var expires = new Date();
    expires.setTime(today.getTime() + times*1000);
    document.cookie = name + "=" + escape(value) + "; expires=" + expires.toGMTString()+";path=/";
}
function getCookie(Name) {
    var search = Name + "=";
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = document.cookie.indexOf(";", offset);
            if (end == -1) {
                end = document.cookie.length;
            }
            return unescape(document.cookie.substring(offset, end));
        } else {
            return ("");
        }
    } else {
        return ("");
    }
}
function addFav() {
	var c = window.event || arguments.callee.caller.arguments[0],
		c = c.srcElement ? c.srcElement : c.target;
	
	var title="Ѹ��ӰԺ";
	var url = "http://www.22tu.cc/";
	if (confirm("�Ƿ�Ҫ��"+title+"�ղ������棿")){
		location.href = "/template/22tu/22tu.php";
		return false;
	}
	
	if (window.sidebar) {
		if(window.sidebar.addPanel){
			window.sidebar.addPanel(title,url, "");
		}else{
			 c.title = title;
			 c.href = url;
			 c.rel = "sidebar";
			 return true;
		}
	}else if (window.opera && window.print){
        var elem = document.createElement('a');  
        elem.setAttribute('href',url);  
        elem.setAttribute('title',title);  
        elem.setAttribute('rel','sidebar'); 
        elem.click(); 
	} else if(document.all){
		try {
			window.external.addFavorite(url,title);
		} catch (d) {
			try {
				window.external.addToFavoritesBar(url, title, "slice");
			} catch (a) {
				alert("�����������֧�ּ����ղأ���ʹ��Ctrl+D�����ֶ���� !");
			}
		}
	}
	return false;
}
function selMinTab(){
	$(".tab-sel").each(function(){
		$(this).bind("click",function(){
			var ind=0;
			var txt=$(this).html();
			$(this).parent().find(".tab-sel").each(function(){
				if(txt == $(this).html()){
					$(this).removeClass("cor_tab2");
					$(this).addClass("cor_tab");
					$(this).parent().parent().parent().parent().parent().find(".tab-sel-con").eq(ind).show();
				}else{
					$(this).removeClass("cor_tab");
					$(this).addClass("cor_tab2");
					$(this).parent().parent().parent().parent().parent().find(".tab-sel-con").eq(ind).hide();
				}
				ind++;
			});
			
		});
	});
}
var hotPD={
	pInd:0,
	pTime:8,
	pStop:false,
	bObj:[],
	lObj:[],
	pLen:9,
	init:function(){
		for(var i=0,o=$(".channel-silder-nav img"),s=$(".channel-silder-cnt .channel-silder-panel"),l=o.length;i < l;i++){
			this.bObj.push(o.eq(i));
			this.lObj.push(s.eq(i));
			o.eq(i).parent().parent().attr('pk',i);
			s.eq(i).attr('pk',i);
			o.eq(i).bind("mouseover",function(){
				hotPD.cl();
				$(this).parent().parent().parent().find("li").each(function(){
					$(this).css("border-color","#000");
					if($(this).attr('p') == 'on'){
						$(this).attr("p","off");
					}
				});
				$(this).parent().parent().attr("p","on");
				$(this).parent().parent().css("border-color","#19c2c8");
				var nInd=parseInt($(this).parent().parent().attr('pk'));
				hotPD.lObj[nInd].show();
				hotPD.pInd=nInd;
				});
		}
		$(".hotPlay").bind("mouseover",function(){
				hotPD.pStop=true;
				});
		$(".hotPlay").bind("mouseout",function(){
				hotPD.pStop=false;
				});
		o.eq(0).parent().parent().css("border-color","#19c2c8");
		setInterval("hotPD.play()",this.pTime*1000);
	},
	cl:function(){
		for(var i=0;i < this.pLen;i++){
			this.lObj[i].hide();
			this.bObj[i].parent().parent().css("border-color","#000");
			this.bObj[i].parent().parent().attr("p","off");
		}
	},
	play:function(){
		if(!this.pStop){
			this.cl();
			
			this.pInd ++;
			if(this.pInd >= this.pLen){
				this.pInd=0;
			}
			this.bObj[this.pInd].parent().parent().css("border-color","#19c2c8");
			this.bObj[this.pInd].parent().parent().attr("p","on");
			this.lObj[this.pInd].fadeIn(400);
		}
	}
};

var US={
	isLog:false,
	uId:0,
	uName:"",
	bgId:"mj_user_bg",
	reId:"mj_user_reg",
	init:function(){
		var u=getCookie('comb');
		if(u.indexOf('~') > -1){
			u=u.split('~');
			this.isLog=true;
			this.uId=parseInt(u[0]);
			this.uName=decodeURIComponent(u[1]);
		}
		var str;
		if(this.uId > 0){
			var now = new Date(),hour = now.getHours();
			if(hour < 6){str="�賿�ã�";}
			else if (hour < 9){str="���Ϻã�";}
			else if (hour < 12){str="����ã�";}
			else if (hour < 14){str="����ã�";}
			else if (hour < 17){str="����ã�";}
			else if (hour < 19){str="����ã�";}
			else if (hour < 22){str="���Ϻã�";}
			else {str="ҹ��ã�";}
			str='<font color="green">'+str+'</font> <font color="red">'+this.uName+'</font> <a href="javascript:void(0)" onclick="US.out()">�˳�</a>';
		}else{
			str='<a href="javascript:void(0)" onclick="US.loginBox(1)">��½</a> / <a href="javascript:void(0)" onclick="US.loginBox(0)">ע��</a>';
		}
		$('#user_show').html(str);
		this.RC.cd();
		this.showMsg();
	},
	showMsg:function(){
		$("#user_show").before('<span style="color:blue;margin-right:10px;">������Դ����������������ֻ���ͬ����ף����Ƭ��죡</span>');
	},
	close:function(){
		$('#'+this.bgId).hide();
		$('#'+this.reId).hide();
	},
	out:function(){
		setCookie('comb','');
		setCookie('comf','');
		location.reload();
	},
	setCur:function(t){
		for(var i=0;i < 3;i++){
			if(i == t){
				$('#'+this.reId+' .us-memu .r').eq(i).css("color","#000");
				$('#'+this.reId+' .us-con .d').eq(i).show();
			}else{
				$('#'+this.reId+' .us-memu .r').eq(i).css("color","#ccc");
				$('#'+this.reId+' .us-con .d').eq(i).hide();
			}
		}
		this.toZ(this.reId);
	},
	userDo:function(obj,act){
		var pd={act:act};
		$(obj).parent().find("input").each(function(){
			var k=$(this).attr('name');
			var v=$(this).val();
			pd[k]=v;
			});
			
		
		$.post('/ujob.php',pd,function(da){
			$(".us-mes").html(da.mes);
			$(".us-mes").show();
			if(da.state=='ok'){
				setTimeout(function(){location.reload();},3000);
			}
			},'json');
	},
	showBg:function(){
		if($('#'+this.bgId).length < 1){
			$("body").append('<div id="'+this.bgId+'" style="z-index:99988;position: fixed;top:0px;left:0px;filter:alpha(opacity=70);-moz-opacity:0.7;-khtml-opacity: 0.7;opacity: 0.7;background:#ddd;"></div>');
		}
		var w=$("body").width();
		var h=$("body").height();
		$('#'+this.bgId).show();
		$('#'+this.bgId).css({width:w,height:h});
	},
	loginBox:function(cur){
		this.showBg();
		if($('#'+this.reId).length < 1){
			$("body").append('<div id="'+this.reId+'" class="us-box"></div>');
			rObj=document.getElementById(this.reId);
			$(rObj).append('<div class="us-memu"><div class="r" onclick="US.setCur(0)">ע��</div><div class="r" onclick="US.setCur(1)">��½</div><div class="r" onclick="US.setCur(2)">��������</div><div class="clo" onclick="US.close()">X</div></div><div class="us-mes"></div>');
			$(rObj).append('<div class="us-con"><div class="reg d"><span><em>�û��ʺţ�</em><input type="text" value="" name="pu" /></span><span><em>�û��ǳƣ�</em><input type="text" value="" name="pn" /></span><span><em>�û����룺</em><input type="Password" value="" name="ps" /></span><span><em>ȷ�����룺</em><input type="Password" value="" name="ps2" /></span><span><em>ע�����䣺</em><input type="text" value="" name="pm" /></span><div class="btn" onclick="US.userDo(this,\'reg\')">ȷ���ύ</div></div><div class="login d"><span><em>�ʺţ�</em><input type="text" value="" name="pu" /></span><span><em>���룺</em><input type="Password" value="" name="ps" /></span><div class="btn" onclick="US.userDo(this,\'login\')">ȷ����½</div></div><div class="fps d"><span><em>�ʺţ�</em><input type="text" value="" name="pu" /></span><span><em>���䣺</em><input type="text" value="" name="pm" /></span><div class="btn" onclick="US.userDo(this,\'fps\')">ȷ���ύ</div></div></div>');
		}
		
		$(rObj).show();
		this.toZ(this.reId);
		this.setCur(cur);
	},
	toZ:function(id){
    	var opWidth=$(window).width();
		var opHeight=$(window).height();
		var meWidth=$('#'+id).width();
		var meHeight=$('#'+id).height();
		var trueLeft=(opWidth/2)-(meWidth/2);
		var trueTop=(opHeight/2)-(meHeight/2);
		$('#'+id).css({"position":"fixed","left":trueLeft,"top":trueTop});
    },
    IMG:{
    	iid:'zj_img_div',
    	ims:[],
    	ind:0,
		show:function(obj){
			US.showBg();
			var url=$(obj).attr('data-original');
			if(this.ims.length < 1){
				$(obj).parent().parent().find("img").each(
				    function(){
				    	US.IMG.ims[US.IMG.ind++]=$(this).attr('data-original').replace('_s.','.');
				    }
				);
			}
			if($('#'+this.iid).length < 1){
				$("body").append('<div id="'+this.iid+'" class="jz-box" style="position:fixed;width:600px;height:450px;z-index:99999;"></div>');
				var str='<div class="jz-con" style="width:600px;height:450px;position:relative;">';
				str+='<div class="jz-clo ph" onclick="US.IMG.close()" style="position:absolute;right:10px;top:10px;width:30px;height:30px;line-height:30px;background:#222;color:#fff;font-weight:bold;text-align:center;font-size:22px;border-radius:50%;cursor:pointer;z-index:999992;filter:alpha(opacity=70);-moz-opacity:0.7;-khtml-opacity: 0.7;opacity: 0.7;">X</div>';
				for(var i=0;i < this.ind;i++){
					str+='<div class="jz-img ld" style="position:absolute;width:600px;height:450px;top:0px;left:0px;z-index:999990;cursor:pointer;"><img data-original="'+this.ims[i]+'" k="'+i+'" onclick="US.IMG.next()" /></div>';
				}
				str+='<div class="jz-pre" onclick="US.IMG.pre()" style="position:absolute;left:-50px;top:200px;width:40px;height:40px;line-height:40px;background:#333;color:#fff;font-weight:bold;text-align:center;font-size:22px;border-radius:50%;cursor:pointer;">&lt;</div><div class="jz-next" onclick="US.IMG.next()" style="position:absolute;right:-50px;top:200px;width:40px;height:40px;line-height:40px;background:#333;color:#fff;font-weight:bold;text-align:center;font-size:22px;border-radius:50%;cursor:pointer;">&gt;</div></div>';
				$('#'+this.iid).append(str);
				$(".jz-clo").bind("mouseover",function(){
					$(this).css("background","red");
					});
				$(".jz-clo").bind("mouseout",function(){
					$(this).css("background","#222");
					});
				$(".jz-pre").bind("mouseover",function(){
					$(this).css("background","red");
					});
				$(".jz-pre").bind("mouseout",function(){
					$(this).css("background","#333");
					});
				$(".jz-next").bind("mouseover",function(){
					$(this).css("background","red");
					});
				$(".jz-next").bind("mouseout",function(){
					$(this).css("background","#333");
					});
			}
			$('#'+this.iid).show();
			US.toZ(this.iid);
			this.si(url);
		},
		close:function(){
			$("#"+US.bgId).hide();
			$('#'+this.iid).hide();
		},
		pre:function(){
			var curk=parseInt($('#'+this.iid).find("img[cur='1']").attr('k'));
			var nk=curk-1;
			if(nk < 0){
				nk=this.ind-1;
			}
			var url=$('#'+this.iid).find("img[k='"+nk+"']").attr('data-original');
			this.si(url);
		},
		next:function(){
			var curk=parseInt($('#'+this.iid).find("img[cur='1']").attr('k'));
			var nk=curk+1;
			if(nk >= this.ind){
				nk=0;
			}
			var url=$('#'+this.iid).find("img[k='"+nk+"']").attr('data-original');
			this.si(url);
		},
		si:function(url){
			url=url.replace('_s.','.');
			$('#'+this.iid).find('img').each(
			    function(){
			    	if(url == $(this).attr('data-original')){
			    		$(this).attr('src',url);
			    		$(this).attr('cur',"1");
			    		$(this).parent().css({top:0,left:0});
			    		$(this).bind("load",function(){
			    			var h=$(this).height();
			    			var w=$(this).width();
			    			$('#'+US.IMG.iid).css({"height":h,"width":w});
			    			$(this).parent().css({"height":h,"width":w});
			    			$(".jz-con").css({"height":h,"width":w});
			    			US.toZ(US.IMG.iid);
			    			});
			    	}else{
			    		$(this).parent().css({top:-1000,left:-1000});
			    		$(this).attr('cur',"0");
			    	}
			    }
			);
		},
    },
    PL:{
    	psize:30,
    	bind:function(t){
    		$('#pl-btn').bind("click",function(){
    			if(!US.isLog){
    				US.loginBox(1);
    			}else{
    				var con=$('#pl-content').val();
    				var pf,tf=$('#pl-pingfen').val(),pf=tf?tf:0;
    				if(!con){
    					return true;
    				}
    				$.post('/ujob.php',{act:'pl',mid:_minfo.id,con:con,pf:pf},function(da){
    					$('#pl-mes').html(da.mes);
    					if(da.state=='ok'){
    						$('#pl-content').val('');
    					}
    					},'json');
    			}
    			});
    		$(".pl-input").bind("click",function(){
    			$('#pl-mes').html('����������Ҫ��˺������ʾ��');
    		});
    		$(".ppl-con").bind("click",function(){
    			$('#pl-mes').html('����������Ҫ��˺������ʾ��');
    		});
    		if(!t){
	    		this.listPf();
	    		this.page(1);
	    	}
    	},
    	listPf:function(){
    		$(".ipf").each(function(){
    			var pf=parseInt($(this).attr('f'));
    			if(pf > 1){
    				var w=parseInt(pf/100*55);
    				$(this).html('<div style="position:absolute;z-index:100;top:0px;left:0px;width:'+w+'px;height:11px;background: url(/style/img/st04.png) repeat-x;""></div>');
    			}
    			});
    		$(".actud").each(function(){
    			$(this).bind("click",function(){
    				var id=$(this).parent().attr('id');
    				var d=$(this).attr("class").indexOf('good') > -1 ? 1 : 0;
    				var obj=this,val=parseInt($(this).html())+1;
    				$.post('/ujob.php',{act:'plud',id:id,d:d},function(da){
    					$(obj).html(val);
    					},'json');
    				});
    			});
    	},
    	page:function(nowp,n){
    		var num = n ? n : _minfo.plnum,allPage;
    		if(num <= this.psize){
    			allPage=1;
    		}else if(num % this.psize > 0){
    			allPage=parseInt(num/this.psize)+1;
    		}else{
    			allPage=num/this.psize;
    		}
    		if(allPage <= 1){
    			return true;
    		}
    		
    		if($('#pl-list-box #pl-page').length < 1){
    			$('#pl-list-box').append('<div id="pl-page"></div>');
    		}
    		
    		var sp = nowp - 4,ep=nowp+4;
    		if(sp < 1){sp=1};
    		if(ep > allPage){ep=allPage;};
    		var str='';
    		if(nowp > 1){
    			str='<em onclick="US.PL.load('+(nowp-1)+')">��һҳ</em>';
    		}
    		for(var p=sp;p <= ep;p++){
    			str += p == nowp ? '<em class="cur">'+p+'</em>' : '<em onclick="US.PL.load('+p+')">'+p+'</em>';
    		}
    		if(nowp < allPage){
    			str+='<em onclick="US.PL.load('+(nowp+1)+')">��һҳ</em>';
    		}
    		$('#pl-page').html(str);
    	},
    	load:function(p){
    		$.post('/ujob.php',{act:'plist',mid:_minfo.id,p:p},function(da){
    			if(da.state == 'ok' && da.data.length > 0){
    				var str='';
    				for(var i in da.data){
    					str+='<div class="pl-item"><div class="pl-u"><span class="us">'+da.data[i].uname+'</span><span class="ipf" f="'+da.data[i].pf+'"></span><span class="sub">'+da.data[i].pt+'</span></div> <div class="pl-txt">'+da.data[i].con+'</div><div class="pl-d" id="'+da.data[i].id+'"><span class="no actud">'+da.data[i].down+'</span><span class="good actud">'+da.data[i].good+'</span></div></div>';
    				}
    				$(".pl-con").html(str);
    				US.PL.listPf();
    				US.PL.page(da.nowp,da.num);
    				location.href='#pl-list-box';
    			}
    			},'json');
    	},
    },
    PF:{
    	txt:function(f){
    		if(f <= 20 ){ return "�þ�"; }
    		if(f <= 40 ){ return "����"; }
    		if(f <= 60 ){ return "һ��"; }
    		if(f <= 80 ){ return "����"; }
    		if(f <= 100){ return "���"; }
    		if(f <= 1000){ return "��"; }
    	},
    	txtf:function(f){
    		var t=f.toString(),h,l;
    		if(t.indexOf('.') > -1){
    			t=t.split('.');
    			h=t[0];
    			l=t[1];
    		}else{
    			h=t;
    			l=0;
    		}
    		return '<b style="color:#FF6600;font-size:22px;">'+h+'</b><b style="color:#FF6600;font-size:16px;">.'+l+'</b>��';
    	},
	    init:function(opt){
	    	//inum=5;
	    	//id����ID
	    	//im��ɫ����
	    	//ig��ɫ����
	    	//iw��Ԫ��
	    	//lt��ߵ��ļ�
	    	//sf�Ƿ���ʾ����
	    	//ss�Ƿ���ʾ������Ӧ��˵��
	    	//sm�Ƿ���ʾ��������
	    	//ic�Ƿ��ǵ��ȷ������
	    	//ivҪ��������õ�������ID
	    	//��ӱ���
	    	var id='#'+opt.id,h=opt.iw,w=opt.iw*opt.inum;
	    	var mw=parseInt(_minfo.pf/10 * w);
	    	var va=_minfo.pf*10;
	    	var str ='<div class="f-ig" style="position:relative;width:'+w+'px;height:'+h+'px;background: url(/css/img/'+opt.ig+') repeat-x;">';
	    	    str+='<div class="f-im" style="position:absolute;z-index:100;top:0px;left:0px;width:'+mw+'px;height:'+h+'px;background: url(/css/img/'+opt.im+') repeat-x;"></div>';
	    	    str+='<div class="f-mv" style="position:absolute;z-index:200;top:0px;left:0px;width:'+w+'px;height:'+h+'px;cursor:pointer;" '+(opt.ic ? 'onclick="US.PF.clickSet(this)"' : 'onmousemove="US.PF.mvStart(this,event)" onclick="US.PF.clickPost(this)" onmouseout="US.PF.outReSet(this)"' )+'></div>';
	    	if(opt.lt){
	    		str+='<div class="f-lt" style="position:absolute;top:0px;z-index:100;height:'+h+'px;line-height:'+h+'px;padding:0 5px;">'+opt.lt+'</div>';
	    	}
	    	if(opt.sf){
	    		str+='<div class="f-sf" style="position:absolute;top:0px;right:-40px;z-index:100;line-height:'+h+'px;height:'+h+'px;text-align:center;color:#ccc;">'+this.txtf(_minfo.pf)+'</div>';
	    	}
	    	if(opt.ss){
	    		str+='<div class="f-ss" style="position:absolute;top:0px;right:-40px;z-index:100;line-height:'+h+'px;height:'+h+'px;color:green;text-align:center;">'+this.txt(va)+'</div>';
	    	}
	    	if(opt.sm){
	    		str+='<div class="f-sm" style="position:absolute;top:0px;right:-40px;z-index:100;line-height:'+h+'px;height:'+h+'px;color:#ccc;text-align:center;">('+_minfo.pnum+'��)</div>';
	    	}
	    	
	    	if(opt.iv){
	    		str+='<div class="f-iv"><input type="hidden" value="'+va+'" id="'+opt.iv+'" /></div>';
	    	}
	    	    str+='</div>';
	    	$(id).html(str);
	    	var ltw;
	    	if(opt.lt){
	    		ltw=$(id+' .f-lt').width();
	    		$(id+' .f-lt').css("left",0-ltw-5);
	    	}
	    	
	    	var sr=0;
	    	if(opt.sf){
	    		ltw=$(id+' .f-sf').width();
	    		sr-=ltw+20;
	    		$(id+' .f-sf').css("right",sr);
	    	}
	    	if(opt.ss){
	    		ltw=$(id+' .f-ss').width();
	    		sr-=ltw+10;
	    		$(id+' .f-ss').css("right",sr);
	    	}
	    	if(opt.sm){
	    		ltw=$(id+' .f-sm').width();
	    		sr-=ltw;
	    		$(id+' .f-sm').css("right",sr);
	    	}
	    },
	    mvStart:function(obj,ev){
	    	var ox=$(obj).offset().left;
	    	var ow=$(obj).width();
	    	var e=ev || (window.event || arguments.callee.caller.arguments[0]);
	    	var mx=e.clientX;
			var newW = mx-ox;
			var bfb=parseInt(newW/ow * 100);
			$(obj).parent().find(".f-im").css("width",newW);
			var ss=$(obj).parent().find(".f-ss");
			if(ss.length > 0){
				ss.html(this.txt(bfb));
			}
			var iv=$(obj).parent().find(".f-iv");
			if(iv.length > 0){
				$(obj).parent().find(".f-iv").find('input').eq(0).val(bfb);
			}
			var sf=$(obj).parent().find(".f-sf");
			if(sf.length > 0){
				bfb=parseFloat(bfb/10);
				sf.html(this.txtf(bfb));
			}
	    },
	    clickSet:function(obj){
	    	this.mvStart(obj,window.event || arguments.callee.caller.arguments[0]);
	    },
	    outReSet:function(obj){
	    	$(obj).parent().find('.f-sf').html(this.txtf(_minfo.pf));
	    	$(obj).parent().find('.f-ss').html(this.txt(_minfo.pf*10));
	    	var iw=parseInt($(obj).parent().width() * _minfo.pf / 10);
	    	$(obj).parent().find('.f-im').css("width",iw);
	    },
	    clickPost:function(obj){
	    	var f=$('#pl-pingfen-main').val();
	    	$.post('/ujob.php',{act:'pf',mid:_minfo.id,f:f},function(da){
				if(da.state=='ok'){
					alert('��л���Ĳ��룡');
				}
				},'json');
	    },
	},
	ZJ:function(){
		var isrc,mi,iw,ih,bf,bw=[245,490,735,980],mP=10,MaxW=980,mItem=245;
		//MaxTop���TOP
		//MaxLeft���LEFT
		//mItem��Ԫ�ı�׼���
		//mP�ǵ�Ԫ���
		//MaxH��ǰ���ĸ߶�
		//lW��ǰ��ʣ��Ŀ��
		//lH��ǰ�еĸ߶�
		//top left rx ry
		var listInfo=[];
		var lineInfo=[];
		var lineNum=0;
		function toList(obj){
			//����ͼƬ�������ʾDIV
			isrc=$(obj).find("img").attr("data-original");
			mi=isrc.match(/(\d+)x(\d+)x(\d+)/);
			if(mi){
				iw=parseInt(mi[2]);
				ih=parseInt(mi[3]);
			}
			//��ʼ����Ԫ�ؿ��
			for(var i=0,u=0,b=0,n;i < bw.length;i++){
				u = Math.abs(1 - iw / bw[i]);
				if( b == 0 || u < b ){
					b = u;
					n = i;
				}
			}
			var w=bw[n];
			var kk={w:w,id:$(obj).attr('id'),s:0,b:iw/ih};
			listInfo.push(kk);
		}
		function getLineStart(w){
			var ind=-1,nw=0;
			for(var i in listInfo){
				if(listInfo[i].s == 0 && listInfo[i].w <= w){
					if(w == MaxW){
						return i;
					}
					
					if( listInfo[i].w > nw){
						ind=i;
						nw=listInfo[i].w;
					}
				}
			}
			
			return ind;
		}
		function toLine(){
			var lsk,lastW=MaxW,o;
			lineInfo[lineNum]=[];
			while(true){
				lsk=getLineStart(lastW);
				if(lsk < 0){
					break;
				}
				o={};
				o.id=listInfo[lsk].id;
				o.w=listInfo[lsk].w;
				o.b=listInfo[lsk].b;
				o.l=MaxW - lastW;
				lineInfo[lineNum].push(o);
				listInfo[lsk].s = 1;
				lastW -= o.w;
				if(lastW <= 0){
					break;
				}
			}
			
			lineNum++;
			if(getLineStart(1000) < 0){
				return false;
			}else{
				toLine();
			}
		}
		
		function showLine(){
			var len=lineInfo.length;
			var nowTop=0;
			var lineTop=0;
			var sid;
			var tw;
			var imw,imh;
			for(var i=0;i < len;i++){
				lineTop = 0;
				for( var q in lineInfo[i] ){
					sid = '#'+lineInfo[i][q].id;
					tw=lineInfo[i][q].w;
					if(lineInfo[i][q].w + lineInfo[i][q].l <= MaxW){
						tw -= mP;
					}
					$(sid).css("width",tw);
					$(sid).css("left",lineInfo[i][q].l);
					$(sid).css("top",nowTop);
					//ͼƬ�߶�
					imw = $(sid + ' .meiju-img').width();
					imh = (imw-20)/lineInfo[i][q].b;
					$(sid + ' .meiju-img').css("height",imh);
					$(sid + ' .meiju-img img').css("width",imw);
					var ih=$(sid).height();
					if(ih > lineTop){
						lineTop = ih;
					}
				}
				
				for( var q in lineInfo[i] ){
					sid = '#'+lineInfo[i][q].id;
					$(sid).css("height",lineTop);
					//���ĸ߶�
					var dh = lineTop - 30 - $(sid + ' .meiju-img').height();
					$(sid + ' .meiju-dec').css("max-height",dh);
				}
				
				nowTop+=lineTop + mP;
			}
			
			$(".meiju-bg").css("height",nowTop);
		}
		$(".meiju-item").each(function(){
			toList(this);
		});
		toLine();
		showLine();
		
	},
	trim:function(str){
		return str.replace(/(^\s+)|(\s+$)/g,'');
	},
	ser:function(){
		var kw=this.trim($("#serKw").val());
		if(kw){
			location.href='/search/1/'+encodeURIComponent(kw);
		}
	},
	serGo:function(e){
		var keyCode = 0;
		var e = e || window.event;
		keyCode = e.keyCode || e.which || e.charCode; 
		if(keyCode == 13){
			var kw=this.trim($("#serKw").val());
			if(kw.length > 0){
				location.href='/search/1/'+encodeURIComponent(kw)+'/';
			}
		}
	},
	RC:{
		read:false,
		cd:function(){
			if(("playData" in window) && ("_minfo" in window)){
				$(document).ready(function(){
					$("body").append('<img src="/ujob.php?act=recp&mid='+_minfo.id+'&vid='+playData.Vid+'" width="0" height="0" />');
					});
			}
		},
		cr:function(){
			if(US.RC.read){
				$('#List_top_0').show();
			}else{
				US.RC.read=true;
				$('#List_top_0').show();
				$('#playhistory').html('<div style="text-align:center;padding:10px;"><img src="/css/img/loading2.gif" /><br>���ڻ�ȡ����...</div>');
				$.get('/ujob.php',{act:'grec'},function(da){
					if(da.state == 'ok'){
						for(var i=0,j=da.data.length,str='';i < j;i++){
							str+='<li><a target="_blank" class="name" href="/play/'+da.data[i].mid+'-'+da.data[i].lastpid+'-0.html" title="'+da.data[i].mname+da.data[i].title+'">'+da.data[i].mname+da.data[i].title+' </a><a target="_blank" class="now" href="/play/'+da.data[i].mid+'-'+da.data[i].lastpid+'-0.html" title="'+da.data[i].mname+da.data[i].title+'">�����ۿ�</a></li>';
						}
						$('#playhistory').html(str);
					}else{
						$('#playhistory').html('<div style="text-align:center;padding:10px;width:200px;">��ʱû�м�¼���Ͻ�ȥ�����ɣ�</div>');
					}
					},'json');
				}
		},
		cl:function(){
			$('#List_top_0').hide();
		},
		et:function(){
			if(!confirm('��ռ�¼�޷��ָ���ȷ����')){
				return true;
			}
			
			$.get('/ujob.php',{act:'erec'},function(da){
				$('#his-box').empty();
				$('#his-box').hide();
				},'json');
		},
		dr:function(obj,mid){
			$(obj).parent().remove();
			$.get('/ujob.php',{act:'drec',mid:mid},function(da){},'json');
		},
	},
	LY:{
		def:'��������',
		ps:10,
		send:function(obj){
			var un=US.trim($(obj).parent().parent().find("input").val());
			var uc=US.trim($(obj).parent().parent().find("textarea").val());
			if(!un){
				un = US.LY.def;
			}
			if(!uc){
				alert('���������ݣ�');
				return true;
			}
			
			$.post('/ujob.php',{act:'ly',un:un,uc:uc},function(da){
				alert(da.mes);
			},'json');
		},
		cl:function(obj){
			if(US.LY.def == US.trim($(obj).val())){
				$(obj).val('');
			}
		},
		ld:function(p){
			$.post('/ujob.php',{act:'lylist',p:p},function(da){
				if(da.anum > 0){
					var ind = da.anum - (da.np - 1) * US.LY.ps;
					for(var i=0,l=da.data.length,str='';i < l;i++){
						
						str+='<div class="lyitem">';
						str+='<div class="lynum"><span>'+(ind--)+'</span>������</div>';
						str+='<div class="lybd"><div class="lysml"></div>';
						str+='<div class="lytit">'+da.data[i].uname+'<span>������ '+da.data[i].pt+'</div>';
						str+='<div class="lycon">'+da.data[i].con+'</div>';
						if(da.data[i].rep) {str+='<div class="lyrep">'+da.data[i].rep+'<div class="lysmt"></div></div>';}
						str+='</div>';
						str+='</div>';
					}
					$("#ui-liuyan-box").html(str);
					str = '<div class="lypage"><span>��' + da.ap + 'ҳ</span>';
					if (da.ap > 1) {
						var sp = da.np - 4,
							ep = da.np + 4;
						if (sp < 1) {
							sp = 1;
						}
						if (ep > da.ap) {
							ep = da.ap;
						}
						if (da.np > 1) {
							str += '<span onclick="US.LY.ld(1)">��ҳ</span>';
							str += '<span onclick="US.LY.ld(' + (da.np - 1) + ')">��һҳ</span>';
						}
						for (var i = sp; i <= ep; i++) {
							if (i == da.np) {
								str += '<span class="cur">' + i + '</span>';
							} else {
								str += '<span onclick="US.LY.ld(' + i + ')">' + i + '</span>';
							}
						}
						if (da.np < da.ap) {
							str += '<span onclick="US.LY.ld(' + (da.np + 1) + ')">��һҳ</span>';
							str += '<span onclick="US.LY.ld(' + da.ap + ')">βҳ</span>';
						}
					}
					str+='</div>';
					$("#ui-liuyan-box").append(str);
					location.href='#ui-liuyan-box';
				}
			},'json');
		},
	},
};

(function(){
	US.init();
	$(".hotPlay").length > 0 ? hotPD.init() : "";
	$(".tab-sel").length > 0 ? selMinTab() : "";
	("DL" in window) ? DL.init() : "";
	$('#main-pfbox').length > 0 ? US.PF.init({inum:5,id:'main-pfbox',im:'bst2.gif',ig:'bst1.gif',iw:27,sf:1,ss:1,sm:1,ic:0,iv:'pl-pingfen-main'}) : "";
	$('#pl-star').length > 0 ? US.PF.init({inum:5,id:'pl-star',im:'st02.png',ig:'st01.png',iw:16,lt:'���֣�',sf:0,ss:1,ic:1,iv:'pl-pingfen'}) : "";
	$('#pl-btn').length > 0 ? US.PL.bind() : "";
	("playData" in window) ? (PP.init(),PP.play()) : "";
	$(".meiju-bg").length > 0 ? US.ZJ() : "";
	$("#ui-liuyan-box").length > 0 ? US.LY.ld(1) : "";
	$("img").lazyload({effect: "fadeIn"});
	})();