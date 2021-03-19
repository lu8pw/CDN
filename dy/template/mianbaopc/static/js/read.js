var hv = $(".info dl:eq(7)");
if (hv.find('span').html() == '1900') {
	hv.find('span').html('2000年前');
};
var hadpingfen = 0;
function stars(r) {
	var curstars = parseInt(r.mystars);
	$("#pa").html(r['curpingfen'].a + "人");
	$("#pb").html(r['curpingfen'].b + "人");
	$("#pc").html(r['curpingfen'].c + "人");
	$("#pd").html(r['curpingfen'].d + "人");
	$("#pe").html(r['curpingfen'].e + "人");
	
	$("#commnum").html(r['curpingfen'].num);
	
	var totalnum = parseInt(r['curpingfen'].a) + parseInt(r['curpingfen'].b)
			+ parseInt(r['curpingfen'].c) + parseInt(r['curpingfen'].d)
			+ parseInt(r['curpingfen'].e);
	if (totalnum > 0) {
		$("#pam").css("width",((parseInt(r['curpingfen'].a) / totalnum) * 100) + "%");
		$("#pbm").css("width",((parseInt(r['curpingfen'].b) / totalnum) * 100) + "%");
		$("#pcm").css("width",((parseInt(r['curpingfen'].c) / totalnum) * 100) + "%");
		$("#pdm").css("width",((parseInt(r['curpingfen'].d) / totalnum) * 100) + "%");
		$("#pem").css("width",((parseInt(r['curpingfen'].e) / totalnum) * 100) + "%")
	};
	
	
	if (r['hadpingfen'] != undefined && r['hadpingfen'] != null) {hadpingfen = 1;}
	
	if (parseInt(r['curpingfen'].pinfenb) > 0) {
		$("#rating-main").show();
		$("#rating-kong").hide();
		$("#fenshu").css('width', parseInt(r['curpingfen'].pinfenb) + "%");
		$("#total").css('width', parseInt(r['curpingfen'].pinfenb) + "%");
		$("#pingfen").html(r['curpingfen'].pinfen);
		$("#pingfen2").html(r['curpingfen'].pinfen);
	} else {
		$("#rating-main").hide();
		$("#rating-kong").show();
		$(".loadingg").addClass('nopingfen').html('暂时没有人评分，赶快从左边打分吧！');
	};
	if (r['loveid'] != null) {
		$(".interest-sect .sect-btn").hide();
		$(".interest-sect .sect-show").show();
		$(".loveidbox .sect-btn").hide();
		$(".loveidbox .sect-show").show();
	} else {
		$(".interest-sect .sect-btn").show();
		$(".interest-sect .cancel").hide();
		$(".loveidbox .sect-btn").show();
		$(".loveidbox .cancel").hide();
	}
	if (r['remindid'] != null) {
		$(".interest-rss .rss-btn").hide();
		$(".interest-rss .rss-show").show();
		$(".remind .rss-btn").hide();
		$(".remind .rss-show").show();
	} else {
		$(".interest-rss .rss-btn").show();
		$(".interest-rss .del").hide();
		$(".remind .rss-btn").show();
		$(".remind .del").hide();
	}
	if (curstars > 0) {
		var curnum = curstars - 1;
		$("ul.rating li:lt(" + curnum + ")").addClass("current");
		$("ul.rating li:eq(" + curnum + ")").addClass("current");
		$("ul.rating li:gt(" + curnum + ")").removeClass("current");
		var arr = new Array('很差', '较差', '还行', '推荐', '力荐');
		$("#ratewords").html(arr[curnum]);
	}
};


function login_form() {
	$.colorbox({
		inline : true,
		href : "#login-dialog",
		width : '523px'
	});
	
	$("#loginbt1").unbind();
	$("#loginbt1").click(function(e) {
		if ($("#username1").val() == '用户名' || $("#username1").val() == '') {
			$.showfloatdiv({
				txt : '请输入正确的用户名'
			});
			$("#username1").focus();
			$.hidediv({})
		} else if ($("#password1").val() == '') {
			$.showfloatdiv({
				txt : '请输入密码'
			});
			$("#password1").focus();
			$.hidediv({})
		} else {
			$("#loginformb").qiresub({
				curobj: $("#loginbt1"),
				txt: '数据提交中,请稍后...',
				onsucc: function(result) {
					$.hidediv(result);
					if (parseInt(result['rcode']) > 0) {
						$("#loginbarx").load(Root + "index.php?s=User-Center-usernav&forward="+encodeURIComponent(location.href)+"&random"+ new Date().getTime());
						$("#cboxClose").trigger('click');
					}
				}
			}).post({
				url: Root + 'index.php?s=User-Center-login'
			});
			return false;
		}
	})
};



