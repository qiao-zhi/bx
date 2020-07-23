(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49eb3340"],{"38e4":function(t,e,i){"use strict";i.r(e);var a=function(){var t,e=this,i=e.$createElement,a=e._self._c||i;return a("v-container",{attrs:{id:"alerts",fluid:"",tag:"section"}},[a("base-v-component",{attrs:{heading:"Alerts",link:"components/alerts"}}),a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-card",[a("v-card-text",[a("base-subheading",{attrs:{subheading:"Notification Style"}}),a("base-material-alert",{attrs:{color:"info",dark:""}},[e._v(" This is a plain notification. ")]),a("base-material-alert",{attrs:{color:"info",dark:"",dismissible:""}},[e._v(" This is a notification with close button. ")]),a("base-material-alert",{attrs:{color:"info",dark:"",dismissible:"",icon:"mdi-bell"}},[e._v(" This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style. ")]),a("base-material-alert",{attrs:{color:"primary",dark:"",dismissible:"",icon:"mdi-bell"}},[e._v(" You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style. ")])],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-card",[a("v-card-text",[a("base-subheading",{attrs:{subheading:"Notification states"}}),e._l(e.colors,(function(t){return a("base-material-alert",{key:t,attrs:{color:t,dark:"",dismissible:""}},[a("span",{staticClass:"text-uppercase",domProps:{textContent:e._s(t)}}),e._v(' — This is a regular alert made with the color of "'+e._s(t)+'" ')])})),a("base-material-alert",{attrs:{color:"secondary",dark:"",dismissible:""}},[a("span",[e._v("PRIMARY")]),e._v(' — This is a regular alert made with the color "secondary" ')]),a("base-material-alert",{attrs:{color:"pink darken-1",dark:"",dismissible:""}},[a("span",[e._v("PINK DARKEN-1")]),e._v(' — This is a regular alert made with the color "pink darken-1" ')])],2)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-text",{staticClass:"text-center"},[a("base-subheading",{staticClass:"text-center",attrs:{subheading:"Snackbar Locations"}}),a("v-row",{staticClass:"mt-n12",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"10",lg:"8"}},[a("v-row",e._l(e.directions,(function(t){return a("v-col",{key:t,attrs:{cols:"4"}},[a("v-btn",{staticClass:"v-btn--block",attrs:{color:"secondary",default:""},on:{click:function(i){e.randomColor(),e.direction=t,e.snackbar=!0}}},[e._v(" "+e._s(t)+" ")])],1)})),1)],1)],1),a("base-subheading",{staticClass:"text-center",attrs:{subheading:"Dialogs"}}),a("v-row",{staticClass:"mt-n12",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"10",lg:"8"}},[a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-btn",{attrs:{color:"secondary",default:"",rounded:""},on:{click:function(t){e.dialog=!0}}},[e._v(" Classic Dialog ")])],1),a("v-col",{attrs:{cols:"4"}},[a("v-btn",{attrs:{color:"info",default:"",rounded:""},on:{click:function(t){e.dialog2=!0}}},[e._v(" Notice Modal ")])],1),a("v-col",{attrs:{cols:"4"}},[a("v-btn",{attrs:{color:"pink darken-1",dark:"",default:"",rounded:""},on:{click:function(t){e.dialog3=!0}}},[e._v(" Small Alert Modal ")])],1)],1)],1)],1)],1)],1)],1)],1),a("base-material-snackbar",e._b({attrs:{type:e.color},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},"base-material-snackbar",(t={},t[e.parsedDirection[0]]=!0,t[e.parsedDirection[1]]=!0,t),!1),[e._v(" Welcome to "),a("span",{staticClass:"font-weight-bold"},[e._v(" MATERIAL DASHBOARD PRO ")]),e._v(" — a beautiful admin panel for every web developer. ")]),a("v-dialog",{attrs:{"max-width":"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",{staticClass:"text-center"},[a("v-card-title",[e._v(" Dialog Title "),a("v-spacer"),a("v-icon",{attrs:{"aria-label":"Close"},on:{click:function(t){e.dialog=!1}}},[e._v(" mdi-close ")])],1),a("v-card-text",[e._v(" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Close ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500"},model:{value:e.dialog2,callback:function(t){e.dialog2=t},expression:"dialog2"}},[a("v-card",[a("v-card-title",[e._v(" How do you become an affiliate? "),a("v-spacer"),a("v-icon",{attrs:{"aria-label":"Close"},on:{click:function(t){e.dialog2=!1}}},[e._v(" mdi-close ")])],1),a("v-card-text",{staticClass:"body-1 text-center"},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"8"}},[a("div",[a("div",[a("strong",[e._v("1. Register")])]),a("div",{staticClass:"grey--text"},[e._v(" The first step is to create an account at Creative Tim. You can choose a social network or go for the classic version, whatever works best for you. ")])])]),a("v-col",{staticClass:"hidden-sm-and-down",attrs:{md:"4"}},[a("v-sheet",[a("v-img",{attrs:{src:"https://demos.creative-tim.com/material-dashboard-pro/assets/img/card-1.jpg",height:"100",width:"200"}})],1)],1),a("v-col",{attrs:{cols:"12",md:"8"}},[a("div",[a("div",[a("strong",[e._v("2. Apply")])]),a("div",{staticClass:"grey--text"},[e._v(" The first step is to create an account at "),a("a",{attrs:{href:"http://www.creative-tim.com/"}},[e._v("Creative Tim")]),e._v(". You can choose a social network or go for the classic version, whatever works best for you. ")])])]),a("v-col",{staticClass:"hidden-sm-and-down",attrs:{md:"4"}},[a("v-sheet",[a("v-img",{attrs:{src:"https://demos.creative-tim.com/material-dashboard-pro/assets/img/card-2.jpg",height:"100",width:"200"}})],1)],1),a("v-col",{attrs:{cols:"12"}},[e._v(" If you have more questions, don't hesitate to contact us or send us a tweet @creativetim. We're here to help! ")])],1),a("v-btn",{staticClass:"mt-6",attrs:{color:"info",depressed:"",default:"",rounded:""},on:{click:function(t){e.dialog2=!1}}},[e._v(" Sounds good ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"300"},model:{value:e.dialog3,callback:function(t){e.dialog3=t},expression:"dialog3"}},[a("v-card",[a("v-card-title",[e._v(" Are you sure? "),a("v-spacer"),a("v-icon",{attrs:{"aria-label":"Close"},on:{click:function(t){e.dialog3=!1}}},[e._v(" mdi-close ")])],1),a("v-card-text",{staticClass:"pb-6 pt-12 text-center"},[a("v-btn",{staticClass:"mr-3",attrs:{text:""},on:{click:function(t){e.dialog3=!1}}},[e._v(" Nevermind ")]),a("v-btn",{attrs:{color:"success",text:""},on:{click:function(t){e.dialog3=!1}}},[e._v(" Yes ")])],1)],1)],1)],1)},s=[],o=(i("e35a"),i("0d7a"),{name:"DashboardNotifications",data:function(){return{color:"info",colors:["info","success","warning","error"],dialog:!1,dialog2:!1,dialog3:!1,direction:"top center",directions:["top left","top center","top right","bottom left","bottom center","bottom right"],snackbar:!1}},computed:{parsedDirection:function(){return this.direction.split(" ")}},methods:{randomColor:function(){this.color=this.colors[Math.floor(Math.random()*this.colors.length)]}}}),n=o,r=i("9ca4"),l=i("aeb5"),c=i.n(l),d=i("de9d"),h=i("93cd"),u=i("9e0d"),v=i("619c"),m=i("4459"),f=i("cd14"),g=i("4325"),p=i("1ebc"),y=i("86e1"),b=i("6142"),w=i("3bd3"),k=Object(r["a"])(n,a,s,!1,null,null,null);e["default"]=k.exports;c()(k,{VBtn:d["a"],VCard:h["a"],VCardActions:u["a"],VCardText:u["b"],VCardTitle:u["c"],VCol:v["a"],VContainer:m["a"],VDialog:f["a"],VIcon:g["a"],VImg:p["a"],VRow:y["a"],VSheet:b["a"],VSpacer:w["a"]})},4459:function(t,e,i){"use strict";i("acde"),i("d0d9");var a=i("0261");function s(t){return a["default"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:i,data:a,children:s}){a.staticClass=`${t} ${a.staticClass||""}`.trim();const{attrs:o}=a;if(o){a.attrs={};const t=Object.keys(o).filter(t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(a.staticClass+=" "+t.join(" "))}return i.id&&(a.domProps=a.domProps||{},a.domProps.id=i.id),e(i.tag,a,s)}})}var o=i("9249");e["a"]=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:a}){let s;const{attrs:n}=i;return n&&(i.attrs={},s=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,Object(o["a"])(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(s||[])}),a)}})},"4bed":function(t,e,i){},"66aa":function(t,e,i){"use strict";i("c495");var a=i("f5d7"),s=i("6f50"),o=i("a237"),n=i("535b"),r=Object(n["a"])(a["a"],s["a"],o["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}}),l=r,c=i("99a8"),d=i("0261");e["a"]=d["default"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new l({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame(()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=Object(c["v"])(this.$el)),this.overlay.value=!0)}),!0},removeOverlay(t=!0){this.overlay&&(Object(c["a"])(this.overlay.$el,"transitionend",()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)}),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[c["z"].up,c["z"].pageup],i=[c["z"].down,c["z"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=t.path||this.composedPath(t),i=t.deltaY;if("keydown"===t.type&&e[0]===document.body){const t=this.$refs.dialog,e=window.getSelection().anchorNode;return!(t&&this.hasScrollbar(t)&&this.isInside(e,t))||this.shouldScroll(t,i)}for(let a=0;a<e.length;a++){const t=e[a];if(t===document)return!0;if(t===document.documentElement)return!0;if(t===this.$refs.content)return!0;if(this.hasScrollbar(t))return this.shouldScroll(t,i)}return!0},composedPath(t){if(t.composedPath)return t.composedPath();const e=[];let i=t.target;while(i){if(e.push(i),"HTML"===i.tagName)return e.push(document),e.push(window),e;i=i.parentElement}return e},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(c["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},"86e1":function(t,e,i){"use strict";i("d0d9");var a=i("0261"),s=i("9249"),o=i("99a8");const n=["sm","md","lg","xl"],r=["start","end","center"];function l(t,e){return n.reduce((i,a)=>(i[t+Object(o["I"])(a)]=e(),i),{})}const c=t=>[...r,"baseline","stretch"].includes(t),d=l("align",()=>({type:String,default:null,validator:c})),h=t=>[...r,"space-between","space-around"].includes(t),u=l("justify",()=>({type:String,default:null,validator:h})),v=t=>[...r,"space-between","space-around","stretch"].includes(t),m=l("alignContent",()=>({type:String,default:null,validator:v})),f={align:Object.keys(d),justify:Object.keys(u),alignContent:Object.keys(m)},g={align:"align",justify:"justify",alignContent:"align-content"};function p(t,e,i){let a=g[t];if(null!=i){if(e){const i=e.replace(t,"");a+="-"+i}return a+="-"+i,a.toLowerCase()}}const y=new Map;e["a"]=a["default"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:h},...u,alignContent:{type:String,default:null,validator:v},...m},render(t,{props:e,data:i,children:a}){let o="";for(const s in e)o+=String(e[s]);let n=y.get(o);if(!n){let t;for(t in n=[],f)f[t].forEach(i=>{const a=e[i],s=p(t,i,a);s&&n.push(s)});n.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),y.set(o,n)}return t(e.tag,Object(s["a"])(i,{staticClass:"row",class:n}),a)}})},c495:function(t,e,i){},cd14:function(t,e,i){"use strict";i("4bed");var a=i("e00a"),s=i("b004"),o=i("430a"),n=i("66ec"),r=i("66aa"),l=i("f8a5"),c=i("deed"),d=i("a237"),h=i("fa3d"),u=i("535b"),v=i("9fcb"),m=i("99a8");const f=Object(u["a"])(s["a"],o["a"],n["a"],r["a"],l["a"],c["a"],d["a"]);e["a"]=f.extend({name:"v-dialog",directives:{ClickOutside:h["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(v["e"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):r["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$refs.content.focus(),this.bind()})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===m["z"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find(t=>!t.hasAttribute("disabled"));e&&e.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(a["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:"none"===this.maxWidth?void 0:Object(m["h"])(this.maxWidth),width:"auto"===this.width?void 0:Object(m["h"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})}}]);
//# sourceMappingURL=chunk-49eb3340.389350e3.js.map