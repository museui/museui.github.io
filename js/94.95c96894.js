(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[94],{IOL4:function(t,s,a){"use strict";a.r(s);var l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"markdown-body"},[a("h1",[t._v("Popup box")]),t._m(0),a("demo-block",{attrs:{jsfiddle:{html:'<mu-button ref="button" @click="open = !open">Dropdown</mu-button>\n<mu-popover cover :open.sync="open" :trigger="trigger">\n   <mu-list>\n    <mu-list-item button>\n      <mu-list-item-title>Refresh</mu-list-item-title>\n    </mu-list-item>\n    <mu-list-item button>\n      <mu-list-item-title>Send feedback</mu-list-item-title>\n    </mu-list-item>\n    <mu-list-item button>\n      <mu-list-item-title>Settings</mu-list-item-title>\n    </mu-list-item>\n    <mu-list-item button>\n      <mu-list-item-title>Help</mu-list-item-title>\n    </mu-list-item>\n    <mu-list-item button>\n      <mu-list-item-title>Sign out</mu-list-item-title>\n    </mu-list-item>\n  </mu-list>\n</mu-popover>\n\n',script:"\nexport default {\n  data () {\n    return {\n      open: false,\n      trigger: null\n    }\n  },\n  mounted () {\n    this.trigger = this.$refs.button.$el;\n  }\n}\n",style:null}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("mu-button",{ref:"button",on:{click:function(s){t.open=!t.open}}},[t._v("Dropdown")]),a("mu-popover",{attrs:{cover:"",open:t.open,trigger:t.trigger},on:{"update:open":function(s){t.open=s}}},[a("mu-list",[a("mu-list-item",{attrs:{button:""}},[a("mu-list-item-title",[t._v("Refresh")])],1),a("mu-list-item",{attrs:{button:""}},[a("mu-list-item-title",[t._v("Send feedback")])],1),a("mu-list-item",{attrs:{button:""}},[a("mu-list-item-title",[t._v("Settings")])],1),a("mu-list-item",{attrs:{button:""}},[a("mu-list-item-title",[t._v("Help")])],1),a("mu-list-item",{attrs:{button:""}},[a("mu-list-item-title",[t._v("Sign out")])],1)],1)],1)],1),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"button"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"open = !open"')]),t._v(">")]),t._v("Dropdown"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-button")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-popover")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("cover")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":open.sync")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"open"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":trigger")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"trigger"')]),t._v(">")]),t._v("\n   "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("button")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item-title")]),t._v(">")]),t._v("Refresh"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item-title")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("button")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item-title")]),t._v(">")]),t._v("Send feedback"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item-title")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("button")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item-title")]),t._v(">")]),t._v("Settings"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item-title")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("button")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item-title")]),t._v(">")]),t._v("Help"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item-title")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("button")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item-title")]),t._v(">")]),t._v("Sign out"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item-title")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list-item")]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-list")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mu-popover")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[t._v("open")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[t._v("trigger")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("null")]),t._v("\n    }\n  },\n  mounted () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".trigger = "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.button.$el;\n  }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])])]),t._m(1),t._m(2)],1)},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("The "),a("code",{pre:!0},[t._v("mu-popover")]),t._v(" is used to display the popup box, which is encapsulated inside the "),a("code",{pre:!0},[t._v("mu-menu")]),t._v(" component.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h2",{attrs:{id:"popover-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#popover-props","aria-hidden":"true"}},[t._v("¶")]),t._v(" Popover Props")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Attribute")]),a("th",[t._v("Description")]),a("th",[t._v("Type")]),a("th",[t._v("Accepted values")]),a("th",[t._v("Default")])])]),a("tbody",[a("tr",[a("td",[t._v("cover")]),a("td",[t._v("popup whether to overwrite the trigger element")]),a("td",[t._v("Boolean")]),a("td",[t._v("—")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("lazy")]),a("td",[t._v("whether to render elements when open")]),a("td",[t._v("Boolean")]),a("td",[t._v("—")]),a("td",[t._v("—")])]),a("tr",[a("td",[t._v("placement")]),a("td",[t._v("popup position")]),a("td",[t._v("String")]),a("td",[t._v("top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end")]),a("td",[t._v("bottom-start")])]),a("tr",[a("td",[t._v("open")]),a("td",[t._v("whether to open")]),a("td",[t._v("Boolean")]),a("td",[t._v("—")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("trigger")]),a("td",[t._v("trigger element")]),a("td",[t._v("Element")]),a("td",[t._v("—")]),a("td",[t._v("—")])])])])}],e={data:function(){return{open:!1,trigger:null}},mounted:function(){this.trigger=this.$refs.button.$el}},r=e,v=a("KHd+"),i=Object(v["a"])(r,l,n,!1,null,null,null);s["default"]=i.exports}}]);