"use strict";$(function(){var a=function(g,h){return Math.floor(Math.random()*(h-(g+1)))+g;},b=function(g){return g.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");},c,d,f=!1;$(document).on("DOMNodeInserted",function(g){var h=$(g.target).find(".exo-native-widget-item");if(h.length){var i=h.attr("href"),j=h.attr("real-href"),k=h.find(".exo-native-widget-item-title").text(),l=h.find(".exo-native-widget-item-image").attr("style").split("(")[1].split(")")[0].replace('"',""),m=h.parent().parent().parent().parent().nextAll().filter(".row");c||(c=m.find(".thumb-overlay img").height()||133),d||((d=m.find(".thumb-overlay").parent().parent().parent().attr("class")),5>d.length&&(d=null),$(".hide-me-please").hide());var p,q,n=m.attr("data-well-extra-classes")||"",o=!!n,r=a(1,10),s="";8<=r&&(s='<div class="fps60-text-icon">60FPS</div> '),o?((p=a(1,365)),(q=b(a(3e3,5e5)))):((p=a(1,12)),(q=b(a(1e3,5e3))));var t='\n      <div class="'+
d+
'">\n      <div class="well well-sm '+
n+
'">\n      <a real-href="'+
j+
'" href="'+
i+
'" oncontextmenu="setRealHref(event)" onmouseup="setRealHref(event)" rel="nofollow" target="_blank">\n      <div class="thumb-overlay">\n      <img title="'+
k+
'" class="lazy img-responsive nat-ad" src="'+
l+
'" style="display: block;">\n      '+
s+
'<div class="hd-text-icon">AD</div> <div class="duration">\n      0'+
a(1,9)+
":"+
a(10,59)+
'\n      </div>\n      </div>\n      <span class="video-title title-truncate m-t-5">'+
k+
'</span>\n      </a>\n      <div class="video-added">\n      '+
p+
" "+
(o?"days":"hours")+
' ago\n      </div>\n      <div class="video-views pull-left">\n      '+
q+
' <i class="glyphicon glyphicon-play-circle"></i>\n      </div>\n      <div class="video-rating pull-right ">\n      <i class="fa fa-heart video-rating-heart "></i> <b>'+
a(80,100)+
'%</b>\n      </div>\n      <div class="clearfix"></div>\n      </div>\n      </div>\n      ';d&&("append"===m.attr("data-pos")?m.append(t):m.prepend(t),h.remove(),!f&&($("head").append("<style>\n          .nat-ad {\n              display: block;\n              object-fit: cover;\n              object-position: top;\n              max-height: "+
c+
"px;\n          }\n          </style>"),(f=!0)));}});});