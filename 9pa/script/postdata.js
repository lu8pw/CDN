function checkPost(){
	$.post(bloghost+'zb_users/theme/tx_hao/postdata.php',{
			"Title":$("input[name='Title']").val(),
			"Url":$("input[name='meta_url']").val(),
			"CateID":$("*[name='CateID']").val(),
			"Content":$("textarea[name='Content']").val(),
			"token":$("input[name='token']").val(),
			"verifycode":$("input[name='verifycode']").val(),
		},
		function(data){
			var s =data;
			if((s.search("faultCode")>0)&&(s.search("faultString")>0)){
				alert(s.match("<string>.+?</string>")[0].replace("<string>","").replace("</string>",""));
				$("#reg_verfiycode").attr("src",bloghost+"zb_system/script/c_validcode.php?id=tx_hao&amp;tm="+Math.random());
			}else{
				alert(s);
				window.location=bloghost+"?shoulu";
			}
		}
	);
}