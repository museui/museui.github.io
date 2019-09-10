(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[110],{"2xDj":function(s,t,a){"use strict";a.r(t);var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"markdown-body"},[a("h1",[s._v("Directives")]),s._m(0),s._m(1),a("demo-block",{attrs:{jsfiddle:{html:'<div class="demo-content-block" @click="message=\'click here....\'" v-click-outside="clickoutside">{{message}}</div>\n\n\n\n\n',script:"\nexport default {\n  data () {\n    return {\n      message: 'click! click! click!'\n    };\n  },\n  methods: {\n    clickoutside () {\n      this.message = 'click outside'\n    }\n  }\n}\n",style:"\n.demo-content-block {\n  width: 100%;\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n"}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:s.clickoutside,expression:"clickoutside"}],staticClass:"demo-content-block",on:{click:function(t){s.message="click here...."}}},[s._v(s._s(s.message))])]),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"demo-content-block"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"message='click here....'\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-click-outside")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"clickoutside"')]),s._v(">")]),s._v("{{message}}"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'click! click! click!'")]),s._v("\n    };\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    clickoutside () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".message = "),a("span",{attrs:{class:"hljs-string"}},[s._v("'click outside'")]),s._v("\n    }\n  }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),a("span",{attrs:{class:"css"}},[s._v("\n"),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".demo-content-block")]),s._v(" {\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("100%")]),s._v(";\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("200px")]),s._v(";\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("display")]),s._v(": flex;\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("justify-content")]),s._v(": center;\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("align-items")]),s._v(": center;\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n\n")])])])]),s._m(2),a("demo-block",{attrs:{jsfiddle:{html:'<div class="demo-content-block" v-resize="resize">\n  <p style="margin-right: 16px;">Window Size:</p>\n  <p>width: {{width}}px  height: {{height}}px</p>\n</div>\n\n\n\n\n',script:"\nexport default {\n  data () {\n    return {\n      width: 0,\n      height: 0\n    };\n  },\n  mounted () {\n    this.width = window.innerWidth;\n    this.height = window.innerHeight;\n  },\n  methods: {\n    resize () {\n      this.width = window.innerWidth;\n      this.height = window.innerHeight;\n    }\n  }\n}\n",style:"\n.demo-content-block {\n  width: 100%;\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n"}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("div",{directives:[{name:"resize",rawName:"v-resize",value:s.resize,expression:"resize"}],staticClass:"demo-content-block"},[a("p",{staticStyle:{"margin-right":"16px"}},[s._v("Window Size:")]),a("p",[s._v("width: "+s._s(s.width)+"px  height: "+s._s(s.height)+"px")])])]),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"demo-content-block"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-resize")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"resize"')]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"margin-right: 16px;"')]),s._v(">")]),s._v("Window Size:"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("width: {{width}}px  height: {{height}}px"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n    };\n  },\n  mounted () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".width = "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(".innerWidth;\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".height = "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(".innerHeight;\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    resize () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".width = "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(".innerWidth;\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".height = "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(".innerHeight;\n    }\n  }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),a("span",{attrs:{class:"css"}},[s._v("\n"),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".demo-content-block")]),s._v(" {\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("100%")]),s._v(";\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("200px")]),s._v(";\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("display")]),s._v(": flex;\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("justify-content")]),s._v(": center;\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("align-items")]),s._v(": center;\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n\n")])])])]),s._m(3),a("demo-block",{attrs:{jsfiddle:{html:'<div class="demo-content-block" v-scroll="scroll">\n  <p style="margin-right: 16px;">ScrollTop:</p>\n  <p>{{scrollTop}}</p>\n</div>\n\n\n\n\n',script:"\nexport default {\n  data () {\n    return {\n      scrollTop: 0\n    }\n  },\n  mounted () {\n    this.scrollTop = window.scrollY;\n  }\n}\n",style:"\n.demo-content-block {\n  width: 100%;\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n"}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("div",{directives:[{name:"scroll",rawName:"v-scroll",value:s.scroll,expression:"scroll"}],staticClass:"demo-content-block"},[a("p",{staticStyle:{"margin-right":"16px"}},[s._v("ScrollTop:")]),a("p",[s._v(s._s(s.scrollTop))])])]),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"demo-content-block"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-scroll")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"scroll"')]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"margin-right: 16px;"')]),s._v(">")]),s._v("ScrollTop:"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("{{scrollTop}}"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("scrollTop")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n    }\n  },\n  mounted () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".scrollTop = "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(".scrollY;\n  }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),a("span",{attrs:{class:"css"}},[s._v("\n"),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".demo-content-block")]),s._v(" {\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("100%")]),s._v(";\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("200px")]),s._v(";\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("display")]),s._v(": flex;\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("justify-content")]),s._v(": center;\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("align-items")]),s._v(": center;\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n\n")])])])]),s._m(4),a("demo-block",{attrs:{jsfiddle:{html:'<mu-container>\n  <mu-flex wrap="wrap" justify-content="between" align-items="center">\n    <mu-slider :max="24" v-model="elevation" :step="1" style="width: 400px;"></mu-slider>\n    <div v-elevation="elevation" style="width: 300px; height: 200px; background-color: #fff;"></div>\n  </mu-flex>\n</mu-container>\n\n',script:"\nexport default {\n  data () {\n    return {\n      elevation: 4\n    }\n  }\n}\n",style:null}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("mu-container",[a("mu-flex",{attrs:{wrap:"wrap","justify-content":"between","align-items":"center"}},[a("mu-slider",{staticStyle:{width:"400px"},attrs:{max:24,step:1},model:{value:s.elevation,callback:function(t){s.elevation=t},expression:"elevation"}}),a("div",{directives:[{name:"elevation",rawName:"v-elevation",value:s.elevation,expression:"elevation"}],staticStyle:{width:"300px",height:"200px","background-color":"#fff"}})],1)],1)],1),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("wrap")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"wrap"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("justify-content")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"between"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("align-items")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-slider")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"24"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"elevation"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":step")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"width: 400px;"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-slider")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-elevation")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"elevation"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"width: 300px; height: 200px; background-color: #fff;"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("elevation")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("4")]),s._v("\n    }\n  }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._m(5),s._m(6),s._m(7)],1)},l=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("Muse-UI provides "),a("code",{pre:!0},[s._v("v-click-outside")]),s._v(", "),a("code",{pre:!0},[s._v("v-resize")]),s._v(", "),a("code",{pre:!0},[s._v("v-scroll")]),s._v(" and "),a("code",{pre:!0},[s._v("v-elevation")]),s._v(" four directives.")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"clickoutside"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clickoutside","aria-hidden":"true"}},[s._v("¶")]),s._v(" ClickOutside")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"resize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resize","aria-hidden":"true"}},[s._v("¶")]),s._v(" Resize")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"scroll"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scroll","aria-hidden":"true"}},[s._v("¶")]),s._v(" Scroll")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"elevation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elevation","aria-hidden":"true"}},[s._v("¶")]),s._v(" Elevation")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"import-on-demand"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-on-demand","aria-hidden":"true"}},[s._v("¶")]),s._v(" Import on demand")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("The components of the tool class are in the "),a("code",{pre:!0},[s._v("lib/helpers")]),s._v(" directory")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v(";\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Helpers "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'muse-ui/lib/Helpers'")]),s._v(";\n\nVue.use(Helpers);\n")])])}],e={data:function(){return{message:"click! click! click!",width:0,height:0,scrollTop:0,elevation:4}},mounted:function(){this.width=window.innerWidth,this.height=window.innerHeight,this.scrollTop=window.scrollY},methods:{clickoutside:function(){this.message="click outside"},resize:function(){this.width=window.innerWidth,this.height=window.innerHeight},scroll:function(){this.scrollTop=window.scrollY}}},r=e,c=(a("rslZ"),a("KHd+")),v=Object(c["a"])(r,n,l,!1,null,null,null);t["default"]=v.exports},pLgg:function(s,t,a){},rslZ:function(s,t,a){"use strict";var n=a("pLgg"),l=a.n(n);l.a}}]);