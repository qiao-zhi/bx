(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a4e4afe"],{"513c":function(e,t,a){"use strict";var r=a("1e2c"),n=a("d890"),i=a("e8d6"),s=a("1944"),o=a("faa8"),l=a("2118"),c=a("7063"),u=a("9f67"),d=a("efe2"),f=a("6d60"),v=a("b338").f,h=a("aa6b").f,p=a("d910").f,m=a("c10f").trim,w="Number",b=n[w],g=b.prototype,_=l(f(g))==w,y=function(e){var t,a,r,n,i,s,o,l,c=u(e,!1);if("string"==typeof c&&c.length>2)if(c=m(c),t=c.charCodeAt(0),43===t||45===t){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+c}for(i=c.slice(2),s=i.length,o=0;o<s;o++)if(l=i.charCodeAt(o),l<48||l>n)return NaN;return parseInt(i,r)}return+c};if(i(w,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var C,V=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof V&&(_?d((function(){g.valueOf.call(a)})):l(a)!=w)?c(new b(y(t)),a,V):y(t)},x=r?v(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;x.length>I;I++)o(b,C=x[I])&&!o(V,C)&&p(V,C,h(b,C));V.prototype=g,g.constructor=V,s(n,w,V)}},6770:function(e,t,a){"use strict";var r=a("535b"),n=a("c219"),i=a("7227");t["a"]=Object(r["a"])(n["a"],Object(i["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",t=>{this.$set(this.errorBag,e._uid,t)},{immediate:!0}),a={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=e.$watch("shouldValidate",r=>{r&&(this.errorBag.hasOwnProperty(e._uid)||(a.valid=t(e)))}):a.valid=t(e),a},validate(){return 0===this.inputs.filter(e=>!e.validate(!0)).length},reset(){this.inputs.forEach(e=>e.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(e=>e.resetValidation()),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find(t=>t._uid===e._uid);if(!t)return;const a=this.watchers.find(e=>e._uid===t._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(e=>e._uid!==t._uid),this.inputs=this.inputs.filter(e=>e._uid!==t._uid),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},7063:function(e,t,a){var r=a("a719"),n=a("50fb");e.exports=function(e,t,a){var i,s;return n&&"function"==typeof(i=t.constructor)&&i!==a&&r(s=i.prototype)&&s!==a.prototype&&n(e,s),e}},c10f:function(e,t,a){var r=a("2732"),n=a("fc8c"),i="["+n+"]",s=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),l=function(e){return function(t){var a=String(r(t));return 1&e&&(a=a.replace(s,"")),2&e&&(a=a.replace(o,"")),a}};e.exports={start:l(1),end:l(2),trim:l(3)}},c931:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{display:"inline-block"}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[a("v-icon",e._g(e._b({staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.start(e.renewalId)}}},"v-icon",n,!1),r),[e._v("mdi-pencil")])]}}])},[a("span",[e._v("编辑")])]),a("v-dialog",{attrs:{persistent:"","max-width":"700px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("编辑续费")])]),a("v-card-text",[a("v-form",{staticClass:"pt-1",attrs:{"lazy-validation":e.lazy},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-row",{staticClass:"ml-1",attrs:{align:"center"}},[a("v-text-field",{staticClass:"ml-2",attrs:{rules:e.nameRules,required:"",label:"续约天数(*必填)",outlined:"",cols:"12",sm:"6"},model:{value:e.renewalObj.renewalDays,callback:function(t){e.$set(e.renewalObj,"renewalDays",t)},expression:"renewalObj.renewalDays"}})],1),a("v-row",{staticClass:"ml-1",attrs:{align:"center"}},[a("v-text-field",{staticClass:"ml-2",attrs:{rules:e.nameRules,required:"",label:"版本(*必填)",outlined:"",cols:"12",sm:"6"},model:{value:e.renewalObj.version,callback:function(t){e.$set(e.renewalObj,"version",t)},expression:"renewalObj.version"}})],1),a("v-row",{staticClass:"ml-1",attrs:{align:"center"}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.date,"min-width":"200px","offset-y":""},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-text-field",e._g({staticClass:"ml-2",attrs:{rules:e.nameRules,color:"red",label:"开始续约时间",readonly:"",outlined:"",cols:"12",sm:"6"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},r))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("v-date-picker",{attrs:{color:"secondary",scrollable:"",locale:"zh-cn"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[a("v-spacer"),a("v-btn",{attrs:{color:"secondary",large:""},on:{click:function(t){e.menu=!1}}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"secondary",large:""},on:{click:function(t){return e.$refs.menu.save(e.date)}}},[e._v("OK")])],1)],1)],1)],1),a("v-row",{staticClass:"ml-1",attrs:{align:"center"}},[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.doCancel()}}},[e._v("关闭")]),a("v-btn",{attrs:{color:"blue darken-1",disabled:!e.valid,text:""},on:{click:function(t){return e.doSave(e.renewalId)}}},[e._v("保存")])],1)],1)],1)],1)],1)],1)],1)},n=[],i=(a("513c"),{name:"editRenewalInfo",data:function(){return{dialog:!1,date:"",menu:!1,renewalObj:{id:"",companyUniqueCode:"",renewalDays:"",renewalTime:"",version:""},lazy:!1,valid:!0,nameRules:[function(e){return!!e||"该选项为必填字段"}]}},props:{renewalId:{type:Number},companyUniqueCode:{type:String}},methods:{start:function(e){var t=this;if(e){this.dialog=!0;var a={id:e};this.$http.get("/user/api/v1/record/detailRenewal",a).then((function(e){t.renewalObj=e.data,t.date=e.data.renewalTime}))}},doSave:function(e){var t=this,a={id:e,companyUniqueCode:this.companyUniqueCode,renewalDays:this.renewalObj.renewalDays,renewalTime:this.renewalObj.renewalTime,version:this.renewalObj.version};this.$http.post("/user/api/v1/record/updateRenewal",a).then((function(e){e.success?(e.msg="续约更新成功",t.$store.commit("SET_SNACK",e),t.$emit("editRenewal",t.companyUniqueCode)):t.$store.commit("SET_SNACK",e)})).catch((function(e){console.log(e)})),this.dialog=!1},doCancel:function(){this.dialog=!1}}}),s=i,o=a("9ca4"),l=a("aeb5"),c=a.n(l),u=a("de9d"),d=a("93cd"),f=a("9e0d"),v=a("619c"),h=a("6d56"),p=a("cd14"),m=a("6770"),w=a("4325"),b=a("a4dc"),g=a("86e1"),_=a("3bd3"),y=a("1d5f"),C=a("f892"),V=Object(o["a"])(s,r,n,!1,null,null,null);t["default"]=V.exports;c()(V,{VBtn:u["a"],VCard:d["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:v["a"],VDatePicker:h["a"],VDialog:p["a"],VForm:m["a"],VIcon:w["a"],VMenu:b["a"],VRow:g["a"],VSpacer:_["a"],VTextField:y["a"],VTooltip:C["a"]})},fc8c:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-1a4e4afe.721ea195.js.map