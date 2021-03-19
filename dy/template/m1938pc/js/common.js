
//设为首页
function SetHome(url){
if (document.all) {
  document.body.style.behavior='url(#default#homepage)';
  document.body.setHomePage(url);
}else{
window.open("/other/sethelp/","_blank");
}}
//加入收藏
function AddFavorite(sURL, sTitle) {
sURL = encodeURI(sURL); 
try{   
   window.external.addFavorite(sURL, sTitle);   
 }catch(e) {   
 try{   
	 window.sidebar.addPanel(sTitle, sURL, "");   
   }catch (e) {   
	alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
 } 
}
}
//推送百度
/*(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();*/
//推送360
/*(function(){
var src = (document.location.protocol == "http:") ? "http://js.passport.qihucdn.com/11.0.1.js?cc3acc7bf90a0846e79978a472d96876":"https://jspassport.ssl.qhimg.com/11.0.1.js?cc3acc7bf90a0846e79978a472d96876";
document.write('<script src="' + src + '" id="sozz"><\/script>');
})();*/

$(document).ready(function(){
//历史记录
// drop-down
if($(".history")){
    $(".history").hover(function(){
        $(this).find(".drop-box").show();
    },function(){
        $(this).find(".drop-box").hide();
    });
}
if($(".menu .tmore")){
    $(".menu .tmore").hover(function(){
        $(this).find(".topmore").show();
    },function(){
        $(this).find(".topmore").hide();
    });
}
// close-his
if($(".closehis")){
    $(".closehis").click(function(){
        $(this).parents(".drop-box").hide();
    });
}
if($(".zk a")){
   $(".zk a").toggle(function(){
    $("#player").css("width","448");
    $("#playlist").css("display","block");},
    function(){
    $("#player").css("width","650");
    $("#playlist").css("display","none");}
  );
}
//$(".zk a").click(function(){$("#playlist").toggle();$(".player").addClass('');})
});

function closeWin(){
	document.body.removeChild($("bg"));
	document.body.removeChild($("msg"));
	if($("searchtype"))$("searchtype").style.display="";
}
function openWindow(zindex,width,height,alpha){
	var iWidth = document.documentElement.scrollWidth;
	var iHeight = document.documentElement.clientHeight;
	var bgDiv = document.createElement("div");
	bgDiv.id="bg";
	bgDiv.style.cssText = "top:0;width:"+iWidth+"px;height:"+document.documentElement.scrollHeight+"px;filter:Alpha(Opacity="+alpha+");opacity:0.3;z-index:"+zindex+";";
	document.body.appendChild(bgDiv);
	var msgDiv=document.createElement("div");
	msgDiv.id="msg";
	msgDiv.style.cssText ="z-index:"+(zindex+1)+";width:"+width+"px; height:"+(parseInt(height)-0+29+16)+"px;left:"+((iWidth-width-2)/2)+"px;top:"+(getScroll()+(height=="auto"?150:(iHeight>(parseInt(height)+29+2+16+30)?(iHeight-height-2-29-16-30)/2:0)))+"px";
	msgDiv.innerHTML="<div class='msgtitle'><div id='msgtitle'></div><img onclick='closeWin()' src='/"+sitePath+"pic/btn_close.gif' /></div><div id='msgbody' style='height:"+height+"px'></div>";
	document.body.appendChild(msgDiv);
}
function openWindow2(zindex,width,height,alpha){
	var iWidth = document.documentElement.scrollWidth;
	var bgDiv = document.createElement("div");
	bgDiv.id="bg";
	bgDiv.style.cssText = "top:0;width:"+iWidth+"px;height:"+document.documentElement.scrollHeight+"px;filter:Alpha(Opacity="+alpha+");opacity:0.3;z-index:"+zindex+";";
	document.body.appendChild(bgDiv);
	var msgDiv=document.createElement("div");
	msgDiv.id="msg";
	msgDiv.style.cssText ="position: absolute;z-index:"+(zindex+1)+";width:"+width+"px; height:"+(height=="auto"?height:(height+"px"))+";";
	document.body.appendChild(msgDiv);
}
function selectTogg(){
	var selects=document.getElementsByTagName("select");
	for(var i=0;i<selects.length;i++){
		selects[i].style.display=(selects[i].style.display=="none"?"":"none");
	}
}
function checkInput(str,type){
	switch(type){
		case "mail":
			if(!/^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/gi.test(str)){alert('邮箱填写错误');return false;}
			break;
		case "num" :
			if(isNaN(str)){alert('QQ填写错误');return false;}
			break;
	}
	return true;
}
function copyToClipboard(txt) {
	if(window.clipboardData){
		window.clipboardData.clearData();
		window.clipboardData.setData("Text", txt);
		alert('复制成功！')
	}else{
		alert('请手动复制！')
	}
}
function getUrlArgs()
{
 return  location.pathname;
}
function setCookie(name, value, ihour) {
	var iH = ihour || 1;
	var exp = new Date;
	exp.setTime(exp.getTime() + iH * 60 * 60 * 1000);
	document.cookie = name + ("=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/;");
}
function getCookie(name) {
	var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	if (arr != null) {
		return unescape(arr[2]);
	}
	return null;
}


