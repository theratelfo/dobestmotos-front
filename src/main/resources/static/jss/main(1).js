//悬浮效果
(function($){$.fn.floatAd=function(l){var m={customhtml:"",close:1,closeHTML:"",speed:30,id_class:"",x:"0",y:"0"};var n=false;var l=$.extend(m,l);var o="<div id='qfy_float_ad' class='"+l.id_class+"' style='position:absolute;left:0px;top:0px;z-index:1000000;cleat:both;'>";o+=l.customhtml;if(l.close=="1"){if(l.closeHTML==""){o+="<div id='qfy_close_f_ad' class='"+l.id_class+"' style='position:absolute;width:30px;height:16px;top:-18px;right:0px;cursor:pointer;float:right;font-size:14px'>关闭</div></div>"}else{o+="<div id='qfy_close_f_ad' class='"+l.id_class+"' >"+l.closeHTML+"</div></div>"}}$('body').append(o);function qfy_ad_init(){var x=l.x,y=l.y+$(window).scrollTop();var g=true,yin=true;var h=1;var i=10;var j=$("#qfy_float_ad."+l.id_class);var k=function(){var L=0,T=$(window).scrollTop();var a=j.width();var b=j.height();var c=$(window).width();var d=$(window).height()+$(window).scrollTop();x=x+h*(g?1:-1);if(x<L){g=true;x=L}if(x>c-a-1){g=false;x=c-a-1}y=y+h*(yin?1:-1);if(y>d-b-10){yin=false;y=d-b-10}if(y<T){yin=true;y=T}var e=x;var f=y;j.css({'top':f,'left':e})};n=setInterval(k,l.speed);$('#qfy_float_ad.'+l.id_class).mouseover(function(){if(n){clearInterval(n)}});$('#qfy_float_ad.'+l.id_class).mouseout(function(){n=setInterval(k,l.speed)})}qfy_ad_init();$('#qfy_close_f_ad.'+l.id_class).click(function(){$('#qfy_float_ad.'+l.id_class+',#QFY_overlay.'+l.id_class).remove();clearInterval(n)})}})(jQuery);

function get_browser_name(){var e=window.navigator.userAgent;return-1<e.indexOf("Opera")||-1<e.indexOf("OPR/")?"Opera":-1<e.indexOf("Edge")?"Edge":-1<e.indexOf("Chrome")?"Chrome":-1<e.indexOf("Safari")?"Safari":-1<e.indexOf("Firefox")?"Firefox":-1<e.indexOf("MSIE")||-1<e.indexOf("Trident/7")?"IE":"Other"}
jQuery('a[href^="skype%3A"]').each(function(){
	let href = jQuery(this).attr("href").replace("skype%3A","skype:");
	jQuery(this).attr("href",href);
});
if(jQuery("body").width()<760){
	jQuery('a[href^="https://web.whatsapp.com"]').each(function(){
		let href = jQuery(this).attr("href").replace("web.whatsapp.com","api.whatsapp.com");
		jQuery(this).attr("href",href);
	});
}
//背景图片自适应
//https://css-tricks.com/almanac/properties/o/object-fit/
(function($){
	function coverFillSwitch(container,img,invert){if(!container||!img){return false}var imgHeight=img.naturalHeight||img.videoHeight;var imgWidth=img.naturalWidth||img.videoWidth;var containerRatio=container.offsetWidth/container.offsetHeight;var imgRatio=imgWidth/imgHeight;var ratioComparison=false;if(imgRatio>=containerRatio){ratioComparison=true}if(invert){ratioComparison=!ratioComparison}if(ratioComparison){img.style.height="100%";img.style.width="auto"}else{img.style.height="auto";img.style.width="100%"}}function objectFitResize(){var i,img,container;var imgsCover=document.getElementsByClassName("section-background-video");for(i=0;i<imgsCover.length;i++){img=imgsCover[i];container=img.parentElement;if(container.classList.contains("background-media")){coverFillSwitch(container,img)}}}function applyStandardProperties(container,img){var containerStyle=window.getComputedStyle(container);if(containerStyle.overflow!=="hidden"){container.style.overflow="hidden"}if(containerStyle.position!=="relative"&&containerStyle.position!=="absolute"&&containerStyle.position!=="fixed"){container.style.position="relative"}img.style.position="absolute";img.style.top="50%";img.style.left="50%";img.style.transform="translate(-50%,-50%)"}function objectFitInt(){var imgs=document.getElementsByClassName("section-background-video");for(var i=0;i<imgs.length;i++){var type="cover";var img=imgs[i];var container=img.parentElement;switch(type){case"container":break;case"cover":coverFillSwitch(container,img);applyStandardProperties(container,img);break;case"contain":coverFillSwitch(container,img,true);applyStandardProperties(container,img);break;case"fill":img.style.height="100%";img.style.width="100%";applyStandardProperties(container,img);break;case"none":img.style.height="auto";img.style.width="auto";applyStandardProperties(container,img);break;case"scale-down":img.style.maxHeight="100%";img.style.maxWidth="100%";img.style.height="auto";img.style.width="auto";applyStandardProperties(container,img);break;default:break}}}var resizeTimeout;function resizeThrottler(){if(!resizeTimeout){resizeTimeout=setTimeout(function(){resizeTimeout=null;objectFitResize()},66)}}
	var $ua = get_browser_name();
	if(($ua=="Edge" || $ua=="IE") && !is_edit_model ){
		resizeThrottler();
		window.addEventListener("resize",resizeThrottler,false);
	}
})(jQuery);
window.onload = function() {
    if(!document.hasOwnProperty("ontouchstart")) {
    	 jQuery("html").addClass("no-touch");
    }
};
function resetSectionHeight() {
	var h = jQuery(window).height();
	var body_w = jQuery("body").width();
	var na = ".section.minperheight";
	var tl = ":not(.fixheight)";
	var heights = [5, 10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100];

	if (body_w > 760) {
		for(var i=0; i<heights.length; i++){
			var L = heights[i];
			if (jQuery(na+L+tl).length > 0) {
				jQuery(na+L+tl).css("min-height", h*(L/100) + "px");
			}
		}
		jQuery(".section.fixheight").each(function() {
			var fixheight = jQuery(this).attr("data-fixheight");
			var w = jQuery(this).width();
			if (w > 0) {
				var h = w * fixheight;
				jQuery(this).height(h);
				jQuery(this).css("min-height", h + "px");
			}
		});
		jQuery(".qfy-column-inner.fixheight").each(function() {
			var fixheight = jQuery(this).attr("data-fixheight");
			var w = jQuery(this).width();
			if (w > 0) {
				var h = w * fixheight;
				if (jQuery(this).closest(".section.fixheight").length > 0) {
					h = jQuery(this).closest(".section.fixheight").height();
				}
				jQuery(this).height(h);
				jQuery(this).css("min-height", h + "px");
				jQuery(this).find(">.column_inner").css("min-height", h + "px");
			}
		})
	} else {
		for(var i=0; i<heights.length; i++){
			var L = heights[i];
			if (jQuery(na+L).length > 0) {
				jQuery(na+L).css("min-height", h/(L/100) + "px");
			}
		}
	}
}


var last_size_mobile = false;
var size_mobile = false;
function resizeDefaultObjSize(){
	if(dtGlobals.isMobile==false){
		 if(jQuery("body").width()<768){
			 size_mobile = "mobile";
			 if(!last_size_mobile) last_size_mobile ="mobile";
		 }else{
			 size_mobile = "pc";
			 if(!last_size_mobile) last_size_mobile ="pc";
		 }
		 if(size_mobile!=last_size_mobile){
			 last_size_mobile = size_mobile;
			 jQuery(".qfy-element").each(function(){
					var m_padding = jQuery(this).attr("m-padding");
					var p_padding = jQuery(this).attr("p-padding");
					if(size_mobile=="mobile"){
						if(m_padding ){
							jQuery(this).css("padding",m_padding);
						}
					}else{
						if(p_padding ){
							jQuery(this).css("padding",p_padding);
						}
					}

			 });

		 }
	}


	if(jQuery(".qfe_map_wraper iframe").length>0){
			jQuery(".qfe_map_wraper iframe").each(function(){
				var oh = jQuery(this).parent().attr("style");
				if(typeof(oh) =="undefined"){
					var width = jQuery(this).width();
					if(width>0){
						jQuery(this).parent().height((width*2/4)+"px");
					}
				}
			})
		}
		if(jQuery(".vc_bit_raw_video").length>0){
			jQuery(".vc_bit_raw_video").each(function(){
				var oh = jQuery(this).attr("style");
				if(typeof(oh) =="undefined"){
					var width = jQuery(this).width();
					if(width>0){
						jQuery(this).height((width*2/4)+"px");
					}
				}
			})
		}
		resetSectionHeight();
		column_init_align();
}
function resize_royalSlider_gallery_new(org_obj){
	jQuery(".qfy-tabcontent .royalSlider_gallery_new").each(function(){
		var obj = jQuery(this);
		setTimeout(function(){
			var h1 = obj.find(".rsOverflow").height();
			var h2 = obj.find(".rsSlide.rsActiveSlide").height();
			if(h2>0 && h1!=h2){
				obj.find(".rsOverflow").height(h2);
			}
		},200);
	})

}
function searchForm(obj){
	if(typeof(obj)=="undefined"){
		obj = jQuery('.site_tooler .searchform .submit,.search_contain .searchform .submit');
	}

	/*--search*/
	obj.unbind().on('click', function(e) {
		e.preventDefault();
		jQuery(this).siblings('input.searchsubmit').click();
		return false;
	});

}
function qfy_setCookie(c_name, value, exdays) {
	  var exdate = new Date();
	  exdate.setDate(exdate.getDate() + exdays);
	  var c_value = encodeURIComponent(value) + ((exdays === null) ? "" : "; expires=" + exdate.toUTCString());
	  document.cookie = c_name + "=" + c_value;

	}
function mobile_menu_fix(){
	if(jQuery("#dl-menu").length==0){
		return;
	}
	var top_scrTop = 0,top_scrDir = 0,top_scrUp = false,top_scrDown = false,top_isMoved = false;
	var top_threshold = jQuery("#dl-menu").offset().top + jQuery("#dl-menu").height();

	jQuery(window).on("scroll", function() {
		var top_tempCSS = {},top_tempScrTop = jQuery(window).scrollTop();

		top_scrDir = top_tempScrTop - top_scrTop;

		if (top_tempScrTop > top_threshold && top_isMoved === false) {
			top_isMoved = true;
			jQuery("#dl-menu").addClass("positionFixed");
		}
		else if (top_tempScrTop <= top_threshold && top_isMoved === true) {
			top_isMoved = false;
			jQuery("#dl-menu").removeClass("positionFixed");
		};
		top_scrTop = jQuery(window).scrollTop();

	});
}
function mobile_menu_fix_2(){
	var top_scrTop = 0,top_scrDir = 0,top_scrUp = false,top_scrDown = false,top_isMoved = false;
	var top_threshold = jQuery(".dl-menu-fixedheader").height();
	if( jQuery(".dl-menu-fixed-blank").length==0 && jQuery("#page").css("position")!="absolute"){
	jQuery(".dl-menu-fixedheader").after("<div class='dl-menu-fixed-blank' style='display:none;height:"+top_threshold+"px;'></div>");
	}

	jQuery(window).on("scroll", function() {
		var top_tempCSS = {},top_tempScrTop = jQuery(window).scrollTop();

		top_scrDir = top_tempScrTop - top_scrTop;

		if(top_scrDir>0){
			jQuery("body").removeClass("scroll-uping").addClass("scroll-downing");
		}else if(top_scrDir<0){
			jQuery("body").addClass("scroll-uping").removeClass("scroll-downing");
		}
		if (top_tempScrTop > top_threshold && top_isMoved === false) {
			top_isMoved = true;
			jQuery(".dl-menu-fixedheader").css("position","fixed");
			jQuery("body").addClass("fixedheadering");
			jQuery(".dl-menu-fixed-blank").show();
		}
		else if (top_tempScrTop <= top_threshold && top_isMoved === true) {
			top_isMoved = false;
			jQuery(".dl-menu-fixedheader").css("position","relative");
			jQuery("body").removeClass("fixedheadering");
			jQuery("body").removeClass("fixedheadering scroll-uping scroll-downing");
			jQuery(".dl-menu-fixed-blank").hide();
		};
		top_scrTop = jQuery(window).scrollTop();

	});
}
function _image_popup_flexslider(startAt){
	jQuery(".image_popup .qfe_flexslider").flexslider({
	       animation: "slide",
	       slideshow: false,
	       slideshowSpeed: 10000,
	       sliderSpeed: 800,
	       controlNav: 1,
	       directionNav: 1,
	       smoothHeight: true,
		   startAt:startAt,
		   start: function(){
			   var localvideo =  jQuery(".image_popup .flex-active-slide video.localvideo");
			   if(localvideo.length>0){
				   if(localvideo.get(0).currentTime==0){
					   jQuery(".image_popup .flex-active-slide video.localvideo").get(0).play();
				   }
			   }
			  var videoiframe =  jQuery(".image_popup .flex-active-slide iframe.media-cloud-iframe");
			  if(videoiframe.length>0 && !videoiframe.attr("src") ){
				  videoiframe.attr("src",videoiframe.attr("data-src"));
			  }
		   },
		   before: function(){
			   //var localvideo =  jQuery(".image_popup .flex-active-slide video.localvideo");
			   //if(localvideo.length>0){
					 //jQuery(".image_popup .flex-active-slide video.localvideo").get(0).stop();
			  // }
		   },
		   after: function(){
			   var localvideo =  jQuery(".image_popup .flex-active-slide video.localvideo");
			   if(localvideo.length>0){
				   if(localvideo.get(0).currentTime==0){
					   jQuery(".image_popup .flex-active-slide video.localvideo").get(0).play();
				   }
			   }
			   var videoiframe =  jQuery(".image_popup .flex-active-slide iframe.media-cloud-iframe");
			   if(videoiframe.length>0 && !videoiframe.attr("src") ){
				  videoiframe.attr("src",videoiframe.attr("data-src"));
			   }
		   },
	     });
}
function initmouseover(){

	jQuery(".mouseHover").live({
	  mouseenter: function() {
		jQuery(this).addClass("hover");

	  },
	  mouseleave: function() {
		jQuery(this).removeClass("hover");
	  }
	});
	jQuery("a.bitButton").live({
		  mouseenter: function() {
			  	var delay = jQuery(this).attr("delay");
				var str = "";
				if(delay &&delay!="0"){
					str = "all "+delay+" linear";
				}
			  	var texthovercolor=jQuery(this).attr("texthovercolor");
				if(texthovercolor){
					jQuery(this).find(".iconText").css("color",texthovercolor);
					jQuery(this).find(".iconText").css("transition",str);
				}
				var iconhovercolor=jQuery(this).attr("iconhovercolor");
				if(iconhovercolor){
					jQuery(this).find("i.glyphicon").css("color",iconhovercolor);
					jQuery(this).find("i.glyphicon").css("transition",str);
				}
				var backgroundhovercolor=jQuery(this).attr("backgroundhovercolor");
				if(backgroundhovercolor){
					jQuery(this).css("background",backgroundhovercolor);
					jQuery(this).css("transition",str);
					jQuery(this).removeAttr('onmouseover');
					jQuery(this).removeAttr('onmouseout');
				}
				var borderhovercolor=jQuery(this).attr("borderhovercolor");
				if(borderhovercolor){
					jQuery(this).css("border","1px solid "+borderhovercolor);
					jQuery(this).css("transition",str);
				}
		  },
		  mouseleave: function() {
			   jQuery(this).css("transition","");
			  	var textcolor=jQuery(this).attr("textcolor");
				if(textcolor){
					jQuery(this).find(".iconText").css("color",textcolor);
				}
				var iconcolor=jQuery(this).attr("iconcolor");
				if(iconcolor){
					jQuery(this).find("i.glyphicon").css("color",iconcolor);
				}
				var backgroundcolor=jQuery(this).attr("backgroundcolor");
				if(backgroundcolor){
					jQuery(this).css("background",backgroundcolor);
				}
				var bordercolor=jQuery(this).attr("bordercolor");
				if(bordercolor){
					jQuery(this).css("border-color",bordercolor);
				}
		  }
		});

	jQuery("a.bitIcon").live({
		  mouseenter: function() {
			  	var delay = jQuery(this).attr("delay");
				var str = "";
				if(delay &&delay!="0"){
					str = "all "+delay+" linear";
				}
			  	var texthovercolor=jQuery(this).attr("texthovercolor");
				if(texthovercolor){
					jQuery(this).find(".iconText").css("color",texthovercolor);
					jQuery(this).find(".iconText").css("transition",str);
				}
				var iconhovercolor=jQuery(this).attr("iconhovercolor");
				if(iconhovercolor){
					jQuery(this).find("i.glyphicon").css("color",iconhovercolor);
					jQuery(this).find("i.glyphicon").css("transition",str);
				}
				var backgroundhovercolor=jQuery(this).attr("backgroundhovercolor");
				if(backgroundhovercolor){
					jQuery(this).find("b").css("background",backgroundhovercolor);
					jQuery(this).find("b").css("transition",str);
					jQuery(this).find("b").removeAttr('onmouseover');
					jQuery(this).find("b").removeAttr('onmouseout');
				}
				var borderhovercolor=jQuery(this).attr("borderhovercolor");
				if(borderhovercolor){
					jQuery(this).find("b").css("border","1px solid "+borderhovercolor);
					jQuery(this).find("b").css("transition",str);
				}
		  },
		  mouseleave: function() {
			   jQuery(this).css("transition","");
			  	var textcolor=jQuery(this).attr("textcolor");
				if(textcolor){
					jQuery(this).find(".iconText").css("color",textcolor);
				}
				var iconcolor=jQuery(this).attr("iconcolor");
				if(iconcolor){
					jQuery(this).find("i.glyphicon").css("color",iconcolor);
				}
				var backgroundcolor=jQuery(this).attr("backgroundcolor");
				if(backgroundcolor){
					jQuery(this).find("b").css("background",backgroundcolor);
				}
				var bordercolor=jQuery(this).attr("bordercolor");
				if(bordercolor){
					jQuery(this).find("b").css("border-color",bordercolor);
				}
		  }
		});

	//可以挪 JS需要使用的地方动态加载 11k
	jQuery("a.qfy_popup").live({
		click: function(e) {
			 e.preventDefault();
			 e.stopPropagation();
			 var popupmodel =  jQuery(this).attr("data-popup-model");
			 var popupstyle =  jQuery(this).attr("data-popup-style");
			 var popupsize =  jQuery(this).attr("data-popup-size");
			 var bodywidth = jQuery("body").width();
			 var bodyheight = jQuery(window).height();

			 if( popupstyle=="0" || popupstyle=="1"   ){
				 if(popupsize=="0.8"){
					var width =  bodywidth*0.8;
					var height = bodyheight*0.8;
					var toppx = bodyheight*0.1;
					var leftpx = bodywidth*0.1;
				 }else if(popupsize=="0.6"){
					var width =  bodywidth*0.6;
					var height = bodyheight*0.6;
					var toppx = bodyheight*0.2;
					var leftpx = bodywidth*0.2;
				 }else if(popupsize=="0.4"){
					 var width =  bodywidth*0.4;
					 var height = bodyheight*0.4;
					 var toppx = bodyheight*0.3;
				    var leftpx = bodywidth*0.3;
				 }
			 }else  if(  popupstyle=="2"){
				 if(popupsize=="0.8"){
					var width = bodywidth*0.5;
					var height = bodyheight*0.5;
					var toppx = bodyheight*0.25;
					var leftpx = bodywidth*0.25;
				 }else if(popupsize=="0.6"){
					var width =  bodywidth*0.3;
					var height = bodyheight*0.5;
					var toppx = bodyheight*0.25;
					var leftpx = bodywidth*0.35;
				 }else if(popupsize=="0.4"){
					 var width = bodywidth*0.2;
					 var height =bodyheight*0.5;
					 var toppx = bodyheight*0.25;
				    var leftpx = bodywidth*0.4;
				 }
			 }
			 var defaultpadding="padding:40px;";
			 if(width<480){
				 width = 320;
				 leftpx = (bodywidth-320)*0.5;
				 if(popupstyle=="1") popupstyle="2";
				 if(popupstyle!="2"){
					 height = 250;
					 toppx = (bodyheight-250)*0.5;
				 }
				 defaultpadding = "padding:10px;";
			 }
			 var  allmessage = "";
			 var startAt = 0;
			 if(popupmodel=="0"){
				 var default_img = jQuery(this).attr("data-href");
				 var title = jQuery(this).attr("data-ptitle");
				 var subtitle =  jQuery(this).attr("data-subtitle");
				 var desc = jQuery(this).attr("data-desc");
				 var isvideo =   jQuery(this).closest(".qfy_item_post").find("video.qfyvideo").length;
				 var isyunvideo =   jQuery(this).closest(".qfy_item_post").find(".video_play >iframe").length;
				 var video_html = "";
				 var videoclass =  "";
				 if(isvideo){
					 videoclass = "video";
					 var video_html = jQuery(this).closest(".qfy_item_post").find("video.qfyvideo").prop("outerHTML");
					 video_html = jQuery(video_html).attr("controls","controls").attr("class","localvideo simple").attr("style","width:100%;height:100%;background:#000;").prop("outerHTML");

				 }else if(isyunvideo){
					 videoclass = "video";
					 var video_html = jQuery(this).closest(".qfy_item_post").find(".video_play >iframe").prop("outerHTML");
					 var videoheight = height;
					 if(popupstyle=="2"){
						 videoheight = 0.6*height;
					 }
					 video_html = jQuery(video_html).attr("data-height",videoheight).attr("data-autoplay","true").attr("src", jQuery(video_html).attr("data-src")).prop("outerHTML");
				 }
				 if(default_img || video_html){
					 var message = "";
					 if( popupstyle=="0" ){
						 message = '<div class="pop_image pop_image1 '+videoclass+'" style="width:'+width+'px;word-wrap: break-word;height:'+height+'px;background-image:url('+default_img+');background-size:cover;background-position:center center;background-repeat:no-repeat;">'+video_html+'<div  class="content_inner"  style="box-sizing:border-box;position:absolute;bottom:0;width:100%;background:rgba(0,0,0,0.6);padding:20px 15px;text-align:left;"><div class="head"  style="color:#fff;font-size:16px;padding-bottom:10px;">'+title+'</div><div class="content" style="color:#ccc;font-size:14px;">'+desc+'</div></div></div>';
					 } else if( popupstyle=="1"  ){
						 message = '<div class="pop_image pop_image2 '+videoclass+'" style="width:'+width+'px;word-wrap: break-word;height:'+height+'px;"><div style="background-image:url('+default_img+');background-size:cover;background-position:center center;background-repeat:no-repeat;width:60%;height:100%;float:left;">'+video_html+'</div><div class="content_inner"  style="box-sizing:border-box;float:left;width:40%;height:100%;background:#fff;padding:20px 15px;text-align:left;"><div class="head"  style="color:#333;font-size:16px;padding-bottom:10px;">'+title+'</div><div class="subhead"  style="color:#999;font-size:14px;padding-bottom:10px;">'+subtitle+'</div><div class="content overflowy" style="color:#666;font-size:14px;overflow-y: auto;;">'+desc+'</div></div> </div>';
				 	 }	else if( popupstyle=="2"  ){
						 message = '<div class="pop_image pop_image3 '+videoclass+'" style="width:'+width+'px;word-wrap: break-word;height:'+height+'px;"><div style="background-image:url('+default_img+');background-size:cover;background-position:center center;background-repeat:no-repeat;width:100%;height:60%;">'+video_html+'</div><div class="content_inner" style="box-sizing:border-box;float:left;width:100%;height:40%;background:#fff;'+defaultpadding+'text-align:left;"><div class="head"  style="color:#333;font-size:16px;padding-bottom:10px;">'+title+'</div><div class="subhead"  style="color:#999;font-size:14px;padding-bottom:10px;">'+subtitle+'</div><div class="content overflowy" style="color:#666;font-size:14px;overflow-y: auto;;">'+desc+'</div></div>  </div>';
					 }
					 allmessage = '<div class="image_popup" style="position:relative;">'+message+'<div class="block-close" style="position: absolute;top: 2px;right: 9px;color: rgb(204, 204, 204);cursor: pointer;">✕</div></div>';
				 }

			 }else{
				 var p = jQuery(this).closest(".qfy-element");
				 var $thispost =jQuery(this).closest(".qfy_item_post");

				 var message = "";
				 p.find(".qfy_item_post:visible").each(function(i){
					 if(jQuery(this)[0]===$thispost[0]){
						 startAt = i;
					 }
					 $this = jQuery(this).find("a.qfy_popup:first");
					 var default_img =$this.attr("data-href");
					 var title = $this.attr("data-ptitle");
					 var subtitle = $this.attr("data-subtitle");
					 var desc =$this.attr("data-desc");
					 var video_html = "";
					 var isvideo =   jQuery(this).find("video.qfyvideo").length;
					 var isyunvideo =   jQuery(this).closest(".qfy_item_post").find(".video_play >iframe").length;
					 var videoclass =  "";
					 if(isvideo){
						 var video_html = jQuery(this).find("video.qfyvideo").prop("outerHTML");
						 video_html =jQuery(video_html).attr("controls","controls").attr("class","localvideo").attr("style","width:100%;height:100%;background:#000;").prop("outerHTML");
						 videoclass = "video";
					 }else if(isyunvideo){
						 var video_html = jQuery(this).closest(".qfy_item_post").find(".video_play >iframe").prop("outerHTML");
						 videoclass = "video";
						 var videoheight = height;
						 if(popupstyle=="2"){
							 videoheight = 0.6*height;
						 }
						 video_html = jQuery(video_html).attr("data-height",videoheight).attr("data-autoplay","true").prop("outerHTML");

					 }
					 if(default_img || video_html){
						 if( popupstyle=="0" ){
							 message += '<li><div class="pop_image pop_image1 '+videoclass+'" style="position:relative;word-wrap: break-word;width:'+width+'px;height:'+height+'px;background-image:url('+default_img+');background-size:cover;background-position:center center;background-repeat:no-repeat;">'+video_html+'<div  class="content_inner"  style="box-sizing:border-box;position:absolute;bottom:0;width:100%;background:rgba(0,0,0,0.6);padding:20px 15px;text-align:left;"><div class="head"  style="color:#fff;font-size:16px;padding-bottom:10px;">'+title+'</div><div class="content" style="color:#ccc;font-size:14px;">'+desc+'</div></div></div></li>';
						 } else if( popupstyle=="1"  ){
							 message += '<li><div class="pop_image pop_image2 '+videoclass+'" style="position:relative;word-wrap: break-word;width:'+width+'px;height:'+height+'px;"><div style="background-image:url('+default_img+');background-size:cover;background-position:center center;background-repeat:no-repeat;width:60%;height:100%;float:left;">'+video_html+'</div><div class="content_inner"  style="box-sizing:border-box;float:left;width:40%;height:100%;background:#fff;padding:20px 15px;text-align:left;"><div class="head"  style="color:#333;font-size:16px;padding-bottom:10px;">'+title+'</div><div class="subhead"  style="color:#999;font-size:14px;padding-bottom:10px;">'+subtitle+'</div><div class="content overflowy" style="color:#666;font-size:14px;overflow-y: auto;;">'+desc+'</div></div> </div></li>';
					 	 }	else if( popupstyle=="2"  ){
							 message += '<li><div class="pop_image pop_image3 '+videoclass+'" style="position:relative;word-wrap: break-word;width:'+width+'px;height:'+height+'px;"><div style="background-image:url('+default_img+');background-size:cover;background-position:center center;background-repeat:no-repeat;width:100%;height:60%;">'+video_html+'</div><div class="content_inner" style="box-sizing:border-box;float:left;width:100%;height:40%;background:#fff;padding:40px;text-align:left;"><div class="head"  style="color:#333;font-size:16px;padding-bottom:10px;">'+title+'</div><div class="subhead"  style="color:#999;font-size:14px;padding-bottom:10px;">'+subtitle+'</div><div class="content overflowy" style="color:#666;font-size:14px;overflow-y: auto;;">'+desc+'</div></div>  </div></li>';
						 }
					 }
				 });
				 allmessage = '<div class="image_popup" style="position:relative;"><div  class="qfe_flexslider flexslider_slide flexslider" data-interval="30" data-flex_fx="slide" data-bottom_nav="1" data-direction="1"><ul class="slides">'+message+'</ul> </div><div class="block-close" style="position: absolute;top: 2px;right: 9px;color: rgb(204, 204, 204);cursor: pointer;">✕</div></div>';
			 }
			if(allmessage){
					jQuery.blockUI({
						onOverlayClick: jQuery.unblockUI,
					    overlayCSS:{
					        backgroundColor: '#000',
					        opacity:         0.8,
					        cursor:          'pointer',
					        "z-index":"9400",
					    },
						css: {"top":toppx+"px","left":leftpx,width:width+"px",height:height+"px",cursor: 'pointer',"border":"0","z-index":"9401"},
						message:allmessage
					});
					jQuery(".localvideo.simple").attr("autoplay","autoplay");
					jQuery('.block-close').css('cursor', 'pointer').unbind().click(function(){
						 jQuery.unblockUI();
					});
					if(jQuery(".pop_image2 .content.overflowy").length>0){
						var h = jQuery(".pop_image2").height();
						var head = jQuery(".pop_image2 .head").height()+jQuery(".pop_image2 .subhead").height();
						jQuery(".pop_image2 .content.overflowy").height(h-head-60);
					}else if(jQuery(".pop_image3 .content.overflowy").length>0){
						var h = jQuery(".content_inner").height();
						var head = jQuery(".pop_image3 .head").height()+jQuery(".pop_image3 .subhead").height();
						jQuery(".pop_image3 .content.overflowy").height(h-head);
					}

					if(	jQuery(".image_popup .qfe_flexslider").length>0){
						 if(typeof jQuery.fn.flexslider=="undefined"){
							 jQuery.getScript("/qfy-content/plugins/qfy_editor/assets/lib/flexslider/jquery.flexslider-min.js").done(function() {
								 jQuery('head').append('<link href="/qfy-content/plugins/qfy_editor/assets/lib/flexslider/flexslider.css" rel="stylesheet" type="text/css" />');
								 _image_popup_flexslider(startAt);
							 })
						 }else{
							 _image_popup_flexslider(startAt);
						 }
					}
				}
		}
	});
	//可以挪 结束 ------

	jQuery("a.qfy_thickbox").live({
		  click: function(e) {
			  e.preventDefault();
			  if( top.jQuery(".qfy_gallerys").length>0){
				  return false;
			  }
			  var default_img = jQuery(this).attr("href");
			  var thumbPath = jQuery(this).attr("thumbPath");
			  if(!thumbPath) thumbPath = default_img;
			  var i = 0;
			  var qfy_imglists= Array();
			  jQuery("a.qfy_thickbox").each(function(){
				var href = jQuery(this).attr("href");
				var thumbPath = jQuery(this).attr("thumbPath");
				if(!thumbPath) 	thumbPath = href;

				if(href!=default_img && href!= undefined){
					 qfy_imglists[i] = href+"|^|"+thumbPath;
					 i++;
				}
			  })

			  top.jQuery("body").append('<div class="qfy_gallerys" style="position:fixed;top:0;left:0;width:100%;height:0;z-index:20000;"><iframe src="/FeiEditor/bitSite/gallerys?bgcolor='+encodeURIComponent(dtGlobals.gallery_bgcolor)+'&tfamily='+encodeURIComponent(dtGlobals.gallery_tfamily)+'&dfamily='+encodeURIComponent(dtGlobals.gallery_dfamily)+'&blankclose='+encodeURIComponent(dtGlobals.gallery_blankclose)+"&arrowstyle="+encodeURIComponent(dtGlobals.gallery_arrowstyle)+'&showthumbs='+dtGlobals.gallery_showthumbs+'&style='+dtGlobals.gallery_style+'&autoplay='+dtGlobals.gallery_autoplay+'&playspeed='+dtGlobals.gallery_playspeed+'&imagesize='+dtGlobals.gallery_imagesize+'&imageheight='+dtGlobals.gallery_imageheight+'&stopbutton='+dtGlobals.gallery_stopbutton+'&thumbsposition='+dtGlobals.gallery_thumbsposition+'&tsize='+dtGlobals.gallery_tsize+'&tcolor='+encodeURIComponent(dtGlobals.gallery_tcolor)+'&dsize='+dtGlobals.gallery_dsize+'&dcolor='+encodeURIComponent(dtGlobals.gallery_dcolor)+'&default_img='+default_img+'&thumbPath='+thumbPath+'&time='+Math.random()+'" width="100%" height="100%" border=0 style="border:0;" /></div>')
			  top.jQuery(".qfy_gallerys").animate({height:"100%"});
			  return false;
		  }
		});


	qfy_a_video_event();
}

