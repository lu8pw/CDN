(function(){

	  /**
	*news tab hover start 
	**/
	jQuery(".news-tabs li").eq(0).addClass('news-tabs-hover');
	jQuery(".news-tips").eq(0).show();
	jQuery(".news-tabs li").hover(function(){
		jQuery(".news-tips").hide();
    	jQuery(".news-tips").eq(jQuery(this).index()).show();
		jQuery(".news-tabs li").removeClass('news-tabs-hover')
    	jQuery(this).addClass('news-tabs-hover');
	},function(){
		jQuery(".news-tips").hide();
		jQuery(".news-tips").eq(jQuery(this).index()).show();
	});
	
	
	/**shade height start
	*/
	var shade = function(){
		var h = jQuery(".wrap").height();
		jQuery(".shade").height(h);
		jQuery(".shadegift").height(h);
	}
	shade(); 
	/*
	*shade height end
	**/
	


	/**
	*walkthrough tab hover start
	**/
	jQuery(".walkthrough-tabs .news-tabs li").eq(0).addClass('walkthrough-tabs-hover');
	jQuery(".walkthrough-tabs .news-tips").eq(0).show();
	jQuery(".walkthrough-tabs .news-tabs li").hover(function(){
		jQuery(".walkthrough-tabs .news-tips").hide();
    	jQuery(".walkthrough-tabs .news-tips").eq(jQuery(this).index()).show();
		jQuery(".walkthrough-tabs .news-tabs li").removeClass('walkthrough-tabs-hover')
    	jQuery(this).addClass('walkthrough-tabs-hover');
	},function(){
		jQuery(".walkthrough-tabs .news-tips").hide();
		jQuery(".walkthrough-tabs .news-tips").eq(jQuery(this).index()).show();
	});
	/**
	*walkthrough tab hover end
	**/


	
	/**
	*photo&video start
	**/
	var naviconbg1 ="url('template/ubike_longs/style/img/photo-icon-normal.png')";
	var naviconbg2 ="url('template/ubike_longs/style/img/photo-icon-hover.png')";

	jQuery('.wallpaper').eq(0).show()
	jQuery('.photo-video-nav ul li').eq(0).find('span').css('background-image',naviconbg2);
	jQuery('.photo-video-nav ul li').eq(0).css({backgroundImage:"url('template/ubike_longs/style/img/photo-nav-hover.jpg')",color:'#000'});
	jQuery('.photo-video-nav ul li').click(function(){
		var index = jQuery(this).index()
		jQuery('.wallpaper').fadeOut()
		jQuery('.wallpaper').eq(index).fadeIn()
		jQuery('.photo-video-nav ul li').css({backgroundImage:"",color:'#9ba5af'})
		jQuery(this).css({backgroundImage:"url('template/ubike_longs/style/img/photo-nav-hover.jpg')",color:'#000'})
		jQuery('.photo-video-nav ul li span').css('background-image',naviconbg1);
		jQuery(this).find('span').css('background-image',naviconbg2);

	});
	jQuery('.photo-video-nav ul li').hover(function() {
		var index = jQuery(this).index()
		jQuery('.wallpaper').fadeOut()
		jQuery('.wallpaper').eq(index).fadeIn()
		jQuery('.photo-video-nav ul li').css({backgroundImage:"",color:'#9ba5af'})
		jQuery(this).css({backgroundImage:"url('template/ubike_longs/style/img/photo-nav-hover.jpg')",color:'#000'})
		jQuery(this).children('p').css("border-bottom","none");
		jQuery('.photo-video-nav ul li span').css('background-image',naviconbg1);
		jQuery(this).find('span').css('background-image',naviconbg2);
	}, function() {
		jQuery('.photo-video-nav ul li').children('p').css({
			"border-bottom":"1px",
			"border-bottom-color":"rgba(155, 165, 175,0.4)",
			"border-bottom-style": "solid"
		});
	});
	/**
	*photo&video end
	**/

	/**
	*footer_lunbo start
	**/

	function footer_lunbo(){
		function moveleft(){
	     jQuery('.scroll').animate({left:-161},200,function(){
	         var first=jQuery('.scroll ul li:first-child');
	         var last=jQuery('.scroll ul li:last-child');
	         first.insertAfter(last);
	         jQuery('.scroll').css('left',0);
	     });
	    }
	    function moveright(){
	       var first=jQuery('.scroll ul li:first-child');
	         var last=jQuery('.scroll ul li:last-child');
	         jQuery('.scroll').animate({left:-161},0,function(){
	       last.insertBefore(first);
	       jQuery('.scroll').animate({left:0},200);
	         });
	     };
	    jQuery(".scroll").hover(function(){
	      clearInterval(t);
	    },function(){
	      t=setInterval(moveleft,2000);
	    });
	    jQuery(".rightbtn").hover(function(){
	       clearInterval(t);
	      jQuery(this).css("backgroundColor","#999");
	    },function(){
	       t=setInterval(moveleft,2000);
	        jQuery(this).css({"backgroundColor":"#e7e7e7"});
	    })
	    jQuery(".leftbtn").hover(function(){
	       clearInterval(t);
	      jQuery(this).css("backgroundColor","#999");
	    },function(){
	        t=setInterval(moveleft,2000);
	        jQuery(this).css({"backgroundColor":"#e7e7e7"});
	    })
	    jQuery(".leftbtn").click(function(){
	        moveright();
	    })
	    jQuery(".rightbtn").click(function(){
	        moveleft();
	    })
	    var t=setInterval(moveleft,2000);
    }
    footer_lunbo();





})()