//--xiu--
function KFSetCookies(name,value)//两个参数，一个是cookie的名子，一个是值
{
    var Days = 30; //此 cookie 将被保存 30 天
    var exp  = new Date();    //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+";path=/;";
}
function KFgetCookie(name)//取cookies函数
{
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
     if(arr != null) return unescape(arr[2]); return null;
}
function KFdelCookie(name)//删除cookie
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString()+";path=/;";
}
function KFSetCookie(name,value)//两个参数，一个是cookie的名子，一个是值
{
	var mhistory = KFgetCookie(name);//获取观看记录
	if(mhistory == null){
		value = value + "||";
		KFSetCookies(name,value);
	}else{
		var mcarray = mhistory.split("||");
		var scookie = value.split("__");
		var fc = false;
		var kfij = 0;
		for(var i=0; i<(mcarray.length); i++){
			var tcookie = mcarray[i].split("_");
			if(scookie[0]==tcookie[0]) {
				fc = false;
				continue;
			}else{
				fc = true;
			}
			if(fc){
				if(value.charAt(value.length-2)!="||"){
					value = value + "||";
				}
				value = value + mcarray[i] ;
			}
			kfij = kfij + 1;
			if(kfij>10) break;
		}
		KFSetCookies(name,value);
	}
}
function ingetCookie(){
	var history_html = KFgetCookie("m");
	if( history_html==null){
	    if(document.getElementById("histroydrop_con")) document.getElementById("histroydrop_con").innerHTML = "<div id=\"morelog\" class=\"histodo\">您的观看历史为空。<\/div>";
	    if(document.getElementById("playhistory")) document.getElementById("playhistory").innerHTML = "<div id=\"morelog\" class=\"histodo\">您的观看历史为空。<\/div>";
	}else{
		var sarray = history_html.split("||");
		var tarray = "";
		for(var kfi=0; kfi<(sarray.length-1); kfi++){
			var carray = sarray[kfi].split("__");
			if(carray[0]){
				tarray = tarray + "<li><h5><a href=\""+carray[2]+"\">"+carray[1]+"</a><em>/</em><a href=\""+carray[2]+"\">"+carray[3]+"</a></h5><label><a href=\""+carray[2]+"\" class=\"color\">继续观看<\/a></label><a class=\"delck\" href=\"javascript:;\" onclick=\"playClose('"+carray[0]+"')\">删除</a></dd>";
			}
		}
		if(tarray.length<1){
			if(document.getElementById("histroydrop_con")) document.getElementById("histroydrop_con").innerHTML = "<div id=\"morelog\" class=\"histodo\">您的观看历史为空。<\/div>";
			if(document.getElementById("playhistory")) document.getElementById("playhistory").innerHTML = "<div id=\"morelog\" class=\"histodo\">您的观看历史为空。<\/div>";
		}else{
			if(document.getElementById("histroydrop_con")) document.getElementById("histroydrop_con").innerHTML = "<ul id=\"playhistory\" class=\"highlight\">"+tarray+"</ul>";
			if(document.getElementById("playhistory")) document.getElementById("playhistory").innerHTML = "<ul id=\"playhistory\" class=\"highlight\">"+tarray+"</ul>";
		}
	}
};
function playClose(id){
	var mhistory = KFgetCookie("m");//获取观看记录
	var mcarray = mhistory.split("||");
	var value = "";
	var fc = false;
	for(var i=0; i<(mcarray.length); i++){
	  var tcookie = mcarray[i].split("__");
	  if(tcookie[0]==id){
		 continue;
	  }
	value = value + mcarray[i] + "||" ;
  }
  KFdelCookie("m");
  KFSetCookies("m",value);
  ingetCookie();
}
function setEmpty(){
	KFdelCookie("m");
	ingetCookie();
}
function hideTop(){
	document.getElementById("List_top_2").style.display = "none";
}
function showTop(){
	document.getElementById("List_top_2").style.display = "block";
}
//
function chkform(){
		var key;
		key = document.getElementById("searchword").value
		if(key=='请输入您要搜索的电影/电视剧'||key==''){
			alert('请输入您要搜索的电影/电视剧');
			return false;
		}else{
			var selbox;
			selbox=parseInt(document.all.ccc.value);
			if(selbox==1){
				location.href="http://s.2tu.cc/cse/search?s=17117391699962109332&q="+key;
				return false;
			}else{
				return true;
			}
		}
	}