function qfy_a_video_event(){
	if(!jQuery("body").hasClass("compose-mode") && !is_edit_model){
		var $is_has_video = false;
		jQuery("a").each(function(){
			var href = jQuery(this).attr("href");
			if(href) href = href.toLowerCase();
			if(href && href.indexOf("/api/video-server/play.php")>-1){
				$is_has_video = true;
			}else if(href && href.indexOf("iframe.php?video_mp4_local=")>-1 && href.indexOf("size=")>-1 && href.indexOf("&auto=")>-1){
				$is_has_video = true;
			}
		})
		if($is_has_video){
			jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-video.js", function(){
				qfy_a_video_event_init();
			});
		}
	}
}

function qfy_custom_select(){
	jQuery(".qfy_custom_select").each(function(){
		var fun = jQuery(this).attr("data-fun");
		var ids = '['+jQuery(this).attr("data-ids")+']';
		var urls = jQuery(this).attr("data-urls");
		if(ids!=""){
			jQuery(this).cxSelect({
				  selects: eval(ids),
				  required: true,
				  url: eval(urls),
				});
		}
	})
}

function thebackground(qfy_bg_images,time) {
	if(screen.width<760){
		return false;
	}
	var tmp_qfy_bg_images = qfy_bg_images.split("|^^|");
	var str ="";
	var bodyColor = jQuery("body").css("background-color");
	var bodyrepeat = jQuery("body").css("background-repeat");
	var bodyattachment = jQuery("body").css("background-attachment");
	var bodyposition = jQuery("body").css("background-position");
	var bodysize = jQuery("body").css("background-size");


	for(i=0;i<tmp_qfy_bg_images.length;i++){
		var img = tmp_qfy_bg_images[i];
		if(i==0){
			str += '<div style="position: absolute;opacity: 1;height:100%;width:100%;background:url('+img+')"  class="show"></div>';
		}else{
			str += '<div style="position: absolute;opacity: 0;height:100%;width:100%;background:url('+img+')"  ></div>';
		}
	}
	jQuery("body").prepend('<div class="qfy_body_background" style="width:100%;height:100%;left: 0;;position: fixed;top: 0;z-index: -1;"> '+str+'</div>');
	jQuery("body .qfy_body_background > div").css("background-color",bodyColor).css("background-repeat",bodyrepeat).css("background-attachment",bodyattachment).css("background-position",bodyposition).css("background-size",bodysize);
	jQuery('div.qfy_body_background div').css({opacity: 0.0});
	jQuery('div.qfy_body_background div:first').css({opacity: 1.0});

	setInterval(function(){
		var current = (jQuery('div.qfy_body_background div.show')? jQuery('div.qfy_body_background div.show') : jQuery('div.qfy_body_background div:first'));
		if ( current.length == 0 ) current = jQuery('div.qfy_body_background div:first');
		var next = ((current.next().length) ? ((current.next().hasClass('show')) ? jQuery('div.qfy_body_background div:first') :current.next()) : jQuery('div.qfy_body_background div:first'));
		next.css({opacity: 0.0})
		.addClass('show')
		.animate({opacity: 1.0}, 1000);
		current.animate({opacity: 0.0}, 1000)
		.removeClass('show');
	},time*1000);


}
function vc_3d_photo(){
	if(jQuery(".qfy-360viewer").length>0) {
		jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-3d-photo.js", function () {
			vc_3d_photo_init();
		});
	}
}

function vc_element_init(){
	if(dtGlobals.isMobile==false && jQuery("body").width()<768){
		jQuery(".qfy-element").each(function(){
			var m_padding = jQuery(this).attr("m-padding");
			if(m_padding ){
				jQuery(this).css("padding",m_padding);
			}
		});
	}
}

function right_nav_bar(){
	if( jQuery(".right_nav_bar").length>0 ){
		jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-right-navbar.js", function(){
			right_nav_bar_init();
		});
	}
}
function dropdownmenu_event(obj){

	 var $this = jQuery(obj);
	 var p = $this.closest(".dropdown_container");
	 if(p.find(".list-content").hasClass("active")){
		 p.find(".list-content").removeClass("active");
		 p.closest("section").removeClass("overflowauto");
		 p.closest(".qfy-column-inner").removeClass("overflowauto");
	 }else{
		 p.find(".list-content").addClass("active");
		 p.closest("section").addClass("overflowauto");
		 p.closest(".qfy-column-inner").addClass("overflowauto");
	 }

}
function column_init_align(){

	var w = jQuery("body").width();
	jQuery('.qfy-column-inner.column_middle').each(function(){

		jQuery(this).css("margin-top",0).css("margin-bottom",0);
		var section = jQuery(this).closest("section.section");
		var heigth = jQuery(this).height();
		var t1 = section.css("padding-top").replace("px","");
		var t2 = section.css("padding-bottom").replace("px","");
		var pheight = section.height();
		var padding = 0;
		if(pheight<heigth ) pheight = heigth;
		if(t1>0 || t2>0){
			if( (pheight*1-heigth) < (t1-t2)){
				if(pheight*1==heigth){
					padding = (t2*1-t1*1)/2;
				}else{
					padding = (t2*1-t1*1-heigth)/2;
				}
			}else if( (pheight*1-heigth) < (t2-t1)){
				padding = t2*1-t1*1+(heigth-pheight)/2;
			}else{
				padding = (t2*1-t1*1)/2;
			}
		}

		if(jQuery(this).siblings(".qfy-column-inner").length>0){
			if(w>760){
				jQuery(this).css("margin-top",((pheight-heigth)/2 + padding)+"px");
			}
		}else{
			jQuery(this).css("margin-top",((pheight-heigth)/2+ padding)+"px");
		}

	})
	jQuery('.qfy-column-inner.column_bottom').each(function(){
		var section = jQuery(this).closest("section.section");
		jQuery(this).css("margin-top",0).css("margin-bottom",0);
		var heigth = jQuery(this).height();
		var t1 = section.css("padding-top").replace("px","");
		var t2 = section.css("padding-bottom").replace("px","");

		var $this = this;
		if(is_edit_model){
			setTimeout(function(){
				var pheight = section.height();
				if(pheight<heigth) pheight = heigth;
				if(section.find(".qfy-column-inner").length>1){
					if(w>760){
						jQuery($this).css("margin-top",(pheight-heigth)+"px");
					}
				}else{
					jQuery($this).css("margin-top",(pheight-heigth)+"px");
				}
			},80);
		}else{
			var pheight = section.height();
			if(pheight<heigth) pheight = heigth;
			if(section.find(".qfy-column-inner").length>1){
				if(w>760){
					jQuery(this).css("margin-top",(pheight-heigth)+"px");
				}
			}else{
				jQuery(this).css("margin-top",(pheight-heigth)+"px");
			}
		}

	})

}
function vc_royalSlider_gallery_init(){
	if(  jQuery('.royalSlider_gallery_new').length==0 ){
		return;
	}

	 if(typeof jQuery.fn.royalSlider=="undefined"){
		 jQuery.getScript("/FeiEditor/bitSite/js/jquery.royalslider.min.js").done(function() {
			 _vc_royalSlider_gallery_init();
		 })
	 }else{
		 _vc_royalSlider_gallery_init();
	 }
}

