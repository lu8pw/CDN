function sidefixed(){
    var fixedbox = $(".side-hot"),st;
    var sidew=$(".side-width").width(); 
    if($('div').hasClass('side-width')){
        var fixedlocation = $(".home-news").offset().top;
        var mainlocation = $(".home-news-location").offset().top;
    }
    $(window).scroll(function () {
        st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
        if($(".home-tab").height() > $(".side-box").height()){
            if(st > fixedlocation){
                fixedbox.addClass("fixedbox-on");
                fixedbox.css({"width":sidew});
            }
            if(st < (fixedlocation)){
                fixedbox.removeClass("fixedbox-on");
                fixedbox.css({"width":"100%"});
            } 
            if(st > (mainlocation - fixedbox.height())){
                fixedbox.removeClass("fixedbox-on");
                fixedbox.addClass("fixedbox-off");
            }else{
                fixedbox.removeClass("fixedbox-off");
            }
        }
    });
}

function pcnav() {
    $(".nav>ul>li").hover(function() {
        if($(this).find("li").length > 0){
            $(this).children("ul").stop(true, true).slideDown();
            $(this).addClass("hover");
        }
    },function() {
        $(this).children("ul").stop(true, true).slideUp();
        $(this).removeClass("hover");
    });
}

function wapnav() {
    $(".nav>ul>li").each(function(){ 
        if($(this).find("li").length > 0){
            $(this).append("<i class='iconfont icon-xiangxia2 icon-guanbi1'></i>");
        }
        var _this = this
        $(this).find("i").click(function() {
            $(_this).find("i").toggleClass("icon-xiangxia2");
            $(_this).find("ul").slideToggle();
        });
    });
}

function onoff(onbtn,oncon,oni,onii) {
    $(onbtn).on("click", function(e){
        $(oni).toggleClass(onii);
        $(oncon).stop(true, true).slideToggle();
        $(document).one("click", function(){
            $(oncon).stop(true, true).slideUp();
            $(oni).toggleClass(onii);
        });
        e.stopPropagation();
    });
    $(oncon).on("click", function(e){
        e.stopPropagation();
    });
}


$(function(){
    var winr=$(window); 
    var surl = location.href;
    var surl2 = $(".place a:eq(1)").attr("href");
    
    $(".nav li a").each(function() {
        if ($(this).attr("href")==surl || $(this).attr("href")==surl2) $(this).parent().addClass("on");
    });
    
    if( winr.width() >=1198){
        pcnav();sidefixed();
    }else{
        wapnav();
    } 
    $(window).resize(function(){
        if( winr.width() >=1198){
            pcnav();sidefixed()
        }else{
            wapnav();
        }
    });
    
    onoff(".search-on",".search-box,.search-box1",".search-on i","fa-times");
    onoff(".search-on1",".search-box,.search-box1",".search-on1 i","fa-times");
    onoff(".nav-on",".nav",".nav-on i","fa-bars");
    $(".nav-on").click(function() {
        $(".header").toggleClass("suctiontop");
    });
    
    $(".search-txt span").each(function(){ 
        var _this = this
        $(this).click(function() {
            $(_this).addClass("on");
            $(_this).siblings().removeClass("on");
        });
    });
    $(".search-submit").click(function(){
        var swd = $("#search-keyword").val();
        var surl = $(".search-txt span.on").attr("data-url");
        if(swd != ""){
            window.open(surl+swd);
        }else{
            $("#search-keyword").focus();
        }
    });
    
    $(".gotop").click(function(){
        $('body,html').animate({scrollTop:0},1000);
    });
    
    var bodystyle = $("body").attr("data-style");
    if (bodystyle == 'timeon' || bodystyle == 'timeoff'){}else{
        $("body").on("click", ".style-on", function () {
            $('body').toggleClass("tx-night");
            $(this).find("i").toggleClass("fa-moon-o");
            if($(this).html() == "关灯"){$(this).html("开灯");}else{$(this).html("关灯");}
            if(zbp.cookie.get("bgstyle") == null || zbp.cookie.get("bgstyle") == 'off'){
                zbp.cookie.set("bgstyle", "on" , 365);
            }else if(zbp.cookie.get("bgstyle") == 'on'){
                zbp.cookie.set("bgstyle", "off" , 365);
            }else{
                zbp.cookie.set("bgstyle", "on" , 365);
            }
        });
        if($("body").hasClass("tx-night")){
            zbp.cookie.set("bgstyle", "on" , 365);
            $(".style-on").html("开灯");
        }
        if (zbp.cookie.get("bgstyle") !== null){
            if (zbp.cookie.get("bgstyle") == "on") {
                $('body').addClass("tx-night");
                $(".style-on").find("i").removeClass("fa-moon-o");
                $(".style-on").html("开灯");
            }else if(zbp.cookie.get("bgstyle") == 'off'){
                $('body').removeClass("tx-night");
            }
        }else{
            zbp.cookie.set("bgstyle", "off" , 365);
        }
    }
});

function tabs(tabTit,on,tabCon){
    $(tabTit).children().click(function(){
        $(this).addClass(on).siblings().removeClass(on);
        var index = $(tabTit).children().index(this);
        $(tabCon).children().eq(index).show().siblings().hide();
    });
}
tabs(".tab-hd","active",".tab-bd");


zbp.plugin.unbind("comment.reply.start", "system-default");
zbp.plugin.on("comment.reply.start", "tx_hao", function(id) {
    var i = id;
    $("#inpRevID").val(i);
    var frm = $('#divCommentPost'),
        cancel = $("#cancel-reply");

    frm.before($("<div id='temp-frm' style='display:none'>")).addClass("reply-frm");
    $('#AjaxComment' + i).before(frm);

    cancel.show().click(function() {
        var temp = $('#temp-frm');
        $("#inpRevID").val(0);
        if (!temp.length || !frm.length) return;
        temp.before(frm);
        temp.remove();
        $(this).hide();
        frm.removeClass("reply-frm");
        return false;
    });
    try {
        $('#txaArticle').focus();
    } catch (e) {}
    return false;
});

zbp.plugin.on("comment.get", "tx_hao", function (logid, page) {
    $('span.commentspage').html("提交中...");
});
zbp.plugin.on("comment.got", "tx_hao", function (logid, page) {
    $("#cancel-reply").click();
});
zbp.plugin.on("comment.post.success", "tx_hao", function () {
    $("#cancel-reply").click();
});
if(window.console && window.console.log){
    console.log('\n %c \u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0074\u0078\u0063\u0073\u0074\u0078\u002e\u0063\u006e\u002f  %c \u5929\u5174\u5de5\u4f5c\u5ba4\u4f5c\u54c1 \n', 'color: #fadfa3; background: #030307; padding:3px 0;', 'background: #fadfa3; padding:3px 0;');
}