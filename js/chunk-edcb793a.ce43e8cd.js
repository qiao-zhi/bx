(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-edcb793a"],{"35fd":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{id:"regular-tables",fluid:"",tag:"section"}},[e("base-v-component",{attrs:{heading:"Simple Tables",link:"components/simple-tables"}}),e("base-material-card",{staticClass:"px-5 py-3",attrs:{inline:"",icon:"mdi-clipboard-text",title:"Simple Table"}},[e("v-simple-table",[e("thead",[e("tr",[e("th",{staticClass:"primary--text"},[t._v(" ID ")]),e("th",{staticClass:"primary--text"},[t._v(" Name ")]),e("th",{staticClass:"primary--text"},[t._v(" Country ")]),e("th",{staticClass:"primary--text"},[t._v(" City ")]),e("th",{staticClass:"text-right primary--text"},[t._v(" Salary ")])])]),e("tbody",[e("tr",[e("td",[t._v("1")]),e("td",[t._v("Dakota Rice")]),e("td",[t._v("Niger")]),e("td",[t._v("Oud-Turnhout")]),e("td",{staticClass:"text-right"},[t._v(" $36,738 ")])]),e("tr",[e("td",[t._v("2")]),e("td",[t._v("Minverva Hooper")]),e("td",[t._v("Curaçao")]),e("td",[t._v("Sinaas-Waas")]),e("td",{staticClass:"text-right"},[t._v(" $23,789 ")])]),e("tr",[e("td",[t._v("3")]),e("td",[t._v("Sage Rodriguez")]),e("td",[t._v("Netherlands")]),e("td",[t._v("Baileux")]),e("td",{staticClass:"text-right"},[t._v(" $56,142 ")])]),e("tr",[e("td",[t._v("4")]),e("td",[t._v("Philip Chaney")]),e("td",[t._v("Korea, South")]),e("td",[t._v("Overland Park")]),e("td",{staticClass:"text-right"},[t._v(" $38,735 ")])]),e("tr",[e("td",[t._v("5")]),e("td",[t._v("Doris Greene")]),e("td",[t._v("Malawi")]),e("td",[t._v("Feldkirchen in Kärnten")]),e("td",{staticClass:"text-right"},[t._v(" $63,542 ")])]),e("tr",[e("td",[t._v("6")]),e("td",[t._v("Mason Porter")]),e("td",[t._v("Chile")]),e("td",[t._v("Gloucester")]),e("td",{staticClass:"text-right"},[t._v(" $78,615 ")])])])])],1),e("div",{staticClass:"py-3"}),e("base-material-card",{staticClass:"px-5 py-3",attrs:{color:"success",dark:"",icon:"mdi-clipboard-plus",inline:"",title:"Table on Dark Background"}},[e("v-simple-table",[e("thead",[e("tr",[e("th",[t._v("ID")]),e("th",[t._v("Name")]),e("th",[t._v("Country")]),e("th",[t._v("City")]),e("th",{staticClass:"text-right"},[t._v(" Salary ")])])]),e("tbody",[e("tr",[e("td",[t._v("1")]),e("td",[t._v("Dakota Rice")]),e("td",[t._v("Niger")]),e("td",[t._v("Oud-Turnhout")]),e("td",{staticClass:"text-right"},[t._v(" $36,738 ")])]),e("tr",[e("td",[t._v("2")]),e("td",[t._v("Minverva Hooper")]),e("td",[t._v("Curaçao")]),e("td",[t._v("Sinaas-Waas")]),e("td",{staticClass:"text-right"},[t._v(" $23,789 ")])]),e("tr",[e("td",[t._v("3")]),e("td",[t._v("Sage Rodriguez")]),e("td",[t._v("Netherlands")]),e("td",[t._v("Baileux")]),e("td",{staticClass:"text-right"},[t._v(" $56,142 ")])]),e("tr",[e("td",[t._v("4")]),e("td",[t._v("Philip Chaney")]),e("td",[t._v("Korea, South")]),e("td",[t._v("Overland Park")]),e("td",{staticClass:"text-right"},[t._v(" $38,735 ")])]),e("tr",[e("td",[t._v("5")]),e("td",[t._v("Doris Greene")]),e("td",[t._v("Malawi")]),e("td",[t._v("Feldkirchen in Kärnten")]),e("td",{staticClass:"text-right"},[t._v(" $63,542 ")])]),e("tr",[e("td",[t._v("6")]),e("td",[t._v("Mason Porter")]),e("td",[t._v("Chile")]),e("td",[t._v("Gloucester")]),e("td",{staticClass:"text-right"},[t._v(" $78,615 ")])])])])],1)],1)},r=[],i=e("9ca4"),d=e("aeb5"),n=e.n(d),l=e("4459"),o=e("9698"),v={},c=Object(i["a"])(v,s,r,!1,null,null,null);a["default"]=c.exports;n()(c,{VContainer:l["a"],VSimpleTable:o["a"]})},4459:function(t,a,e){"use strict";e("acde"),e("d0d9");var s=e("0261");function r(t){return s["default"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(a,{props:e,data:s,children:r}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:i}=s;if(i){s.attrs={};const t=Object.keys(i).filter(t=>{if("slot"===t)return!1;const a=i[t];return t.startsWith("data-")?(s.attrs[t]=a,!1):a||"string"===typeof a});t.length&&(s.staticClass+=" "+t.join(" "))}return e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),a(e.tag,s,r)}})}var i=e("9249");a["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:a,data:e,children:s}){let r;const{attrs:d}=e;return d&&(e.attrs={},r=Object.keys(d).filter(t=>{if("slot"===t)return!1;const a=d[t];return t.startsWith("data-")?(e.attrs[t]=a,!1):a||"string"===typeof a})),a.id&&(e.domProps=e.domProps||{},e.domProps.id=a.id),t(a.tag,Object(i["a"])(e,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(r||[])}),s)}})},"55d9":function(t,a,e){},9698:function(t,a,e){"use strict";e("55d9");var s=e("99a8"),r=e("6f50"),i=e("535b");a["a"]=Object(i["a"])(r["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(s["h"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})}}]);
//# sourceMappingURL=chunk-edcb793a.ce43e8cd.js.map