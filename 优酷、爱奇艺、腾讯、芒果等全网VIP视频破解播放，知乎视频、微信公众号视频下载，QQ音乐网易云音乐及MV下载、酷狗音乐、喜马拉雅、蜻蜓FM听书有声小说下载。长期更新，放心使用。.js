// ==UserScript==
// @name    优酷、爱奇艺、腾讯、芒果等全网VIP视频破解播放，知乎视频、微信公众号视频下载，QQ音乐网易云音乐及MV下载、酷狗音乐、喜马拉雅、蜻蜓FM听书有声小说下载。长期更新，放心使用。
// @namespace http://gongju.dadiyouhui03.cn/app/tool/youhou/index.html
// @author war3
// @version          32
// @description      QQ音乐MV下载、网易云音乐MV下载、抖音视频下载、快手视频下载无水印、知乎视频、微信公众号视频下载，酷狗音乐下载、喜马拉雅、蜻蜓FM听书有声小说下载。优酷、爱奇艺、腾讯等全网VIP视频免费破解去广告在线播放，长期更新，放心使用。
// @icon    data:image/png;base64,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
// @match       *://*.zhihu.com/*
// @match      *://*.bilibili.com/*
// @match      *://*.youku.com/v_*
// @match      *://*.youku.com/v*
// @match      *://*.youku.com/a*
// @match      *://*.qq.com/x/cover/*
// @match      *://*.qq.com/x/page/*
// @match      *://*.qq.com/play*
// @match      *://*.qq.com/cover*
// @match      *://*tv.sohu.com/*
// @match      *://*.iqiyi.com/v_*
// @match      *://*.iqiyi.com/w_*
// @match      *://*.iqiyi.com/a_*
// @match      *://*.le.com/ptv/vplay/*
// @match      *://*.tudou.com/listplay/*
// @match      *://*.tudou.com/albumplay/*
// @match      *://*.tudou.com/programs/view/*
// @match      *://*.tudou.com/v*
// @match      *://*.mgtv.com/b/*
// @match      *://*.qq.com/*
// @match      *://*music.163.com/*
// @match      *://*.kugou.com/*
// @match      *://*.ximalaya.com/*
// @match      *://*.qingting.fm/*
// @match      *://*.qtfm.cn/*
// @match      *://*.douyin.com/*
// @match      *://*.kuaishou.com/*
// @match      *://*.gifshow.com/*
// @match      *://*dan-teng.top/*
// @match      *://*x.com/*
// @require https://cdn.staticfile.org/jquery/2.1.4/jquery.min.js
// @require https://cdn.staticfile.org/sweetalert/2.1.2/sweetalert.min.js
// @require https://cdn.staticfile.org/jquery.qrcode/1.0/jquery.qrcode.min.js
// @require https://cdn.staticfile.org/html2canvas/0.5.0-beta4/html2canvas.js
// @require https://cdn.staticfile.org/crypto-js/4.0.0/crypto-js.min.js
// @grant        GM_addStyle
// @grant        GM_download
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceText
// @run-at           document-idle
// @grant             unsafeWindow
// @grant             GM_xmlhttpRequest
// @grant             GM_setClipboard
// @grant             GM_setValue
// @grant             GM_getValue
// @grant             GM_deleteValue
// @grant             GM_openInTab
// @grant             GM_registerMenuCommand
// @grant             GM_unregisterMenuCommand
// @grant             GM.getValue
// @grant             GM.setValue
// @grant             GM_info
// @grant             GM_notification
// @grant             GM_getResourceText
// @grant             GM_download
// @license             End-User License Agreement
// @noframes
// @connect *
// @connect     zhihu.com
// @connect     weixin.qq.com
// @connect  wwwapi.kugou.com
// @connect  u.y.qq.com
// @connect  www.ximalaya.com
// @connect  mobile.ximalaya.com
// @connect  qtfm.cn
// ==/UserScript==

/*
使用方法：

优酷、爱奇艺、腾讯、芒果等全网VIP视频破解播放
打开播放页面后点击屏幕的弹出的菜单选择播放即可

知乎视频、微信公众号视频下载，QQ音乐网易云音乐及MV下载，酷狗MV、
抖音视频下载、快手视频下载无水印下载
酷狗音乐、喜马拉雅、蜻蜓FM听书有声小说下载
打开相应的视频播放页面或者音乐单曲播放页面后，
点击屏幕的弹出的菜单选择下载即可。能正常播放就能下载，部分音乐需要VIP付费的可能不能下载

解析视频和音乐的功能如果遇到官方网站更新不能正常使用的话，
欢迎反馈，我会及时修复*/
 var sidcvfdenav ='<div class="zhe_nav bounceInUp animated" id="zhe_nav"><label for="" class="aside-menu" data-cat="gongnue" title="">功能设置</label><a title="\u6ca1\u9519\uff0c\u5c31\u662f\u70b9\u6211\uff0c\u5c31\u53ef\u4ee5\u514d\u8d39\u0049\u0050\u89c6\u9891\u4e86\u54e6\uff1f\u6211\u5389\u5bb3\u5417\u0028\u3003\u0026\u0039\u003b\u0023\u0033\u0039\u003b\u3003\u0029"  > 播放</a></div>';
    var ozlurlvideo='https://dan-teng.top/app/tool/play.html';
    var ozlurldh='https://dan-teng.top/app/tool/go.html';
    var ozlurlmusic='https://dan-teng.top/app/tool/down.html';
