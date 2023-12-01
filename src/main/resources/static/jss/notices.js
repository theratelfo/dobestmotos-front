var noticeTimeoutShow = false;

function notice_pre_event(thisobj,flag){
    var tooler = jQuery(thisobj).closest(".site_tooler");
    if( tooler.length>0 && tooler.css("display")=="none" ){
        return;
    }
    var event = jQuery(thisobj).attr("data-event");
    var event_delay = jQuery(thisobj).attr("data-event_delay");
    var showtimes = jQuery(thisobj).attr("data-showtimes");
    var closetime = jQuery(thisobj).attr("data-closetime");
    var id = jQuery(thisobj).parent().attr("id");
    var contenttype = jQuery(thisobj).attr("data-contenttype");
    var post_id = jQuery(thisobj).attr("data-post_id");
    var contenttype = jQuery(thisobj).attr("data-contenttype");
    var torun = true;
    var num = 0;

    if(flag=="preview"){
        torun = true;
        //closetime = 0;
        event = 0;
    }else{
        if(id &&　showtimes !=3){
            var num = getCookie(id);
            if(showtimes=="0" && num>0){
                torun = false;
            }else if(showtimes=="1" && num>1){
                torun = false;
            }else if(showtimes=="2" && num>2){
                torun = false;
            }else if(showtimes=="4"){
                var is_confirm = getCookie(id+"_confirm");
                if(is_confirm>0){
                    torun = false;
                }
            }else if(showtimes=="5"){
                //24小时内只显示一次
                var lasttime = getCookie(id+"_lasttime");
                var timestamp = Date.parse(new Date());
                if(lasttime && ((timestamp-lasttime)/3600000)<24){
                    torun = false;
                }else{
                    setCookie(id+"_lasttime",timestamp,"1");
                }
            }
        }
    }
    if(torun){
        if(num) num = num*1+1;
        else num = 1;
        if(flag!="preview"){
            setCookie(id,num,"365");
        }
        if(contenttype == "2"){
            //ajax
            if(!post_id || post_id==""){
                content = "对应的组件页面不存在(ID:0)。请重新指定一个组件页面。";
                notice_event(thisobj,content);
                return;
            }else{
                if(event!="2"){
                    jQuery.post("/admin/admin-ajax.php",{"action":"get_noticepostcontent_from_id","post_id":post_id},function(data){
                        if(data.indexOf("Error:")!==0){
                            if(event=="0" || (event=="1" && event_delay==0)){
                                notice_event(thisobj,data);
                            }else if(event=="1"){
                                noticeTimeoutShow = setTimeout(function(){notice_event(thisobj,data);},event_delay*1000);
                            }
                            if(closetime>0){
                                setTimeout(function(){
                                    if(noticeTimeoutShow)
                                        clearTimeout(noticeTimeoutShow);
                                    //close it
                                    $('#qfy_float_ad.'+id+',#QFY_overlay.'+id+',#QFY_window.'+id).remove();
                                },closetime*1000);

                            }

                        }else {
                            content = "对应的组件页面不存在(ID:"+post_id+")。请重新指定一个组件页面。";
                            notice_event(thisobj,content);
                            return;
                        }
                    });
                }
            }

        }else{
            if(event=="0" || (event=="1" && event_delay==0)){
                notice_event(thisobj);
            }else if(event=="1"){
                var $this = thisobj;
                noticeTimeoutShow = setTimeout(function(){notice_event(thisobj);},event_delay*1000);
            }
            if(closetime>0){
                setTimeout(function(){
                    if(noticeTimeoutShow)
                        clearTimeout(noticeTimeoutShow);
                    //close it
                    //$('#qfy_float_ad.'+id+',#QFY_overlay.'+id+',#QFY_window.'+id).remove();
                    notice_close_fun("#"+id+" .notice_warp");
                },closetime*1000);

            }


        }


    }

    if(jQuery(thisobj).parent().hasClass("esc")){

        jQuery( "body" ).on( "click", "#QFY_overlay."+id, function() {
            notice_close_fun(thisobj);
        });
        jQuery(document).keydown(function(e){
            if (e.keyCode == 27){
                notice_close_fun(thisobj);
            }
        })
    }
}
function notice_close_fun(thisobj){
    if(typeof pop_recoverScroll=="function"){
        pop_recoverScroll();
    }
    var obj = jQuery(thisobj);
    var id_class = jQuery(thisobj).parent().attr("id");
    var animale = obj.attr("data-animale");
    var close_animale = obj.attr("data-close_animale");
    if(close_animale=="1"){
        jQuery("#QFY_window."+id_class+",#QFY_overlay."+id_class).remove();
    }else{
        if(animale=="0"){
            jQuery("#QFY_window."+id_class).stop(true).animate({opacity:"0"},'fast',function(){
                jQuery("#QFY_window."+id_class+",#QFY_overlay."+id_class).remove();
            });
        }else if(animale=="1"){
            jQuery("#QFY_window."+id_class).stop(true).animate({top:"-100%",opacity:"0"},'fast',function(){
                jQuery("#QFY_window."+id_class+",#QFY_overlay."+id_class).remove();
            })
        }else if(animale=="2"){
            jQuery("#QFY_window."+id_class).stop(true).animate({top:"100%",opacity:"0"},'fast',function(){
                jQuery("#QFY_window."+id_class+",#QFY_overlay."+id_class).remove();
            })
        }else if(animale=="3"){
            jQuery("#QFY_window."+id_class).stop(true).animate({left:"-100%",opacity:"0"},'fast',function(){
                jQuery("#QFY_window."+id_class+",#QFY_overlay."+id_class).remove();
            })
        }else if(animale=="4"){
            jQuery("#QFY_window."+id_class).stop(true).animate({left:"100%",opacity:"0"},'fast',function(){
                jQuery("#QFY_window."+id_class+",#QFY_overlay."+id_class).remove();
            })
        }
    }


}
function notice_event(thisobj,precontent){
    var id_class = jQuery(thisobj).parent().attr("id");
    jQuery("#QFY_window."+id_class+",#QFY_overlay."+id_class+",#qfy_float_ad."+id_class).remove();
    jQuery("body").removeAttr("style");

    var obj = jQuery(thisobj);
    var device = obj.attr("data-device");
    if(device=="1" && jQuery(window).width()<760){
        return;
    }else if(device=="2" && jQuery(window).width()>760){
        return;
    }
    if(typeof pop_stopScroll=="function"){
        pop_stopScroll();
    }
    var type = obj.attr("data-type");
    var align = obj.attr("data-align");
    var screenpadding = obj.attr("data-screenpadding")?obj.attr("data-screenpadding"):0;
    var animale = obj.attr("data-animale");
    var animale_time = obj.attr("data-animale_time");
    if(animale_time<=0 || !animale_time) animale_time =1;
    var qfy_width = obj.attr("data-width")?obj.attr("data-width"):600;
    var qfy_height = obj.attr("data-height")?obj.attr("data-height"):400;
    if(jQuery(window).width()<760){
        qfy_width = obj.attr("data-mobilewidth")?obj.attr("data-mobilewidth"):300;
        qfy_height = obj.attr("data-mobileheight")?obj.attr("data-mobileheight"):300;
    }

    var allow_close = obj.attr("data-allow_close");
    var btn_align = obj.attr("data-btn_align");
    var z_index = obj.attr("data-z_index");
    var btn_position = obj.attr("data-btn_position");
    var btn_position_x = obj.attr("data-btn_position_x");
    if(qfy_width.indexOf("%")>-1){
        qfy_width = qfy_width.replace("%","");
        if(qfy_width>100) qfy_width =100;
        if(qfy_width<10) qfy_width =10;
        qfy_width = jQuery(window).width()*qfy_width/100;
    }
    if(qfy_height.indexOf("%")>-1){
        qfy_height = qfy_height.replace("%","");
        if(qfy_height>100) qfy_height =100;
        if(qfy_height<10) qfy_height =10;
        qfy_height = jQuery(window).height()*qfy_height/100;
    }

    var content = obj.html();
    //content = content.replace("display:none;","").replace("display:none;","").replace("display:none;","").replace("display:none;","");

    if(precontent){
        //ajax
        content = content.replace('<div class="notice_loading"></div>',precontent);
    }
    var style = "opacity:0;";

    var marginleft = parseInt((qfy_width / 2),10);
    var margintop = parseInt((qfy_height / 2),10);
    var totop = "50%";
    var defaultleft = "50%";
    var toleft = "50%";
    if(type=="0" || type=="1"){
        if(align=="0"){
            if(animale=="1"){
                style += "top:0;";
            }else if(animale=="2"){
                style += "top:100%;";
            }else{
                style += "top:50%;";
            }

            if(animale=="3"){
                defaultleft = "0";
            }else if(animale=="4"){
                defaultleft = "100%";
            }
            style += "margin-top:-"+margintop+"px;margin-left:-"+marginleft+"px; position: fixed; left: "+defaultleft+";z-index:10003";

            totop = "50%";
            toleft = "50%";

        }else if(align=="1"){
            if(animale=="1"){
                style += "top:-50%;";
            }else if(animale=="2"){
                style += "top:50%;";
            }else{
                style += "top:0;";
            }

            if(animale=="3"){
                defaultleft = "0";
            }else if(animale=="4"){
                defaultleft = "100%";
            }
            style += "margin-top:"+screenpadding+"px;margin-left:-"+marginleft+"px; position: fixed; left: "+defaultleft+";z-index:10003";

            totop = "0%";
            toleft = "50%";
        }else if(align=="2"){
            if(animale=="1"){
                //style += "top:50%;";
                style += "top:"+(jQuery(window).height() - 2*qfy_height)+"px;";
            }else if(animale=="2"){
                //style += "top:100%;";
                style += "top:"+jQuery(window).height()+"px;";
            }else {
                style += "bottom:0;";
            }

            if(animale=="3"){
                defaultleft = "0";
            }else if(animale=="4"){
                defaultleft = "100%";
            }
            style += "margin-bottom:"+screenpadding+"px;margin-left:-"+marginleft+"px; position: fixed; left: "+defaultleft+";z-index:10003";

            totop = jQuery(window).height() - qfy_height;
            toleft = "50%";
        }else if(align=="3"){
            if(animale=="1"){
                style += "top:0;";
            }else if(animale=="2"){
                style += "top:100%;";
            }else {
                style += "top:50%;";
            }

            if(animale=="3"){
                defaultleft = -qfy_width;
            }else if(animale=="4"){
                defaultleft = qfy_width;
            }else{
                defaultleft = screenpadding;
            }
            style += "margin-top:-"+margintop+"px; position: fixed; left: "+defaultleft+"px;z-index:10003";

            totop = "50%";
            toleft = screenpadding;
        }else if(align=="4"){

            if(animale=="1"){
                style += "top:0;";
            }else if(animale=="2"){
                style += "top:100%;";
            }else {
                style += "top:50%;";
            }

            if(animale=="3"){
                defaultleft = (jQuery(window).width() - 2*qfy_width)+"px";
            }else if(animale=="4"){
                defaultleft = jQuery(window).width()+"px";
            }else{
                defaultleft = "auto;right:0";
            }

            style += "margin-top:-"+margintop+"px;position: fixed; margin-right: "+screenpadding+"px;left:"+defaultleft+";z-index:10003";


            totop = "50%";
            toleft = jQuery(window).width() - qfy_width;
        }else if(align=="5"){
            var defaultleft ="0";
            var screeny = obj.attr("data-screeny");
            var screenx = obj.attr("data-screenx");
            if(animale=="1"){
                style += "top:-50%;";
            }else if(animale=="2"){
                style += "top:50%;";
            }else{
                style += "top:0;";
            }

            if(animale=="3"){
                defaultleft = "-"+qfy_width+"px";
            }else if(animale=="4"){
                defaultleft = qfy_width+"px";
            }
            style += "margin-top:"+screeny+"px;margin-left:"+screenx+"px; position: fixed; left: "+defaultleft+";z-index:10003";

            totop = "0%";
            toleft = "0%";
        }else if(align=="6"){
            var defaultleft = (jQuery(window).width() - qfy_width)+"px";
            var screeny = obj.attr("data-screeny");
            var screenx = obj.attr("data-screenx");
            if(animale=="1"){
                style += "top:-50%;";
            }else if(animale=="2"){
                style += "top:50%;";
            }else{
                style += "top:0;";
            }

            if(animale=="3"){
                defaultleft = (jQuery(window).width() - 2*qfy_width)+"px";
            }else if(animale=="4"){
                defaultleft = jQuery(window).width()+"px";
            }
            style += "margin-top:"+screeny+"px;margin-left:-"+screenx+"px; position: fixed; left: "+defaultleft+";z-index:10003";

            totop = "0%";
            toleft = jQuery(window).width() - qfy_width;

        }else if(align=="7"){
            var defaultleft = 0;
            var screeny = obj.attr("data-screeny");
            var screenx = obj.attr("data-screenx");
            if(animale=="1"){
                style += "top:"+(jQuery(window).height() - 2*qfy_height)+"px;";
            }else if(animale=="2"){
                style += "top:"+jQuery(window).height()+"px;";
            }else {
                style += "bottom:0;";
            }

            if(animale=="3"){
                defaultleft = "-"+qfy_width+"px";
            }else if(animale=="4"){
                defaultleft = qfy_width+"px";
            }
            style += "margin-bottom:"+screeny+"px;margin-left:"+screenx+"px; position: fixed; left: "+defaultleft+";z-index:10003";

            totop = jQuery(window).height() - qfy_height;
            toleft = "0%";

        }else if(align=="8"){
            var defaultleft = (jQuery(window).width() - qfy_width)+"px";
            var screeny = obj.attr("data-screeny");
            var screenx = obj.attr("data-screenx");
            if(animale=="1"){
                style += "top:"+(jQuery(window).height() - 2*qfy_height)+"px;";
            }else if(animale=="2"){
                style += "top:"+jQuery(window).height()+"px;";
            }else {
                style += "bottom:0;";
            }

            if(animale=="3"){
                defaultleft = (jQuery(window).width() - 2*qfy_width)+"px";
            }else if(animale=="4"){
                defaultleft = jQuery(window).width()+"px";
            }
            style += "margin-bottom:"+screeny+"px;margin-left:-"+screenx+"px; position: fixed; left: "+defaultleft+";z-index:10003";

            totop = jQuery(window).height() - qfy_height;
            toleft = jQuery(window).width() - qfy_width;

        }

        var qfy_width_tmp = qfy_width;
        var qfy_height_tmp = qfy_height;

        if(jQuery("#QFY_window."+id_class).length==0){
            if(obj.attr("data-width")=="100%"){
                qfy_width_tmp = "100%";
            }else{
                qfy_width_tmp = qfy_width+"px";
            }
            if(obj.attr("data-height")=="100%"){
                qfy_height_tmp = "100%";
            }else{
                qfy_height_tmp = qfy_height+"px";
            }
            jQuery("body").append("<div id='QFY_window' class='"+id_class+"' style='width:"+qfy_width_tmp+";height:"+qfy_height_tmp+";"+style+"'><div id='QFY_content' style='height:"+qfy_height_tmp+"' >"+content+"</div></div>");

        }
        if(jQuery("#TB_overlay."+id_class).length==0 && type=="0"){
            var optcolor = obj.attr("data-optcolor")?obj.attr("data-optcolor"):"#000000";
            var opt= obj.attr("data-opt")?obj.attr("data-opt"):"0.7";
            jQuery("body").append("<div id='QFY_overlay' class='"+id_class+"' style='height: 100%;left: 0;position: fixed;top: 0;width: 100%;z-index: 100;background-color: "+optcolor+";opacity: "+opt+";z-index:10001;'></div>");
        }

        if(animale=="0"){
            jQuery("#QFY_window."+id_class).stop(true).animate({opacity:"1"},animale_time*1000,function(){
                if(obj.attr("data-width")=="100%"){
                    jQuery("#QFY_window."+id_class).css({"left":"0","margin-left":"0"});
                }
            });
        }else if(animale=="1" || animale=="2"){
            if(align=="2"){
                jQuery("#QFY_window."+id_class).stop(true).animate({top:totop,opacity:"1"},animale_time*1000,function(){
                    jQuery("#QFY_window."+id_class).css({"bottom":"0","top":"auto"});
                    if(obj.attr("data-width")=="100%"){
                        jQuery("#QFY_window."+id_class).css({"left":"0","margin-left":"0"});
                    }
                });
            }else{
                jQuery("#QFY_window."+id_class).stop(true).animate({top:totop,opacity:"1"},animale_time*1000,function(){
                    if(obj.attr("data-width")=="100%"){
                        jQuery("#QFY_window."+id_class).css({"left":"0","margin-left":"0"});
                    }
                });
            }
        }else if(animale=="3"||animale=="4"){
            if(align=="4"){
                jQuery("#QFY_window."+id_class).stop(true).animate({left:toleft,opacity:"1"},animale_time*1000,function(){
                    jQuery("#QFY_window."+id_class).css({"right":"0","left":"auto"});
                    if(obj.attr("data-width")=="100%"){
                        jQuery("#QFY_window."+id_class).css({"left":"0","margin-left":"0"});
                    }
                });
            }else{
                jQuery("#QFY_window."+id_class).stop(true).animate({left:toleft,opacity:"1"},animale_time*1000,function(){
                    if(obj.attr("data-width")=="100%"){
                        jQuery("#QFY_window."+id_class).css({"left":"0","margin-left":"0"});
                    }
                });
            }
        }
    }else if(type=="3"){

        if(jQuery("#qfy_float_ad."+id_class).length==0){
            //含有空格，如果空会显示默认的关闭按钮
            var closeHTML = " ";
            if(allow_close=="0" && jQuery("#qfy_float_ad."+id_class+" #QFY_close").length==0){
                if(jQuery(thisobj).find(".notice_close").length>0){
                    var notice_close = jQuery(thisobj).find(".notice_close").prop("outerHTML");
                    notice_close = notice_close.replace("display:none;","");
                    if(btn_align==0){
                        closeHTML = "<div id='QFY_close'  style='position:absolute;z-index:5;right:0px;top:0;cursor:pointer;'>"+notice_close+"</div>";
                    }else if(btn_align==1){
                        closeHTML = "<div id='QFY_close' style='position:absolute;z-index:5;left:48%;top:0;cursor:pointer;' >"+notice_close+"</div>";
                    }else if(btn_align==2){
                        closeHTML = "<div id='QFY_close' style='position:absolute;z-index:5;left:0;top:0;cursor:pointer;' >"+notice_close+"</div>";
                    }

                }
            }

            var x=(jQuery(window).width()-qfy_width)/2,y=(jQuery(window).height()-qfy_height)/2;
            if(align=="1"){
                y=0;
            }else if(align=="2"){
                y=jQuery(window).height()-qfy_height;
            }else if(align=="3"){
                x=0;
            }else if(align=="4"){
                x=jQuery(window).width()-qfy_width;
            }else if(align=="5"){
                x=0;y=0;
            }else if(align=="6"){
                y=0;
                x=jQuery(window).width()-qfy_width;
            }else if(align=="7"){
                y=jQuery(window).height()-qfy_height;
                x=0;
            }else if(align=="8"){
                y=jQuery(window).height()-qfy_height;
                x=jQuery(window).width()-qfy_width;
            }
            jQuery("body").floatAd({
                customhtml: "<div id='QFY_content' style='height:"+qfy_height+"px;'>"+content+"</div>",
                speed:animale_time*10,
                id_class:id_class,
                closeHTML:closeHTML,
                x:x,
                y:y
            });
            if(obj.attr("data-width")=="100%"){
                jQuery("#qfy_float_ad."+id_class).width("100%").css("margin-left","1px").height(qfy_height);
            }else{
                jQuery("#qfy_float_ad."+id_class).width(qfy_width).height(qfy_height);
            }
            if(closeHTML!=" "){
                jQuery("#qfy_float_ad."+id_class+" #QFY_close").css("top",btn_position+"px");
                var close_left = jQuery("#qfy_float_ad."+id_class+" #QFY_close").css("left");
                if(close_left=="auto"){
                    close_left = qfy_width - jQuery("."+id_class+" #QFY_close").width();
                }else{
                    close_left = close_left.replace("px","");
                }
                jQuery("#qfy_float_ad."+id_class+" #QFY_close").css("right","auto").css("left",(close_left*1+btn_position_x*1)+"px");
            }

            jQuery("#QFY_window."+id_class).remove();
        }
    }


    if(jQuery("#QFY_window."+id_class).length==1){
        jQuery("#QFY_window."+id_class).css("z-index",z_index);
        if(allow_close=="0" && jQuery("#QFY_window."+id_class+" #QFY_close").length==0){
            if(jQuery(thisobj).find("#QFY_close").length==0){
                var notice_close = jQuery(thisobj).find(".notice_close").prop("outerHTML");
                notice_close = notice_close.replace("display:none;","").replace("display: none;","");
                if(btn_align==0){
                    jQuery("#QFY_window."+id_class).append("<div id='QFY_close'  style='position:absolute;z-index:5;right:0px;top:0;cursor:pointer;'>"+notice_close+"</div>");
                }else if(btn_align==1){
                    jQuery("#QFY_window."+id_class).append("<div id='QFY_close' style='position:absolute;z-index:5;left:48%;top:0;cursor:pointer;' >"+notice_close+"</div>");
                }else if(btn_align==2){
                    jQuery("#QFY_window."+id_class).append("<div id='QFY_close' style='position:absolute;z-index:5;left:0;top:0;cursor:pointer;' >"+notice_close+"</div>");
                }


                jQuery("#QFY_window."+id_class+" #QFY_close").css("top",btn_position+"px");
                var close_left = jQuery("#QFY_window."+id_class+" #QFY_close").css("left");

                if(close_left=="auto"){
                    close_left = qfy_width - jQuery("."+id_class+" #QFY_close").width();
                }else{
                    close_left = close_left.replace("px","");
                }

                jQuery("#QFY_window."+id_class+" #QFY_close").css("right","auto").css("left",(close_left*1+btn_position_x*1)+"px");

                jQuery("#QFY_window."+id_class+" #QFY_close").click(function(e){
                    var title = jQuery("#QFY_window."+id_class+" .notice_content").attr("data-allow_warninfo");
                    if(title){
                        title = base64_decode(title);
                        alert(title);
                    }
                    var allow_forceclose = jQuery("#QFY_window."+id_class+" .notice_content").attr("data-allow_forceclose");
                    if(allow_forceclose!="1"){
                        //..........
                        notice_close_fun(thisobj);
                    }
                })
            }
        }


    }

    var bgcolor = obj.attr("data-bgcolor");
    var borderwidth = obj.attr("data-borderwidth");
    var bordercolor = obj.attr("data-bordercolor");
    var shadowwidth = obj.attr("data-shadowwidth");

    var shadowcolor = obj.attr("data-shadowcolor");
    var radius = obj.attr("data-radius");


    jQuery("#QFY_window."+id_class+" #QFY_content .notice_close,#qfy_float_ad."+id_class+" #QFY_content .notice_close").remove();

    if(bgcolor){
        jQuery("#QFY_window."+id_class+"  #QFY_content,#qfy_float_ad."+id_class+" #QFY_content").css("background",bgcolor);
    }else{
        jQuery("#QFY_window."+id_class+"  #QFY_content,#qfy_float_ad."+id_class+" #QFY_content").css("background","#fff");
    }
    if(borderwidth){
        //jQuery("#QFY_window."+id_class+"  #QFY_content,#qfy_float_ad."+id_class+" #QFY_content").css("border",borderwidth+"px solid "+bordercolor);
    }

    if(shadowwidth>0 ){
        jQuery("#QFY_window."+id_class+" #QFY_content,#qfy_float_ad."+id_class+" #QFY_content").css("box-shadow","0px 0px "+shadowwidth+"px  "+shadowcolor);
    }
    if(radius>0){
        jQuery("#QFY_window."+id_class+" #QFY_content,#qfy_float_ad."+id_class+" #QFY_content").css("border-radius",radius+"px");
    }


    if(jQuery("."+id_class+" .notice_header").length>0){
        var f_h = jQuery("."+id_class+" .notice_header").outerHeight();
    }else{
        var f_h = 0;
    }
    if(jQuery("."+id_class+" .notice_footer").length>0){
        var f_f = jQuery("."+id_class+" .notice_footer").outerHeight();
    }else{
        var f_f = 0;
    }

    var h = jQuery("."+id_class+" #QFY_content").height() - f_f  - f_h;
    jQuery("."+id_class+" .notice_content").height(h);

    jQuery("#QFY_window .editorview,#qfy_float_ad .editorview").remove();
    if( obj.attr("data-opt_hide")=="1" && jQuery("#QFY_overlay."+id_class).length>0){
        jQuery("#QFY_overlay."+id_class).unbind().click(function(){
            var title = jQuery("#QFY_window."+id_class+" .notice_content").attr("data-allow_warninfo");
            if(title){
                title = base64_decode(title);
                alert(title);
            }
            var allow_forceclose = jQuery("#QFY_window."+id_class+" .notice_content").attr("data-allow_forceclose");
            if(allow_forceclose!="1"){

                //..........
                notice_close_fun(thisobj);
            }
        })
    }

    jQuery("."+id_class+" .notice_header,."+id_class+" .notice_footer,."+id_class+" .notice_content").show();
    if(precontent){
        window.vc_js_init2();
        window.vc_js_init();
    }
    setTimeout(function(){ searchForm(); },100);
}