function accordioncontent(){
	 jQuery('.qfy-accordioncontent:not(.changed)').each(function(){
		 jQuery(this).addClass("changed").find('.a_content').each(function(){
			 var p = jQuery(this).parent();
			 jQuery(this).find('> section').each(function(index){
				 var curr = p.find(".a_header h4:eq("+index+")");
				 var text = curr.html();
				 if(text){
					jQuery(this).before('<h4 class="panel-title" >'+text+'</h4>');
					jQuery(this).prev().find(".line").remove();
				 }

				 if(curr.find(".line").length>0){
					 var line = "<h5 class='qfydownline' style='position:relative;z-index:5;margin:0;padding:0;opacity:1;'>"+curr.find(".line").clone().prop("outerHTML")+"</h5>";
					 jQuery(this).after(line);
				 }
			 })
		 })
	 })


}
jQuery(window).load(function() {
	if(!is_edit_model){
		resizeDefaultObjSize();
	}
});
//处理锚点
var hash = window.location.hash;
_menu_link_event(hash);
function _lottieReady($){
	$(".animentor-lottie-widget").each(function(){
		var $this = this;
		if ($($this).data('initialized')) {
			return;
		}
		$($this).data('initialized', true);
		var data = {};
		var attrs = [
			'anim-loop',
			'animation-path',
			'autoplay',
			'delay',
			'direction',
			'mouse',
			'scroll',
			'speed',
			'endframe'
		];

		attrs.forEach(function(attr) {
			var val = $($this).data(attr);
			if (typeof val !== 'undefined') {
				data[attr] = val;
			}
		});

		lottie.searchAnimations();

		// Set a variable to indicate if there is a delay
		var autoplay = false;
		if(data.autoplay=="1"){
			autoplay = true;
		}
		if(data.scroll=="1"){
			data.autoplay = 0;
			autoplay = false;
		}else if(data.mouse=="1"  ){
			var ismobile = /Mobile/.test(navigator.userAgent);
			if(!ismobile ){
				data.autoplay = 0;
				autoplay = false;
			}
		}


		// Load Lottie animation and store it for future reference
		var animation = lottie.loadAnimation({
			container: $($this)[0],
			renderer: 'svg',
			autoplay: autoplay,
			loop: data['anim-loop'],
			path: data['animation-path'],
			name: data.name,
		});
		if(data.mouse=="1" || data.scroll=="1") {
			animation.addEventListener('data_ready', function () {
				if(data.endframe>0 && data.endframe<animation.totalFrames){
					var totalFrames = data.endframe;
				}else{
					var totalFrames = animation.totalFrames;
				}
				var document_width = $(window).width();
				if(data.mouse=="1"){
					$(document).bind('mousemove', function (e) {
						var per_x = (e.pageX / document_width).toFixed(3);
						var frame = Math.round(Math.abs(-totalFrames + 2*totalFrames*per_x));
						animation.goToAndStop(frame, true);
					});
				}
				if(data.scroll=="1"){
					$(document).bind('scroll', function (e) {
						var curr_p= $(this).scrollTop();
						var scollheight =  $(document).height() -  $(window).height();
						var per_x = (curr_p / scollheight).toFixed(3);
						var frame = Math.round(Math.abs(-totalFrames + 2*totalFrames*per_x));
						animation.goToAndStop(frame, true);
					})
				}
			});
		}

		// Set animation speed (if applicable)
		if (data.hasOwnProperty('speed')) {
			animation.setSpeed(data.speed);
		}

		// Set animation direction (if applicable)
		if (data.hasOwnProperty('direction')) {
			animation.setDirection(data.direction);
		}
		if(data.autoplay=="2") {
			$($this).waypoint({
				handler: function(direction) {
					animation.setDirection(data.direction);
					animation.play();
				},
				offset: "90%",
			})

		}else if(data.autoplay=="3"){
			var mouseEnterHandler = function(e) {
				animation.setDirection(data.direction);
				animation.play();
			};
			var mouseLeaveHandler = function(e){
				animation.pause();
			}
			$($this).off('mouseenter', mouseEnterHandler).on('mouseenter', mouseEnterHandler);
			$($this).off('mouseleave', mouseLeaveHandler).on('mouseleave', mouseLeaveHandler);
		}else if(data.autoplay=="4"){
			var mouseEnterHandler = function(e) {
				animation.stop();
				animation.play();
			};
			$($this).off('click', mouseEnterHandler).on('click', mouseEnterHandler);
		}



	})
}
function lottieReady($){
	if($(".animentor-lottie-widget").length==0){
		return;
	}
	if(typeof lottie=="undefined"){
		$.getScript("/FeiEditor/bitSite/js/lottie.min.js").done(function() {
			_lottieReady($);
		})
	}else{
		_lottieReady($);
	}
}
function mousemove_animate_fun($){

	$(document).bind('mousemove', function (e) {
		var document_width = $(window).width();
		var document_height = $(window).height();
		var scroll = $(document).scrollTop();
		var per_x = (e.pageX / document_width).toFixed(3);
		var per_y = ((e.pageY - scroll) / document_height).toFixed(3);
		$('[data-mouse-animate="move"]').each(function () {
			var x = $(this).attr("data-mouse-x") ? $(this).attr("data-mouse-x") : 0;
			var y = $(this).attr("data-mouse-y") ? $(this).attr("data-mouse-y") : 0;
			var z = $(this).attr("data-mouse-z") ? $(this).attr("data-mouse-z") : 0;
			var x1 = $(this).attr("data-mouse-x1") ? $(this).attr("data-mouse-x1") : 0;
			var y1 = $(this).attr("data-mouse-y1") ? $(this).attr("data-mouse-y1") : 0;
			var type = $(this).attr("data-mouse-animate-type") ? $(this).attr("data-mouse-animate-type") : 0;
			var dw = $(this).attr("data-mouse-dw") == 1 ? "vw" : "px";
			if(type==0){
				var n_x = x * 1 + (x1 - x) * per_x;
				var n_y = y * 1 + (y1 - y) * per_y;
			}else{
				var n_x = x * 1 + (x1 - x) * (type == "1" ? per_x : per_y);
				var n_y = y * 1 + (y1 - y) * (type == "1" ? per_x : per_y);
			}
			$(this).css("transform", "translate3d(" + n_x + dw + ", " + n_y + dw + ", 0)");
			//.....
			if($(this).hasClass("qfy-element")){
				$(this).parents(".section").addClass("overflowauto");
			}

		})
		$('[data-mouse-animate="scale"]').each(function () {
			var x = $(this).attr("data-mouse-x") ? $(this).attr("data-mouse-x") : 0;
			var x1 = $(this).attr("data-mouse-x1") ? $(this).attr("data-mouse-x1") : 0;
			var type = $(this).attr("data-mouse-animate-type") ? $(this).attr("data-mouse-animate-type") : 0;
			if(type==0) {
				var n_x = x * 1 + (x1 - x) *(per_x>per_y?per_x:per_y);
			}else{
				var n_x = x * 1 + (x1 - x) * (type == "1" ? per_x : per_y);
			}
			$(this).css("transform", "scale("+n_x+")");
			if($(this).hasClass("qfy-element")) {
				$(this).parents(".section").addClass("overflowauto");
			}
		});
		$('[data-mouse-animate="rotate"]').each(function () {
			var x = $(this).attr("data-mouse-x") ? $(this).attr("data-mouse-x") : 0;
			var y = $(this).attr("data-mouse-y") ? $(this).attr("data-mouse-y") : 0;
			var z = $(this).attr("data-mouse-z") ? $(this).attr("data-mouse-z") : 0;
			var x1 = $(this).attr("data-mouse-x1") ? $(this).attr("data-mouse-x1") : 0;
			var y1 = $(this).attr("data-mouse-y1") ? $(this).attr("data-mouse-y1") : 0;
			var z1 = $(this).attr("data-mouse-z1") ? $(this).attr("data-mouse-z1") : 0;
			var type = $(this).attr("data-mouse-animate-type") ? $(this).attr("data-mouse-animate-type") : 0;
			if(type==0){
				var n_x = x * 1 + (x1 - x) * per_x;
				var n_y = y * 1 + (y1 - y) * per_y;
				var n_z = z * 1 + (z1 - z) * per_x;
			}else{
				var n_x = x * 1 + (x1 - x) * (type == "1" ? per_x : per_y);
				var n_y = y * 1 + (y1 - y) * (type == "1" ? per_x : per_y);
				var n_z = z * 1 + (z1 - z) * (type == "1" ? per_x : per_y);
			}
			$(this).css("transform", "rotateX(" + n_x + "deg) rotateY(" + n_z + "deg) rotateZ(" + n_y + "deg) ");
			if($(this).hasClass("qfy-element")) {
				$(this).parents(".section").addClass("overflowauto");
			}
		});
		$('[data-mouse-animate="skew"]').each(function () {
			var x = $(this).attr("data-mouse-x") ? $(this).attr("data-mouse-x") : 0;
			var y = $(this).attr("data-mouse-y") ? $(this).attr("data-mouse-y") : 0;
			var x1 = $(this).attr("data-mouse-x1") ? $(this).attr("data-mouse-x1") : 0;
			var y1 = $(this).attr("data-mouse-y1") ? $(this).attr("data-mouse-y1") : 0;
			var type = $(this).attr("data-mouse-animate-type") ? $(this).attr("data-mouse-animate-type") : 0;
			if(type==0) {
				var n_x = x * 1 + (x1 - x) * per_x;
				var n_y = y * 1 + (y1 - y) * per_y;
			}else{
				var n_x = x * 1 + (x1 - x) * (type == "1" ? per_x : per_y);
				var n_y = y * 1 + (y1 - y) * (type == "1" ? per_x : per_y);
			}
			$(this).css("transform", "skew(" + n_x + "deg, " + n_y + "deg)");
			if($(this).hasClass("qfy-element")) {
				$(this).parents(".section").addClass("overflowauto");
			}
		});
	});
}
function scroll_animate_fun($){
	var ismobile = /Mobile/.test(navigator.userAgent);
	$(document).bind('scroll', function (e) {
		var curr_p = $(this).scrollTop();
		var scollheight = $(document).height() - $(window).height();
		if ($(document).width() < 760) {
			ismobile = true;
		}
		var per_x = (curr_p / scollheight).toFixed(3);
		$('[data-scroll-animate="move"]').each(function () {
			var x = $(this).attr("data-scroll-x") ? $(this).attr("data-scroll-x") : 0;
			var y = $(this).attr("data-scroll-y") ? $(this).attr("data-scroll-y") : 0;
			var x1 = $(this).attr("data-scroll-x1") ? $(this).attr("data-scroll-x1") : 0;
			var y1 = $(this).attr("data-scroll-y1") ? $(this).attr("data-scroll-y1") : 0;
			var dw = $(this).attr("data-scroll-dw") == 1 ? "vw" : "px";
			var si = $(this).attr("data-scroll-i") ? $(this).attr("data-scroll-i") : '';
			var n_x = x * 1 + (x1 - x) * per_x;
			var n_y = y * 1 + (y1 - y) * per_x;
			if ((ismobile && (si != 1)) || (!ismobile && (si != 2))) {
				$(this).css("transform", "translate3d(" + n_x + dw + ", " + n_y + dw + ", 0)");
				if($(this).hasClass("qfy-element")) {
					$(this).parents(".section").addClass("overflowauto");
				}
			}

		})
		$('[data-scroll-animate="scale"]').each(function () {
			var x = $(this).attr("data-scroll-x") ? $(this).attr("data-scroll-x") : 0;
			var x1 = $(this).attr("data-scroll-x1") ? $(this).attr("data-scroll-x1") : 0;
			var n_x = x * 1 + (x1 - x) * per_x;
			var si = $(this).attr("data-scroll-i") ? $(this).attr("data-scroll-i") : '';
			if ((ismobile && (si != 1)) || (!ismobile && (si != 2))) {
				$(this).css("transform", "scale(" + n_x + ")");
				if($(this).hasClass("qfy-element")) {
					$(this).parents(".section").addClass("overflowauto");
				}
			}
		});
		$('[data-scroll-animate="rotate"]').each(function () {
			var x = $(this).attr("data-scroll-x") ? $(this).attr("data-scroll-x") : 0;
			var y = $(this).attr("data-scroll-y") ? $(this).attr("data-scroll-y") : 0;
			var z = $(this).attr("data-scroll-z") ? $(this).attr("data-scroll-z") : 0;
			var x1 = $(this).attr("data-scroll-x1") ? $(this).attr("data-scroll-x1") : 0;
			var y1 = $(this).attr("data-scroll-y1") ? $(this).attr("data-scroll-y1") : 0;
			var z1 = $(this).attr("data-scroll-z1") ? $(this).attr("data-scroll-z1") : 0;
			var n_x = x * 1 + (x1 - x) * per_x;
			var n_y = y * 1 + (y1 - y) * per_x;
			var n_z = z * 1 + (z1 - z) * per_x;
			var si = $(this).attr("data-scroll-i") ? $(this).attr("data-scroll-i") : '';
			if ((ismobile && (si != 1)) || (!ismobile && (si != 2))) {
				$(this).css("transform", "rotateX(" + n_x + "deg) rotateY(" + n_z + "deg) rotateZ(" + n_y + "deg) ");
				if($(this).hasClass("qfy-element")) {
					$(this).parents(".section").addClass("overflowauto");
				}
			}
		});
		$('[data-scroll-animate="skew"]').each(function () {
			var x = $(this).attr("data-scroll-x") ? $(this).attr("data-scroll-x") : 0;
			var y = $(this).attr("data-scroll-y") ? $(this).attr("data-scroll-y") : 0;
			var x1 = $(this).attr("data-scroll-x1") ? $(this).attr("data-scroll-x1") : 0;
			var y1 = $(this).attr("data-scroll-y1") ? $(this).attr("data-scroll-y1") : 0;
			var type = $(this).attr("data-scroll-animate-type") ? $(this).attr("data-scroll-animate-type") : 0;
			var n_x = x * 1 + (x1 - x) * per_x;
			var n_y = y * 1 + (y1 - y) * per_x;
			var si = $(this).attr("data-scroll-i") ? $(this).attr("data-scroll-i") : '';
			if ((ismobile && (si != 1)) || (!ismobile && (si != 2))) {
				$(this).css("transform", "skew(" + n_x + "deg, " + n_y + "deg)");
				if($(this).hasClass("qfy-element")){
					$(this).parents(".section").addClass("overflowauto");
				}
			}
		});
	});
}