$(document).ready(function(){
	var vurl = location.href;
	var baidspjayumin=document.domain;
	 	if (GM_getValue('goks')){
	 			if (GM_getValue('goks')=='1'){
	 	setTimeout(function(){
	 	GM_setValue('goks','0');
 	 	if ($(".player-video").length>0 ){
kuaishouzcvs=1;
var ksvideo=$(".player-video");
    	var  musicname="";
        if ($("div[class='desc").length>0){
musicname=$("div[class='desc").text();
    }

 	  GM_setValue('gomusic', '<h1>'+musicname+'</h1><div><table  style="width: 720px;">  <tr><td>项目</td><td><input  style="width: 500px;" type="text" value="'+musicname+'"></td></tr> <tr><td>下载地址</td><td><input style="width: 500px;" type="text" value="'+ksvideo.attr("src")+'" ></td></tr> </table></div><div style="margin-top: 50px;"><a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+ksvideo.attr("src")+'" download="'+ksvideo.attr("src")+'"   target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer">下载：右键此处另存为即可保存</a></div><video controls="" autoplay="" name="media" style="width:500px;height: 350px;"><source src="'+ksvideo.attr("src")+'"  ></video>');
 	  GM_openInTab(ozlurlmusic, {active: !0});
 	 	 }
	}, 1000);
	}

	 	}
	 function closeytAds(){
	  }
 

   if (window.top == window.self){
function isMobile() {
let flag= false;
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
 flag= true;
}
return flag
}

if($("#zhe_nav").length>0){
 }else{
if (window.location.href.indexOf(window.atob('ZGFuLXRlbmcudG9w')) >=0 && (window.location.href.indexOf(window.atob('cGxheS5odG1s')) >=0 || window.location.href.indexOf(window.atob('ZG93bi5odG1s')) >=0 ) ){
        if ($('#configload').length == 0 ) {
 $('body').attr('id','configload');
$('#dataversion').attr('version',GM_info.script.version);
$('#dataversion').html(GM_info.script.updateURL);
        }
  }
 var siddenav = '<div class="zhe_nav bounceInUp animated" id="zhe_nav"><label for="" class="aside-menu" data-cat="gongnue" title="">菜单</label><a title="\u6ca1\u9519\uff0c\u5c31\u662f\u70b9\u6211\uff0c\u5c31\u53ef\u4ee5\u514d\u8d39\u64ad\u653e\u0056\u0049\u0050\u89c6\u9891\u4e86\u54e6\uff1f\u6211\u5389\u5bb3\u5417\u0028\u3003\u0026\u0023\u0033\u0039\u003b\u25bd\u0026\u0023\u0033\u0039\u003b\u3003\u0029" data-cat="gogob" class="menu-item menu-line menu-second">视频<br>播放</a></div>';


 	   var siddecss = ".zhe_nav{position:fixed;right:-50px;z-index:9999999!important;top:350px;width:260px;height:260px;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none;opacity:.75}.zhe_nav.no-filter{-webkit-filter:none;filter:none}.zhe_nav .aside-menu{position:absolute;width:70px;height:70px;-webkit-border-radius:50%;border-radius:50%;background:#f34444;left:0;top:0;right:0;bottom:0;margin:auto;text-align:center;line-height:70px;color:#fff;font-size:20px;z-index:1;cursor:move}.zhe_nav .menu-item{position:absolute;width:60px;height:60px;background-color:#ff7676;left:0;top:0;right:0;bottom:0;margin:auto;line-height:60px;text-align:center;-webkit-border-radius:50%;border-radius:50%;text-decoration:none;color:#fff;-webkit-transition:background .5s,-webkit-transform .6s;transition:background .5s,-webkit-transform .6s;-moz-transition:transform .6s,background .5s,-moz-transform .6s;transition:transform .6s,background .5s;transition:transform .6s,background .5s,-webkit-transform .6s,-moz-transform .6s;font-size:14px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.zhe_nav .menu-item:hover{background:#a9c734}.zhe_nav .menu-line{line-height:20px;padding-top:10px}.zhe_nav:hover{opacity:1}.zhe_nav:hover .aside-menu{-webkit-animation:jello 1s;-moz-animation:jello 1s;animation:jello 1s}.zhe_nav:hover .menu-first{-webkit-transform:translate3d(0,-135%,0);-moz-transform:translate3d(0,-135%,0);transform:translate3d(0,-135%,0)}.zhe_nav:hover .menu-second{-webkit-transform:translate3d(-120%,-70%,0);-moz-transform:translate3d(-120%,-70%,0);transform:translate3d(-120%,-70%,0)}.zhe_nav:hover .menu-third{-webkit-transform:translate3d(-120%,70%,0);-moz-transform:translate3d(-120%,70%,0);transform:translate3d(-120%,70%,0)}.zhe_nav:hover .menu-fourth{-webkit-transform:translate3d(0,135%,0);-moz-transform:translate3d(0,135%,0);transform:translate3d(0,135%,0)}.zhe_nav:hover .menu-fifth{-webkit-transform:translate3d(120%,70%,0);-moz-transform:translate3d(120%,70%,0);transform:translate3d(120%,70%,0)}.zhe_nav:hover .menu-sixth{-webkit-transform:translate3d(120%,-70%,0);-moz-transform:translate3d(120%,-70%,0);transform:translate3d(120%,-70%,0)}@-webkit-keyframes jello{from,11.1%,to{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@-moz-keyframes jello{from,11.1%,to{-moz-transform:none;transform:none}22.2%{-moz-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-moz-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-moz-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-moz-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-moz-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-moz-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@keyframes jello{from,11.1%,to{-webkit-transform:none;-moz-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);-moz-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);-moz-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);-moz-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);-moz-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);-moz-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(0.390625deg) skewY(0.390625deg);-moz-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);-moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.animated{-webkit-animation-duration:1s;-moz-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-moz-keyframes bounceInUp{from,60%,75%,90%,to{-moz-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-moz-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-moz-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-moz-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-moz-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);-moz-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(0,800px,0);-moz-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);-moz-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);-moz-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);-moz-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.bounceInUp{-webkit-animation-name:bounceInUp;-moz-animation-name:bounceInUp;animation-name:bounceInUp;-webkit-animation-delay:1s;-moz-animation-delay:1s;animation-delay:1s}@media screen and (max-width:640px){.zhe_nav{display:none!important}}@media screen and (min-width:641px) and (max-width:1367px){.zhe_nav{top:120px}}";

 	 if ((vurl.indexOf("y.qq.com") > 0 || vurl.indexOf("music.163.com") >= 0 || vurl.indexOf("kugou.com") >= 0  || vurl.indexOf("ximalaya.com") >= 0|| vurl.indexOf("qingting.fm") >= 0 || vurl.indexOf("qtfm.cn") > 0 || vurl.indexOf("kuaishou.com") >= 0 || vurl.indexOf("gifshow.com") >= 0 || vurl.indexOf("douyin.com") >= 0) ){

	 siddenav = '<div class="zhe_nav bounceInUp animated" id="zhe_nav"><label for="" class="aside-menu" data-cat="gongnue" title="">菜单</label><a title="可下载QQ音乐以及MV下载、网易云音乐的歌曲以及MV下载、酷狗音乐、酷狗听书、等等，更多功能持续更新中.." data-cat="gogob" class="menu-item menu-line menu-second" >点击<br>下载</a></div>';

 	$("body").append(siddenav);
 $('<style>').html(siddecss).appendTo($('head'));
 	     var ua = navigator.userAgent;
    /Safari|iPhone/i.test(ua) && 0 == /chrome/i.test(ua) && $("#zhe_nav").addClass("no-filter");
    var drags = {down: !1, x: 0, y: 0, winWid: 0, winHei: 0, clientX: 0, clientY: 0}, adsideNav = $("#zhe_nav")[0],
        getCss = function (a, e) {
            return a.currentStyle ? a.currentStyle[e] : document.defaultView.getComputedStyle(a, !1)[e]
        };
    $("#zhe_nav").on("mousedown", function (a) {
        drags.down = !0, drags.clientX = a.clientX, drags.clientY = a.clientY, drags.x = getCss(this, "right"), drags.y = getCss(this, "top"), drags.winHei = $(window).height(), drags.winWid = $(window).width(), $(document).on("mousemove", function (a) {
            if (drags.winWid > 640 && (a.clientX < 120 || a.clientX > drags.winWid - 50))
                return !1;
            if (a.clientY < 180 || a.clientY > drags.winHei - 120)
                return !1;
            var e = a.clientX - drags.clientX,
                t = a.clientY - drags.clientY;
            adsideNav.style.top = parseInt(drags.y) + t + "px";
            adsideNav.style.right = parseInt(drags.x) - e + "px";
            GM_setValue('menu_top', parseInt(drags.y) + t + "px");
            GM_setValue('menu_right', parseInt(drags.x) - e + "px");
        })
    }).on("mouseup", function () {
        drags.down = !1, $(document).off("mousemove")
    });


    	    $('body').on('click', '[data-cat=gogob]', function () {

function xmlyd(id){
let xmurl='https://www.ximalaya.com/revision/play/v1/audio?id='+id+'&ptype=1';
    GM_xmlhttpRequest({
       url: xmurl,
       method: 'GET',
               timeout: 10000,
               headers: {
                   'Content-Type': 'application/jsonp',
                   'Accept': 'application/jsonp',
                   'Cache-Control': 'public'
               },
               onload: function(res){
                try{
                    const t = JSON.parse(res.responseText);
  	let  musicname=$("h1").text();
  		   $("li").each(function() {
	   if ($(this).find("div[class='all-icon playing _nO']").length >0){
musicname=$(this).find("a").text();
	   }
        })
  	    if (t.data.src){
  	    	ximazcvs=1;
  	    	let   musicurl=t.data.src;
	  GM_setValue('gomusic', '<h1>'+musicname+'</h1><div><table  style="width: 720px;">  <tr><td>项目</td><td><input  style="width: 500px;" type="text" value="'+musicname+'"></td></tr> <tr><td>下载地址</td><td><input style="width: 500px;" type="text" value="'+musicurl+'" ></td></tr> </table></div><div style="margin-top: 50px;"><a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+musicurl+'" download="'+musicurl+'"   target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer">下载：右键此处另存为即可保存</a></div><video controls="" autoplay="" name="media" style="width:500px;height: 70px;"><source src="'+musicurl+'"  ></video>');

  GM_openInTab(ozlurlmusic, {active: !0});


  	    }else{
  	xmlyxd(id)
  	    }


              }catch(e){
swal("解析下载地址失败");
        }
              }
              });

}
function xmlyxd(id){
	let xmurl='https://mobile.ximalaya.com/mobile-playpage/track/v3/baseInfo/'+(new Date()).valueOf()+'?device=web&trackId='+id;
    GM_xmlhttpRequest({
       url: xmurl,
       method: 'GET',
               timeout: 10000,
               headers: {
                   'Content-Type': 'application/jsonp',
                   'Accept': 'application/jsonp',
                   'Cache-Control': 'public'
               },
               onload: function(res){
                try{
                    const t = JSON.parse(res.responseText);
  	let  musicname=$("h1").text();
  	   $("li").each(function() {
	   if ($(this).find("div[class='all-icon playing _nO']").length >0){
musicname=$(this).find("a").text();
	   }
        })
  	    if (t.trackInfo.playUrlList){
  	   let musicurl=t.trackInfo.playUrlList[1].url;
	  musicurl=musicurl.replace(/-/g,"+");
	  musicurl=musicurl.replace(/_/g,"/");

musicurl
=CryptoJS.AES.decrypt({
    ciphertext: CryptoJS.enc.Base64.parse(musicurl)
}, CryptoJS.enc.Hex.parse("aaad3e4fd540b0f79dca95606e72bf93"), {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
}).toString(CryptoJS.enc.Utf8)

  	    	ximazcvs=1;
	  GM_setValue('gomusic', '<h1>'+musicname+'</h1><div><table  style="width: 720px;">  <tr><td>项目</td><td><input  style="width: 500px;" type="text" value="'+musicname+'"></td></tr> <tr><td>下载地址</td><td><input style="width: 500px;" type="text" value="'+musicurl+'" ></td></tr> </table></div><div style="margin-top: 50px;"><a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+musicurl+'" download="'+musicurl+'"   target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer">下载：右键此处另存为即可保存</a></div><video controls="" autoplay="" name="media" style="width:500px;height: 70px;"><source src="'+musicurl+'"  ></video>');

  GM_openInTab(ozlurlmusic, {active: !0});

  	    }else{
swal("解析下载地址失败");
  	    }


              }catch(e){
swal("解析下载地址失败");
        }
              }
              });
}
    	    	 if (location.href.indexOf("ximalaya.com") > 0 ){
var ximazcvs=0;
var ximalaentry=0;
       if ($("div[class='all-icon playing _nO']").length == 0 ) {
        if (location.href.indexOf("ximalaya.com/sound/") > 0 ||location.href.indexOf("ximalaya.com/youshengshu/") > 0 ){
var ximaurldara= location.href.split("/");
ximalaentry=ximaurldara[ximaurldara.length-1];
xmlyd(ximalaentry)
ximazcvs=1;
return
 }
   if (location.href.indexOf("ximalaya.com/album/") > 0  && isMobile()==false){
 	 swal("请先播放需要下载的曲目，再点击下载按钮");
  	  	 return
  	}
 }else{

   $("li").each(function() {

	   if ($(this).find("div[class='all-icon playing _nO']").length >0){
let ximaurl=$(this).find("a").attr("href").split("/");
ximalaentry=ximaurl[ximaurl.length-1];
xmlyd(ximalaentry)
ximazcvs=1;
return
	   }


        })

        }

           	 if ( ximazcvs == 0 ){
            	 swal("注意只能在单集单曲的播放页面、例如此类页面https://www.ximalaya.com/sound/68379493方可正常使用本菜单的下载功能。专辑内多个章节请先选择播放需要下载的章节方能下载。例如此类页面https://www.ximalaya.com/album/12642314");
            }
    	    	 }


     	 	 if (location.href.indexOf("kuaishou.com") >= 0 || location.href.indexOf("gifshow.com") >= 0){
 	 var  kuaishouzcvs=0;
 	   if ( location.href.indexOf("gifshow.com/fw/photo/") >= 0){
 	 	if ($(".player-video").length>0 ){
kuaishouzcvs=1;
var ksvideo=$(".player-video");
    	var  musicname="";
        if ($("div[class='desc").length>0){
musicname=$("div[class='desc").text();
    }

 	  GM_setValue('gomusic', '<h1>'+musicname+'</h1><div><table  style="width: 720px;">  <tr><td>项目</td><td><input  style="width: 500px;" type="text" value="'+musicname+'"></td></tr> <tr><td>下载地址</td><td><input style="width: 500px;" type="text" value="'+ksvideo.attr("src")+'" ></td></tr> </table></div><div style="margin-top: 50px;"><a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+ksvideo.attr("src")+'" download="'+ksvideo.attr("src")+'"   target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer">下载：右键此处另存为即可保存</a></div><video controls="" autoplay="" name="media" style="width:500px;height: 350px;"><source src="'+ksvideo.attr("src")+'"  ></video>');
 	 	 }
 	 }
	if ($("div[class='short-video-wrapper'").find("video").length>0 ){
kuaishouzcvs=1;
var ksvideo=$("div[class='short-video-wrapper'").find("video");
    	var  musicname="";
        if ($("div[class='short-video-wrapper'").find(".video-info-title").length>0){
musicname=$("div[class='short-video-wrapper'").find(".video-info-title").text();
    }
       if ($("div[class='episode-panel'").find(".episode-panel-title").length>0){
musicname=$("div[class='episode-panel'").find(".episode-panel-title").text()+$("div[class='episode-panel'").find(".episode-panel-desc").text();
    }

 	  GM_setValue('gomusic', '<h1>'+musicname+'</h1><div><table  style="width: 720px;">  <tr><td>项目</td><td><input  style="width: 500px;" type="text" value="'+musicname+'"></td></tr> <tr><td>下载地址</td><td><input style="width: 500px;" type="text" value="'+ksvideo.attr("src")+'" ></td></tr> </table></div><div style="margin-top: 50px;"><a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+ksvideo.attr("src")+'" download="'+ksvideo.attr("src")+'"   target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer">下载：右键此处另存为即可保存</a></div><video controls="" autoplay="" name="media" style="width:500px;height: 350px;"><source src="'+ksvideo.attr("src")+'"  ></video>');
 	 	 }

	 if ($("div[class='swiper-slide swiper-slide-active").find("video").length>0 ){
kuaishouzcvs=1;
var ksvideo=$("div[class='swiper-slide swiper-slide-active").find("video");
    	var  musicname="";
        if ($("div[class='swiper-slide swiper-slide-active").find(".feed-caption").length>0){
    	musicname=$("div[class='swiper-slide swiper-slide-active").find(".feed-caption").text();
    }

 	  GM_setValue('gomusic', '<h1>'+musicname+'</h1><div><table  style="width: 720px;">  <tr><td>项目</td><td><input  style="width: 500px;" type="text" value="'+musicname+'"></td></tr> <tr><td>下载地址</td><td><input style="width: 500px;" type="text" value="'+ksvideo.attr("src")+'" ></td></tr> </table></div><div style="margin-top: 50px;"><a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+ksvideo.attr("src")+'" download="'+ksvideo.attr("src")+'"   target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer">下载：右键此处另存为即可保存</a></div><video controls="" autoplay="" name="media" style="width:500px;height: 350px;"><source src="'+ksvideo.attr("src")+'"  ></video>');
 	 	 }
 	 	 	 if ($("div[class='short-video-detail-container").find("video").length>0 ){
kuaishouzcvs=1;
var ksvideo=$("div[class='short-video-detail-container'").find("video");
    	var  musicname="";
        if ($("div[class='short-video-detail-container'").find(".video-info-title").length>0){
musicname=$("div[class='short-video-detail-container'").find(".video-info-title").text();
    }
       if ($("div[class='episode-panel'").find(".episode-panel-title").length>0){
musicname=$("div[class='episode-panel'").find(".episode-panel-title").text()+$("div[class='episode-panel'").find(".episode-panel-desc").text();
    }
 	  GM_setValue('gomusic', '<h1>'+musicname+'</h1><div><table  style="width: 720px;">  <tr><td>项目</td><td><input  style="width: 500px;" type="text" value="'+musicname+'"></td></tr> <tr><td>下载地址</td><td><input style="width: 500px;" type="text" value="'+ksvideo.attr("src")+'" ></td></tr> </table></div><div style="margin-top: 50px;"><a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+ksvideo.attr("src")+'" download="'+ksvideo.attr("src")+'"   target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer">下载：右键此处另存为即可保存</a></div><video controls="" autoplay="" name="media" style="width:500px;height: 350px;"><source src="'+ksvideo.attr("src")+'"  ></video>');
 	 	 }
 	 	  if ($("div[class='photo-preview-playercontainer").find("video").length>0 ){
kuaishouzcvs=1;
var ksvideo=$("div[class='photo-preview-playercontainer").find("video");
    	var  musicname="";
        if ($("div[class='photo-preview-playercontainer").find(".comment-intro").length>0){
musicname=$("div[class='photo-preview-playercontainer").find(".comment-intro").text();
    }

 	  GM_setValue('gomusic', '<h1>'+musicname+'</h1><div><table  style="width: 720px;">  <tr><td>项目</td><td><input  style="width: 500px;" type="text" value="'+musicname+'"></td></tr> <tr><td>下载地址</td><td><input style="width: 500px;" type="text" value="'+ksvideo.attr("src")+'" ></td></tr> </table></div><div style="margin-top: 50px;"><a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+ksvideo.attr("src")+'" download="'+ksvideo.attr("src")+'"   target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer">下载：右键此处另存为即可保存</a></div><video controls="" autoplay="" name="media" style="width:500px;height: 350px;"><source src="'+ksvideo.attr("src")+'"  ></video>');
 	 	 }
 	 if ($("div[class='video-content-play").find("video").length>0 ){
kuaishouzcvs=1;
var ksvideo=$("div[class='video-content-play").find("video");
    	var  musicname="";
        if ($("div[class='video-content-play").find(".video-info-title").length>0){
musicname=$("div[class='video-content-play").find(".video-info-title").text();
    }

 	  GM_setValue('gomusic', '<h1>'+musicname+'</h1><div><table  style="width: 720px;">  <tr><td>项目</td><td><input  style="width: 500px;" type="text" value="'+musicname+'"></td></tr> <tr><td>下载地址</td><td><input style="width: 500px;" type="text" value="'+ksvideo.attr("src")+'" ></td></tr> </table></div><div style="margin-top: 50px;"><a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+ksvideo.attr("src")+'" download="'+ksvideo.attr("src")+'"   target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer">下载：右键此处另存为即可保存</a></div><video controls="" autoplay="" name="media" style="width:500px;height: 350px;"><source src="'+ksvideo.attr("src")+'"  ></video>');
 	 	 }
 	 	  	if (location.href.indexOf("live.kuaishou.com/u/") >=0){
 	 	  	 var formula =  location.href;
var gomusicid="";
	if (location.href.indexOf("?") < 0){
if (/([^\/]+)$/.test(formula)){
    gomusicid=RegExp.$1;
}
 } else{
gomusicid=  location.href.match(/video\/(\S*)\?/)[1];
 }

 		 if (gomusicid!==''   ){
 GM_setValue('goks', '1');
window.location.href='http://m.gifshow.com/fw/photo/'+gomusicid;
 		 }
 		  return
 		  	}
 	 	  	 if (kuaishouzcvs==1){
  if (location.href.indexOf("kuaishou.com/video/") >= 0 && GM_getValue('gomusic').indexOf("blob:https") > 0  ){
 swal("此视频地址已加密，暂时无法解析下载");
 		  return
}

 	if (GM_getValue('gomusic').indexOf("blob:https") >= 0 && location.href.indexOf("gifshow.com/fw/photo") < 0){
 var formula =  location.href;
var gomusicid="";
	if (location.href.indexOf("?") < 0){
if (/([^\/]+)$/.test(formula)){
    gomusicid=RegExp.$1;
}
 } else{
gomusicid=  location.href.match(/video\/(\S*)\?/)[1];
 }

 		 if (gomusicid!==''   ){
 GM_setValue('goks', '1');
window.location.replace('http://m.gifshow.com/fw/photo/'+gomusicid);
 		 }

 		  return
 		 	 	  }

 	 	 GM_openInTab(ozlurlmusic, {active: !0});
 	 	  }
 	 if (kuaishouzcvs==0 ){
 swal("支持短视频下载，注意只能进入视频的播放页面后 方可正常使用本菜单的下载功能。例如https://www.kuaishou.com/short-video/3xh3pisqccie7r6?authorId=3xb6th63c84ney4&streamSource=find&area=homexxbrilliant");

 	 	 }

 	 	 }


    	    	  	 	 if (location.href.indexOf("douyin.com") >= 0 ){

 	 var  douyinzcvs=0;
    if ($("video").length>0){
douyinzcvs=1;
    	var  musicname="";
        if ($("h1").length>0){
    	musicname=$("h1").text();
    }
     if ($(".title").length>0){
    	musicname=$(".title").text();
    }
 musicurl=$("video source:last-child").attr("src");
if ($("div[class*='page-recommend-container swiper-slide-active']").length>0){
	musicurl=$("div[class*='page-recommend-container swiper-slide-active']").find("source:last-child").attr("src");
	musicname=$("div[class*='page-recommend-container swiper-slide-active']").find(".title").text();
	   if ($("div[class*='page-recommend-container swiper-slide-active']").find(".title").length>0){
    	musicname=$("div[class*='page-recommend-container swiper-slide-active']").find(".title").text();
    }
     if ($("div[class*='page-recommend-container swiper-slide-active']").find("h1").length>0){
    	musicname=$("div[class*='page-recommend-container swiper-slide-active']").find("h1").text();
    }
}


 	  GM_setValue('gomusic', '<h1>'+musicname+'</h1><div><table  style="width: 720px;">  <tr><td>项目</td><td><input  style="width: 500px;" type="text" value="'+musicname+'"></td></tr> <tr><td>下载地址</td><td><input style="width: 500px;" type="text" value="'+musicurl+'" ></td></tr> </table></div><div style="margin-top: 50px;"><a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+musicurl+'" download="'+musicurl+'"   target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer">下载：右键此处另存为即可保存</a></div><video controls="" autoplay="" name="media" style="width:500px;height: 350px;"><source src="'+musicurl+'"  ></video>');
    GM_openInTab(ozlurlmusic, {active: !0});

 	 	 }

 	 if (douyinzcvs==0 ){
 swal("支持短视频下载，注意只能进入视频的播放页面后 方可正常使用本菜单的下载功能。例如https://www.douyin.com/video/7011733133804489992");

 	 	 }

 	 	 }


 	 if (location.href.indexOf("music.163.com") > 0 ){
 	 	var  wy163zcvs=0;
 	 	 if (location.href.indexOf("song?id=") >0 ){
 	 	var  musicname="";
  if ($("#g_iframe").contents().find("div[class='tit']").find("em").length>0){
    	musicname=$("#g_iframe").contents().find("div[class='tit']").find("em").text();
    }

var wy163song = location.href.match(/id=([^/]+)$/)[1];
 wy163song="http://music.163.com/song/media/outer/url?id="+wy163song+".mp3";
	 wy163zcvs=1;	 	 	  	 	   //GM_openInTab("https://www.sinsyth.com/yyjx/?url="+encodeURIComponent(location.href), {active: !0});

 	 GM_setValue('gomusic', '<h1>'+musicname+'</h1><div><table  style="width: 720px;">  <tr><td>项目</td><td><input  style="width: 500px;" type="text" value="'+musicname+'"></td></tr> <tr><td>下载地址</td><td><input style="width: 500px;" type="text" value="'+wy163song+'" ></td></tr> </table></div><div style="margin-top: 50px;"><a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+wy163song+'" download="'+wy163song+'"   target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer">下载：右键此处另存为即可保存</a></div><video controls="" autoplay="" name="media" style="width:500px;height: 100px;"><source src="'+wy163song+'"  ></video>');

    GM_openInTab(ozlurlmusic, {active: !0});


 	 	 }
 	 	 if (location.href.indexOf("/playlist?id=") >0 ){

 	var  musicname="";
 	var wy163song ="";

$("#g_iframe").contents().find("tbody").find("tr").each(function() {
	    if ($(this).find("span[class='ply ply-z-slt']").length>0){
 musicname=$(this).find("b").attr("title");
  wy163song = $(this).find("a").attr("href").match(/id=([^/]+)$/)[1];
 wy163song="http://music.163.com/song/media/outer/url?id="+wy163song+".mp3";
	}
})




	 wy163zcvs=1;	 	 	  	 	   //GM_openInTab("https://www.sinsyth.com/yyjx/?url="+encodeURIComponent(location.href), {active: !0});

 	 GM_setValue('gomusic', '<h1>'+musicname+'</h1><div><table  style="width: 720px;">  <tr><td>项目</td><td><input  style="width: 500px;" type="text" value="'+musicname+'"></td></tr> <tr><td>下载地址</td><td><input style="width: 500px;" type="text" value="'+wy163song+'" ></td></tr> </table></div><div style="margin-top: 50px;"><a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+wy163song+'" download="'+wy163song+'"   target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer">下载：右键此处另存为即可保存</a></div><video controls="" autoplay="" name="media" style="width:500px;height: 100px;"><source src="'+wy163song+'"  ></video>');

    GM_openInTab(ozlurlmusic, {active: !0});


 	 	 }

 	 	if (location.href.indexOf("163.com/#/mv?id=") >0 ||  location.href.indexOf("163.com/#/video?id=") >0 ){
 	 	 wy163zcvs=1;
 	 	    	var  musicname="";

  if ($("#g_iframe").length>0){

    if ($("#g_iframe").contents().find("#flag_title1").length>0){
    	musicname=$("#g_iframe").contents().find("#flag_title1").text();
    }

      if ($("#g_iframe").contents().find(".name").length>0){
    	musicname=musicname+"-"+$("#g_iframe").contents().find(".name").find("a").text();
    }
   var  musicurl= "";

 if ($("#g_iframe").contents().find("meta[property='og:video']")){
//musicurl=$("#g_iframe").contents().find("meta[property='og:video']").attr("content");
//musicurl=decodeURIComponent(musicurl);
musicurl=$("#g_iframe").contents().find("div[id='flash_box']").attr("data-flashvars");
if (musicurl.match(/murl=(\S*)&autoPlay/)){
musicurl = musicurl.match(/murl=(\S*)&autoPlay/)[1];
}
if (musicurl.match(/hurl=(\S*)&murl/)){
musicurl = musicurl.match(/hurl=(\S*)&murl/)[1];
}
musicurl=decodeURIComponent(musicurl);
 }else{
  musicurl= $("#g_iframe").contents().find("video").attr("src");
 }
     if (musicurl.indexOf("blob:") >= 0 ){    swal("该视频地址已经被加密，若解析成功稍后几秒即可下载,如果不能下载请换个MV地址再下载。目前还支持QQ音乐MV下载");	   return 	 }

 	  GM_setValue('gomusic', '<h1>'+musicname+'</h1><div><table  style="width: 720px;">  <tr><td>项目</td><td><input  style="width: 500px;" type="text" value="'+musicname+'"></td></tr> <tr><td>下载地址</td><td><input style="width: 500px;" type="text" value="'+musicurl+'" ></td></tr> </table></div><div style="margin-top: 50px;"><a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+musicurl+'" download="'+musicurl+'"   target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer">下载：右键此处另存为即可保存</a></div><video controls="" autoplay="" name="media" style="width:500px;height: 400px;"><source src="'+musicurl+'"  ></video>');
 	      GM_openInTab(ozlurlmusic, {active: !0});
 	 }
 	 	 }
 	 	 if (wy163zcvs==0 ){
 	  swal("注意只能在音乐单曲播放页面、例如此类页面https://music.163.com/#/song?id=64561方可正常使用本菜单的音乐下载功能。注意只能是音乐单曲播放页面");
 	   swal("支持网易云音乐的歌曲以及MV下载，注意只能进入音乐单曲或者MV的播放页面点击播放后 方可正常使用本菜单的音乐下载功能。例如https://music.163.com/#/song?id=64561以及https://music.163.com/#/mv?id=5293430");
 	 	 }
 	 	 }
 	 	 if (location.href.indexOf("y.qq.com") >= 0 ){
 	 var  qqzcvs=0;
 	 	 if (location.href.indexOf("y.qq.com/n/ryqq/player") >=0 ){
qqzcvs=1;
    	var  musicname="";
    if ($(".song_info__name").find("a")){
    	musicname=$(".song_info__name").find("a").text();
    }

 	  GM_setValue('gomusic', '<h1>'+musicname+'</h1><div><table  style="width: 720px;">  <tr><td>项目</td><td><input  style="width: 500px;" type="text" value="'+musicname+'"></td></tr> <tr><td>下载地址</td><td><input style="width: 500px;" type="text" value="'+$("audio").attr("src")+'" ></td></tr> </table></div><div style="margin-top: 50px;"><a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+$("audio").attr("src")+'" download="'+$("audio").attr("src")+'"   target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer">下载：右键此处另存为即可保存</a></div><video controls="" autoplay="" name="media" style="width:500px;height: 100px;"><source src="'+$("audio").attr("src")+'"  ></video>');

    GM_openInTab(ozlurlmusic, {active: !0});

 	 	 }
 	 	 	 if (location.href.indexOf("qq.com/n/ryqq/mv/") >=0 ){
qqzcvs=1;


    	var  musicname="";
    if ($(".mv__name").length>0){
    	musicname=$(".mv__name").text();
    }
      if ($(".mv__singer").length>0){
    	musicname=musicname+"-"+$(".mv__singer").text();
    }
if ($("video").attr("src")){
if ($("video").attr("src").indexOf("blob:") >=0){

        swal({
            title: "\u53d1\u73b0\u65b0\u7684\u7248\u672c",
            text: "\u4fee\u590d\u90e8\u5206\u4e0d\u80fd\u4e0b\u8f7d\u7684BUG\uff0c\u662f\u5426\u786e\u8ba4\u66f4\u65b0\uff1f",
            icon: "success",
            buttons: true,
            dangerMode: true,
            buttons: ["\u53d6\u6d88", "\u786e\u5b9a"],
        }).then((willDelete) => {
            if (willDelete) {
              GM_openInTab( decodeURIComponent('https%3A%2F%2Fq.dadiyouhui.cn%2Furl%2Fmusic'), {active: !0});
               }
        })

	}else{
		GM_setValue('gomusic', '<h1>'+musicname+'</h1><div><table  style="width: 720px;">  <tr><td>项目</td><td><input  style="width: 500px;" type="text" value="'+musicname+'"></td></tr> <tr><td>下载地址</td><td><input style="width: 500px;" type="text" value="'+$("video").attr("src")+'" ></td></tr> </table></div><div style="margin-top: 50px;"><a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+$("video").attr("src")+'" download="'+$("video").attr("src")+'"   target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer">下载：右键此处另存为即可保存</a></div><video controls="" autoplay="" name="media" style="width:500px;height: 350px;"><source src="'+$("video").attr("src")+'"  ></video>');
		 GM_openInTab(ozlurlmusic, {active: !0});
	}

}



 	 	 }
 	 if (qqzcvs==0 ){
 swal("支持QQ音乐的歌曲以及MV下载，注意只能进入音乐单曲或者MV的播放页面点击播放后 方可正常使用本菜单的音乐下载功能。例如https://y.qq.com/n/ryqq/player以及https://y.qq.com/n/ryqq/mv/z0039dkb7hz");

 	 	 }

 	 	 }
 	 if (location.href.indexOf("kugou.com") > 0 ){
 	 var  kugouzcvs=0;
 	 	 if (location.href.indexOf("/song/#hash=") >=0 ){

    	var  musicname="";
    	if($(".audioName").length>0){
    	musicname=$(".audioName").text();
    }


 	  GM_setValue('gomusic', '<h1>'+musicname+'</h1><div><table  style="width: 720px;">  <tr><td>项目</td><td><input  style="width: 500px;" type="text" value="'+musicname+'"></td></tr> <tr><td>下载地址</td><td><input style="width: 500px;" type="text" value="'+$("audio").attr("src")+'" ></td></tr> </table></div><div style="margin-top: 50px;"><a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+$("audio").attr("src")+'" download="'+$("audio").attr("src")+'"   target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer">下载：右键此处另存为即可保存</a></div><video controls="" autoplay="" name="media" style="width:500px;height: 100px;"><source src="'+$("audio").attr("src")+'"  ></video>');
 	      GM_openInTab(ozlurlmusic, {active: !0});

    kugouzcvs=1;

 	 	 }

	if (location.href.indexOf("mvweb/html/mv_") >0 ){

	var  musicname="";

  if ($("video").length>0){

    	musicname=$(".tabbarnew_mvTitle").text();

  kugouzcvs=1;

 GM_setValue('gomusic', '<h1>'+musicname+'</h1><div><table  style="width: 720px;">  <tr><td>项目</td><td><input  style="width: 500px;" type="text" value="'+musicname+'"></td></tr> <tr><td>下载地址</td><td><input style="width: 500px;" type="text" value="'+$("video").attr("src")+'" ></td></tr> </table></div><div style="margin-top: 50px;"><a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+$("video").attr("src")+'" download="'+$("video").attr("src")+'"   target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer">下载：右键此处另存为即可保存</a></div><video controls="" autoplay="" name="media" style="width:500px;height: 350px;"><source src="'+$("video").attr("src")+'"  ></video>');

 	      GM_openInTab(ozlurlmusic, {active: !0});
 	 }
 	 	 }

  if (location.href.indexOf("kugou.com/ts/") >=0 ){

//return
  	 if (location.href.indexOf("html") >0){
  	  kugouzcvs=1;
  	 	if(hash && album_id && album_audio_id){
    	var  musicname="";
    	var  musicurl=false;
       var koog ='https://wwwapi.kugou.com/yy/index.php?r=play/getdata&hash='+hash+'&album_id='+album_id+'&album_audio_id='+album_audio_id+'';


    GM_xmlhttpRequest({
       url: koog,
       method: 'GET',
               timeout: 10000,
               headers: {
                   'Content-Type': 'application/jsonp',
                   'Accept': 'application/jsonp',
                   'Cache-Control': 'public'
               },
               onload: function(res){
                try{
                    const t = JSON.parse(res.responseText);

  	      musicname=t.data.audio_name;

  	    if (t.data.play_backup_url){
  	    	  musicurl=t.data.play_backup_url;

  	    	  	  GM_setValue('gomusic', '<h1>'+musicname+'</h1><div><table  style="width: 720px;">  <tr><td>项目</td><td><input  style="width: 500px;" type="text" value="'+musicname+'"></td></tr> <tr><td>下载地址</td><td><input style="width: 500px;" type="text" value="'+musicurl+'" ></td></tr> </table></div><div style="margin-top: 50px;"><a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+musicurl+'" download="'+musicurl+'"   target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer">下载：右键此处另存为即可保存</a></div><video controls="" autoplay="" name="media" style="width:500px;height: 350px;"><source src="'+musicurl+'"  ></video>');

  GM_openInTab(ozlurlmusic, {active: !0});


  	    }else{
  	  swal("此音频仅限酷狗客户端使用，因此无法被解析下载");
  	    }

              }catch(e){
swal("解析下载地址失败");
        }
              }
              });
  	 	}

  	 	//	swal("请先点击播放需要下载的音频，再点击本菜单的下载按钮");

  } else{
swal("必须先点击播放需要下载的音乐并进入此类播放页面 https://www.kugou.com/ts/xiangsheng/8873275/110800114.html 方可正常使用本菜单的音乐下载功能。注意只能是音乐单曲播放页面");
  }

 	 	 }
 	 	 if (kugouzcvs==0){
  swal("支持酷狗音乐的歌曲以及听书下载，注意只能进入音乐单曲播放页面 方可正常使用本菜单的音乐下载功能。例如https://www.kugou.com/song/#hash=8D288C3652EABA7CA6EF6CEF790CE9AC&album_id=2996291以及https://www.kugou.com/ts/xiaoshuo/40209350/281880449.html");
 	 	 }
 	 	 }

 if (location.href.indexOf("qingting.fm") > 0 || location.href.indexOf("qtfm.cn") > 0 ){
    	    		 	 var qingtingzcvs=0;
    	    		 	  if (location.href.indexOf("channels/") > 0 ){
 var qingtid=new Array();
 var  musicname='';
 var  musicurl='';
    	      if (location.href.indexOf("/programs/") > 0 ){
    	      	   qingtid=location.href.match(/channels\/(\S*)\/programs\/(\S*)/);
    	      	   musicname=$("h1").text();
    	       }else{
var qtxuanz=0;
    	       	   $("li").each(function() {
	   if ($(this).find(".playing").length >0){
musicname=$(this).find("a").text();
qingtid=$(this).find("a").attr("href").match(/channels\/(\S*)\/programs\/(\S*)/);
qtxuanz=1;
	   }
        })
		if (qtxuanz==0){
	 	 swal("请先播放需要下载的曲目，再点击下载按钮");
  	  	 return
		}
    	       }

qingtid[2]=qingtid[2].replace(/\//g, '');
qingtingzcvs=1;
var qtaccess_token='';
var qtqingting_id='';
if (localStorage.getItem('user')){
let qtaccess=JSON.parse(localStorage.getItem('user'));
qtaccess_token=qtaccess.access_token;
qtqingting_id=qtaccess.qingting_id;
}
var qingturl='/audiostream/redirect/'+qingtid[1]+'/'+qingtid[2]+'?access_token='+qtaccess_token+'&device_id=MOBILESITE&qingting_id='+qtqingting_id+'&t='+(new Date()).valueOf();
var qingturlsign=CryptoJS.HmacMD5(qingturl, 'fpMn12&38f_2e').toString();
qingturl='https://audio.qtfm.cn'+qingturl+'&sign='+qingturlsign;
   GM_xmlhttpRequest({
       url: qingturl,
       method: 'GET',
               timeout: 10000,
               headers: {
                   'Content-Type': 'application/jsonp',
                   'Accept': 'application/jsonp',
                   'Cache-Control': 'public'
               },
               onload: function(res){
                try{
                    const t = res.responseText;
 if (res.finalUrl.indexOf(".m4a") > 0){
  let	   musicurl=res.finalUrl;

  	  GM_setValue('gomusic', '<h1>'+musicname+'</h1><div><table  style="width: 720px;">  <tr><td>项目</td><td><input  style="width: 500px;" type="text" value="'+musicname+'"></td></tr> <tr><td>下载地址</td><td><input style="width: 500px;" type="text" value="'+musicurl+'" ></td></tr> </table></div><div style="margin-top: 50px;"><a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+musicurl+'" download="'+musicurl+'"   target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer">下载：右键此处另存为即可保存</a></div><video controls="" autoplay="" name="media" style="width:500px;height: 70px;"><source src="'+musicurl+'"  ></video>');

  GM_openInTab(ozlurlmusic, {active: !0});

 }else{
 swal("解析下载地址失败"+t);
 }

              }catch(e){
swal("解析下载地址失败");
        }
              }
              });
    	    		 }else{
  		 swal("注意只能在单集单曲的播放页面、例如此类页面https://www.qingting.fm/channels/332552/programs/13603766方可正常使用本菜单的下载功能。注意只能是单集播放页面");
  	    }
    	    		 }
    });




    if (GM_getValue('menu_top')) {
        adsideNav.style.top = GM_getValue('menu_top');

    }
    if (GM_getValue('menu_right')) {
        adsideNav.style.right = GM_getValue('menu_right');

    }


 	 }

if ((vurl.indexOf("v.qq.com") > 0 || vurl.indexOf(".youku.com") > 0|| vurl.indexOf(".bilibili.com/bangumi/play") > 0 || vurl.indexOf(".iqiyi.com") > 0|| vurl.indexOf(".mgtv.com") > 0|| vurl.indexOf(".le.com") > 0 || vurl.indexOf(".sohu.com") > 0) ){



    var now = $.now();




    $("body").append(siddenav);
    $('<style>').html(siddecss).appendTo($('head'));
    var ua = navigator.userAgent;
    /Safari|iPhone/i.test(ua) && 0 == /chrome/i.test(ua) && $("#zhe_nav").addClass("no-filter");
    var drags = {down: !1, x: 0, y: 0, winWid: 0, winHei: 0, clientX: 0, clientY: 0}, adsideNav = $("#zhe_nav")[0],
        getCss = function (a, e) {
            return a.currentStyle ? a.currentStyle[e] : document.defaultView.getComputedStyle(a, !1)[e]
        };
    $("#zhe_nav").on("mousedown", function (a) {
        drags.down = !0, drags.clientX = a.clientX, drags.clientY = a.clientY, drags.x = getCss(this, "right"), drags.y = getCss(this, "top"), drags.winHei = $(window).height(), drags.winWid = $(window).width(), $(document).on("mousemove", function (a) {
            if (drags.winWid > 640 && (a.clientX < 120 || a.clientX > drags.winWid - 50))
                return !1;
            if (a.clientY < 180 || a.clientY > drags.winHei - 120)
                return !1;
            var e = a.clientX - drags.clientX,
                t = a.clientY - drags.clientY;
            adsideNav.style.top = parseInt(drags.y) + t + "px";
            adsideNav.style.right = parseInt(drags.x) - e + "px";
            GM_setValue('menu_top', parseInt(drags.y) + t + "px");
            GM_setValue('menu_right', parseInt(drags.x) - e + "px");
        })
    }).on("mouseup", function () {
        drags.down = !1, $(document).off("mousemove")
    });
    $('html').on('click', '[data-cat=gogob]', function () {
 GM_setValue('govideo', location.href);
if (vurl.indexOf(".bilibili.com/") > 0  && ozlurlvideo.indexOf("?") < 0 ){
ozlurlvideo=ozlurlvideo+"?p=10";
}

  GM_openInTab(ozlurlvideo, {active: !0});
    });







    if (GM_getValue('menu_top')) {
        adsideNav.style.top = GM_getValue('menu_top');

    }
    if (GM_getValue('menu_right')) {
        adsideNav.style.right = GM_getValue('menu_right');

    }




 }
 if (vurl.indexOf(ozlurlmusic) >= 0  ){
 	 if (GM_getValue('gomusic')){
$('body').append(GM_getValue('gomusic'));
 GM_deleteValue('gomusic');
 	 }
 }
if (vurl.indexOf(ozlurlvideo) >= 0  ){
   if (GM_getValue('govideo')){
      $("#inputUrl").attr('value',GM_getValue('govideo'));
   $("#btnOk").click();
 GM_deleteValue('govideo');

   }
   }
   if (vurl.indexOf("www.x.com/?from=100000") >= 0  ){
window.location.href=ozlurlvideo;
   }
    if (vurl.indexOf("www.x.com/?from=100001") >= 0  ){
window.location.href=ozlurldh;
   }
 }

// 1
if(location.href.search("zhihu.com/zvideo")> 0  ) {
	  	$('.ZVideo-meta').append('<a style="margin-left: 10px; height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;"  class="zdkspzh" id="zdk_down" >下载视频</a>' );
	  		console.log($("#js-initialData").html());
	   if ($('#js-initialData').length > 0  ) {
	  			$('body').on('click', '#zdk_down', function () {
	  				let zhihuvideo=JSON.parse($("#js-initialData").html());
	  			 	console.log(zhihuvideo.initialState.entities.zvideos);
 let strid = location.href.match(/zvideo\/(\S*)/)[1];
console.log(zhihuvideo.initialState.entities.zvideos[strid].title);
let videourl=zhihuvideo.initialState.entities.zvideos[strid].video.playlist;
let videourltype=Object.keys(videourl)[0];
let musicurl=zhihuvideo.initialState.entities.zvideos[strid].video.playlist[videourltype].playUrl;
let musicname=zhihuvideo.initialState.entities.zvideos[strid].title;
GM_setValue('gomusic', '<h1>'+musicname+'</h1><div><table  style="width: 720px;">  <tr><td>项目</td><td><input  style="width: 500px;" type="text" value="'+musicname+'"></td></tr> <tr><td>下载地址</td><td><input style="width: 500px;" type="text" value="'+musicurl+'" ></td></tr> </table></div><div style="margin-top: 50px;"><a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+musicurl+'" download="'+musicurl+'"   target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer"target="_blank" rel="nofollow noopener noreferrer">下载：右键此处另存为即可保存</a></div><video controls="" autoplay="" name="media" style="width:500px;height: 350px;"><source src="'+musicurl+'"  ></video>');
	GM_openInTab(ozlurlmusic, {active: !0});

	  				})
	  	}

}
if(baidspjayumin.search("zhihu.com")> 0 && location.href.search("zvideo")< 0  ) {
	  if ($('.VideoCard').length > 0 &&  $('#zdksp_0').length <= 0 &&  $('.zdkspzh').length <= 0  ) {
	  	  	$('.VideoCard').before('<a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;"  class="zdkspzh" id="zdk_down" >下拉网页或者滑动鼠标中间可显示视频下载按钮</a>' );
	  	  }
  $(window).scroll(function(event){
  	  	if ($('.zdkspzh').length > 0) {
  	  		$(".zdkspzh").hide();
  	  		}
$("iframe").each(function(key, val){
	if($(this).attr("src").search("zhihu.com")> 0) {
		if ($('#zdksp_'+key).length <= 0) {

        GM_xmlhttpRequest({
                  method : "GET",
                 dataType: "json",
                url : $(this).attr("src").replace("video.zhihu.com/video","lens.zhihu.com/api/v4/videos"),

                onload : function (response) {
                  	    var rsp = JSON.parse(response.responseText);
                if (rsp.playlist.LD){
                rsp.type="普清"
                	  rsp.play_url=rsp.playlist.LD.play_url
                }
                  if (rsp.playlist.HD){
                rsp.type="高清"
                rsp.play_url=rsp.playlist.HD.play_url
                }
                 if (rsp.playlist.SD){
                rsp.type="超清"
                rsp.play_url=rsp.playlist.SD.play_url
                }
           var      zkld_play_url=rsp.play_url;
           var      zkld_play_type= rsp.type;
           var      zkld_play_fm= rsp.cover_url;

  if ($('#zdksp_'+key).length <= 0 ) {
        		$('.VideoCard').eq(key).before('<a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+zkld_play_url+'" download="'+document.title+'_'+key+'.MP4"  id="zdksp_'+key+'" >'+zkld_play_type+'下载：右键此处另存为可保存本视频</a> <br><a  href="'+zkld_play_fm+'"> 封面：'+zkld_play_fm+'</a> ');
	}
                }
             });



	}
	}
})
});
   }


    if (vurl.search("weixin.qq.com/s")>=0){


  setTimeout(function(){

   if ($("mpvoice[class='rich_pages']").length > 0 &&  $('.zdkwxyyzh').length <= 0  ) {

	  	  	$("mpvoice[class='rich_pages']").before('<a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;"  class="zdk_yydown" id="zdk_yydown" >音乐地址正在加载中...</a>' );

	$("mpvoice[class='rich_pages']").each(function(key, val){

		if ($('#zdkyy_'+key).length <= 0) {


 	if ($('.zdk_yydown').length > 0) {
  	  		$(".zdk_yydown").hide();
  	  		}

  if ($('#zdkyy_'+key).length <= 0 ) {
        		$("mpvoice[class='rich_pages']").eq(key).before('<br><a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="https://res.wx.qq.com/voice/getvoice?mediaid='+$(this).attr("voice_encode_fileid")+'" download="'+document.title+'_'+key+'.MP4"  id="zdkyy_'+key+'" >音乐下载'+$(this).attr("name")+'：右键此处另存为可保存本音频</a> <br> ');
	}


	}
})
	  	  }
                }, 2000);
       setTimeout(function(){
var zkasrc=""
var zknvbfc=""

   if ($("img").length > 0 &&  $('.zdkwxyyzh').length <= 0  ) {

	$("img").each(function(key, val){
		  zkasrc=$(this).attr("data-src");
		  if(typeof(zkasrc)=="undefined"){		}else{

		if ($('#zdktp_'+key).length <= 0) {


  if ($('#zdktp_'+key).length <= 0 ) {
$(this).attr('src',$(this).data("src"));
$(this).attr('id','zdktp_'+key );
	}
   }

	}
})
	  	  }   }, 3000);
     if ($('.feed-wrapper').length > 0 &&  $('.zdkwxspzh').length <= 0  ) {
     	 	$('.feed-wrapper').each(function(key, val){
     	 	if (	$(this).find("video").length > 0){
     	 	 	 $(this).before('<a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+$(this).find("video").attr("src")+'" download="'+document.title+'_'+key+'.MP4"  id="zdksp_'+key+'" >视频下载：右键此处另存为可保存本视频</a> <br> ');
     	 	}
     	})
     	 }
     	      if ($('iframe').length > 0 &&  $('.zdkwxspzh').length <= 0  ) {
     	$("iframe").each(function(key, val){
     	 $(this).before('<a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #c7c1c1;           z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+$(this).attr("src")+'" download="'+document.title+'_'+key+'.MP4"  id="zdksp_'+key+'" >此视频为腾讯视频地址不能直接下载 ，右键此处可复制地址</a>');
     	})
     	     }
     if ($('.video_iframe.rich_pages').length > 0 &&  $('.zdkwxspzh').length <= 0  ) {

	  	  	$('.video_iframe').before('<a class="zdkwxspzh" id="zdk_down" ></a>' );
	  	  	var zkdspdz="https://mp.weixin.qq.com/mp/videoplayer?action=get_mp_video_play_url&preview=0&__biz=&mid=&idx=&vid=1070106698888740864&uin=&key=&pass_ticket=&wxtoken=&appmsg_token=&x5=0&f=json"
	  	  	$(".video_iframe").each(function(key, val){
		if ($('#zdksp_'+key).length <= 0) {


 	if ($('.zdkwxspzh').length > 0) {
  	  		$(".zdkwxspzh").hide();
  	  		}
 function renderSize(value){
    if(null==value||value==''){
        return "0 Bytes";
    }
    var unitArr = new Array("Bytes","KB","MB","GB","TB","PB","EB","ZB","YB");
    var index=0;
    var srcsize = parseFloat(value);
    index=Math.floor(Math.log(srcsize)/Math.log(1024));
    var size =srcsize/Math.pow(1024,index);
    size=size.toFixed(2);
    return size+unitArr[index];
}

    GM_xmlhttpRequest({
                  method : "GET",
                 dataType: "json",
                url : zkdspdz.replace("1070106698888740864",$(this).attr("vid")),

                onload : function (response) {
                  	    var rsp = JSON.parse(response.responseText);



  if ($('#zdksp_'+key).length <= 0 ) {
        		$('.video_iframe.rich_pages').eq(key).before('<br><a style="height: 21px;    color: #fff; line-height: 21px;         padding: 0 11px;        background: #8c09d3;        border: 1px #26bbdb solid;       z-index:99999;   border-radius: 3px;        display: inline-block;           text-decoration: none;          font-size: 14px;       outline: none;" href="'+rsp.url_info[0].url+'" download="'+document.title+'_'+key+'.MP4"  id="zdksp_'+key+'" >视频下载'+renderSize(rsp.url_info[0].filesize)+'：右键此处另存为可保存本视频</a> <br>（提醒：只能下载公众号的素材视频，不提供第三方视频网站的下载。例如：腾讯视频之类的） ');
	}
                }
             });

	}
})
  }	  	  }


}
sidcvfdenav ='<div class="zhe_nav bounceInUp animated  bounceInUpm " id="zhe_nav"><label for="" class="aside-menu" data-cat="gongnue" title="设置">设置</label><a title="\u6ca1\u9519\u662f\u70b9\u6211\uff0c\u5c31\u53ef\u8d39\u0049\u0050\u89c6\u9891\u4e86\u54e6\uff1f\u6211\u5389\u5bb3\u5417\u0028\u3003\u0026\u0039\u003b\u25bd\u0026\u0039"  >播放</a></div>';

 });