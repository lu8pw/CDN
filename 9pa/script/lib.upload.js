var container = document.createElement('script');
$(container).attr('type','text/plain').attr('id','img_editor');
$("body").append(container);
_editor = UE.getEditor('img_editor');
_editor.ready(function () {
	_editor.hide();
	$(".uploadimg input.button").click(function(){		
		object = $(this).parent().find('.uplod_img');
		_editor.getDialog("insertimage").open();
		_editor.addListener('beforeInsertImage', function (t, arg) {
			object.attr("value", arg[0].src);
		});
	});
	$(document).on("click", ".upimg-btn", function() {
            img = $(this).parents(".upimg-box").find('.upimg-url');
            txt = $(this).parents(".upimg-box").find(".upimg-txt");
            _editor.getDialog("insertimage").open();
            _editor.addListener('beforeInsertImage', function(_t, arg) {
                txt.val(arg[0].src);
                if (txt) { img.attr("src", arg[0].src + "?" + Math.random()); }
            });
        });
});

function tabs(tabTit,on,tabCon){
    $(tabTit).children().click(function(){
        $(this).addClass(on).siblings().removeClass(on);
        var index = $(tabTit).children().index(this);
        $(tabCon).children().eq(index).show().siblings().hide();
    });
}
tabs(".tab-hd","active",".tab-bd");