function shape_ready(){
	if(jQuery(".shape_image_svg").length==0){
		return;
	}
	if(typeof anime=="undefined"){
		jQuery.getScript("/FeiEditor/bitSite/js/anime.min.js").done(function() {
			jQuery(".shape_image_svg:not(.loaded)").each(function(){
				var shapeEl = jQuery(this).find("path")[0];
				var pos = jQuery(this).attr("data-path");
				var duration = jQuery(this).attr("data-t");
				var begin = jQuery(this).attr("data-begin");
				var end = jQuery(this).attr("data-end");
				if(pos==99){
					if(begin && end && begin.indexOf(",")>-1&& end.indexOf(",")>-1){
						shape_loop_init(shapeEl,pos,duration*1,begin,end,jQuery(this).parent().hasClass("background-shapes"));
					}
				}else{
					shape_loop_init(shapeEl,pos-1,duration*1,"","",jQuery(this).parent().hasClass("background-shapes"));
				}

				jQuery(this).addClass("loaded");
			})
		})
	}else{

		jQuery(".shape_image_svg:not(.loaded)").each(function(){
			var shapeEl = jQuery(this).find("path")[0];
			var pos = jQuery(this).attr("data-path");
			var duration = jQuery(this).attr("data-t");
			var begin = jQuery(this).attr("data-begin");
			var end = jQuery(this).attr("data-end");

			if(pos==99){
				if(begin && end && begin.indexOf(",")>-1&& end.indexOf(",")>-1){
					shape_loop_init(shapeEl,pos,duration*1,begin,end,jQuery(this).parent().hasClass("background-shapes"));
				}
			}else{
				shape_loop_init(shapeEl,pos-1,duration*1,"","",jQuery(this).parent().hasClass("background-shapes"));
			}
			jQuery(this).addClass("loaded");
		})
	}


}
jQuery(document).ready(function($) {


	if( $('[data-mouse-animate]').length>0 || is_edit_model ){
		mousemove_animate_fun($);
	}
	if( $('[data-scroll-animate]').length>0 || is_edit_model) {
		scroll_animate_fun($);
	}
	//滚动...
	if($("#phantom").css("display")=="block"){
		var floatMenuH = $("#phantom").height();
	}else{
		var floatMenuH = 0;
	}
	var urlHash = "#" + window.location.href.split("#")[1];
	if($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length ){
		if(urlHash!= "#undefined"){
			$("html, body").animate({
				scrollTop: $(".one-page-row div[data-anchor='" + urlHash + "']").offset().top - floatMenuH + 1
			}, 600, function(){
				$("body").removeClass("is-scroll");
			});
		}
	}else{
		if(urlHash.indexOf("=")<0 && $(urlHash).length > 0){
			$("body").addClass("is-scroll");
			setTimeout(function(){
				$("html, body").animate({
					scrollTop:  $(urlHash).offset().top
				}, 600, function(){
					jQuery("#parallax-nav a[href='"+urlHash+"']").closest("li").addClass("active");
					$("body").removeClass("is-scroll");
					parallax_scroll_fun();
				});
			},500);

		}else{
			parallax_scroll_fun();
		}
	}
	//滚动...end
	//...check body
	vc_element_init();
	//侧边栏
	right_nav_bar();
	//底部菜单
	jQuery(".footerbar-menu .menu-item-has-children>a").click(function(e){
		e.stopPropagation();
		e.preventDefault();
		var submenu = jQuery(this).next(".sub-menu");
		if(submenu.css("display")=="none"){
			submenu.css("display","block");
		}else{
			submenu.css("display","none");
		}
	})
	//背景多个图片切换
	if(typeof(qfy_bg_images)!= "undefined"){
		thebackground(qfy_bg_images,qfy_bg_images_int);
	}
	//图片加载完再执行一下resize
	if(jQuery(".preloadimg:not('.loaded')").length>0){
		setTimeout(function(){
				jQuery(".preloadimg:not('.loaded')").each(function(){
					var newurl = jQuery(this).attr("org-src");
					jQuery(this).attr("src",newurl).addClass("loaded").load(function(){
						var newscrset = jQuery(this).attr("org-srcset");
						if(newscrset){
							jQuery(this).attr("srcset",newscrset);
						}
						resizeDefaultObjSize();
					});
				});
		},300);
	}

	//多级选择
	qfy_custom_select();


	if(!is_edit_model){
		$(".qfy-text a[url-flagtarget='_blank']").attr("target","_blank");
		$(".qfy-text a[url-flagtarget='']").removeAttr("target");
	}
	if(top!=self){
		  function closeOpenPanel(){
			  if(top.jQuery(".boxy-wrapper:visible").length>0){
					top.jQuery(".boxy-wrapper:visible .buttonClass1").click();
		    	}
				if(parent.jQuery("#qfbody-content>.panel:visible").length>0){
					parent.jQuery("#qfbody-content>.panel:visible .vc-close").click();
		    	}
				if(top.jQuery(".bitPopIframe:visible").length>0){
					top.jQuery(".bitPopIframe:visible .btn-default").click();
		    	}
		  }
		  var ctrlDown = false;
		  var escDown = false;
		  var ctrlKey = 17, vKey = 86, cKey = 67,escKey=27,zkey=90,ykey=89;
		  $(document).keydown(function(e){
	  			if (e.keyCode == escKey){
	  				closeOpenPanel();
	  				 top.jQuery.unblockUI();
	  			}
	  			if(e.ctrlKey && (e.keyCode== zkey|| e.keyCode== ykey)){
	  				top.restorePage();
	  			}
		  })
		  try{
			  $(top.document).keydown(function(e){
							if (e.keyCode == escKey){
								closeOpenPanel();
							}
							if(e.ctrlKey  && (e.keyCode== zkey|| e.keyCode== ykey)){
								top.restorePage();
							}
			 })
			  $(parent.document).keydown(function(e){
							if (e.keyCode == escKey){
								closeOpenPanel();
							}
			 })
		 }catch(e){}
	  }else{
		  $(document).keydown(function(e){
	  			if (e.keyCode == "27"){
	  				 jQuery.unblockUI();
	  			}
		  })


	  }
	$(".dropdown-toggle").unbind("click").bind("click",function(){
		 var obj =jQuery(this).parent().find(".dropdown-menu");
		 if(obj.css("display") == "none"){
			obj.show();
		 }else{
			obj.hide();
		 }
	})
	initmouseover();
	resizeDefaultObjSize();
	toolTip();
	weiBoAndWeiXinToolTip();

	/*--Append element </i> to preloader*/
	//$(".tp-loader, .ls-defaultskin .ls-loading-indicator").not(".loading-label").append('<svg class="fa-spinner" viewBox="0 0 48 48" ><path d="M23.98,0.04c-13.055,0-23.673,10.434-23.973,23.417C0.284,12.128,8.898,3.038,19.484,3.038c10.76,0,19.484,9.395,19.484,20.982c0,2.483,2.013,4.497,4.496,4.497c2.482,0,4.496-2.014,4.496-4.497C47.96,10.776,37.224,0.04,23.98,0.04z M23.98,48c13.055,0,23.673-10.434,23.972-23.417c-0.276,11.328-8.89,20.42-19.476,20.42	c-10.76,0-19.484-9.396-19.484-20.983c0-2.482-2.014-4.496-4.497-4.496C2.014,19.524,0,21.537,0,24.02C0,37.264,10.736,48,23.98,48z"/></svg>');

	/*--Set variable for floating menu*/


	/*--old ie remove csstransforms3d*/
	//if ($.browser.msie) $("html").removeClass("csstransforms3d");

	/*--Detect iphone phone*/
	if(dtGlobals.isiPhone){
		$("body").addClass("is-iphone");
	};

	/* !Custom touch events */
	/* !(we need to add swipe events here) */

	/* Custom touch events:end */
	if(!is_edit_model){
		if($(".bitMainTopSider .vc-no-content-helper").length==0 && $(".bitMainTopSider").length>0  && $(".bitMainTopSider").height()==0){
			$(".bitMainTopSider").parent().parent().remove();
			//$(".bitMainTopSider-wrapper").css("padding-top",0);
		}
	}




	/* !-overlap for webkit*/
	if ( !$.browser.webkit || dtGlobals.isMobile ){
		$("body").addClass("not-webkit").removeClass("is-webkit");
	}else{
		$("body").removeClass("not-webkit").addClass("is-webkit");
		//$(".overlap #main").prepend("<div class='main-gradient'></div>");
	};


	/*overlap for webkit:end*/
/*Misc:end*/

/* !-jQuery extensions */

	/* !- Check if element exists */
	$.fn.exists = function() {
		if ($(this).length > 0) {
			return true;
		} else {
			return false;
		}
	}

	/* !- Check if element is loaded */
	$.fn.loaded = function(callback, jointCallback, ensureCallback){
		var len	= this.length;
		if (len > 0) {
			return this.each(function() {
				var	el		= this,
					$el		= $(el),
					blank	= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

				$el.on("load.dt", function(event) {
					$(this).off("load.dt");
					if (typeof callback == "function") {
						callback.call(this);
					}
					if (--len <= 0 && (typeof jointCallback == "function")){
						jointCallback.call(this);
					}
				});

				if (!el.complete || el.complete === undefined) {
					el.src = el.src;
				} else {
					$el.trigger("load.dt")
				}
			});
		} else if (ensureCallback) {
			if (typeof jointCallback == "function") {
				jointCallback.call(this);
			}
			return this;
		}
	};

/* jQuery extensions: end */

/* !-Main navigation */
/* We need to fine-tune timings and do something about the usage of jQuery "animate" function */



if(dtGlobals.isWindowsPhone){
	$("body").addClass("windows-phone");
}

$(".mini-nav select").change(function() {
	window.location.href = $(this).val();
});


dtGlobals.isHovering = false;

mainmenu_event();
searchForm();
/* !-Navigation widget */
var customTimeoutShow
$(".custom-nav > li > a").click(function(e){
	$menuItem = $(this).parent();
	if ($menuItem.hasClass("has-children")) e.preventDefault();


		if ($(this).attr("class") != "active"){
				$(".custom-nav > li > ul").stop(true, true).slideUp(400);
				$(this).next().stop(true, true).slideDown(500);
				$(".custom-nav > li > a").removeClass("active");
				$(this).addClass('active');
		}else{
				$(this).next().stop(true, true).slideUp(500);
				$(this).removeClass("active");
		}

		$menuItem.siblings().removeClass("act");
		$menuItem.addClass("act");
});
$(".custom-nav > li > ul").each(function(){
	clearTimeout(customTimeoutShow);
	$this = $(this);
	$thisChildren = $this.find("li");
	if($thisChildren.hasClass("act")){
		$this.prev().addClass("active");
		$this.parent().siblings().removeClass("act");
		$this.parent().addClass("act");
		$(this).slideDown(500);
	}
});

/* Navigation widget: end */

/*!-SLIDERS*/

	/* !-Metro slider*/
	var mtResizeTimeout;

	$(window).on("resize", function() {
		resizeDefaultObjSize();

		clearTimeout(mtResizeTimeout);
		mtResizeTimeout = setTimeout(function() {
			$(window).trigger( "metroresize" );
		}, 200);
		try{
			if( parent.jQuery("#mobile_iframe_preivew").length==1){
				parent.setMobileDocumentInit();
			}

		}catch(e){

		}
		if(jQuery("#header.logo-left-right #navigation ul.ab-center").length>0){
			var v1 = jQuery("#header #branding").width();
			var v2 = jQuery("#header .assistive-info").width();
			jQuery("#header #navigation #main-nav").css("text-align","center").css("left",(v2-v1)/2+"px");
			jQuery("#main-nav.ab-center").show();
		}

	});
	try{
		if( parent.jQuery("#mobile_iframe_preivew").length==1){
			setTimeout(function(){
				parent.setMobileDocumentInit();
			},1000);

		}
	}catch(e){
		//跨域异常下，document.referrer

		/*var lang = getQueryString("lang");
		var BodyIsFt=getCookie(JF_cn)
		if(lang=="zh-cn"){
			BodyIsFt = 0;
			setCookie(JF_cn,"",-1);
		}
		if(lang=="zh" || BodyIsFt=="1"){
			setTimeout("StranBody()",100);
		}*/

	}

	if(jQuery(".zh_tw_lang").length>0){
		StranBody(jQuery(".zh_tw_lang")[0]);
		var href = jQuery(".selected_template_a").attr("href");
		var nhref = Traditionalized(href);
		jQuery(".selected_template_a").attr("href",nhref);
	}
	//翻译简繁体
	tranlanguage(jQuery("html"));



	/*!Scroll to Top*/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('.scroll-top').removeClass('off').addClass('on');
		}
		else {
			$('.scroll-top').removeClass('on').addClass('off');
		}
	});
	$(".scroll-top").click(function(e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
	/*Scroll to Top:end*/


	/*Shopping cart top bar:end*/

	/* !- Skills */
	$.fn.animateSkills = function() {
		$(".skill-value", this).each(function () {
			var $this = $(this),
				$this_data = $this.data("width");

			$this.css({
				width: $this_data + '%'
			});
		});
	};

	// !- Animation "onScroll" loop
	function doAnimation() {

		if(dtGlobals.isMobile){
			$(".skills").animateSkills();
		}
		if($("html").hasClass("old-ie")){
			$(".skills").animateSkills();
		};
	};
	// !- Fire animation
	doAnimation();
	/* Skills:end */
	// Create the dropdown base 12.02.14
	$("<select />").prependTo(".mini-nav .menu-select");

	// Create default option "Select"
	$("<option />", {
		"selected"  :  "selected",
		"value"     :  "",
		"text"      :  "———"
	}).appendTo(".mini-nav .menu-select select");


	$('.bitcommerce-ordering-div select').each(function(){
		$(this).customSelect();
	});

	jQuery(window).load(function(){
		if(jQuery('#load').length){
			jQuery('#load').fadeOut().remove();
		}
	});


	$("#main-nav .menu-item a,.dl-menu li a").not(".dl-menu li.dl-back a[href^='#']").each(function(){
			var $_this = $(this),selector = $_this.attr("href");

		if(selector && selector.indexOf("#")>-1 && selector.indexOf("/")<0 && selector!="#"){
			//if(selector.indexOf("#")!=0){
				selector = jQuery.trim(selector);
				var tmpselecter = selector.split("#");
				selector = "#"+tmpselecter[tmpselecter.length-1];
			//}

			if(selector!="#" &&  selector.indexOf("=")<0 && $(selector).length>0){
				$(this).on('click',function(e){
					var $_this = $(this),selector = $_this.attr("href");

					//手机下菜单是#，子菜单无法点击
					var mobilemenu =$_this.closest("#dl-menu").find("#mobile-menu").length;
					if( mobilemenu>0 && $_this.parent().hasClass("has-children")){
						var $submenu = $_this.parent().find( 'ul.dl-submenu:first' );
						if($submenu.length>0){
							var xx=event.pageX;
							var width = $submenu.width();
							var isclick = width-xx>35;
							if(!isclick) return;
						}
					}

					if($("body >.dl-menuwrapper.floatmenu").length>0){
						$("#dl-menu #mobile-menu .phone-text").click();
					}

					$("body").addClass("is-scroll");


					if($("#phantom").css("display")=="block"){
						var floatMenuH = $("#phantom").height();
					}else{
						var floatMenuH = 0;
					}

					//if(selector.indexOf("#")!=0){
						var tmpselecter = selector.split("#");
						selector = "#"+tmpselecter[tmpselecter.length-1];
					//}
					$_this.closest("#dl-menu").find(".wf-phone-hidden.phone-text").click();
					var base_speed  = 600,
						speed       = base_speed;
					if(selector.indexOf("=")<0 &&  $(selector).length > 0){
						var this_offset = $_this.offset(),
							that_offset = $(selector).offset(),
							offset_diff = Math.abs(that_offset.top - this_offset.top),
							speed       = (offset_diff * base_speed) / 1000;
					}

					$(".one-page-row .menu-item a").parent("li").removeClass("act");
					if($(".one-page-row").length>0){
						$_this.parent("li").addClass("act");
					}
					if(selector == "#" && ($(".one-page-row").length > 0)){
						$("html, body").animate({
							scrollTop: 0
						}, speed, function(){
							$("body").removeClass("is-scroll");
							$_this.parent().siblings(".onepage").removeClass("act onepage");
						});
					}else{
						if($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length ){
							$("html, body").animate({
								scrollTop: $(".one-page-row div[data-anchor='" + selector + "']").offset().top - floatMenuH + 1
							}, speed, function(){
								$("body").removeClass("is-scroll");
							});
						}else{
							if(selector.indexOf("=")<0 &&  $(selector).length > 0){
								$("html, body").animate({
									scrollTop:  $(selector).offset().top - floatMenuH + 1
								}, speed, function(){
									$("body").removeClass("is-scroll");

									$_this.parent().siblings(".onepage").removeClass("act onepage");
									$_this.parent().addClass("act onepage");
									_menu_link_event(selector);

								});
							}
						}
					}
					return false;
				});

			}

		}

	});
	$("ul.menu a,.tabcontent-inner>ul a").each(function(){
		var $_this = $(this),selector = $_this.attr("href");
		if(selector && selector.indexOf("#")>-1 && selector.indexOf("/")<0 && selector!="#"){

			selector = jQuery.trim(selector);
			var tmpselecter = selector.split("#");
			selector = "#"+tmpselecter[tmpselecter.length-1];
			if(selector!="#" &&  selector.indexOf("=")<0 && $(selector).length>0){
				$(this).on('click',function(e){
					$("body").addClass("is-scroll");
					if($("#phantom").css("display")=="block"){
						var floatMenuH = $("#phantom").height();
					}else{
						var floatMenuH = 0;
					}
					var base_speed  = 600,speed       = base_speed;
					var this_offset = $_this.offset(),that_offset = $(selector).offset(),offset_diff = Math.abs(that_offset.top - this_offset.top),speed       = (offset_diff * base_speed) / 1000;

					$("html, body").animate({
						scrollTop:  $(selector).offset().top - floatMenuH + 1
					}, speed, function(){
						$("body").removeClass("is-scroll");
						_menu_link_event(selector);
					});

				});
			}
		}
	});
	$(".logo-box a[href^='#'], #branding a[href^='#'], #branding-bottom a[href^='#']").on('click',function(e){
		$("body").addClass("is-scroll");
		if($("#phantom").css("display")=="block"){
			var floatMenuH = $("#phantom").height();
		}else{
			var floatMenuH = 0;
		}
		var $_this = $(this),
			selector 	= $_this.attr("href");

		var base_speed  = 600,
			speed       = base_speed;
		if($(selector).length > 0){
			var this_offset = $_this.offset(),
				that_offset = $(selector).offset(),
				offset_diff = Math.abs(that_offset.top - this_offset.top),
				speed       = (offset_diff * base_speed) / 1000;
		}
		if(selector == "#"){
			$("html, body").animate({
				scrollTop: 0
			}, speed, function(){
				$("body").removeClass("is-scroll");
			});
		}else{
			if($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length ){
				$("html, body").animate({
					scrollTop: $(".one-page-row div[data-anchor='" + selector + "']").offset().top - floatMenuH + 1
				}, speed, function(){
					$("body").removeClass("is-scroll");
				});
			}else{
				if($(selector).length > 0){
					$("html, body").animate({
						scrollTop:  $(selector).offset().top - floatMenuH + 1
					}, speed, function(){
						$("body").removeClass("is-scroll");
					});
				}
			}
		}
		return false;
	});

	 floatmenu_create();

	let menu_has_href = false;
	$(".mainmenu >.menu-item > a").each(function(){
		var href =jQuery(this).attr("href");
		if(href.indexOf("#")>-1 &&href!="#" ){
			menu_has_href = true;
		}
	});
	if(menu_has_href){
		$.onDemandScript("/qfy-content/themes/qfy-01/js/a-menu-href.js",function() {
			mainmenu_href_event();
		})
	}

	if( $(".yy_website_notice").length>0){
		var hasnotice=getCookie("yy_website_notice");
		//console.log("hasnotice="+hasnotice);
		if(hasnotice!="1"){
			var begin = $(".yy_website_notice").attr("data-begin");
			var end = $(".yy_website_notice").attr("data-end");
			var timestamp = 8*3600+Date.parse(new Date())/1000;
			if( (begin && timestamp<begin) || (end && timestamp>end)  ) {
				//pass

			}else{
				setTimeout(function(){
					$("body").addClass("is-showing-notice");
				},100);
			}
		}
		$(".yy_website_notice_close").click(function(){
			var type = $(this).attr("data-close");
			if(type==1){
				setCookie("yy_website_notice",1,1);
			}else if(type==2){
				setCookie("yy_website_notice",1,-1);
			}else{
				setCookie("yy_website_notice",1,365);

			}
			$(".yy_website_notice").remove();
			$("body").removeClass("is-showing-notice");
		})
	}

	mult_local_setting($);
	qfy_visit_log($);
//ready end
});
function qfy_visit_log($){

	var current_page_id = jQuery('body').attr('data-pid');
	var current_page_key = jQuery('body').attr('data-pkey');

	if(current_page_id != '' && current_page_id != 'undefined' && current_page_key != '' && current_page_key != 'undefined'){

		jQuery.ajax({
			url: '/FeiEditor/traffic/log',
			type: 'post',
			async: true,
			dataType: "JSON",
			data: {
				st_pid: current_page_id,
				st_pkey:current_page_key,
				push_userid:localStorage.getItem("perfecty_user_id"),
				st_ip:  (!is_edit_model && ((jQuery(".ng-switcher[data-shipto_auto='1']").length>0 && jQuery(".ng-switcher .switcher-shipto").length>0) ) || dtGlobals.visit_country_enable==1 )?1:0,
				st_currency:  (!is_edit_model && jQuery(".ng-switcher[data-currency_auto='1']").length>0 && jQuery(".ng-switcher .switcher-currency").length>0)?1:0,
				st_shipping:jQuery(".fa.maybe_shipping").length>0?jQuery(".fa.maybe_shipping").attr("data-weight"):0
			},
			success: function(rlt) {
				if(rlt.country){

					if(jQuery(".fa.maybe_shipping").length>0){
						if(rlt.shipping && rlt.shipping.desc){
							jQuery(".fa.maybe_shipping").parent().show();
							jQuery(".fa.maybe_shipping").replaceWith(rlt.shipping.desc);
							jQuery(".maybe_shipping_inner i").addClass("css_flag css_"+rlt.country.code.toLowerCase());
						}else{
							jQuery(".fa.maybe_shipping").parent().hide();
							jQuery(".fa.maybe_shipping").replaceWith("N/A");
							jQuery(".maybe_shipping_inner i").addClass("css_flag css_"+rlt.country.code.toLowerCase());
						}
					}
					if(rlt.redirect && rlt.redirect!=""){
						location.href = rlt.redirect;
					}else if(jQuery(".ng-switcher[data-shipto_auto='1']").length>0 && jQuery(".switcher-shipto").length>0 && rlt.country.code){
						var multlocal = getCookie("mult-local");
						if(!multlocal ) {

							var select_shipto =  $(".switcher-shipto .select-item[data-role='input']>a");
							if( select_shipto.attr("data-value")!=rlt.country.code && $(".switcher-shipto .switcher-item[data-locale='"+rlt.country.code+"']").length>0 ){
								var lanhtml = $(".switcher-shipto .switcher-item[data-locale='"+rlt.country.code+"']:first").html();
								var lan_text = $(lanhtml).text();
								var lan_label = $(lanhtml).html("").prop("outerHTML");

								$(".switcher-shipto .select-item[data-role='input']>a").html(lan_label+lan_text);
								$(".switcher-shipto .select-item[data-role='input']>a").attr("data-value",rlt.country.code);
								$(".switcher-info .ship-to").html(lan_label);
							}
							if(rlt.country.currency){
								var select_currency =  $(".switcher-currency .select-item[data-role='input']>a");
								if( select_currency.attr("data-value")!=rlt.country.currency && $(".switcher-currency .switcher-item[data-locale='"+rlt.country.currency+"']").length>0 ){
									var lanhtml = $(".switcher-currency .switcher-item[data-locale='"+rlt.country.currency+"']:first").html();
									$(".switcher-currency .select-item[data-role='input']>a").html(lanhtml);
									$(".switcher-currency .select-item[data-role='input']>a").attr("data-value",rlt.country.currency);
									$(".switcher-info .currency").html(rlt.country.currency);
									select_currency.closest(".ng-switcher").find(".go-contiune-btn").click();
								}
							}else{
								select_shipto.closest(".ng-switcher").find(".go-contiune-btn").click();
							}

						}

					}
				}

				if(rlt.flag==0){
					jQuery.getScript("/FeiEditor/bitSite/js/log.js").done(function() {
						var fingerprint = new Fingerprint({canvas: true}).get();
						fingerprint  = window.btoa(fingerprint);
						fingerprint  = window.btoa(fingerprint);
						jQuery.ajax({
							url: '/FeiEditor/traffic/log_r',
							type: 'post',
							async: true,
							data: {
								fprint:fingerprint
							}
						});
					})
				}
			}
		});
	}
}
function  mult_local_setting($){
	if($(".switcher-info").length>0){

		if(typeof Kbglt !="undefined" && Kbglt.all_languages){
			for(var i=0;i<Kbglt.all_languages.length;i++){
				$(".switcher-language .search-ul").append('<li><a class="switcher-item" data-locale="'+Kbglt.all_languages[i][0]+'" >'+Kbglt.all_languages[i][2]+'</a></li>');
			}

		}else{
			$(".switcher-language").hide();
		}
		$(".switcher-info").closest("#top-bar").css("z-index",203);
		$(".switcher-info").closest("#header").css("z-index",202);
		$(".switcher-info").closest("section").css("z-index",200).addClass("overflowauto");
		var multlocal = getCookie("mult-local");

		if(multlocal ) {
			multlocal = JSON.parse(multlocal);
			if (multlocal.shipto) {
				$(".checkout  #billing_country,.checkout #shipping_country").val(multlocal.shipto);
			}
			let lang = getQueryString("bit-language");
			if(!lang){
				lang = multlocal.language;
			}
			if(lang && typeof Kbglt !="undefined"){
				setCookie("Kbglt-lan",lang);
			}

			if ( !is_edit_model && typeof Kbglt !="undefined" && lang) {
					if(  $(".switcher-language .switcher-item[data-locale='"+lang+"']").length>0 ){
						var lantext = $(".switcher-language .switcher-item[data-locale='"+lang+"']:first").text();
						$(".switcher-language .select-item[data-role='input']>a").html(lantext);
						$(".switcher-language .select-item[data-role='input']>a").attr("data-value",lang);
						$(".switcher-info .language_txt").html(lantext);
						$(".amount").addClass('no-translate');
						Kbglt.setLanguage(lang);
					}
			}
		}else{
			if(!is_edit_model  ){
				let lang = getQueryString("bit-language");
				if(!lang){
					if($(".ng-switcher[data-language_auto='1']").length>0){
						lang = window.navigator.languages ? window.navigator.languages[0] : null;
						lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
					}
				}
				if(lang){
					if(lang && typeof Kbglt !="undefined"){
						setCookie("Kbglt-lan",lang);
					}
					if( $(".switcher-language .switcher-item[data-locale='"+lang+"']").length>0 ){
						var lantext = $(".switcher-language .switcher-item[data-locale='"+lang+"']:first").text();
						$(".switcher-language .select-item[data-role='input']>a").html(lantext);
						$(".switcher-language .select-item[data-role='input']>a").attr("data-value",lang);
						$(".switcher-info .language_txt").html(lantext);
						$(".amount").addClass('no-translate');
						Kbglt.setLanguage(lang);
					}
				}

			}

		}
		//带参数访问，则记录到cookie
		if(getQueryString("bit-currency") || getQueryString("bit-shipto") || getQueryString("bit-language")){
			var p = $(".ng-switcher:first");
			var shipto = p.find(".switcher-shipto .select-item[data-role='input']>a").attr("data-value");
			var shipto_label = $.trim(p.find(".switcher-shipto .select-item[data-role='input']>a").text());
			var language = p.find(".switcher-language .select-item[data-role='input']>a").attr("data-value");
			var language_label = p.find(".switcher-language .select-item[data-role='input']>a").text();
			var currency = p.find(".switcher-currency .select-item[data-role='input']>a").attr("data-value");
			var currency_label = p.find(".switcher-currency .select-item[data-role='input']>a").text();
			setCookie("mult-local",JSON.stringify({shipto:shipto,language:language,currency:currency,shipto_label:shipto_label,language_label:language_label,currency_label:currency_label}) );
		}
		$(".ng-switcher").css("opacity",1);
		$(".switcher-info").click(function(){
			$(this).parent().toggleClass("active");
		});
		$(".ng-switcher .switcher-shipto [data-role='input'],.ng-switcher .switcher-language [data-role='input'],.ng-switcher .switcher-currency [data-role='input']").click(function(e){
			var p = $(this).parent().parent();
			if(p.hasClass("switcher-active")){
				p.removeClass("switcher-active");
				p.find(".search-container,.search-ul").hide();
			}else{
				p.addClass("switcher-active");
				p.find(".search-container,.search-ul").show();
			}
		});
		$(".ng-switcher .search-ul .switcher-item").click(function(e){
			var v1 = $(this).text();
			var p = $(this).closest(".item");
			if(!p.hasClass("switcher-shipto")){
				p.find(".select-item[data-role='input']>a").html(v1);
			}else{
				p.find(".select-item[data-role='input']>a").html('<i  class="css_flag css_'+$(this).attr("data-locale").toLowerCase()+'"></i>'+v1);
			}
			p.find(".select-item[data-role='input']>a").attr("data-value",$(this).attr("data-locale"));
			p.removeClass("switcher-active");
			p.find(".search-container,.search-ul").hide();
		});
		$(".search-currency").keyup(function(){
			var v = $(this).val();
			var p = $(this).closest(".item");
			p.find(".switcher-item").each(function(){
				var value = $(this).text();
				if(v=="" || value.toLowerCase().indexOf(v.toLowerCase())>-1 ){
					$(this).parent().show();
				}else{
					$(this).parent().hide();
				}
			});
		});
		$(".go-contiune-btn").click(function(){
			var p = $(this).closest(".ng-switcher");
			var query = "";
			if( p.find(".switcher-shipto").length>0){
				var shipto = p.find(".switcher-shipto .select-item[data-role='input']>a").attr("data-value");
				var shipto_label = $.trim(p.find(".switcher-shipto .select-item[data-role='input']>a").text());
				query += '&bit-shipto='+shipto;
			}
			if( p.find(".switcher-language").length>0) {
				var language = p.find(".switcher-language .select-item[data-role='input']>a").attr("data-value");
				var language_label = p.find(".switcher-language .select-item[data-role='input']>a").text();
				query += '&bit-language='+language;
			}
			if( p.find(".switcher-currency").length>0) {
				var currency = p.find(".switcher-currency .select-item[data-role='input']>a").attr("data-value");
				var currency_label = p.find(".switcher-currency .select-item[data-role='input']>a").text();
				query += '&bit-currency='+currency;
			}


			var site_url =window.location.href;

			var basetmp = site_url.split("#")[0].split("?");

			if(basetmp.length>1){
				var tmps = basetmp[1].split("&");
				var news = [];
				for(var i=0;i<tmps.length;i++){
					if(tmps[i].indexOf("hy=1")>-1 || tmps[i].indexOf("bit-currency=")>-1 || tmps[i].indexOf("bit-shipto=")>-1 || tmps[i].indexOf("bit-language=")>-1 ){
					}else{
						news.push(tmps[i]);
					}
				}
				if(news){
					site_url = basetmp[0]+"?"+news.join("&");
				}else{
					site_url = basetmp[0]+"?";
				}
				site_url = site_url + '&hy=1'+query;
			}else{
				site_url = site_url.split("#")[0] + '?hy=1'+query;
			}

			setCookie("mult-local",JSON.stringify({shipto:shipto,language:language,currency:currency,shipto_label:shipto_label,language_label:language_label,currency_label:currency_label}) );

			window.location.href = site_url;
		});
	}

}
function floatmenu_create(){
	var $ = jQuery;
	if(jQuery("#header.logo-left-right #navigation ul.ab-center").length>0){
		jQuery("#main-nav.ab-center").show().css("opacity",0);
		var v1 = jQuery("#header #branding").width();
		var v2 = jQuery("#header .assistive-info .top-bar-right").width();
		jQuery("#header #navigation #main-nav").css("text-align","center").css("left",(v2-v1)/2+"px");
		jQuery("#main-nav.ab-center").css("opacity",1);
	}

	if($("#header.newrightmenu,#header.newleftmenu").length>0){
		if($("#page.bodyheader40,#page.bodyheader0").length>0){
			$("#header").css("position","fixed").css("top","0");
			return;
		}
	}
	if (dtGlobals.isMobile && !dtGlobals.isiPad) smartMenu = false;
	if (smartMenu && $("#header").length>0 ) {
		$.onDemandScript("/qfy-content/themes/qfy-01/js/a-menu-float.js",function() {
			floatmenu_create_init();
		})
	}
}