var Base64 = {
	encodeURI : function (input) { return input; }
}
//顶部搜索
function initHead() {
		if(jQuery("#x1")){
			jQuery("#x1").mouseover(function() {
				jQuery("#x2").css("display", "block");
				jQuery("#x1").addClass("sa_hover");
			});
			jQuery("#x1").mouseout(function() {
				jQuery("#x2").css("display", "none");
				jQuery("#x1").removeClass("sa_hover");
			});
			jQuery("#s1").click(function() {
				selSubSearch(1);
				jQuery("#q").focus()
			});
			jQuery("#s2").click(function() {
				selSubSearch(2);
				jQuery("#q").focus()
			});
		}
    };
    function selSubSearch(iType) {
        hbb = [];
        hbb = {
            1: ["百度", "1"],
            2: ["本站", "2"]
        };
        jQuery("#s0").html( hbb[iType][0] );
        jQuery("#x2").css("display", "none");
        jQuery("#typeid").val(hbb[iType][1]);
    };
function bottomForm() {
    var all_var = document.getElementById("typeid").value;
    var q = document.getElementById("q").value;
    switch (all_var) {
        case "1":
        document.formsearch.action = 'http://s.2tu.cc/cse/search?s=17117391699962109332&q=' + q
        break;
        case "2":
        document.formsearch.action = '/search.asp';
        break;
        default:
        var Sys = {};
        var ua = navigator.userAgent.toLowerCase();
        var s;
        (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
        (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
        (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
        (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
        (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
        // if (Sys.ie) {q=encodeURIComponent(q);}//ff
        document.formsearch.action = 'http://www.url.com/e/sch/?keyboard=' + q;
        break;
    }
    document.formsearch.submit();
    return false;
}
jQuery(document).ready(function(){
	initHead();
//历史记录
// drop-down
	jQuery(".history").hover(function(){
		jQuery(this).find(".drop-box").show();
	},function(){
		jQuery(this).find(".drop-box").hide();
	});
// close-his
jQuery(".closehis").click(function(){
		jQuery(this).parents(".drop-box").hide();
});
 jQuery(".zk a").toggle(function(){
    jQuery("#player").css("width","688");
	jQuery("#cciframe").css("width","688");
	jQuery("#playlist").css("display","block");},
    function(){
    jQuery("#player").css("width","890");
	jQuery("#cciframe").css("width","890");
	jQuery("#playlist").css("display","none");}
  );
//分享到
jQuery(".share").hover(function(){
		 jQuery(".share .fxd").addClass("fxdon");
		jQuery(this).find(".bshare").show();
},function(){
	 jQuery(".share .fxd").removeClass("fxdon");
		jQuery(this).find(".bshare").hide();
});
//网盘
/*jQuery(".skydrive").hover(function(){
		jQuery(this).find("ul").show();
},function(){
		jQuery(this).find("ul").hide();
});*/
});
jQuery(document).ready(function(){
	jQuery(".menu .tmore").hover(function(){
		jQuery(this).find(".topmore").show();
	},function(){
		jQuery(this).find(".topmore").hide();
	});
	jQuery(function () {jQuery(window).scroll(function(){if (jQuery(window).scrollTop()>100){jQuery("#gotop").fadeIn(300);}else{jQuery("#gotop").fadeOut(300);}});});
	jQuery('.gtop').click(function(){
        jQuery('body,html').animate({scrollTop: '0px'}, 500);
	});
});
