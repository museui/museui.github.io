(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{tsHF:function(s,t,a){"use strict";a.r(t);var l=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"markdown-body"},[a("h1",[s._v("文本输入框")]),s._m(0),s._m(1),a("demo-block",{attrs:{jsfiddle:{html:'<mu-container>\n  <mu-text-field v-model="value1"></mu-text-field><br>\n  <mu-text-field v-model="value2" placeholder="Please input......"></mu-text-field><br>\n  <mu-text-field v-model="value3" disabled placeholder="disabled input"></mu-text-field><br>\n  <mu-text-field v-model="value4" placeholder="error input" error-text="Please input......"></mu-text-field><br>\n  <mu-text-field v-model="value5" label="Email Address" suffix="@gmail.com"></mu-text-field><br>\n  <mu-text-field v-model="value6" label="Label Float" prefix="$" label-float></mu-text-field><br>\n  <mu-text-field v-model="value7" label="Password" :action-icon="visibility ? \'visibility_off\' : \'visibility\'" :action-click="() => (visibility = !visibility)" :type="visibility ? \'text\' : \'password\'"></mu-text-field><br>\n  <mu-text-field v-model="value8" label="Full Width" full-width></mu-text-field>\n</mu-container>\n\n',script:"\nexport default {\n  data () {\n    return {\n      value1: '',\n      value2: '',\n      value3: '',\n      value4: '',\n      value5: '',\n      value6: '',\n      value7: '',\n      value8: '',\n      visibility: false\n    }\n  }\n}\n",style:null}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("mu-container",[a("mu-text-field",{model:{value:s.value1,callback:function(t){s.value1=t},expression:"value1"}}),a("br"),a("mu-text-field",{attrs:{placeholder:"Please input......"},model:{value:s.value2,callback:function(t){s.value2=t},expression:"value2"}}),a("br"),a("mu-text-field",{attrs:{disabled:"",placeholder:"disabled input"},model:{value:s.value3,callback:function(t){s.value3=t},expression:"value3"}}),a("br"),a("mu-text-field",{attrs:{placeholder:"error input","error-text":"Please input......"},model:{value:s.value4,callback:function(t){s.value4=t},expression:"value4"}}),a("br"),a("mu-text-field",{attrs:{label:"Email Address",suffix:"@gmail.com"},model:{value:s.value5,callback:function(t){s.value5=t},expression:"value5"}}),a("br"),a("mu-text-field",{attrs:{label:"Label Float",prefix:"$","label-float":""},model:{value:s.value6,callback:function(t){s.value6=t},expression:"value6"}}),a("br"),a("mu-text-field",{attrs:{label:"Password","action-icon":s.visibility?"visibility_off":"visibility","action-click":function(){return s.visibility=!s.visibility},type:s.visibility?"text":"password"},model:{value:s.value7,callback:function(t){s.value7=t},expression:"value7"}}),a("br"),a("mu-text-field",{attrs:{label:"Full Width","full-width":""},model:{value:s.value8,callback:function(t){s.value8=t},expression:"value8"}})],1)],1),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"value1"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"value2"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Please input......"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"value3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"disabled input"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"value4"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"error input"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("error-text")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Please input......"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"value5"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Email Address"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("suffix")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"@gmail.com"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"value6"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Label Float"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("prefix")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label-float")]),s._v(" >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"value7"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Password"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":action-icon")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"visibility ? 'visibility_off' : 'visibility'\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":action-click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"() => (visibility = !visibility)"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"visibility ? 'text' : 'password'\"")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"value8"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Full Width"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("full-width")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value1")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value2")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value3")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value4")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value5")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value6")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value7")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value8")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("visibility")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n    }\n  }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._m(2),s._m(3),a("demo-block",{attrs:{jsfiddle:{html:'<mu-container>\n  <mu-text-field v-model="value9" placeholder="默认3行, 最大显示6行" multi-line :rows="3" :rows-max="6"></mu-text-field><br>\n  <mu-text-field v-model="value10" multi-line="" :rows="4" full-width></mu-text-field><br>\n</mu-container>\n\n',script:"\nexport default {\n  data () {\n    return {\n      value9: '',\n      value10: ''\n    }\n  }\n}\n",style:null}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("mu-container",[a("mu-text-field",{attrs:{placeholder:"默认3行, 最大显示6行","multi-line":"",rows:3,"rows-max":6},model:{value:s.value9,callback:function(t){s.value9=t},expression:"value9"}}),a("br"),a("mu-text-field",{attrs:{"multi-line":"",rows:4,"full-width":""},model:{value:s.value10,callback:function(t){s.value10=t},expression:"value10"}}),a("br")],1)],1),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"value9"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"默认3行, 最大显示6行"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("multi-line")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":rows")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":rows-max")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"6"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"value10"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("multi-line")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":rows")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"4"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("full-width")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value9")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value10")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v("\n    }\n  }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._m(4),a("demo-block",{attrs:{jsfiddle:{html:'<mu-container>\n  <mu-text-field v-model="value11" type="number" placeholder="电话号码" icon="phone"></mu-text-field><br>\n  <mu-text-field v-model="value12" multi-line :rows="4" icon="comment" placeholder="输入信息"></mu-text-field><br>\n</mu-container>\n\n',script:"\nexport default {\n  data () {\n    return {\n      value11: '',\n      value12: ''\n    }\n  }\n}\n",style:null}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("mu-container",[a("mu-text-field",{attrs:{type:"number",placeholder:"电话号码",icon:"phone"},model:{value:s.value11,callback:function(t){s.value11=t},expression:"value11"}}),a("br"),a("mu-text-field",{attrs:{"multi-line":"",rows:4,icon:"comment",placeholder:"输入信息"},model:{value:s.value12,callback:function(t){s.value12=t},expression:"value12"}}),a("br")],1)],1),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"value11"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"number"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"电话号码"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"phone"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"value12"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("multi-line")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":rows")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"4"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"comment"')]),s._v("  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"输入信息"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value11")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value12")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v("\n    }\n  }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._m(5),a("demo-block",{attrs:{jsfiddle:{html:'<mu-container>\n  <mu-text-field v-model="value13" label="UserName" label-float help-text="用户名为6-12长度的字符" icon="account_circle"></mu-text-field><br>\n  <mu-text-field v-model="value14" label="Password" label-float error-text="请输入密码" icon="locked"></mu-text-field><br>\n</mu-container>\n\n',script:"\nexport default {\n  data () {\n    return {\n      value13: '',\n      value14: ''\n    }\n  }\n}\n",style:null}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("mu-container",[a("mu-text-field",{attrs:{label:"UserName","label-float":"","help-text":"用户名为6-12长度的字符",icon:"account_circle"},model:{value:s.value13,callback:function(t){s.value13=t},expression:"value13"}}),a("br"),a("mu-text-field",{attrs:{label:"Password","label-float":"","error-text":"请输入密码",icon:"locked"},model:{value:s.value14,callback:function(t){s.value14=t},expression:"value14"}}),a("br")],1)],1),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"value13"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"UserName"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label-float")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("help-text")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"用户名为6-12长度的字符"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"account_circle"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"value14"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Password"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label-float")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("error-text")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"请输入密码"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"locked"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value13")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value14")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v("\n    }\n  }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._m(6),s._m(7),a("demo-block",{attrs:{jsfiddle:{html:'<mu-container>\n  <mu-text-field v-model="value15" placeholder="最多不超过10个字符" :max-length="10"></mu-text-field><br>\n  <mu-text-field v-model="value16" placeholder="不允许超过100个字符" multi-line :rows="3" :max-length="100"></mu-text-field><br>\n</mu-container>\n\n',script:"\nexport default {\n  data () {\n    return {\n      value15: '',\n      value16: ''\n    }\n  }\n}\n",style:null}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("mu-container",[a("mu-text-field",{attrs:{placeholder:"最多不超过10个字符","max-length":10},model:{value:s.value15,callback:function(t){s.value15=t},expression:"value15"}}),a("br"),a("mu-text-field",{attrs:{placeholder:"不允许超过100个字符","multi-line":"",rows:3,"max-length":100},model:{value:s.value16,callback:function(t){s.value16=t},expression:"value16"}}),a("br")],1)],1),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"value15"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"最多不超过10个字符"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":max-length")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"value16"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"不允许超过100个字符"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("multi-line")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":rows")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":max-length")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"100"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-text-field")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value15")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value16")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v("\n    }\n  }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._m(8),s._m(9),s._m(10),s._m(11),s._m(12),s._m(13)],1)},e=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("code",{pre:!0},[s._v("mu-text-field")]),s._v(" 用于收集用户提供的信息。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"shi-li"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shi-li","aria-hidden":"true"}},[s._v("¶")]),s._v(" 示例")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"duo-xing-shu-ru"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#duo-xing-shu-ru","aria-hidden":"true"}},[s._v("¶")]),s._v(" 多行输入")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("设置 "),a("code",{pre:!0},[s._v("multi-line")]),s._v(" 之后会被渲染成 "),a("code",{pre:!0},[s._v("textarea")]),s._v(" 标签，通过 "),a("code",{pre:!0},[s._v("rows")]),s._v(" 和 "),a("code",{pre:!0},[s._v("rowsMax")]),s._v(" 控制显示输入框的行数。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"tu-biao-xian-shi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tu-biao-xian-shi","aria-hidden":"true"}},[s._v("¶")]),s._v(" 图标显示")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"bang-zhu-wen-zi-he-cuo-wu-zhuang-tai"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bang-zhu-wen-zi-he-cuo-wu-zhuang-tai","aria-hidden":"true"}},[s._v("¶")]),s._v(" 帮助文字和错误状态")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"shu-ru-chang-du-xian-zhi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shu-ru-chang-du-xian-zhi","aria-hidden":"true"}},[s._v("¶")]),s._v(" 输入长度限制")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("设置 "),a("code",{pre:!0},[s._v("max-length")]),s._v(" 后会启动输入长度限制，并显示输入字符数。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"text-field-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-field-props","aria-hidden":"true"}},[s._v("¶")]),s._v(" Text Field Props")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),a("th",[s._v("介绍")]),a("th",[s._v("类型")]),a("th",[s._v("可选值")]),a("th",[s._v("默认值")])])]),a("tbody",[a("tr",[a("td",[s._v("color")]),a("td",[s._v("输入框颜色")]),a("td",[s._v("String")]),a("td",[s._v("—")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("icon")]),a("td",[s._v("输入框左边的图标")]),a("td",[s._v("String")]),a("td",[s._v("—")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("label")]),a("td",[s._v("标签文本")]),a("td",[s._v("String")]),a("td",[s._v("—")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("label-float")]),a("td",[s._v("标签是否浮动")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("false")])]),a("tr",[a("td",[s._v("error-text")]),a("td",[s._v("错误提醒文字，如果此参数有值，那么输入框会转为错误的状态, 显示效果将会更改")]),a("td",[s._v("String")]),a("td",[s._v("—")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("help-text")]),a("td",[s._v("帮助文字")]),a("td",[s._v("String")]),a("td",[s._v("—")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("full-width")]),a("td",[s._v("是否将宽度设置为 100%, 默认 256px")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("false")])]),a("tr",[a("td",[s._v("disabled")]),a("td",[s._v("输入框是否不可用")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("false")])]),a("tr",[a("td",[s._v("multi-line")]),a("td",[s._v("是否多行输入")]),a("td",[s._v("String")]),a("td",[s._v("—")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("max-length")]),a("td",[s._v("最多可输入字符数")]),a("td",[s._v("Number")]),a("td",[s._v("—")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("rows")]),a("td",[s._v("行数")]),a("td",[s._v("Number")]),a("td",[s._v("—")]),a("td",[s._v("1")])]),a("tr",[a("td",[s._v("rows-max")]),a("td",[s._v("最大行数")]),a("td",[s._v("—")]),a("td",[s._v("—")]),a("td")]),a("tr",[a("td",[s._v("action-icon")]),a("td",[s._v("输入框右边的图标")]),a("td",[s._v("String")]),a("td",[s._v("—")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("action-click")]),a("td",[s._v("图标点击之后执行的函数")]),a("td",[s._v("Function")]),a("td",[s._v("—")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("solo")]),a("td",[s._v("改变样式，设置之后会隐藏输入框的下划线和标签")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("false")])]),a("tr",[a("td",[s._v("underline-color")]),a("td",[s._v("下划线的颜色")]),a("td",[s._v("String")]),a("td",[s._v("-")]),a("td",[s._v("-")])]),a("tr",[a("td",[s._v("prefix")]),a("td",[s._v("输入框前缀内容")]),a("td",[s._v("String")]),a("td",[s._v("—")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("suffix")]),a("td",[s._v("输入框尾部内容")]),a("td",[s._v("String")]),a("td",[s._v("—")]),a("td",[s._v("—")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"text-field-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-field-events","aria-hidden":"true"}},[s._v("¶")]),s._v(" Text Field Events")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("名称")]),a("th",[s._v("介绍")]),a("th",[s._v("参数")])])]),a("tbody",[a("tr",[a("td",[s._v("change")]),a("td",[s._v("值改变时触发")]),a("td",[s._v("(value)")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"text-field-slots"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-field-slots","aria-hidden":"true"}},[s._v("¶")]),s._v(" Text Field Slots")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("名称")]),a("th",[s._v("介绍")])])]),a("tbody",[a("tr",[a("td",[s._v("prepend")]),a("td",[s._v("输入框前置内容")])]),a("tr",[a("td",[s._v("append")]),a("td",[s._v("输入框后置内容")])]),a("tr",[a("td",[s._v("default")]),a("td",[s._v("-")])])])])}],r={data:function(){return{value1:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:"",value8:"",value9:"",value10:"",value11:"",value12:"",value13:"",value14:"",value15:"",value16:"",visibility:!1}}},v=r,n=a("KHd+"),_=Object(n["a"])(v,l,e,!1,null,null,null);t["default"]=_.exports}}]);