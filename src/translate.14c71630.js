function getNowLng(){return $.cookie("lng")?$.cookie("lng"):"zh.cn"}function loadLngCss(a){return"zh.cn"==a?($("#lng-css").remove(),!1):void("en"==a&&($("#lng-css").length?$("#lng-css").attr("href","/static/local/css/"+a+".css"):$("head").append('<link rel="stylesheet" id="lng-css" href="/static/local/css/'+a+'.css"/>')))}var tempArr=[translate_page,"base"];if(window.page_inner)for(var i=0;i<page_inner.length;i++)tempArr.push(page_inner[i]);i18n.init({lng:getNowLng(),resGetPath:"/static/local/lng/__lng__/__ns__.json",fallbackLng:[],ns:{namespaces:tempArr,defaultNs:translate_page},cookieName:"lng",cookieExpirationTime:1e5}).done(function(){$("html").i18n(),$(function(){window.afterTranCore&&afterTranCore(),window.afterTran&&afterTran()})}),$(document).on("click",".language-item",function(){var a=$(this);a.data("value")?(a.parents(".language,.page-header-language").find(".language-now").text(a.text()),a.parents(".language-list").hide(),i18n.setLng(a.data("value"),function(){loadLngCss(a.data("value")),location.reload()})):dialog.info($.t("base:no_lang"))});