$("#comm_txt").focus(function(e) {	
	if (!checkcookie()) {
		login_form();
		return false;
	}
});
$("#loginbt").click(function(e) {
	userlogin();
});
function userlogin() {
	if ($("#username").val() == '用户名' || $("#username").val() == '') {
			$.showfloatdiv({
				txt : '请输入正确的用户名'
			});
			$("#username").focus();
			$.hidediv({})
		} else if ($("#password").val() == '') {
			$.showfloatdiv({
				txt : '请输入密码'
			});
			$("#password").focus();
			$.hidediv({})
		} else {
			$("#loginform").qiresub({
				curobj: $("#loginbt"),
				txt: '数据提交中,请稍后...',
				onsucc: function(result) {
					$.hidediv(result);
					if (parseInt(result['rcode']) > 0) {
						$("#loginbarx").load(Root + "index.php?s=User-Center-mini&forward="+encodeURIComponent(location.href)+"&random"+ new Date().getTime());
						$("#cboxClose").trigger('click');
					}
				}
			}).post({
				url: Root + 'index.php?s=User-Center-login'
			});
			return false;
	}
}
$("#subcomm").click(function(e) {
	$("#commform").qiresub({
		curobj : $("#subcomm"),
		txt : '数据提交中,请稍后...',
		onsucc : function(result) {
			$.hidediv(result);
			if (parseInt(result['rcode']) > 0) {
				pagegoo(Root + "index.php?s=User-Comm-getcomm-id-"+$("#_void_id").val()) ;
			}
		}
	}).post({
		url : Root + 'index.php?s=User-Comm-addcomm'
	});
	return false;
});


function pagegoo(url) {
	$.ajax({
		url : url,
		success : function(data) {
			if(data.ajaxtxt != '') {
				if ($('#commbox li').length > 3)
					$("html,body").animate({
						scrollTop : $("#commbox").offset().top - 130
					}, 1000);
				
					$("#commbox").empty().html(data.ajaxtxt);
					
					$(".digg a").click(function(e) {
						opp($(this).attr('data'), $(this));
						return false ;
					});
					
					
					$(".reply").click(function(e) {
						var curid = $(this).attr('data');
						if (!checkcookie()) {
							login_form();
							return false;
						}else{
							if ($("#rep" + curid).html() != '') {
								$("#rep" + curid).html('');
							} else {
								$(".comms").html('');
								$("#rep" + curid).html($("#hidcommform").html());
								$("#rep"+ curid+ " #comm_id").val(curid); //回贴ID
								$("#rep" + curid + " .sub").unbind();
								$("#rep" + curid + " .sub").click(function(e) {
									$("#rep"+ curid+ " #mcommform").qiresub({
										curobj : $("#rep"+ curid+ " .sub"),
										txt : '数据提交中,请稍后...',
										onsucc : function(result) {
											$.hidediv(result);
											if (parseInt(result['rcode']) > 0) {
												pagegoo(Root + "index.php?s=User-Comm-getcomm-id-"+$("#_void_id").val()) ;
											}
										}
									}).post({
										url : Root + 'index.php?s=User-Comm-getrecomm'
									});
								});
							}
						}
					});
			} else {
				$("#commbox").html('<li class="kong">当前没有评论，赶紧抢个沙发！</li>');
			};
			
			
			$("#pagebox").html(data.pages);
			$("#pageboxx").html(data.pagesx);
	
			if (data.star != undefined && data.star != null) {
				stars(data.star);
			};
					
			$(".commpage a").click(function(e) {
				var pagegourl = $(this).attr('href');
				pagegoo(pagegourl);
				return false;
			});
		},dataType : 'json'
	});
	return false;
};


function opp(url, thisobj) {
	$.showfloatdiv({
		txt : '数据提交中...',
		cssname : 'loading'
	});
	$.get(url, function(r) {
		$.hidediv(r);
		if (parseInt(r.rcode) > 0) {
			thisobj.children('strong').html(parseInt(thisobj.children('strong').html()) + 1)
		}
	}, 'json');
};

$(".view-filter a").click(function(e) {
	$(this).prevAll().removeClass('current');
	$(this).nextAll().removeClass('current');
	$(this).addClass('current');
	pagegoo($(this).attr('data') + "-id-" + Id);
	return false;
});
function delcomm(url) {
	$.showfloatdiv({
		txt : '数据提交中...',
		cssname : 'loading'
	});
	$.get(url, function(r) {
		$.hidediv(r);
		if (parseInt(r.rcode) > 0) {
			$("#li" + r.id).remove()
		}
	}, 'json')
}