(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20e7ea"],{b039:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div")},i=[],r=(t("84c2"),t("e35a"),t("1c2e"),t("5e9f"),t("842b")),c=(t("5f87"),t("82ae"),{name:"dingLogin2",created:function(){this.$vuetify.theme.dark=!0},beforeDestroy:function(){this.$vuetify.theme.dark=!1},methods:{getUrlKey:function(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null},doLogin:function(){alert(window.location);var e=this.getUrlKey("corpid");if(e){alert(e);r["ready"]((function(){r["runtime"].permission.requestAuthCode({corpId:e,onSuccess:function(e){var n=e.code;alert(n)},onFail:function(e){alert("失败")}})}))}else alert("请求不合法")}},mounted:function(){this.doLogin()}}),a=c,u=t("9ca4"),l=Object(u["a"])(a,o,i,!1,null,null,null);n["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d20e7ea.7bae6e73.js.map