function _menu_link_event(hash){
	$ = jQuery;

	//处理主菜单
	var ishash = false;
	if(hash.indexOf("#")==0  &&  hash!="#" && hash.indexOf("=")<0 && jQuery(hash).length>0 ){
		$(".mainmenu").each(function(){
			$(this).find("a").each(function(){
				var href = jQuery(this).attr("href");
				var start = href.indexOf(hash);
				if(href.substr(start)==hash && ishash==false){
					ishash = true;
					var ul =  jQuery(this).closest(".mainmenu");
					ul.find(".act").removeClass("act");
					var currli = jQuery(this).closest("li");
					 currli.addClass("act");
					 currli.parents("li").addClass("act");
				}
			})
		})

	}else{
		$(".mainmenu .sub-nav .act").each(function(){
			var href = $(this).find(">a").attr("href");
			if(href.indexOf("#")>-1){
				$(this).removeClass("act");
			}
		})

	}

	//处理其他菜单

	if(hash.indexOf("#")==0  &&  hash!="#" && hash.indexOf("=")<0&& jQuery(hash).length>0 ){
		$(".widget_nav_menu ul.menu,.qfy-listmenuvertical ul.menu,.widget_nav_menuhorizontal ul.menu").each(function(){
			var ismenuhash = false;
			$(this).find("a").each(function(){
				var href = jQuery(this).attr("href");
				var start = href.indexOf(hash);
				if(href.substr(start)==hash && ismenuhash==false){
					ismenuhash = true;
					var ul =  jQuery(this).closest("ul.menu");
					ul.find(".current-menu-item").removeClass("current-menu-item current-menu-ancestor");
					var currli = jQuery(this).closest("li");
					 currli.addClass("current-menu-item");
					 currli.parents("li").addClass("current-menu-item");
				}
			})
		})

	}else{
		$(".widget_nav_menu ul.menu,.qfy-listmenuvertical ul.menu,.widget_nav_menuhorizontal ul.menu").each(function(){
			$(this).find(">li.current-menu-item").each(function(i){
				if(i>0){
					$(this).removeClass("current-menu-item current-menu-ancestor");
					$(this).find(".current-menu-item").removeClass("current-menu-item current-menu-ancestor");
				}
			});
		})
	}

	if(hash.indexOf("#")==0  &&  hash!="#" && hash.indexOf("=")<0 && jQuery(hash).length>0 ){
		$(".tabcontent-inner>ul").each(function(){
			var ismenuhash = false;
			$(this).find("a").each(function(){
				var href = $(this).attr("href");
				if(href){
					var start = href.indexOf(hash);
					if(href.substr(start)==hash && ismenuhash==false){
						ismenuhash = true;
						var ul =  jQuery(this).closest(".tabcontent-inner");
						ul.find(".active").removeClass("active");
						$(this).addClass("active");
					}
				}
			})
		})
	}




}
function mainmenu_event(){
	$ = jQuery;
	//custom menu

	$("#mobile-menu").removeAttr("style").wrap("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible main-mobile-menu' style='display:none' />");
		if($("#mobile-menu").hasClass("dropTopStyle")){
				$("#mobile-menu").removeClass("glyphicon glyphicon-icon-align-justify").append('<span class="mobile_icon glyphicon glyphicon-icon-angle-down" ></span>');
				var menu_html = $("#dl-menu:not(.dl-qfymobile-menu)").html();
				$("#dl-menu:not(.dl-qfymobile-menu)").remove();
				$("body").prepend("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible dropTopStyle_containter' >"+menu_html+"</div>");
				menu_html = null;
				if($("#mobile-menu").hasClass("left")){
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("left");
				}else if($("#mobile-menu").hasClass("right")){
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("right");
				}else{
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("center");
				}

				var padding = $("#mobile-menu").attr("data-padding");
				if(padding){
					$("#dl-menu:not(.dl-qfymobile-menu)").css("padding-left",padding+"px").css("padding-right",padding+"px");
				}
				if($("#mobile-menu").hasClass("positionFixed")){
					mobile_menu_fix();
				}

			}else if($("#mobile-menu").hasClass("dropCenterStyle")){
				$("#mobile-menu").removeClass("glyphicon glyphicon-icon-align-justify").append('<span class="mobile_icon glyphicon glyphicon-icon-angle-down" ></span>');
				var menu_html = $("#dl-menu:not(.dl-qfymobile-menu)").html();
				$("#dl-menu:not(.dl-qfymobile-menu)").remove();
				$("#header").after("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible dropCenterStyle_containter' >"+menu_html+"</div>");
				menu_html = null;
				if($("#mobile-menu").hasClass("left")){
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("left");
				}else if($("#mobile-menu").hasClass("right")){
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("right");
				}else{
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("center");
				}
				var padding = $("#mobile-menu").attr("data-padding");
				if(padding){
					$("#dl-menu:not(.dl-qfymobile-menu)").css("padding-left",padding+"px").css("padding-right",padding+"px");
				}
				if($("#mobile-menu").hasClass("positionFixed")){
					mobile_menu_fix();
				}


			}else if($("#header").hasClass("wf-mobile-hidden")){
				var menu_html = $("#dl-menu:not(.dl-qfymobile-menu)").html();
				$("#dl-menu:not(.dl-qfymobile-menu)").remove();
				$("#header").after("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible mobiledefault_containter' style='text-align:center;margin:0px auto;' >"+menu_html+"</div>");
				if($("#mobile-menu").hasClass("positionFixed")){
					mobile_menu_fix();
				}

			}else{
				//default
				if($("#mobile-menu").hasClass("positionFixed")){
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("mobiledefault_containter");
					mobile_menu_fix();
				}

		}

	$(".underline-hover > li > a > span").not(".underline-hover > li > a > span.mega-icon").append("<i class='underline'></i>");
	$("#main-nav .menu-nav > li > a > span").append("<i class='underline'></i>");

	var $mainNav = $("#main-nav,.mini-nav");





	var	$mobileNav = $mainNav.clone();
	var	$mobileTopNav = $(".mini-nav").clone();
	var backCap = $("#mobile-menu > .menu-back").html();

	$mobileNav
		.attr("id", "")
		.attr("class", "dl-menu")
		.find(".sub-nav")
			.addClass("dl-submenu")
			.removeClass("sub-nav")
			.prepend("<li class='menu-item dl-back'><a href='#'><span>"+backCap+"</a></li>");


	$mobileNav.appendTo("#dl-menu:not(.dl-qfymobile-menu)").wrap("<div class='dl-container' />");


	$("body").removeClass("mobilefloatmenu");
	$("body >.dl-menu-film,body >.dl-menu-fixedheader").remove();
	if($("#mobile-menu").hasClass("floatmenu") ||$("#mobile-menu").hasClass("fullfloatmenu") || $("#mobile-menu").hasClass("leftbtnmenu")){
		$("body").addClass("mobilefloatmenu");
		var menu_content = $("#dl-menu:not(.dl-qfymobile-menu) .dl-container").prop("outerHTML");
		$("#dl-menu:not(.dl-qfymobile-menu) .dl-container").remove();
		$("body").prepend("<div  class='dl-menuwrapper  wf-mobile-visible floatmenu floatwarpper' >"+menu_content+"</div>");
		var menu_html = $("#dl-menu:not(.dl-qfymobile-menu) #mobile-menu").prop("outerHTML");
		$("#dl-menu:not(.dl-qfymobile-menu) #mobile-menu").remove();
		$("body #page").prepend("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible floatmenu' >"+menu_html+"</div>");

		if($("#mobile-menu").hasClass("fullfloatmenu")){
			$(".dl-menuwrapper.floatmenu").addClass("fullfloatmenu");
		}else	if($("#mobile-menu").hasClass("leftbtnmenu")){
			$("body").addClass("mobileleftbtnmenu");
			$(".dl-menuwrapper.floatmenu").addClass("leftbtnmenu").find(".dl-container").prepend( jQuery(".menu_displaynone").html() ).append( jQuery(".menu_displaynone_footer").html()  );
			if($("body >.dl-menu-film").length==0){
				$("body").prepend("<div class='dl-menu-film wf-mobile-visible'></div>");
			}
			if($("body >.dl-menu-fixedheader").length==0 && $(".leftbtnmenu #mobile-menu.displaynone").length==0){

				if($(".yy_website_notice").length>0){
					$(".yy_website_notice").after("<div class='dl-menu-fixedheader wf-mobile-visible'>"+ jQuery(".menu_displaynone_header").html()+"</div>");
				}else{
					$("body").prepend("<div class='dl-menu-fixedheader wf-mobile-visible'>"+ jQuery(".menu_displaynone_header").html()+"</div>");
				}
			}
			if(top!=self && jQuery("body").hasClass("compose-mode")){
				 jQuery("body").find(".qfyheadercontent [bitDataAction='site_widget_container'] .site_tooler").each(
						function() {
							parent.widgetHover(this,  jQuery("body"));
						})
				 jQuery("body").find(".qfyheadercontent [bitDataAction='site_fix_container']").each(function() {
					 parent.widgetFixEvent(this);
				})
			}
			jQuery("body").addClass("moble_menufixed");
			mobile_menu_fix_2();
			if ( jQuery(window).scrollTop()> jQuery(".dl-menu-fixedheader").height()) {
				jQuery(".dl-menu-fixedheader").css("position","fixed");
				jQuery("body").addClass("fixedheadering");
			}else{
				jQuery(".dl-menu-fixedheader").css("position","relative");
				jQuery("body").removeClass("fixedheadering");
			}
		}
		if($("#mobile-menu").hasClass("left")){
			$("#dl-menu:not(.dl-qfymobile-menu)").addClass("left");
			$(".floatwarpper").addClass("left");
		}else if($("#mobile-menu").hasClass("right")){
			$("#dl-menu:not(.dl-qfymobile-menu)").addClass("right");
			$(".floatwarpper").addClass("right");
		}else{
			$("#dl-menu:not(.dl-qfymobile-menu)").addClass("center");
			$(".floatwarpper").addClass("center");
		}
		var padding = $("#mobile-menu").attr("data-padding");
		if(padding){
			$(".floatwarpper").css("padding-left",padding+"px").css("padding-right",padding+"px");
		}
		var element_right = $("#mobile-menu").attr("data-right");
		if(element_right){
			$("#dl-menu:not(.dl-qfymobile-menu)").css("right",element_right+"px");
		}
		var element_top = $("#mobile-menu").attr("data-top");
		if(element_top){
			$("#dl-menu:not(.dl-qfymobile-menu)").css("top",element_top+"px");
		}

	}

	if (!$("html").hasClass("old-ie")) $( "#dl-menu:not(.dl-qfymobile-menu)" ).dlmenu();

	var timeouthidden = new Array();
	$(".qfy-sub-div.MenuAnimIn_js", $mainNav).parent().each(function(i) {
		var $this = jQuery(this);


		jQuery(this).on("mouseenter", function(e) {

			var obj = jQuery(this).find(".qfy-sub-div:first");
			if(timeouthidden[i]){
				clearTimeout(timeouthidden[i]);
			}
			var h = obj.children().height();
			var t = obj.attr("data-time");
			if(!obj.hasClass("ing") && !obj.hasClass("ed")){
				obj.stop().addClass("ing").removeClass("ending").css({"visibility":"visible","height": 0}).animate({"height": h}, t*1000,function(){
					jQuery(this).removeClass("ing").addClass("ed").css({"visibility":"visible"});
				});
			}

		}).on("mouseleave", function(e) {

			var obj = jQuery(this).find(".qfy-sub-div:first");
			if(timeouthidden[i]){
				clearTimeout(timeouthidden[i]);
			}
			timeouthidden[i] = setTimeout(function(){
				if(obj.hasClass("ending") || obj.hasClass("ing") ) return;
				obj.addClass("ending").removeClass("ed").animate({"height": 0}, 500,function(){jQuery(this).removeClass("ending ed").css({"visibility":"hidden","height": 0});});
			},300);
		});
	});

	$(".sub-nav", $mainNav).parent().each(function() {
	var $this = $(this);
	if(dtGlobals.isMobile || dtGlobals.isWindowsPhone){
		$this.find("> a").on("click tap", function(e) {
			if (!$(this).hasClass("dt-clicked")) {
				e.preventDefault();
				$mainNav.find(".dt-clicked").removeClass("dt-clicked");
				$(this).addClass("dt-clicked");
			} else {
				e.stopPropagation();
			}

		});
	};

	var menuTimeoutShow,
		menuTimeoutHide;

	if($this.hasClass("dt-mega-menu")){

		$this.on("mouseenter tap", function(e) {
			var $ = jQuery;
			if(e.type == "tap") e.stopPropagation();

			var $this = jQuery(this);
			$this.addClass("dt-hovered");

			dtGlobals.isHovering = true;


			var $_this = jQuery(this),
				$_this_h = $this.height();

			var $_this_ofs_top = $this.position().top;
				$this.find("> .sub-nav").css({
					top: $_this_ofs_top+$_this_h
				});


			if($this.hasClass("mega-auto-width")){
				var $_this = $(this),
					$_this_sub = $_this.find(" > .sub-nav > li"),
					coll_width = $("#main .wf-wrap").width()/5,
					$_this_par_width = $_this.parent().width(),
					$_this_parents_ofs = $_this.offset().left - $this.parents("#header .wf-table, .ph-wrap-inner, .logo-center #navigation, .logo-classic #navigation, .logo-classic-centered #navigation").offset().left;

				$_this.find(" > .sub-nav").css({
					left: $_this_parents_ofs,
					"marginLeft": -($_this.find(" > .sub-nav").width()/2 - $_this.width()/2)
				});
			}
			if($this.is(':first-child') && $this.hasClass("mega-auto-width")){
				$this.find(" > .sub-nav").css({
					left: $_this.offset().left - $this.parents("#header .wf-table, .ph-wrap-inner, .logo-center #navigation, .logo-classic #navigation, .logo-classic-centered #navigation").offset().left,
					"marginLeft": 0
				});
			}else if($this.is(':last-child') && $this.hasClass("mega-auto-width")){
				$this.find(" > .sub-nav").css({
					left: "auto",
					right: $this.parents("#header .wf-table, .ph-wrap-inner, .logo-center #navigation, .logo-classic #navigation, .logo-classic-centered #navigation").width() - ( $this.position().left + $this.width() ),
					"marginLeft": 0
				});
			};

			if ($("#page").width() - ($this.children("ul").offset().left - $("#page").offset().left) - $this.children("ul").width() < 0) {
				$this.children("ul").addClass("right-overflow");
			};
			if($this.position().left < ($this.children("ul").width()/2)) {
				$this.children("ul").addClass("left-overflow");
			}

			clearTimeout(menuTimeoutShow);
			clearTimeout(menuTimeoutHide);

			menuTimeoutShow = setTimeout(function() {
				if($this.hasClass("dt-hovered")){
					$this.find("ul").stop().css("visibility", "visible").animate({
						"opacity": 1
					}, 150);
				}
			}, 100);
		});

		$this.on("mouseleave", function(e) {
			var $this = $(this);
			$this.removeClass("dt-hovered");

			dtGlobals.isHovering = false;
			clearTimeout(menuTimeoutShow);
			clearTimeout(menuTimeoutHide);

			menuTimeoutHide = setTimeout(function() {
				if(!$this.hasClass("dt-hovered")){
					$this.children("ul").stop().animate({
						"opacity": 0
					}, 150, function() {
						jQuery(this).css("visibility", "hidden");

						jQuery(this).find("ul").stop().css("visibility", "hidden").animate({
							"opacity": 0
						}, 10);
					});

					setTimeout(function() {
						if(!$this.hasClass("dt-hovered")){
							$this.children("ul").removeClass("right-overflow");
							$this.children("ul").removeClass("left-overflow");
						}
					}, 400);

				}
			}, 150);

			$this.find("> a").removeClass("dt-clicked");
		});
	}else{

		$this.on("mouseenter tap", function(e) {
			var $ = jQuery;
			if(e.type == "tap") e.stopPropagation();

			var $this = jQuery(this);
			$this.addClass("dt-hovered");
			if ($("#page").width() - ($this.children("ul").offset().left - $("#page").offset().left) - $this.children("ul").width() < 0) {
			//if ($("#page").width() - ($this.children("ul").offset().left - $("#page").offset().left) - 240 < 0) {
				$this.children("ul").addClass("right-overflow");
			}
			dtGlobals.isHovering = true;
			clearTimeout(menuTimeoutShow);
			clearTimeout(menuTimeoutHide);

			if($this.find(".qfy-sub-div").length==0 && $this.closest(".qfyheaderul").length==0){
				menuTimeoutShow = setTimeout(function() {
					if($this.hasClass("dt-hovered")){
						if($this.closest("#main-nav").attr("data-sliderdown")){
							var h = $this.children('ul').height();
							$this.children('ul').stop().css({"visibility":"visible","opacity":"1","overflow":"hidden","max-height":"0"}).animate({
								"max-height": h
							}, 300,function(){
								jQuery(this).css({"overflow":"inherit"})
							});
						}else if($this.closest("#main-nav").hasClass("sub-sliderup")){
							$this.children('ul').stop().css("opacity", "1").css("visibility", "visible").css("margin-top", "0");
						}else{
							$this.children('ul').stop().css("visibility", "visible").animate({
								"opacity": 1
							}, 150);
						}


					}
				}, 100);
			}
		});

		$this.on("mouseleave", function(e) {
			var $this = jQuery(this);
			$this.removeClass("dt-hovered");

			dtGlobals.isHovering = false;
			clearTimeout(menuTimeoutShow);
			clearTimeout(menuTimeoutHide);
			if($this.find(".qfy-sub-div").length==0 && $this.closest(".qfyheaderul").length==0 ){
				menuTimeoutHide = setTimeout(function() {
					if(!$this.hasClass("dt-hovered")){

						if($this.closest("#main-nav").attr("data-sliderdown")){
							$this.children("ul").stop().removeAttr("style");
						}else if($this.closest("#main-nav").hasClass("sub-sliderup")){
							$this.children("ul").stop().removeAttr("style");
						}else{
							$this.children("ul").stop().animate({
								"opacity": 0
							}, 150, function() {
								jQuery(this).css("visibility", "hidden");
							});

						}

						setTimeout(function() {
							if(!$this.hasClass("dt-hovered")){
								$this.children("ul").removeClass("right-overflow");
							}
						}, 400);
					}
				}, 150);
			}

			$this.find("> a").removeClass("dt-clicked");
		});
	};
});

/* Main navigation: end */

}
function floatmenucontrols_mouseenter(){
	 if(typeof(parent.floatmenucontrols_mouseenter)=="function"){
			parent.floatmenucontrols_mouseenter();
	 }
}
function floatmenucontrols_mouseout(){
	 if(typeof(parent.floatmenucontrols_mouseout)=="function"){
			parent.floatmenucontrols_mouseout();
	 }
}

