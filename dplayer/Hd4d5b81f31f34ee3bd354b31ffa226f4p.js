!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("video.js"));else if("function"==typeof define&&define.amd)define(["video.js"],r);else{var t=r("object"==typeof exports?require("video.js"):e.videojs);for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(this,function(e){return function(e){function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}var t={};return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=1)}([function(r,t){r.exports=e},function(e,r,t){"use strict";function o(e,r){function t(){var e=null,r=null;return function(){var t=Date.now();!e||t-e>2e3?(e=t,s.recoverMediaError()):!r||t-r>2e3?(r=t,s.swapAudioCodec(),s.recoverMediaError()):console.error("Error loading media: File could not be played")}}var o=r.options_,i=r.el(),a=null,s=this.hls=new n(o.hlsjsConfig),c=t(),u=t();i.addEventListener("error",function(e){var r=e.currentTarget.error;r.code===r.MEDIA_ERR_DECODE?u():console.error("Error loading media: File could not be played")}),this.dispose=function(){s.destroy()},this.duration=function(){return a||i.duration||0},s.on(n.Events.LEVEL_LOADED,function(e,r){a=r.details.live?1/0:r.details.totalduration}),s.on(n.Events.ERROR,function(e,r){if(r.fatal)switch(r.type){case n.ErrorTypes.NETWORK_ERROR:s.startLoad();break;case n.ErrorTypes.MEDIA_ERROR:c();break;default:console.error("Error loading media: File could not be played")}}),Object.keys(n.Events).forEach(function(e){var t=n.Events[e];s.on(t,function(e,o){r.trigger(t,o)})}),r.featuresNativeTextTracks||(Object.defineProperty(i,"textTracks",{value:r.textTracks,writable:!1}),i.addTextTrack=function(){return r.addTextTrack.apply(r,arguments)}),s.attachMedia(i),s.loadSource(e.src)}var n=window.Hls;n||console.error("Please put CDNBye script before this script");var i=/^application\/(x-mpegURL|vnd\.apple\.mpegURL)$/i,a=/\.m3u8/i,s={canHandleSource:function(e){return e.skipContribHlsJs?"":i.test(e.type)?"probably":a.test(e.src)?"maybe":""},handleSource:function(e,r){return new o(e,r)},canPlayType:function(e){return i.test(e)?"probably":""}};if(n.isSupported()){var c=t(0);if(c=c&&c.default||c){var u=c.getTech&&c.getTech("Html5");u=u||c.getComponent&&c.getComponent("Html5"),u&&u.registerSourceHandler(s,0)}else console.warn("videojs-contrib-hls.js: Couldn't find find window.videojs nor require('video.js')")}}])});
//# sourceMappingURL=videojs-contrib-hlsjs.min.js.map