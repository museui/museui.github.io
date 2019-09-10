(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"2j9a":function(s,a,t){"use strict";t.r(a);var l=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"markdown-body"},[t("h1",[s._v("时间选择器")]),s._m(0),t("demo-block",{attrs:{jsfiddle:{html:'<mu-container>\n  <mu-flex>\n    显示时间：\n    <mu-switch class="demo-picker-form" v-model="display"></mu-switch>\n  </mu-flex>\n  <mu-flex>\n    横屏显示：\n    <mu-checkbox class="demo-picker-form" v-model="landscape" label="landscape"></mu-checkbox>\n  </mu-flex>\n  <mu-flex>\n    时间类型：\n    <mu-radio class="demo-picker-form" v-model="type" value="ampm" label="ampm"></mu-radio>\n    <mu-radio class="demo-picker-form" v-model="type" value="24hr" label="24hr"></mu-radio>\n  </mu-flex>\n  <mu-flex>\n    选择模式：\n    <mu-radio class="demo-picker-form" v-model="viewType" value="clock" label="clock"></mu-radio>\n    <mu-radio class="demo-picker-form" v-model="viewType" value="list" label="list"></mu-radio>\n  </mu-flex>\n  <mu-flex justify-content="between" align-items="end" wrap="wrap">\n    <mu-paper :z-depth="1">\n      <mu-time-picker :no-display="!display" :view-type="viewType" :time.sync="time" :format="type" :landscape="landscape"></mu-time-picker>\n    </mu-paper>\n  </mu-flex>\n</mu-container>\n\n\n',script:"\nexport default {\n  data () {\n    return {\n      time: undefined,\n      landscape: false,\n      display: true,\n      type: 'ampm',\n      viewType: 'clock'\n    };\n  }\n}\n",style:"\n.demo-picker-form {\n  margin: 0 16px 16px;\n}\n"}}},[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[t("mu-container",[t("mu-flex",[s._v("\n    显示时间：\n    "),t("mu-switch",{staticClass:"demo-picker-form",model:{value:s.display,callback:function(a){s.display=a},expression:"display"}})],1),t("mu-flex",[s._v("\n    横屏显示：\n    "),t("mu-checkbox",{staticClass:"demo-picker-form",attrs:{label:"landscape"},model:{value:s.landscape,callback:function(a){s.landscape=a},expression:"landscape"}})],1),t("mu-flex",[s._v("\n    时间类型：\n    "),t("mu-radio",{staticClass:"demo-picker-form",attrs:{value:"ampm",label:"ampm"},model:{value:s.type,callback:function(a){s.type=a},expression:"type"}}),t("mu-radio",{staticClass:"demo-picker-form",attrs:{value:"24hr",label:"24hr"},model:{value:s.type,callback:function(a){s.type=a},expression:"type"}})],1),t("mu-flex",[s._v("\n    选择模式：\n    "),t("mu-radio",{staticClass:"demo-picker-form",attrs:{value:"clock",label:"clock"},model:{value:s.viewType,callback:function(a){s.viewType=a},expression:"viewType"}}),t("mu-radio",{staticClass:"demo-picker-form",attrs:{value:"list",label:"list"},model:{value:s.viewType,callback:function(a){s.viewType=a},expression:"viewType"}})],1),t("mu-flex",{attrs:{"justify-content":"between","align-items":"end",wrap:"wrap"}},[t("mu-paper",{attrs:{"z-depth":1}},[t("mu-time-picker",{attrs:{"no-display":!s.display,"view-type":s.viewType,time:s.time,format:s.type,landscape:s.landscape},on:{"update:time":function(a){s.time=a}}})],1)],1)],1)],1),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(">")]),s._v("\n    显示时间：\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-switch")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-picker-form"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"display"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-switch")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(">")]),s._v("\n    横屏显示：\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-picker-form"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"landscape"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"landscape"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-checkbox")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(">")]),s._v("\n    时间类型：\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-radio")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-picker-form"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"type"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"ampm"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"ampm"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-radio")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-radio")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-picker-form"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"type"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"24hr"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"24hr"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-radio")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(">")]),s._v("\n    选择模式：\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-radio")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-picker-form"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"viewType"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"clock"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"clock"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-radio")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-radio")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-picker-form"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"viewType"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"list"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"list"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-radio")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("justify-content")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"between"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("align-items")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"end"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("wrap")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"wrap"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-paper")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":z-depth")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-time-picker")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":no-display")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"!display"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":view-type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"viewType"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":time.sync")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"time"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":format")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"type"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":landscape")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"landscape"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-time-picker")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-paper")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("undefined")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("landscape")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("display")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'ampm'")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("viewType")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'clock'")]),s._v("\n    };\n  }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{attrs:{class:"css"}},[s._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".demo-picker-form")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("margin")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" "),t("span",{attrs:{class:"hljs-number"}},[s._v("16px")]),s._v(" "),t("span",{attrs:{class:"hljs-number"}},[s._v("16px")]),s._v(";\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])])]),s._m(1),s._m(2),s._m(3),s._m(4)],1)},n=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[t("code",{pre:!0},[s._v("mu-time-picker")]),s._v(" 用于时间选择")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"time-picker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#time-picker","aria-hidden":"true"}},[s._v("¶")]),s._v(" Time Picker")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),t("th",[s._v("介绍")]),t("th",[s._v("类型")]),t("th",[s._v("可选值")]),t("th",[s._v("默认值")])])]),t("tbody",[t("tr",[t("td",[s._v("color")]),t("td",[s._v("时间选择器颜色")]),t("td",[s._v("String")]),t("td",[s._v("—")]),t("td",[s._v("—")])]),t("tr",[t("td",[s._v("display-color")]),t("td",[s._v("时间显示区域背景色")]),t("td",[s._v("String")]),t("td",[s._v("-")]),t("td",[s._v("-")])]),t("tr",[t("td",[s._v("time")]),t("td",[s._v("选择的时间，支持 "),t("code",{pre:!0},[s._v(".sync")]),s._v(" 修饰符")]),t("td",[s._v("Date")]),t("td",[s._v("—")]),t("td",[s._v("new Date()")])]),t("tr",[t("td",[s._v("format")]),t("td",[s._v("日期模式")]),t("td",[s._v("String")]),t("td",[s._v("ampm/24hr")]),t("td",[s._v("ampm")])]),t("tr",[t("td",[s._v("view-type")]),t("td",[s._v("时间选择模式")]),t("td",[s._v("String")]),t("td",[s._v("clock/list")]),t("td",[s._v("clock")])]),t("tr",[t("td",[s._v("no-display")]),t("td",[s._v("是否不存在时间显示部分")]),t("td",[s._v("Boolean")]),t("td",[s._v("—")]),t("td",[s._v("false")])]),t("tr",[t("td",[s._v("landscape")]),t("td",[s._v("是否横屏显示")]),t("td",[s._v("Function")]),t("td",[s._v("—")]),t("td",[s._v("—")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"date-picker-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#date-picker-events","aria-hidden":"true"}},[s._v("¶")]),s._v(" Date Picker Events")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("名称")]),t("th",[s._v("介绍")]),t("th",[s._v("回调参数")])])]),t("tbody",[t("tr",[t("td",[s._v("change")]),t("td",[s._v("当选择日期改变时触发事件")]),t("td",[s._v("(time, mode, finished)")])])])])}],r={data:function(){return{time:void 0,landscape:!1,display:!0,type:"ampm",viewType:"clock"}}},e=r,v=(t("Vakk"),t("KHd+")),_=Object(v["a"])(e,l,n,!1,null,null,null);a["default"]=_.exports},FKId:function(s,a,t){},Vakk:function(s,a,t){"use strict";var l=t("FKId"),n=t.n(l);n.a}}]);