function _qfy_notice_event(){
    jQuery(".qfy-element.qfy_notice .notice_warp").each(function(){
        notice_pre_event(this);
    })

    jQuery("a[href^='qfy_notice']").unbind().click(function(e){
        e.preventDefault();
        e.stopPropagation();
        var id = jQuery(this).attr("href");
        if(jQuery("#"+id).length>0){
            notice_pre_event("#"+id+" .notice_warp","preview");

        }
    })
}


function qfy_btn_primry_notice(obj){
    var p = jQuery(obj).closest("#QFY_window,#qfy_float_ad");
    if(p.length==1){
        var title = p.find(".notice_content").attr("data-allow1_warninfo");
        if(title){
            title = base64_decode(title);
            alert(title);
        }
        var allow_forceclose = p.find(".notice_content").attr("data-allow1_forceclose");
        if(allow_forceclose!="1"){
            if(p.attr("id")=="qfy_float_ad"){
                p.remove();
                var id_class = p.attr("class");
                jQuery("#QFY_overlay."+id_class).remove();
            }else{
                var id_class = p.attr("class");
                notice_close_fun("#"+id_class+" .notice_warp");
            }
            setCookie(id_class+"_confirm",1,"365");
        }
    }
}
function qfy_btn_default_notice(obj){
    var p = jQuery(obj).closest("#QFY_window,#qfy_float_ad");
    if(p.length==1){
        var title = p.find(".notice_content").attr("data-allow2_warninfo");
        if(title){
            title = base64_decode(title);
            alert(title);
        }
        var allow_forceclose = p.find(".notice_content").attr("data-allow2_forceclose");
        if(allow_forceclose!="1"){
            if(p.attr("id")=="qfy_float_ad"){
                p.remove();
                var id_class = p.attr("class");
                jQuery("#QFY_overlay."+id_class).remove();
            }else{
                var id_class = p.attr("class");
                notice_close_fun("#"+id_class+" .notice_warp");
            }
        }
    }

}
