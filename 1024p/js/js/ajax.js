// JavaScript Document
    var Class="0";   
    var Lang="0";   
	var Letter="0";
	var year="0";
	var page=2;
    var badge=8;
     var refresh_open = true;
		$("#next_related").click(function(){
	     if(refresh_open){
             refresh_open = false;
             $("botton[id='loading_icon']").css("display","");
             $("#next_related").css("display","none");
			var Ajax_url=maccms.path +"/index.php/vod/ajax_show/page/"+page+"/id/"+Type+".html"
             $.ajax({url: Ajax_url,success:function(result){
                   $("botton[id='loading_icon']").css("display","none");
                   $("#next_related").css("display","");          
                    if(result !=0){
                       $("#related_list").append(result);
						 page +=1;
					     
						$(".badge").text(badge +=8)
                       $("img").lazyload({effect: "fadeIn",threshold: 200});	
                   setTimeout(function(){
                       refresh_open = true;
                   },2000);
                  }else{
                    $("#next_related").html("无更多内容！");
                    $("#next_related").attr("disabled","");
                }; 
           }});
         };
		
     });
 