function base64_encode(str)
{
    var str = toUTF8(str);
    var base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
    var out, i, j, len, r, l, c;
    i = j = 0;
    len = str.length;
    r = len % 3;
    len = len - r;
    l = (len / 3) << 2;
    if (r > 0) {
        l += 4;
    }
    out = new Array(l);

    while (i < len) {
        c = str.charCodeAt(i++) << 16 |
            str.charCodeAt(i++) << 8  |
            str.charCodeAt(i++);
        out[j++] = base64EncodeChars[c >> 18]
            + base64EncodeChars[c >> 12 & 0x3f]
            + base64EncodeChars[c >> 6  & 0x3f]
            + base64EncodeChars[c & 0x3f] ;
    }
    if (r == 1) {
        c = str.charCodeAt(i++);
        out[j++] = base64EncodeChars[c >> 2]
            + base64EncodeChars[(c & 0x03) << 4]
            + "==";
        }
    else if (r == 2) {
        c = str.charCodeAt(i++) << 8 |
            str.charCodeAt(i++);
        out[j++] = base64EncodeChars[c >> 10]
             + base64EncodeChars[c >> 4 & 0x3f]
             + base64EncodeChars[(c & 0x0f) << 2]
             + "=";
    }
    return out.join('');
}
function base64_decode(str)
{
    var base64DecodeChars = [
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
            52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
            -1,  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14,
            15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
            -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1
        ];
    var c1, c2, c3, c4;
    var i, j, len, r, l, out;

    len = str.length;
    if (len % 4 != 0) {
        return '';
    }
    if (/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(str)) {
        return '';
    }
    if (str.charAt(len - 2) == '=') {
        r = 1;
    }
    else if (str.charAt(len - 1) == '=') {
        r = 2;
    }
    else {
        r = 0;
    }
    l = len;
    if (r > 0) {
        l -= 4;
    }
    l = (l >> 2) * 3 + r;
    out = new Array(l);

    i = j = 0;
    while (i < len) {
        // c1
        c1 = base64DecodeChars[str.charCodeAt(i++)];
        if (c1 == -1) break;

        // c2
        c2 = base64DecodeChars[str.charCodeAt(i++)];
        if (c2 == -1) break;

        out[j++] = String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        // c3
        c3 = base64DecodeChars[str.charCodeAt(i++)];
        if (c3 == -1) break;

        out[j++] = String.fromCharCode(((c2 & 0x0f) << 4) | ((c3 & 0x3c) >> 2));

        // c4
        c4 = base64DecodeChars[str.charCodeAt(i++)];
        if (c4 == -1) break;

        out[j++] = String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return toUTF16(out.join(''));
}
function toUTF8(str)
{
    if (str.match(/^[\x00-\x7f]*$/) != null) {
        return str.toString();
    }
    var out, i, j, len, c, c2;
    out = [];
    len = str.length;
    for (i = 0, j = 0; i < len; i++, j++) {
        c = str.charCodeAt(i);
        if (c <= 0x7f) {
            out[j] = str.charAt(i);
        }
        else if (c <= 0x7ff) {
            out[j] = String.fromCharCode(0xc0 | (c >>> 6),
                                         0x80 | (c & 0x3f));
        }
        else if (c < 0xd800 || c > 0xdfff) {
            out[j] = String.fromCharCode(0xe0 | (c >>> 12),
                                         0x80 | ((c >>> 6) & 0x3f),
                                         0x80 | (c & 0x3f));
        }
        else {
            if (++i < len) {
                c2 = str.charCodeAt(i);
                if (c <= 0xdbff && 0xdc00 <= c2 && c2 <= 0xdfff) {
                    c = ((c & 0x03ff) << 10 | (c2 & 0x03ff)) + 0x010000;
                    if (0x010000 <= c && c <= 0x10ffff) {
                        out[j] = String.fromCharCode(0xf0 | ((c >>> 18) & 0x3f),
                                                     0x80 | ((c >>> 12) & 0x3f),
                                                     0x80 | ((c >>> 6) & 0x3f),
                                                     0x80 | (c & 0x3f));
                    }
                    else {
                       out[j] = '?';
                    }
                }
                else {
                    i--;
                    out[j] = '?';
                }
            }
            else {
                i--;
                out[j] = '?';
            }
        }
    }
    return out.join('');
}
function toUTF16(str)
{
    if ((str.match(/^[\x00-\x7f]*$/) != null) ||
        (str.match(/^[\x00-\xff]*$/) == null)) {
        return str.toString();
    }
    var out, i, j, len, c, c2, c3, c4, s;

    out = [];
    len = str.length;
    i = j = 0;
    while (i < len) {
        c = str.charCodeAt(i++);
        switch (c >> 4) {
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
            // 0xxx xxxx
            out[j++] = str.charAt(i - 1);
            break;
            case 12: case 13:
            // 110x xxxx   10xx xxxx
            c2 = str.charCodeAt(i++);
            out[j++] = String.fromCharCode(((c  & 0x1f) << 6) |
                                            (c2 & 0x3f));
            break;
            case 14:
            // 1110 xxxx  10xx xxxx  10xx xxxx
            c2 = str.charCodeAt(i++);
            c3 = str.charCodeAt(i++);
            out[j++] = String.fromCharCode(((c  & 0x0f) << 12) |
                                           ((c2 & 0x3f) <<  6) |
                                            (c3 & 0x3f));
            break;
            case 15:
            switch (c & 0xf) {
                case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                // 1111 0xxx  10xx xxxx  10xx xxxx  10xx xxxx
                c2 = str.charCodeAt(i++);
                c3 = str.charCodeAt(i++);
                c4 = str.charCodeAt(i++);
                s = ((c  & 0x07) << 18) |
                    ((c2 & 0x3f) << 12) |
                    ((c3 & 0x3f) <<  6) |
                     (c4 & 0x3f) - 0x10000;
                if (0 <= s && s <= 0xfffff) {
                    out[j++] = String.fromCharCode(((s >>> 10) & 0x03ff) | 0xd800,
                                                  (s         & 0x03ff) | 0xdc00);
                }
                else {
                    out[j++] = '?';
                }
                break;
                case 8: case 9: case 10: case 11:
                // 1111 10xx  10xx xxxx  10xx xxxx  10xx xxxx  10xx xxxx
                i+=4;
                out[j++] = '?';
                break;
                case 12: case 13:
                // 1111 110x  10xx xxxx  10xx xxxx  10xx xxxx  10xx xxxx  10xx xxxx
                i+=5;
                out[j++] = '?';
                break;
            }
        }
    }
    return out.join('');
}

function weiBoAndWeiXinToolTip(){
	//ie8不支持
	if(jQuery("html#ie8").length==1){
		return false;
	}
	 Opentip.styles.stemsDemo = {
        stem: true,
        containInViewport: false,
        borderWidth: 2,
        borderColor: "#a7c1c5",
        background: "#EFF7F0"
      };
	 var objs = jQuery(".soc-ico .weixin");
	objs.each(function(){
		var obj = jQuery(this);
		var name = obj.attr("data-href");
		obj.attr("title", '');
		var title="<img src='/FeiEditor/public_api/getImageFromWebApi/weixin/"+name+"'  width='160'/><div>请扫二维码关注微信</div>";
		var data = { tipJoint: "bottom",style: "dark" };
		new Opentip(obj, title, data);
	})
	var objs = jQuery(".soc-ico .weibo");
	objs.each(function(){
		var obj = jQuery(this);
		var name = obj.attr("data-href");
		obj.attr("title", '');
		var title="<img src='/FeiEditor/public_api/getImageFromWebApi/weibo/"+name+"' width='160' /><div>请扫二维码关注微博</div>";
		var data = { tipJoint: "bottom",style: "dark" };
		new Opentip(obj, title, data);
	})
}
function toolTip(objs){
	//ie8不支持
	if(jQuery("html#ie8").length==1){
		return false;
	}
	 if(typeof(objs)=="undefined"){
		objs = jQuery("[data-tooltip='on']");
	 }
	 Opentip.styles.stemsDemo = {
        stem: true,
        containInViewport: false,
        borderWidth: 2,
        borderColor: "#a7c1c5",
        background: "#EFF7F0"
      };
	objs.each(function(){
		var obj = jQuery(this);
		var title = jQuery(this).attr("data-original-title");
		if(!title) title="";
		var image = jQuery(this).attr("data-original-image");
		var imagewidth = jQuery(this).attr("data-original-imagewidth");
		var imageheight = jQuery(this).attr("data-original-imageheight");
		if(image){
			if(!imagewidth)	imagewidth=150;
			if(!imageheight) imageheight=150;
			title = "<div>"+title+"</div>"+"<img src='"+image+"'  style='width:"+imagewidth+"px;height:"+imageheight+"px'/>";
		}
		var cate =  jQuery(this).attr("data-tooltip-cate");
		var data ="";
		if(cate==1){
			data = { tipJoint: "bottom"};
		}else if(cate==2){
			data = { tipJoint: "bottom",style: "alert"};
		}else if(cate==3){
			data = { tipJoint: "bottom",style: "dark" };
		}else if(cate==4){
			data = { tipJoint: "bottom",style: "glass" };
		}else if(cate==5){
			data = { tipJoint: "bottom right",style: "dark"};
		}else if(cate==6){
			data = { tipJoint: "bottom left",style: "dark" };
		}else if(cate==7){
			data = { tipJoint: "top right",style: "dark" };
		}else if(cate==8){
			data = { style: "stemsDemo", tipJoint: "bottom right", stem: "bottom right", stemLength: 10, stemBase: 30 };
		}else if(cate==9){
			data = { style: "stemsDemo", tipJoint: "bottom left", stem: "bottom left", stemLength: 10, stemBase: 30 };
		}else if(cate==10){
			data = { borderWidth: 5, stemLength: 18, stemBase: 20, style: "glass", target: true, tipJoint: "top", borderColor: "#317CC5" };
		}else if(cate==11){
			data = { borderWidth: 5, stemLength: 18, stemBase: 20, style: "glass", target: true, tipJoint: "bottom", borderColor: "#317CC5" };
		}else if(cate==12){
			data = { borderWidth: 5, stemLength: 18, stemBase: 20, style: "glass", target: true, tipJoint: "bottom left", borderColor: "#317CC5" }
		}
		if(data!=""){
			new Opentip(obj, title, data);
		}
	})
}
function toVisit(obj){
	var p  = jQuery(obj).closest(".qfy_item_post");

	var post_id = p.attr("data-postid");
	var pt = p.find('[data-title="true"]');
	var title = "";
	if(pt.length>0){
		var title =jQuery.trim(pt.text());
	}
	jConfirm(""+__cf("确认是否离开当前页面，访问页面")+"【"+title+"】？",function(){
				top.$('#pageUrl').val(post_id).change();
	});

}
function toEditor(obj,e){
	if(e){
		 e.preventDefault();
		 e.stopPropagation();
	}
	parent.toEditor(obj);
}
function toCopy(obj){
	var p  = jQuery(obj).closest(".qfy_item_post");
	var id=p.closest(".vc-element").attr("data-model-id");


	var post_id = p.attr("data-postid");
	parent.bitSettingsEdit(post_id, __cf("复制一个页面"), "copyPage","COPY");
}
function toDelete(obj){
	parent.toDelete(obj);
}
function toEditProduct(obj){
	parent.toEditProduct(obj);
	return false;
}
function toRedirectProduct(obj){
	parent.toRedirectProduct(obj);
	return false;
}
function toDeleteCate(obj){
	parent.toDeleteCate(obj);
}
function pageNav(paged){
	var obj =top.jQuery("#site-content-iframe");
	var url  =obj.attr("src");
	if(url.indexOf("paged")>-1){
		var tmp = url.split("&paged");
		url = tmp[0]+"&paged="+paged;
	}else{
		if(url.indexOf("?")>-1){
			url = url+"&paged="+paged;
		}else{
			url = url+"?paged="+paged;
		}
	}
	obj.attr("src",url);
}
function pageCate(page_id,cate_id){
	var obj = top.jQuery("#site-content-iframe");
	var url  =obj.attr("src");
	if(cate_id==0) cate_id="";
	if(url.indexOf("post_id")>-1){
		var tmp = url.split("&post_id");
		url = tmp[0]+"&post_id="+page_id+"&categories="+cate_id;
	}else{
		if(url.indexOf("?")>-1){
			url = url+"&post_id="+page_id+"&categories="+cate_id;
		}else{
			url = url+"?post_id="+page_id+"&categories="+cate_id;
		}

	}

	jConfirm("确认是否需要打开该分类列表页面？",function(){
		obj.attr("src",url);
	});

	return false;
}
function searchResult(p){
	var action = jQuery(p).attr("action");
	var search = jQuery(p).find("[name='search']").val();
	var page_id = jQuery(p).find("[name='page_id']").val();
	var searchtype = jQuery(p).find("[name='searchtype']").val();
	var ep_search = jQuery(p).find("[name='ep_search']").val();
	var qfyuuid = jQuery(p).find("[name='qfyuuid']").val();
	var ep_relevancy = jQuery(p).find("[name='ep_relevancy']").val();

	//if(search=="") return false;
	var obj = top.jQuery("#site-content-iframe");
	if(obj.length>0){
		var url  = obj.attr("src");
		if(url.indexOf("post_id")>-1){
			var tmp = url.split("&post_id");
			url = tmp[0]+"&post_id="+page_id+"&search="+encodeURIComponent(search)+"&searchtype="+searchtype;
		}else{
			if(url.indexOf("?")>-1){
				url = url+"&post_id="+page_id+"&search="+encodeURIComponent(search)+"&searchtype="+searchtype;
			}else{
				url = url+"?post_id="+page_id+"&search="+encodeURIComponent(search)+"&searchtype="+searchtype;
			}
		}

		if(ep_search && qfyuuid){
			url = url+"&ep_search=1&qfyuuid"+qfyuuid;
			if(ep_relevancy){
				url = url+"&ep_relevancy=1";
			}
		}

		obj.attr("src",url);
		return false;
	}
}

function toorderview(id){
	id = id.replace("#","");
	var obj = top.jQuery("#site-content-iframe");
	var page_id = top.jQuery("#pageUrl").val();
	var  url=obj.attr("src");
	if(url.indexOf("post_id")>-1){
		var tmp = url.split("&post_id");
		url = tmp[0]+"&post_id="+page_id+"&view-order="+id;
	}else{
		if(url.indexOf("?")>-1){
			url = url+"&post_id="+page_id+"&view-order="+id;
		}else{
			url = url+"?post_id="+page_id+"&view-order="+id;
		}
	}


	obj.attr("src",url);
}

function toorderpage(page_id){

	var obj = top.jQuery("#site-content-iframe");
	var  url=obj.attr("src");
	if(url.indexOf("post_id")>-1){
		var tmp = url.split("&post_id");
		url = tmp[0]+"&post_id="+page_id;
	}else{
		if(url.indexOf("?")>-1){
			url = url+"&post_id="+page_id;
		}else{
			url = url+"?post_id="+page_id;
		}
	}
	obj.attr("src",url);
}


function jConfirm(msg,yes,no,title){
	if(top!=self){
		top.jConfirm(msg,yes,no,title);
	}
}

function jAlert(msg,title){
	if(!is_edit_model){
		alert(msg);
	}else{
		top.jAlert(msg,title);
	}
}

function setCookie(cname, cvalue,exdays)		//cookies设置
{
	var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires+";path=/";
}

function getCookie(Name)			//cookies读取
{
	var search = Name + "="
	if(document.cookie.length > 0)
	{
		offset = document.cookie.indexOf(search)
		if(offset != -1)
		{
			offset += search.length
			end = document.cookie.indexOf(";", offset)
			if(end == -1) end = document.cookie.length
			return unescape(document.cookie.substring(offset, end))
		 }
	else return ""
	  }
}
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = location.search.substr(1).match(reg);
    if (r != null) return unescape(decodeURI(r[2])); return null;
}
function tobigimage(obj){
	var bigimage = jQuery(obj).parents(".qfy_showbox").find(".bigImage");
	var height = bigimage.find("img").height();
	var src = jQuery(obj).find("img").attr("src");
	jQuery(obj).parents(".qfy_imgList").find("img").css("border","0");
	jQuery(obj).find("img").css("border","2px solid #f63");
	src = src.replace("-150x150","");
	bigimage.find("img").attr("src",src).height(height);
}
function slideLine(box,stf,delay,speed,h){

	if(jQuery("#"+box+" div").length ==0){
		return false;
	}

	var slideBox = document.getElementById(box);
	var delay = delay||1000,speed = speed||20,h = h||20;
	var tid = null,pause = false;
	var s = function(){tid=setInterval(slide, speed);}
	var slide = function(){
	if(pause) return;
	slideBox.scrollTop += 1;
	if(slideBox.scrollTop%h == 0){
		clearInterval(tid);
		slideBox.appendChild(slideBox.getElementsByTagName(stf)[0]);
		slideBox.scrollTop = 0;
		setTimeout(s, delay);
		}
	}
	slideBox.onmouseover=function(){pause=true;}
	slideBox.onmouseout=function(){pause=false;}
	setTimeout(s, delay);
}

function vc_gallery_relat(){
	jQuery(".qfe_gallery.rela_other .vc-carousel .qfy_image_vc_item img").each(function(){
		var img = jQuery(this);
		var src = img.attr("src");
		img.css("cursor","pointer");
		src = src.replace(/-[\d]*x[\d]*/g,"");
		img.unbind("click").bind("click",function(){
			jQuery(".qfe_gallery.rela_other .slides").each(function(){
				var obj = jQuery(this);
				var index = 0;
				obj.find("img").each(function(){
					var toimg = jQuery(this);
					var tosrc = toimg.attr("src");
					tosrc = tosrc.replace(/-[\d]*x[\d]*/g,"");
					var p = toimg.closest("li");

					if(!p.hasClass("clone")){
						index++;
					}

					if(!p.hasClass("clone") && src == tosrc){
						p.siblings().removeClass("flex-active-slide");

						p.addClass("flex-active-slide");
						var width = p.width();

						p.parent().css("-webkit-transition-duration","0.6s");
						p.parent().css("transition-duration","0.6s");
						p.parent().css("-webkit-transform",'translate3d(-'+(index*width)+'px, 0px, 0px)');
						p.parent().css("transform",'translate3d(-'+(index*width)+'px, 0px, 0px)');

						return;
					}
				})
			})

		})
	});
}
function qfbookformSubmit(obj){
	if(!is_edit_model){
		var p = jQuery(obj).closest(".QFBOOKSearchsimpleformdiv");
		var url = p.attr("action");
		var t1 = p.find("[name='QFBOOKSearch-check-in-view']").val();
		var t2 = p.find("[name='QFBOOKSearch-check-out-view']").val();
		if(url.indexOf("?")>-1){
			location.href = url+"&QFBOOKSearch-check-in-view="+t1+"&QFBOOKSearch-check-out-view="+t2;
		}else{
			location.href = url+"?QFBOOKSearch-check-in-view="+t1+"&QFBOOKSearch-check-out-view="+t2;
		}

	}
}
function parallax_scroll_fun(){
	if(jQuery("#parallax-nav").length>0){
		jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-scroll.js",function() {
			parallax_scroll_fun_init();
		})
	}
}

var isqfyscrolling =false;
function qfyToscroll(thisobj){
		if(isqfyscrolling){
			return;
		}
		isqfyscrolling = true;
		var obj = jQuery(thisobj).attr('href');
		jQuery(thisobj).parent().siblings().removeClass("active");
		jQuery(thisobj).parent().addClass("active");
		var orgcolor = jQuery(thisobj).closest("ul").attr("data-orgcolor");
		jQuery("#parallax-nav li  a").removeAttr("style");
		if(jQuery("#parallax-nav").hasClass("color-weight-dark")){
			if(orgcolor){
				jQuery("#parallax-nav li  a").css("border-color",orgcolor).css("color",orgcolor);
			}
			var bordercolor = jQuery("#parallax-nav li.active a").attr("data-color");
			if(!bordercolor){
				bordercolor = orgcolor;
			}
			jQuery("#parallax-nav li a").css("border-color",bordercolor).css("background-color","transparent").css("color",bordercolor);
			jQuery("#parallax-nav .active a").css("border-color",bordercolor).css("background-color",bordercolor).css("color",bordercolor);


		}else{
			if(orgcolor){
				jQuery("#parallax-nav li  a").css("background-color",orgcolor).css("color",orgcolor);
			}
			var bordercolor = jQuery("#parallax-nav li.active a").attr("data-color");
			if(!bordercolor){
				bordercolor = orgcolor;
			}
			jQuery("#parallax-nav li a").css("border-color","transparent").css("background-color",bordercolor).css("color",bordercolor);
			jQuery("#parallax-nav .active a").css("border-color",bordercolor).css("background-color","transparent").css("color",bordercolor);
		}

		var speed = 'normal';
		speed = 1000;
		if(jQuery("#parallax-nav").hasClass("speedquick")){
			speed = speed*0.75;
		}else if(jQuery("#parallax-nav").hasClass("speedslow")){
			speed = speed*1.5;
		}
		if(obj=="#"||obj=="#header"){
			jQuery("html, body").animate({ scrollTop: 0 }, speed,function(){isqfyscrolling=false;
				  if(!is_edit_model){
					  var current_url = window.location.href;
					  var tmpurl = current_url.split("#");
					  try {
				        	 window.history.pushState({
				                path: window.location.href
				            }, '', tmpurl[0]);
				        } catch(e) {
				            console.error('history.pushState failed, maybe HTML5 is not supported?')
				        }
				  }
			});
		}else{
			if(jQuery( jQuery(thisobj).attr('href') ).length>0){
				jQuery("html, body").animate({ scrollTop: jQuery( jQuery(thisobj).attr('href') ).offset().top }, speed,'easeInOutExpo',function(){isqfyscrolling=false;
				   if(!is_edit_model){
					  var current_url = window.location.href;
					  var tmpurl = current_url.split("#");
					  var tmpobj = jQuery(thisobj).attr('href');
					  try {
				        	 window.history.pushState({
				                path: window.location.href
				            }, '', tmpurl[0]+tmpobj);
				        } catch(e) {
				            console.error('history.pushState failed, maybe HTML5 is not supported?')
				        }
				  }

				});
			}else{
				isqfyscrolling=false;
			}
		}
}

function checkAdvertising(){
	//先关闭
	return;
	var uuid = dtGlobals.id;
	var href = 'http://www.shopali.net?tcode=freesite&uuid='+uuid;
	if(dtGlobals.qfymodel){ href="#";}
	var jAdObj = jQuery(".qfy_advertising");

	var style = 'display:block !important;opacity: 1 !important;position:fixed !important;bottom:40px !important;left:0 !important;width:116px !important;height:25px !important;line-height:24px !important;background:#23282D !important;z-index:2147483647 !important;text-align:center;color:#fff !important;font-size:12px;border-top-right-radius:3px;border-bottom-right-radius:3px;';
	if(!jAdObj.hasClass("band")){
		var content = 'BY ShopAli';
	}else{
		var content = 'ShopAli提供免费流量';
	}
	if(jAdObj.length==0){
		var tmphtml= '<a class="wf-mobile-hidden qfy_advertising" target=_blank style="'+style+'"  rel="external nofollow" href="'+href+'" >'+content+'</a>';
		jQuery("#page").append(tmphtml);
	}

	var opacity = jAdObj.css("opacity");

	if(opacity!="1"){
		jAdObj.attr("style",style);
	}
	if(jAdObj.css("position")!="fixed"){
		jAdObj.attr("style",style);
	}
	if(jAdObj.css("bottom")!="40px"){
		jAdObj.attr("style",style);
	}
	if(jAdObj.css("left")!="0px"){
		jAdObj.attr("style",style);
	}
	var bgcolor = jAdObj.css("background-color");
	if(bgcolor!="#000000" && bgcolor!='rgb(0, 0, 0)'){
		jAdObj.attr("style",style);
	}
	var color = jAdObj.css("color");
	if(color!="#ffffff" &&  color!="rgb(255, 255, 255)"){
		jAdObj.attr("style",style);
	}
	var marginLeft = jAdObj.css("margin-left");
	if(marginLeft!="0px"){
		jAdObj.attr("style",style);
	}
	var marginTop = jAdObj.css("margin-top");
	if(marginTop!="0px"){
		jAdObj.attr("style",style);
	}
	var zindex = jAdObj.css("z-index");
	if(zindex!="2147483647"){
		jAdObj.attr("style",style);
	}
	var width = jAdObj.css("width");
	if(width!="116px"){
		jAdObj.attr("style",style);
	}
	var height = jAdObj.css("height");
	if(height!="20px"){
		jAdObj.attr("style",style);
	}
	var transform = jAdObj.css("transform");
	if(transform!="none"){
		jAdObj.attr("style",style);
	}
	var visible =  jAdObj.css("visibility");
	if(visible!="visible"){
		jAdObj.attr("style",style);
	}
	var display = jAdObj.css("display");
	if(display!="block"&& jQuery("body").width()>760){
		jAdObj.attr("style",style);
	}
	if(jAdObj.attr("href")!=href){
		jAdObj.attr("href",href);
	}
	if(jAdObj.html()!=content){
		jAdObj.html(content);
	}
	//检查预览下是否在iframe
	if(top!=self ){
		try{
			//不同host
			if(top.window.location.host!=window.location.host){
				location.href = "http://www.shopali.net";
			}
		}catch(e){
			//跨域啦
			location.href = "http://www.shopali.net";
		}
	}



	jQuery("#footer_band").hide();

}
function clickscode(obj){
	jQuery(obj).attr('src','/api/scode.php'+'?'+Math.random());
}

