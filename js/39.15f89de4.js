(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{"2IU5":function(s,t,a){},VV1q:function(s,t,a){"use strict";var n=a("2IU5"),l=a.n(n);l.a},hoGV:function(s,t,a){"use strict";a.r(t);var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"markdown-body"},[a("h1",[s._v("加载控件")]),s._m(0),s._m(1),a("p",[s._v("按住下拉刷新，或者滚动到底加载数据。")]),a("demo-block",{attrs:{jsfiddle:{html:'<mu-paper :z-depth="1" class="demo-loadmore-wrap">\n  <mu-appbar color="teal">\n    <mu-button icon slot="left">\n      <mu-icon value="menu"></mu-icon>\n    </mu-button>\n    LoadMore\n    <mu-button icon slot="right" @click="refresh()">\n      <mu-icon value="refresh"></mu-icon>\n    </mu-button>\n  </mu-appbar>\n  <mu-container ref="container" class="demo-loadmore-content">\n    <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">\n      <mu-list>\n        <template v-for="i in num">\n          <mu-list-item>\n            <mu-list-item-title>{{text}} Item {{i}}</mu-list-item-title>\n          </mu-list-item>\n          <mu-divider>\n        </mu-divider></template>\n      </mu-list>\n    </mu-load-more>\n  </mu-container>\n</mu-paper>\n\n\n\n\n',script:"\nexport default {\n  data () {\n    return {\n      num: 10,\n      refreshing: false,\n      loading: false,\n      text: 'List'\n    }\n  },\n  methods: {\n    refresh () {\n      this.refreshing = true;\n      this.$refs.container.scrollTop = 0;\n      setTimeout(() => {\n        this.refreshing = false;\n        this.text = this.text === 'List' ? 'Menu' : 'List';\n        this.num = 10;\n      }, 2000)\n    },\n    load () {\n      this.loading = true;\n      setTimeout(() => {\n        this.loading = false;\n        this.num += 10;\n      }, 2000)\n    }\n  }\n};\n",style:"\n.demo-loadmore-wrap {\n  width: 100%;\n  max-width: 360px;\n  height: 420px;\n  display: flex;\n  flex-direction: column;\n  .mu-appbar {\n    width: 100%;\n  }\n}\n.demo-loadmore-content {\n  flex: 1;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n"}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("mu-paper",{staticClass:"demo-loadmore-wrap",attrs:{"z-depth":1}},[a("mu-appbar",{attrs:{color:"teal"}},[a("mu-button",{attrs:{slot:"left",icon:""},slot:"left"},[a("mu-icon",{attrs:{value:"menu"}})],1),s._v("\n    LoadMore\n    "),a("mu-button",{attrs:{slot:"right",icon:""},on:{click:function(t){s.refresh()}},slot:"right"},[a("mu-icon",{attrs:{value:"refresh"}})],1)],1),a("mu-container",{ref:"container",staticClass:"demo-loadmore-content"},[a("mu-load-more",{attrs:{refreshing:s.refreshing,loading:s.loading},on:{refresh:s.refresh,load:s.load}},[a("mu-list",[s._l(s.num,function(t){return[a("mu-list-item",[a("mu-list-item-title",[s._v(s._s(s.text)+" Item "+s._s(t))])],1),a("mu-divider")]})],2)],1)],1)],1)],1),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-paper")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":z-depth")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"demo-loadmore-wrap"')]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-appbar")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"teal"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"left"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-icon")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"menu"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-icon")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(">")]),s._v("\n    LoadMore\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"right"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"refresh()"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-icon")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"refresh"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-icon")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-appbar")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"container"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"demo-loadmore-content"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-load-more")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@refresh")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"refresh"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":refreshing")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"refreshing"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":loading")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"loading"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@load")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"load"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-list")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"i in num"')]),s._v(">")]),s._v("\n          "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-list-item")]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-list-item-title")]),s._v(">")]),s._v("{{text}} Item {{i}}"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-list-item-title")]),s._v(">")]),s._v("\n          "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-list-item")]),s._v(">")]),s._v("\n          "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-divider")]),s._v(" />")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-list")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-load-more")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-paper")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("num")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("10")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("refreshing")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("loading")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'List'")]),s._v("\n    }\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    refresh () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".refreshing = "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(";\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.container.scrollTop = "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n      setTimeout("),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".refreshing = "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".text = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".text === "),a("span",{attrs:{class:"hljs-string"}},[s._v("'List'")]),s._v(" ? "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Menu'")]),s._v(" : "),a("span",{attrs:{class:"hljs-string"}},[s._v("'List'")]),s._v(";\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".num = "),a("span",{attrs:{class:"hljs-number"}},[s._v("10")]),s._v(";\n      }, "),a("span",{attrs:{class:"hljs-number"}},[s._v("2000")]),s._v(")\n    },\n    load () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".loading = "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(";\n      setTimeout("),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".loading = "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".num += "),a("span",{attrs:{class:"hljs-number"}},[s._v("10")]),s._v(";\n      }, "),a("span",{attrs:{class:"hljs-number"}},[s._v("2000")]),s._v(")\n    }\n  }\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lang")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"less"')]),s._v(">")]),a("span",{attrs:{class:"undefined"}},[s._v("\n.demo-loadmore-wrap {\n  width: 100%;\n  max-width: 360px;\n  height: 420px;\n  display: flex;\n  flex-direction: column;\n  .mu-appbar {\n    width: 100%;\n  }\n}\n.demo-loadmore-content {\n  flex: 1;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n\n")])])])]),s._m(2),s._m(3),s._m(4),s._m(5)],1)},l=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("code",{pre:!0},[s._v("mu-load-more")]),s._v(" 内置下拉加载和无限滚动功能。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"shi-li"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shi-li","aria-hidden":"true"}},[s._v("¶")]),s._v(" 示例")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"load-more-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-more-props","aria-hidden":"true"}},[s._v("¶")]),s._v(" Load More Props")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),a("th",[s._v("介绍")]),a("th",[s._v("类型")]),a("th",[s._v("可选值")]),a("th",[s._v("默认值")])])]),a("tbody",[a("tr",[a("td",[s._v("refreshing")]),a("td",[s._v("是否正在刷新数据")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("false")])]),a("tr",[a("td",[s._v("loading")]),a("td",[s._v("是否正在加载数据")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("false")])]),a("tr",[a("td",[s._v("loading-text")]),a("td",[s._v("加载文字")]),a("td",[s._v("String")]),a("td",[s._v("—")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("loaded-all")]),a("td",[s._v("数据是否已全部加载")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("—")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"load-more-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-more-events","aria-hidden":"true"}},[s._v("¶")]),s._v(" Load More Events")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("名称")]),a("th",[s._v("介绍")]),a("th",[s._v("回调参数")])])]),a("tbody",[a("tr",[a("td",[s._v("refresh")]),a("td",[s._v("需要刷新数据时触发")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("load")]),a("td",[s._v("需要加载数据时触发")]),a("td",[s._v("—")])])])])}],r={data:function(){return{num:10,refreshing:!1,loading:!1,text:"List"}},methods:{refresh:function(){var s=this;this.refreshing=!0,this.$refs.container.scrollTop=0,setTimeout(function(){s.refreshing=!1,s.text="List"===s.text?"Menu":"List",s.num=10},2e3)},load:function(){var s=this;this.loading=!0,setTimeout(function(){s.loading=!1,s.num+=10},2e3)}}},e=r,v=(a("VV1q"),a("KHd+")),_=Object(v["a"])(e,n,l,!1,null,null,null);t["default"]=_.exports}}]);