function nav_pagemore(obj){
	if(jQuery(obj).hasClass("vc")){
		jAlert("编辑情况下，无法点击，请在预览情况下使用！");
		return;
	}
	if(jQuery(obj).find(".loading").length>0){
		return ;
	}
	if(jQuery(obj).hasClass("notmore")){
		return ;
	}
	var type=0;
	if(jQuery(obj).parent().hasClass("bitcommerce-pagination")){
		var p = jQuery(obj).closest(".bitcommerce").parent();
		var id = p.attr("qfyuuid");
		var luClass = "[qfyuuid='"+id+"'] ul.products>div";
		var childClass = "ul.products>div";
	}else if(jQuery(obj).closest(".qfy_images_list").length>0){
		var p = jQuery(obj).closest(".qfy_images_list");
		var id = p.attr("qfyuuid");
		var luClass = "[qfyuuid='"+id+"'] .qfe_images_list";
		var childClass = ".qfe_images_list";
		if(jQuery(luClass).find(".more.mypages").length>0){
			type = 1;
		}
	}else if(jQuery(obj).closest(".qfe_images_lib").length>0){
		var p = jQuery(obj).closest(".qfe_images_lib");
		var id = p.attr("qfyuuid");
		var luClass = "[qfyuuid='"+id+"'] .qfe_images_lib_isotope";
		var childClass = ".qfe_images_lib_isotope";
		if(jQuery(luClass).find(".more.mypages").length>0){
			type = 1;
		}
	}else if(jQuery(obj).closest(".advanced_list").length>0){
		var p = jQuery(obj).closest(".advanced_list");
		var id = p.attr("qfyuuid");
		if(p.find(".vc-carousel-slideline-inner:visible").length>0){
		    var luClass = "[qfyuuid='"+id+"'] .vc-carousel-slideline-inner ";
		    var childClass = ".vc-carousel-slideline-inner";
		}else{
			var luClass = "[qfyuuid='"+id+"'] .qfe_wrapper ";
			var childClass = ".qfe_wrapper";
		}
		type = 0;
		if(p.find(".list-style7").length>0){
			//type = 1;
		}
	}else{
		var p = jQuery(obj).closest(".qfe_teaser_grid");
		var id = p.attr("qfyuuid");
		var luClass = "[qfyuuid='"+id+"'].qfe_teaser_grid.qfe_content_element ul.qfe_thumbnails";
		var childClass = "ul.qfe_thumbnails";
	}

	if(p.find("div.qfy_list_loading").length>0){
		return ;
	}
	var list_id = p.find(".qfe_teaser_grid.qfe_content_element").attr("id");

	p.find(".qfe_teaser_grid.qfe_content_element .teaser_grid_container").addClass("noanimale");
	p.find(luClass+" li").css("transform","none").css("top","auto").css("position","relative");
	var url = jQuery(obj).attr("data-url");
	if(url.indexOf("?")>-1){
		url = url+"&isappend=1";
	}else{
		url = url+"?isappend=1";
	}
	var loadtext = jQuery(obj).attr("data-loadtext");
	var old_html = jQuery(obj).find("a").html();
	jQuery(obj).hide();
	if(typeof global_image_loading!="undefined"){

		jQuery(obj).after('<div class="qfy_list_loading"  style="margin:0 auto;text-align:center;">'+global_image_loading+'</div>');
	}else{
		jQuery(obj).after('<div class="qfy_list_loading"  style="margin:0 auto;text-align:center;"><img src="/FeiEditor/bitSite/images/spinner.gif"><span style="color:#808080;font-size:12px;position: relative; top: -3px;">&nbsp;'+loadtext+'</span></div>');

	}

	jQuery.get(url,function(data){
		if(list_id){
			var nowlistobj =jQuery(data).find("#"+list_id+" ul.qfe_thumbnails");
		}else{
			var nowlistobj =jQuery(data).find(luClass);
		}


		var pagemore = nowlistobj.closest(".qfy-element").find(".more.mypages");

		var style = nowlistobj.find(">li").attr("style");
		p.find(childClass).append(nowlistobj.html());




		if(p.hasClass("noanimale")  || p.find(".noanimale").length>0) {
			p.find(childClass).height("auto");
			p.find(childClass+">li:not(.mobile_list_inner)").attr("style",style).css("transform","none").css("top","auto").css("position","relative");
		}
		jQuery(obj).show();
		//jQuery("html, body").animate({ scrollTop:  jQuery(obj).offset().top - jQuery(window).height()/2 }, "fast");

		var curr_postion = p.find("div.qfy_list_loading").offset().top+100;
		var curr_height = p.height();
		p.find("div.qfy_list_loading").remove();
		if(type=="1"){
			jQuery(obj).remove();
		}

		if(pagemore.length>0){
			jQuery(obj).attr("data-url",pagemore.attr("data-url"));
			jQuery(obj).attr("style",pagemore.attr("style"));
		}else{
			jQuery(obj).remove();
			p.find(".has_no_more").show();
		}

		if(p.find(".categories_filter").length>0){
			p.find(".categories_filter a[data-filter='*']").click();
		}

		if(p.attr("data-open")=="1")
			changelistlinkfun(p);
		/*p.find('div.divmiddle').each(function(){
			var pimage = jQuery(this).closest(".images");
			if(pimage.find("img").length>0){
				var $this = this;
				jQuery('<img src="'+pimage.find("img").attr("src")+'">').load(function(){
						var h = jQuery($this).height();
						if(h>0){
							jQuery($this).css("margin-top","-"+(h/2)+"px");
						}
				})

			}else{
				var h = jQuery(this).height();
				if(h>0){
					jQuery(this).css("margin-top","-"+(h/2)+"px");
				}
			}


		})*/
		vc_js_init();
		tranlanguage(p);

		list_more_waypoint();

		if(!p.hasClass("noanimale") && p.find(".isotope-item").length>0 && p.find(".noanimale").length==0) {
			p.find(childClass).isotope( 'reloadItems' ).isotope();
		}


		if(p.find(".qfe_gallery_slides.qfe_flexslider").length>0){
			vc_plugin_flexslider();
		}


	})
}

function bindqfylist(obj,curr){
	jQuery("body").addClass("doing");
	var $ = jQuery;
	var c = jQuery(obj);


	jQuery(".qfy-element.qfe_teaser_grid.qfe_content_element,.qfy-element.qfyproductlist").css("outline","10px solid #FF6600").css("cursor","cursor").css("opacity","0.6");
	jQuery(".qfy-element.qfe_teaser_grid.qfe_content_element,.qfy-element.qfyproductlist").unbind("click.bindqfylist").bind("click.bindqfylist",function(e){
		var item = $(e.currentTarget);

		jQuery("body").removeClass("doing");
		var list =   item.closest(".qfy-element.qfe_teaser_grid.qfe_content_element,.qfy-element.qfyproductlist");
		var val = list.attr("qfyuuid");
		var post_type =  list.attr("data-post");
		var post_cate =  list.attr("data-cate");

		//能添加uuid，则添加uuid
		if(list.parent().attr("data-model-id") && post_type!="page" && (!val || val==0 || val=="") ){
			var listmodel_id = list.parent().attr("data-model-id");
			var listmodel =  parent.vc.shortcodes.get(listmodel_id);
			var listparams = listmodel.get('params');
			listparams.qfyuuid = "qfy_posts_grid_"+parent.vc.ShortcodesBuilder.randomString();
			listmodel.save({params: listparams}, {silent: true});
			val = listparams.qfyuuid;
			list.attr("qfyuuid",val);
		}
		var pageid=0;
		if(top.jQuery("#pageUrl").length>0){
			pageid = top.jQuery("#pageUrl").val();
		}

		if(val && val!=0 && val!="" && post_type!="page"){
			top.jAlert("你已经成功绑定了列表");
			if(c.closest(".vc-element").attr("data-model-id")){
				var model_id = c.closest(".vc-element").attr("data-model-id");
				var model =  parent.vc.shortcodes.get(model_id);
				var params = model.get('params');
				var tag = model.get("shortcode");
				if(tag=="product_navigation" || tag=="vc_custom_search"){
					params.touuid = val;
					post_type = "product";
				}else{
					params.cate_to_listuuid = val;
					params.cate_type = post_type;
				}

				if(post_cate!=""){
					if(post_type=="products"){
						params.cate_products_selected_id = post_cate;
					}else if(post_type=="product"){
						params.cate_product_selected_id = post_cate;
					}else if(post_type=="image"){
						params.cate_image_selected_id = post_cate;
					}else if(post_type=="video"){
						params.cate_video_selected_id = post_cate;
					}else if(post_type=="yunvideo"){
						params.cate_yunvideo_selected_id = post_cate;
					}else{
						params.cate_post_selected_id = post_cate;
					}
				}
				if(curr && curr.length>0){
					if(tag=="product_navigation" || tag=="vc_custom_search"){
						curr.find("[name='touuid']").val(val);
					}else{
						curr.find("[name='cate_to_listuuid']").val(val);
						curr.find("[name='cate_type']").val(post_type).change();
					}
					if(post_cate!=""){
						if(post_type=="products"){
							curr.find("[name='cate_products_selected_id']").val(post_cate)
						}else if(post_type=="product"){
							curr.find("[name='cate_product_selected_id']").val(post_cate)
						}else if(post_type=="image"){
							curr.find("[name='cate_image_selected_id']").val(post_cate)
						}else if(post_type=="video"){
							curr.find("[name='cate_video_selected_id']").val(post_cate)
						}else if(post_type=="yunvideo"){
							curr.find("[name='cate_yunvideo_selected_id']").val(post_cate)
						}else{
							curr.find("[name='cate_post_selected_id']").val(post_cate)
						}
					}
				}

				model.save({params: params});
				parent.ajaxBeforeLoading(0,model.view.$el);
				parent.vc.ShortcodesBuilder.update(model);
				parent.updatePage(model, null);
			}else if(c.closest(".site_tooler").length>0){
				var wid = c.closest(".site_tooler").attr("id");
				jQuery.post("/FeiEditor/siteEdit/updatePostlistOneparam" ,{"wid":wid,"bind_pageid":pageid,"cate_to_listuuid":val,"cate_type":post_type,"post_type_selected":post_cate}, function(rs){
						var p =  jQuery(obj).closest('.site_tooler');
						parent.loaderDivUI(p);
						parent.updateWidgetViewEvent(wid,p);
				});
			}
			jQuery(".qfy-element.qfe_teaser_grid.qfe_content_element,.qfy-element.qfyproductlist").css("outline","0").css("cursor","normal").css("opacity","1");
			jQuery(".qfy-element.qfe_teaser_grid.qfe_content_element,.qfy-element.qfyproductlist").unbind("click.bindqfylist");
		}else if(post_type=="page" ){
			top.jAlert("这个列表类型不正确，只能绑定资讯和产品列表");
		}else{
			top.jAlert("这个列表还没有设置自己的UUID，你可以在设置中添加该列表唯一的UUID");
		}

	})
}
function nav_pagecate_confirm(obj){

	if(jQuery(obj).find(".loading").length>0){
		return ;
	}

	var li = jQuery(obj).closest("li");
	var li_id = li.attr("data-id");
	var c = jQuery(obj).closest(".qfy-listcatecontrols");
	var type = c.attr("type");
	var id = c.attr("to_qfyuuid");
	if(!id ||!type){
		jAlert("没有找到对应的列表");
		return ;
	}

	if(jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").length>0 && !li.hasClass("has-children") ){
		jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").find("a.dropCenterStyle").click();
	}

	c.find(".current-cat").removeClass("current-cat current-menu-item");
	li.addClass("current-cat current-menu-item");
	if(c.attr("data-child")=="1"){
		c.find(".list-content .children").hide();
		li.parents("li,ul").show();
		if(li.hasClass("cat-parent") && li.closest(".list-content").length>0 ) li.find(">.children").show();
	}
	if(c.find(".item_a").length>0){
		c.find(".item_a").removeClass("active");
		li.find(".item_a").addClass("active");
	}
	var p = jQuery("[qfyuuid='"+id+"'].qfe_teaser_grid.qfe_content_element").parent();
	var model_id = p.attr("data-model-id");
	if(model_id && parent){
		parent.ajaxBeforeLoading(0,p);
		var model =  parent.vc.shortcodes.get(model_id);
		var params = model.get('params');
		if(type)
			params.post_type = type;
		if(type=="products"){
			var pro_old = params.pro_categories;
			params.pro_categories = li_id;
		}else if(type=="product"){
			var product_old = params.product_categories;
			params.product_categories = li_id;
		}else{
			var post_old = params.post_categories;
			params.post_categories = li_id;
		}
		if(params.parse_url)
			var parse_url_old =  params.parse_url;
		if(params.parse_search)
			var parse_search_old =  params.parse_search;
		params.parse_url ="0";
		params.parse_search ="0";

		model.save({params: params});
        parent.vc.ShortcodesBuilder.update(model);
		if(type=="products"){
			params.pro_categories = pro_old;
		}else if(type=="product"){
			params.product_categories = product_old;
		}else{
			params.post_categories = post_old;
		}
		if(parse_url_old)
			params.parse_url = parse_url_old;
		if(parse_search_old)
			params.parse_search = parse_search_old;
		model.save({params: params});
	}

}
function nav_customsearch(obj,customurl){
	if(top.jQuery("#site-html #site-body").length>0){
		top.jAlert("请在预览下查看");
		return;
	}
	if(jQuery(".qfy_custom_search").length>0){
		if(typeof nav_customsearch_click!="function"){
			jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-customsearch.js",function() {
				nav_customsearch_click(obj,customurl);
			})
		}else{
			nav_customsearch_click(obj,customurl);
		}
	}
	return;
}

function tranlanguage(htm){

	if(jQuery("body.qfy_slw_tzh").length==1){
		StranBody(htm[0]);

	}else if(jQuery("body.qfy_slw_szh").length==1){
		StranBody(htm[0],0);

	}

}
function nav_pagecate(obj,flag){

	if(jQuery(obj).find(".loading").length>0){
		return ;
	}
	var type=0;
	var li = jQuery(obj).closest("li");
	var c = jQuery(obj).closest(".qfy-listcatecontrols");
	var id = c.attr("to_qfyuuid");
	var p = jQuery("[qfyuuid='"+id+"']");
	if(p.length==0 && jQuery(obj).attr("data-bindurl")){
		location.href = jQuery(obj).attr("data-bindurl");
		return;
	}else if(flag=="direct"){
		location.href = jQuery(obj).attr("data-url");
		return;
	}


	var luClass = "[qfyuuid='"+id+"'].qfe_teaser_grid.qfe_content_element ul.qfe_thumbnails";
	var childClass = "ul.qfe_thumbnails";
	if(p.find("div.qfy_list_loading").length>0){
		return ;
	}

	if(jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").length>0 && !li.hasClass("has-children")){
		jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").find("a.dropCenterStyle").click();
	}

	p.find(".qfe_teaser_grid.qfe_content_element .teaser_grid_container").addClass("noanimale");
	p.find(luClass+" li").css("transform","none").css("top","auto").css("position","relative");
	var url = jQuery(obj).attr("data-url");


	c.find(".current-cat").removeClass("current-cat current-menu-item");
	li.addClass("current-cat current-menu-item");
	if(c.attr("data-child")=="1"){
		c.find(".list-content .children").hide();
		li.parents("li,ul").show();
		if(li.hasClass("cat-parent") && li.closest(".list-content").length>0) li.find(">.children").show();
	}
	if(c.find(".item_a").length>0){
		c.find(".item_a").removeClass("active");
		li.find(".item_a").addClass("active");
	}
	var image_src = "/qfy-content/plugins/qfy_form/admin/images/loading.gif";
	var w = "";
	if(p.attr("data-loading")){
		image_src = p.attr("data-loading");
		w = p.attr("data-loading-w");
	}

	var text = jQuery.trim(jQuery(obj).text());
	jQuery(obj).closest(".dl-menuwrapper").find(".phone-text").html(text);


	if(typeof global_image_loading!="undefined"){
		p.html('<div class="qfy_list_loading"  style="margin:0 auto;text-align:center;">'+global_image_loading+'</div>');
	}else{
		p.html('<div class="qfy_list_loading"  style="margin:50px auto;text-align:center;"><img style="width:'+w+'px" src="'+image_src+'"></div>');

	}

	jQuery.get(url,function(data){
		var nowlistobj =jQuery(data).find("[qfyuuid='"+id+"']");
		if(nowlistobj.length>0){
			p.replaceWith(nowlistobj);
			window.vc_js_init2();
			window.vc_js_init();
			 if(p.find(".noResult").length==0){
				 jQuery('[data-ride="vc-carousel"]').each(function(){
					qfy_carousel_fun(jQuery(this))
				 })
			 }
			 tranlanguage(p);
		}
		if(nowlistobj.attr("data-open")=="1")
			changelistlinkfun(nowlistobj);

		list_more_waypoint();

		if(typeof  nav_pagecate_callback=="function"){
			nav_pagecate_callback();
		}

	})
}

function preventDefaultFn(event) {
	event.preventDefault();
}

function qfy_notice_event(){
	if(jQuery(".qfy-element.qfy_notice .notice_warp").length > 0
	|| jQuery("a[href^='qfy_notice']").length > 0){
		if (typeof window['_qfy_notice_event'] !== 'function'){
			jQuery.getScript("/FeiEditor/bitSite/js/notices.js").done(function() {
				_qfy_notice_event();
			})
		}else{
			_qfy_notice_event();
		}
	}
}
function changeURLArg(url,arg,arg_val){
	var pattern=arg+'=([^&]*)';
	var replaceText=arg+'='+arg_val;
	if(url.match(pattern)){
		var tmp='/('+ arg+'=)([^&]*)/gi';
		tmp=url.replace(eval(tmp),replaceText);
		return tmp;
	}else{
		if(url.match('[\?]')){
			return url+'&'+replaceText;
		}else{
			return url+'?'+replaceText;
		}
	}
	return url+'\n'+arg+'\n'+arg_val;
}
function gototab(obj){
	var p = jQuery(obj).closest(".qfy-tabcontent");
	p.find(".tabcontent-header-menu li.item button").removeClass("active");
	jQuery(obj).find("button").addClass("active");
	var index = p.find(".tabcontent-header-menu li.item").index(jQuery(obj));
	if(p.find(".royalSlider_gallery_new").attr("transitiontype")=="none"){
		if(p.find(".royalSlider_gallery_new>.vc-element").length>0){
			p.find(".royalSlider_gallery_new>.vc-element").removeClass("edittabshow").addClass("edittabhide");
			p.find(".royalSlider_gallery_new>.vc-element:eq("+index+")").removeClass("edittabhide").addClass("edittabshow");
		}else{
			p.find(".royalSlider_gallery_new>section").hide();
			p.find(".royalSlider_gallery_new>section:eq("+index+")").show().css("height","100%");
		}
	}else{
		p.find(".rsBullets .rsNavItem:eq("+index+")").click();
	}
}
function backlistbtn(obj){
	var $this = jQuery(obj).closest(".qfe_teaser_grid.qfe_content_element");
	var h = $this.find(".list_hidden_btn");
	h.siblings().show();
	if(h.siblings(".mypages").length>0){
		var mstyle =h.siblings(".mypages").attr("style");
		if(mstyle) mstyle = mstyle.replace("display: block;","");
		h.siblings(".mypages").attr("style",mstyle);
	}
	h.hide();
	vc_teaserGrid();
	if(curr_scrollbar) jQuery(window).scrollTop(curr_scrollbar);
}


var curr_scrollbar = 0;
function changelistlinkfun($this,$flag){
	$this.find("a.link_title:not(.a_file),a.link_image:not(.a_file),a.vc_read_more:not(.a_file),a.item_link,a.item_a_link,.prenext_inner a,>a").click(function(event) {
			event.preventDefault();
			event.stopPropagation();
			curr_scrollbar =  jQuery(window).scrollTop();
			var link = jQuery(this).attr("href");
			if($flag=="again"){
				$this = jQuery(this).closest(".list_hiddencontent").closest(".qfy-element");
				if(link=="#" ||  !link) return false;
			}
			var h = $this.find(".list_hidden_btn");
			var slider = h.attr("data-slider");
			h.find(".backbtn").hide();
			h.siblings().hide();
			h.show();
			var image_src = "/qfy-content/plugins/qfy_form/admin/images/loading.gif";
			var w = "";
			if(h.closest(".qfy-element").attr("data-loading")){
				image_src = h.closest(".qfy-element").attr("data-loading");
				w = h.closest(".qfy-element").attr("data-loading-w");
			}

			h.find(".list_hiddencontent").html('<div class="qfy_list_loading"  style="margin:0 auto;padding:100px 0;text-align:center;"><img style="width:'+w+'px" src="'+image_src+'"></div>');
			var pt = h.closest(".qfy-element").offset().top;
			if(curr_scrollbar > pt){
				jQuery("html").animate({ scrollTop: pt }, "fast");
			}

			jQuery.get(link,function(data){
				var htm =jQuery(data).find(".content-wrapper").html();
				if(!htm) htm ="";
				if(slider=="1"){
					var htm_prev = "";
					var htm_next = "";
					if(jQuery(data).find(".bitMainTopSider").length>0){
						htm_prev = "<div class='bmts' style='position:relative;width:100%'>"+jQuery(data).find(".bitMainTopSider").html()+"</div>";
					}
					if(jQuery(data).find(".bitMainBottomSider").length>0){
						htm_next = "<div class='bmbs'  style='position:relative;width:100%'>"+jQuery(data).find(".bitMainBottomSider").html()+"</div>";
					}
					htm = htm_prev+htm+htm_next;
				}
				h.find(".list_hiddencontent").html(htm);
				h.find(".backbtn").show();
				 window.vc_js_init2();
				 window.vc_js_init();
				 qfy_notice_event();
				 tranlanguage(h);
				 //。。。。。
				 changelistlinkfun(jQuery(".list_hiddencontent .teaser_grid_container,.list_hiddencontent .advanced_list,.list_hiddencontent .qfy-prenext,.list_hiddencontent .mypages.pagenav"),"again");
			});

			return false;//阻止链接跳转
	 });
}
function list_more_waypoint(){
	if(jQuery(".qfe_teaser_grid .more.auto").length>0){
		jQuery(".qfe_teaser_grid .more.auto").waypoint('destroy');
		jQuery(".qfe_teaser_grid .more.auto").waypoint({
			handler: function(direction) {
					jQuery(this).click();
			},
			triggerOnce: true,
			offset: "bottom-in-view",
		})
	}

}
function qfy_template_preiview_fun(url,select_url){

	if( jQuery("body").width()<1024 || jQuery(".qfytemplateslist.third").length>0){
		location.href = url;
		return;
	}
	var ishttps = 'https:' == document.location.protocol ? true : false;
	if(ishttps){
		url = url.replace("http://","https://");
	}
	jQuery("#qfy_template_preivew").remove();
	var header_str = '';
	header_str += '<div class="demo-mobile" ><div class="demo-mobile-header"><div class="circle"></div><div class="circle" style="width: 60px;"></div></div><div class="demo-mobile-bottom"></div></div>';

	jQuery("body").append("<div id='qfy_template_preivew' class='pc-selected'><div id='qfy_template_preivew_header'><span style='float:left;' > <span class='back' style='position: relative;top:-6px;font-size:12px;'><svg style='position: relative;top:2px;margin-right:3px;stroke: #222;stroke-width: 7px;width: 14px;overflow: visible;-webkit-transform: scaleX(-1);transform: scaleX(-1);' width=\"8px\" height=\"13px\" viewBox=\"0 0 8 13\" version=\"1.1\"><g style='fill: #222;' id=\"Visual-Design\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" opacity=\"1\"><g id=\"9b\" transform=\"translate(-344.000000, -357.000000)\" fill=\"#222222\"><g id=\"templates\" transform=\"translate(-202.000000, 165.000000)\"><path d=\"M544,195 L544,203 L543,203 L543,195 L543,194 L552,194 L552,195 L544,195 Z\" id=\"Combined-Shape\" transform=\"translate(547.500000, 198.500000) rotate(-225.000000) translate(-547.500000, -198.500000) \"></path></g></g></g></svg>Back </span></span> <svg class='pc' style='margin-right:10px;margin-left:270px;cursor:pointer;padding:10px;' width=\"28\" height=\"22\" viewBox=\"0 0 28 22\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#000\" fill-rule=\"evenodd\"><path d=\"M11 18h1v4h-1z\"></path><path d=\"M9 21h10v1H9z\"></path><path d=\"M16 18h1v4h-1z\"></path><path d=\"M1 3v13c0 1.11.891 2 1.996 2h22.008A2.004 2.004 0 0 0 27 16V3c0-1.11-.891-2-1.996-2H2.996A2.004 2.004 0 0 0 1 3zM0 3c0-1.657 1.35-3 2.996-3h22.008A2.994 2.994 0 0 1 28 3v13c0 1.657-1.35 3-2.996 3H2.996A2.994 2.994 0 0 1 0 16V3z\"></path></g></svg><svg style='cursor:pointer;padding:10px;' class='mobile' width=\"12\" height=\"22\" viewBox=\"0 0 12 22\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#000\" fill-rule=\"evenodd\"><path d=\"M1 3.001V19C1 20.105 1.894 21 2.997 21h6.006A2 2 0 0 0 11 18.999V3A1.999 1.999 0 0 0 9.003 1H2.997A2 2 0 0 0 1 3.001zm-1 0A3 3 0 0 1 2.997 0h6.006A2.999 2.999 0 0 1 12 3.001V19A3 3 0 0 1 9.003 22H2.997A2.999 2.999 0 0 1 0 18.999V3z\"></path><path d=\"M5 18h2v2H5z\"></path></g></svg>   <span  style='float:right;'><a class='preivew' target='_blank' href='"+url+"'>Preview</a><a href='"+select_url+"'><button class='use'>Select</button></a><svg class='back'  style=\"width: 40px;height: 40px;fill:none;stroke:#000000;stroke-miterlimit:3;stroke-width:1px;position: relative;top: 15px;margin-right: 0;margin-left: 20px;\"  viewBox=\"0 0 150 150\" ><line  x1=\"8.15\" y1=\"141.18\" x2=\"141\" y2=\"8.33\"/><line  x1=\"8.15\" y1=\"8.33\" x2=\"141\" y2=\"141.18\"/></svg></span></div><div id='qfy_template_preivew_content' ><div class='iframe-inner'>"+header_str+"<iframe src='"+url+"'></iframe></div></div><div class='loading-iframe'></div></div>");


	setTimeout(function(){
		jQuery("#qfy_template_preivew .loading-iframe").animate({"opacity":0},"slow",function () {
			jQuery("#qfy_template_preivew .loading-iframe").remove();
		});
	},300);
	jQuery("body").addClass("popfixed");
	jQuery("#qfy_template_preivew .back").click(function(){
		jQuery("#qfy_template_preivew").remove();
		jQuery("body").removeClass("popfixed");
	});


	jQuery("#qfy_template_preivew .pc").click(function(){
		jQuery("#qfy_template_preivew").addClass("pc-selected").removeClass("mobile-selected");
		jQuery("#qfy_template_preivew .iframe-inner").animate({"width":"100%","height":"100%"},"fast");
	});
	jQuery("#qfy_template_preivew .mobile").click(function(){
		jQuery("#qfy_template_preivew").addClass("mobile-selected").removeClass("pc-selected");
		jQuery("#qfy_template_preivew .iframe-inner").animate({"width":375,"height":667},"fast");
	});

}
var qfy_template_waypoint;
jQuery(document).ready(function($) {
	if(dtGlobals.isWindowsPhone){$("body").addClass("ie-mobile")}if(!$("html").hasClass("old-ie")){dtGlobals.isPhone=false;dtGlobals.isTablet=false;dtGlobals.isDesktop=false;try{var size=top.window.getComputedStyle(top.document.body,":after").getPropertyValue("content");if(size.indexOf("phone")!=-1&&dtGlobals.isMobile){dtGlobals.isPhone=true}else if(size.indexOf("tablet")!=-1&&dtGlobals.isMobile){dtGlobals.isTablet=true}else{dtGlobals.isDesktop=true}}catch(e){}};

	jQuery(".mobile_variation_warp").closest("section").css("z-index","100");
	jQuery("#dl-menu .qfy-sub-div").remove();
	setTimeout(function(){
		jQuery(".qfy-sub-div").each(function(){
			if(jQuery(this).attr("data-full")=="1"){
				var bodywidth = jQuery("body").width();
				var offsetleft = jQuery(this).closest("li").offset().left;
				jQuery(this).css("width","100vw").css("margin-left","-"+(offsetleft)+"px");
			}
		})
	},500);
	jQuery("#main-nav .hassubdiv").mouseenter(function(){
		jQuery(this).find(".qfy-sub-div").each(function(){
			if(jQuery(this).attr("data-full")=="1"){
				var bodywidth = jQuery("body").width();
				var offsetleft = jQuery(this).closest("li").offset().left;
				jQuery(this).css("width","100vw").css("margin-left","-"+(offsetleft)+"px");
			}
		})
	})

	if(jQuery(".qfy-listcatecontrols[data-child='1'],.qfy-listmenuvertical[data-child='1']").length>0){
		jQuery(".qfy-listcatecontrols[data-child='1'],.qfy-listmenuvertical[data-child='1']").each(function(){
			var cur = jQuery(this).find(".list-content .current-cat");
			jQuery(this).find(".list-content .children").hide();
			cur.parents("li,ul").show();
			if(cur.hasClass("cat-parent") && cur.closest(".list-content").length>0 ) cur.find(">.children").show();
		})

	}
	if(jQuery(".mobile-autotable").length>0){
		$(".qfy-text table,#tab-description table").parent().addClass("p-table");
	}
	if(jQuery(".qfy_template_lib .viewmoretemplate").length>0){
		jQuery(".qfy_template_lib .viewmoretemplate").waypoint({
			handler: function(direction) {
				if(jQuery(".qfy_template_lib .viewmoretemplate .viewmoretemplate_inner").length>0){
					jQuery(".qfy_template_lib .viewmoretemplate .viewmoretemplate_inner").click();
				}

			},
			triggerOnce: true,
			offset: "bottom-in-view",
		})
	}

	if(!is_edit_model){
		jQuery(".qfe_teaser_grid.qfe_content_element[data-open='1']").each(function(){
			var $this =  jQuery(this);
			changelistlinkfun($this);
		})
		qfy_notice_event();

		list_more_waypoint();


	}

	if(jQuery("body.free_public").length>0){
		checkAdvertising();
		setTimeout("checkAdvertising()",3000);
		setTimeout("checkAdvertising()",6000);
		setTimeout("checkAdvertising()",10000);
		setTimeout("checkAdvertising()",20000);
		setTimeout("checkAdvertising()",30000);
		setTimeout("checkAdvertising()",100000);
	}

	jQuery(".qfytemplateslist .qfypreloadimg").each(function(){
		var newurl = jQuery(this).attr("data-src");
		var $this = jQuery(this);
		jQuery('<img src="'+newurl+'">').load(function(){
			$this.attr("src",newurl);
		})
	})
	jQuery(".qfy_scroll_box:not(.load)").each(function(){
		jQuery(this).addClass("load");
		var box = jQuery(this).attr("id");
		var delay = jQuery(this).attr("data-delay");
		var speed = jQuery(this).attr("data-speed");
		var h = jQuery(this).attr("data-h");
		slideLine(box,"div",delay,speed,h);
	});

	vc_gallery_relat();
	//特殊处理一些网站
	if(jQuery(".re_second_user_class").length>0 && jQuery.trim(jQuery(".re_second_user_span").text())==""){
		jQuery(".re_second_user_class").hide();
	}

	if(jQuery(".addon-custom-datepicker" ).length>0 ){
		jQuery(".addon-custom-datepicker" ).datepicker({
						dateFormat: "yy-mm-dd",
						numberOfMonths: 1,
		});
	}
	if(jQuery(".addon-custom-datetimepicker" ).length>0 ){
		jQuery(".addon-custom-datetimepicker" ).datetimepicker({
					dateFormat: "yy-mm-dd",
					numberOfMonths: 1,
					showTime: true,
					constrainInput: false
		});
	}
	if(jQuery(".qfytemplateslist").length>0 ){
		$.onDemandScript("/qfy-content/themes/qfy-01/js/a-template.js",function() {
			template_list_init();
		});
	}

	setTimeout(function(){
		try{
			if(top!=self && !jQuery("body").hasClass("compose-mode")){
				if(top.jQuery('#pageUrl').length>0 && parent.jQuery("#vc-post-id").val()!=dtGlobals.curr_id){
					if(parent.jQuery("#vc-post-id").val()){
						top.jQuery('#pageUrl').val(dtGlobals.curr_id).change();
						return;
					}else if(jQuery("#vc-post-id").length==0){
						top.jAlert("页面过期，正尝试自动刷新！");
						setTimeout(function(){top.location.reload();},1000);
						return;
					}
				}
			}
		}catch(e){

		}

	},1000);
	position_follow_function();
	//ready end
})


function qfy_popinfo_fun(htm,timetoclose){
	jQuery(".qfy_popinfo").remove();
	if(htm){
		var msg = '<div class="qfy_popinfo" ><div class="md-content">'+htm+'</div></div>';
		jQuery("body").append(msg);
		setTimeout(function(){ jQuery(".qfy_popinfo").addClass("qfy_show"); },500);
		if(timetoclose){
			setTimeout(function(){ jQuery(".qfy_popinfo").removeClass("qfy_show"); },timetoclose*1000);
			if(jQuery(".qfy_popinfo .jishi_time").length>0){
				setTimeout(function(){
					pop_jishi_time();
				},1000);
			}
		}
	}
}
function pop_jishi_time(){
	var num = jQuery(".qfy_popinfo .jishi_time").text()*1;
	if(num>1){
		jQuery(".qfy_popinfo .jishi_time").text(num-1);
		setTimeout(function(){
			pop_jishi_time();
		},1000);
	}

}
function mobilecart_click(id){
	if( jQuery("#product-"+id+" form .single_add_to_cart_button").length>0 ){
		jQuery("#product-"+id+" form .single_add_to_cart_button").click();
	}else if(jQuery("#product-"+id+" .custom_btn_link .single_add_to_cart_button").length>0 ){
		jQuery("#product-"+id+" .custom_btn_link .single_add_to_cart_button").click();
	}
}
function mobilecart(){
	jQuery(".mobile_variation_warp").addClass("show");
	jQuery("#bottom-bar,#footer,#bitBanner,section.section,.right_nav_bar,#phantom").addClass("lowIndex");
	jQuery(".mobile_variation_warp").closest("section").removeClass("lowIndex").addClass("topIndex");
	jQuery(".mobile_variation_warp").closest(".bit_main_content").addClass("topIndex");
	jQuery(".mobile-mask").addClass("show");
	jQuery(".product_mobilecart").hide();
	jQuery('body').addClass("doing").addClass("popfixed");
	var  height = jQuery(window).height();
	var isnotmove = false;
	if(jQuery("section.section.topIndex").length>0  && jQuery("section.section.topIndex").height()<height*0.75){
		isnotmove = true;
	}else{
		jQuery(".mobile_variation_warp").css("padding-bottom","0");
	}
	jQuery('html, body').on('touchmove', function(e){
		if(isnotmove){
			e.preventDefault();
		}
	});
	if(!isnotmove){
		jQuery("section.section.topIndex").nextAll("section.section").addClass("tmp_displaynone");
		jQuery("#bottom-bar,#footer").addClass("tmp_displaynone");
	}

}
function mobileunmask(){
	jQuery(".mobile-mask").removeClass("show");
	jQuery(".mobile_variation_warp").removeClass("show");
	jQuery(".mobile_variation_warp").closest("section").removeClass("topIndex");
	jQuery(".mobile_variation_warp").closest(".bit_main_content").removeClass("topIndex");
	jQuery("#bottom-bar,#footer,#bitBanner,section.section,.right_nav_bar,#phantom").removeClass("lowIndex");
	jQuery(".product_mobilecart").show();
	jQuery('body').removeClass("doing").removeClass("popfixed");
	jQuery("section.section,#bottom-bar,#footer").removeClass("tmp_displaynone");
}


function weixin_auto_redirect(){
	//第三方补全信息页面，不要跳
	if(jQuery('.qfyuser[data-template="changeinfo"]').length>0){
		return;
	}

	jQuery.post("/admin/admin-ajax.php",{action:"weixin_auto_redirect"},function(data){
		if(data.indexOf("http")==0){
			location.href=data;
		}
	});

}
function facebook_auto_redirect(){
	//第三方补全信息页面，不要跳
	if(jQuery('.qfyuser[data-template="changeinfo"]').length>0){
		return;
	}

	jQuery.post("/admin/admin-ajax.php",{action:"facebook_auto_redirect"},function(data){
		if(data.indexOf("http")==0){
			location.href=data;
		}
	});

}

function openheaderbtn(obj){
	if(jQuery("#page,#phantom").hasClass("menuopen")){
		jQuery("#page,#phantom").removeClass("menuopen");
	}else{
		jQuery("#page,#phantom").addClass("menuopen");
	}
}
function before_quick_search(obj){
	var search =jQuery(obj).find("[name='search']").val();
	if(search==""){
		return false;
	}
}

function quick_search(obj){
	var v = jQuery(obj).val();
	var pageid = jQuery(obj).attr("data-pageid");
	var title = jQuery(obj).attr("data-title")? jQuery(obj).attr("data-title"):"Search";
	var placeholder = jQuery(obj).attr("data-placeholder")?jQuery(obj).attr("data-placeholder"):"Please enter a keyword";
	var btn1 = jQuery(obj).attr("data-btn1")?jQuery(obj).attr("data-btn1"):"Confirm";
	var btn2 = jQuery(obj).attr("data-btn2")?jQuery(obj).attr("data-btn2"):"Cancel";
	var  posttype =  jQuery(obj).attr("data-posttype");
	var postcate = jQuery(obj).attr("data-postcate");
	var bodywidth = jQuery("body").width();
	var bodyheight = jQuery(window).height();
	var message="<div><form action='/'  onsubmit='return before_quick_search(this)'><input type='hidden'  name='searchtype' value='"+posttype+"' /><input type='hidden'  name='searchcate' value='"+postcate+"' /><input type='hidden' name='page_id' value='"+pageid+"'><div style='box-sizing: border-box;padding: 26px 24px 5px 24px;font-size: 18px;font-weight: 500;line-height: 24px;text-align: left;'>"+title+"</div>";
	if( jQuery(obj).attr("data-es")=="1"){
		message +='<input type="hidden"  name="ep_search" value="1" />';
		message +='<input type="hidden"  name="qfyuuid" value="'+ jQuery(obj).attr("data-es-uuid")+'" />';
		if( jQuery(obj).attr("data-es-relevancy")=="1"){
			message +='<input type="hidden"  name="ep_relevancy" value="1" />';
		}
	}
	message +='<div  style="height: 80px;box-sizing: border-box;padding: 0 24px;overflow-y: auto;font-size: 15px;line-height: 1.5;color: rgba(0,0,0,.7);"><input style="border-width: 1px;border-style: solid;padding: 15px;background: #f2f2f2;width: 100%;text-indent: 6px;box-sizing: border-box;margin-top: 5px;border-radius: 0;outline:0;border-color:#ececec;" placeholder="'+placeholder+'" type="search" name="search"></div>';
	message +='<div class="pop_search_btn_div" style="padding: 0 20px;text-align: right;box-sizing: border-box;"><button type="submit" style="min-width: 64px;display: inline-block;height: 36px;padding: 0 16px;text-align: center;text-decoration: none;vertical-align: middle;border-radius: 2px;background:transparent;border:0;font-size:14px;">'+btn1+'</button><button type="button" onclick="unblockUI()" style="font-size:14px;min-width: 64px;display: inline-block;height: 36px;padding: 0 16px;text-align: center;text-decoration: none;vertical-align: middle;border-radius: 2px;background:transparent;border:0;">'+btn2+'</button></div></form></div>';
	if(bodywidth<768){
		var w = bodywidth - 40;
		jQuery.blockUI({onOverlayClick: top.jQuery.unblockUI,css: {"cursor":"auto","top":"30%","left":"50%","margin-left":"-"+(w/2)+"px",width:w+"px",height:"180px"},message:message});
	}else{
		jQuery.blockUI({onOverlayClick: top.jQuery.unblockUI,css: {"cursor":"auto","top":"30%","left":"50%","margin-left":"-360px",width:"720px",height:"180px"},message:message});
	}
	jQuery('body').css('cursor', 'auto');

}

function unblockUI(){
	jQuery.unblockUI();
}
function beforeOnclick(e,msg){
	if(confirm(msg)){

	}else{
		 e.preventDefault();
		 e.stopPropagation();
		 return false;
	}
}
function login_button_click(id,link){
	if(self!=top && typeof parent.jAlert =="function"){
		jAlert("在编辑模式下，不允许使用该功能，请到预览模式下使用。");
		return false;
	}
	var back = location.href;
	try{if(location.href.indexOf('qfy-login.php')>0) back = document.loginform.redirect_to.value;}catch(e){back = '/';}
	location.href=(link?link:'/')+'?connect='+id+'&action=login&qfy_nocache=true&back='+escape(back);
}

//可以挪 后台PHP判断需要使用的地方动态加载 预览的时候才有用的吧? 5k
function play_qfy_video(obj){
	//click
	if(typeof play_qfy_video_init !="function"){
		jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-popvideo.js",function() {
			play_qfy_video_init(obj);
		});
	}else{
		play_qfy_video_init(obj);
	}
}
function play_local_video(obj){
	//click
	if(typeof play_local_video_init !="function"){
		jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-popvideo.js",function() {
			play_local_video_init(obj);
		});
	}else{
		play_local_video_init(obj);
	}
}

function smsWarning(content,flag){
	var parentDIv = jQuery("[name='sms_code']").parents(".verifyDiv");
	parentDIv.find(".sms-warning").html("");
	parentDIv.find(".btn-warning").html("");
	if(content==""){
		return false;
	}
	if(flag=="1"){
		parentDIv.find(".sms-warning").html("<span style='color:green;'>"+content+"...</span>");
	}else {
		parentDIv.find(".btn-warning").html(content);
	}
}

function init_usermange_detail(){
	if(jQuery("#usermanage_container").length <= 0) return;

	if (typeof window['_init_usermange_detail'] !== 'function'){
		jQuery.getScript("/FeiEditor/bitSite/js/users.js").done(function() {
			_init_usermange_detail();
		})
	}else{
		_init_usermange_detail();
	}
}
function qfy_secode_check(obj){
	if(typeof qfy_scode_check_init !="function"){
		jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-scode.js",function() {
			qfy_scode_check_init(obj);
		});
	}else{
		qfy_scode_check_init(obj);
	}
}

if(typeof(position_follow_function)!='function'){
	function position_follow_function(){
		//手机，编辑，自由区块不适用。添加类position-follow
		if(is_edit_model){
			return;
		}
		if( jQuery(".position-follow").length>0){
			jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-follow.js",function() {
				position_follow_init();
			});
		}
	}

}

var pop_scrollTop = 0;
function pop_stopScroll() {
	if( jQuery(window).width()>760){
		return;
	}

	pop_scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	// 使body脱离文档流
	jQuery("body").addClass('dialog-open');
	jQuery("body").css('top',-pop_scrollTop + 'px');
}

function pop_recoverScroll() {
	if( jQuery(window).width()>760){
		return;
	}
	jQuery("body").removeClass('dialog-open');
	document.body.scrollTop = document.documentElement.scrollTop = pop_scrollTop;
}
function open_menu_pop_content(){
	if( jQuery("body").hasClass("pop-content") ){
		jQuery("body").removeClass("pop-content");
	}else{
		jQuery("body").addClass("pop-content");
	}

}





