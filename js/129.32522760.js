(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[129],{AMY4:function(s,t,a){},ML7o:function(s,t,a){"use strict";var n=a("AMY4"),r=a.n(n);r.a},aQUZ:function(s,t,a){"use strict";a.r(t);var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"markdown-body"},[a("h1",[s._v("Prompt box")]),s._m(0),s._m(1),a("demo-block",{attrs:{jsfiddle:{html:'<div class="alert-demo-wrapper">\n  <mu-alert color="success">\n    this is success alert\n  </mu-alert>\n  <mu-alert color="warning">\n    this is warning alert\n  </mu-alert>\n  <mu-alert color="info">\n    this is info alert\n  </mu-alert>\n  <mu-alert color="error">\n    this is error alert\n  </mu-alert>\n</div>\n\n',script:null,style:"\n.alert-demo-wrapper {\n  width: 100%;\n  > .mu-alert {\n    margin-bottom: 16px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n}\n"}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("div",{staticClass:"alert-demo-wrapper"},[a("mu-alert",{attrs:{color:"success"}},[s._v("\n    this is success alert\n  ")]),a("mu-alert",{attrs:{color:"warning"}},[s._v("\n    this is warning alert\n  ")]),a("mu-alert",{attrs:{color:"info"}},[s._v("\n    this is info alert\n  ")]),a("mu-alert",{attrs:{color:"error"}},[s._v("\n    this is error alert\n  ")])],1)]),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"alert-demo-wrapper"')]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-alert")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"success"')]),s._v(">")]),s._v("\n    this is success alert\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-alert")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-alert")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"warning"')]),s._v(">")]),s._v("\n    this is warning alert\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-alert")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-alert")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"info"')]),s._v(" >")]),s._v("\n    this is info alert\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-alert")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-alert")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"error"')]),s._v(" >")]),s._v("\n    this is error alert\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-alert")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lang")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"less"')]),s._v(">")]),a("span",{attrs:{class:"undefined"}},[s._v("\n.alert-demo-wrapper {\n  width: 100%;\n  > .mu-alert {\n    margin-bottom: 16px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])])]),s._m(2),a("demo-block",{attrs:{jsfiddle:{html:'<div class="alert-demo-wrapper">\n  <mu-alert color="success">\n    <mu-icon left value="check_circle"></mu-icon> this is success alert\n  </mu-alert>\n  <mu-alert color="warning">\n    <mu-icon left value="priority_high"></mu-icon> this is warning alert\n  </mu-alert>\n  <mu-alert color="info">\n    <mu-icon left value="info"></mu-icon> this is info alert\n  </mu-alert>\n  <mu-alert color="error" delete v-if="alert" @delete="closeAlert()">\n    <mu-icon left value="warning"></mu-icon> this is error alert\n  </mu-alert>\n  <mu-button color="primary" v-if="!alert" @click="showAlert()">SHOW ALERT</mu-button>\n</div>\n\n\n',script:"\nexport default {\n  data () {\n    return {\n      alert: true\n    };\n  },\n  methods: {\n    showAlert () {\n      this.alert = true;\n    },\n    closeAlert () {\n      this.alert = false;\n    }\n  }\n}\n",style:"\n.alert-demo-wrapper {\n  width: 100%;\n  > .mu-alert {\n    margin-bottom: 16px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  > .mu-button {\n    margin: 0 auto;\n    display: block;\n  }\n}\n"}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("div",{staticClass:"alert-demo-wrapper"},[a("mu-alert",{attrs:{color:"success"}},[a("mu-icon",{attrs:{left:"",value:"check_circle"}}),s._v(" this is success alert\n  ")],1),a("mu-alert",{attrs:{color:"warning"}},[a("mu-icon",{attrs:{left:"",value:"priority_high"}}),s._v(" this is warning alert\n  ")],1),a("mu-alert",{attrs:{color:"info"}},[a("mu-icon",{attrs:{left:"",value:"info"}}),s._v(" this is info alert\n  ")],1),s.alert?a("mu-alert",{attrs:{color:"error",delete:""},on:{delete:function(t){s.closeAlert()}}},[a("mu-icon",{attrs:{left:"",value:"warning"}}),s._v(" this is error alert\n  ")],1):s._e(),s.alert?s._e():a("mu-button",{attrs:{color:"primary"},on:{click:function(t){s.showAlert()}}},[s._v("SHOW ALERT")])],1)]),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"alert-demo-wrapper"')]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-alert")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"success"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-icon")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("left")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"check_circle"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-icon")]),s._v(">")]),s._v(" this is success alert\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-alert")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-alert")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"warning"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-icon")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("left")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"priority_high"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-icon")]),s._v(">")]),s._v(" this is warning alert\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-alert")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-alert")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"info"')]),s._v(" >")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-icon")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("left")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"info"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-icon")]),s._v(">")]),s._v(" this is info alert\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-alert")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-alert")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"error"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("delete")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"alert"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@delete")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"closeAlert()"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-icon")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("left")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"warning"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-icon")]),s._v(">")]),s._v(" this is error alert\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-alert")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"!alert"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"showAlert()"')]),s._v(">")]),s._v("SHOW ALERT"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("alert")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n    };\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    showAlert () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".alert = "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(";\n    },\n    closeAlert () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".alert = "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n    }\n  }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lang")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"less"')]),s._v(">")]),a("span",{attrs:{class:"undefined"}},[s._v("\n.alert-demo-wrapper {\n  width: 100%;\n  > .mu-alert {\n    margin-bottom: 16px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  > .mu-button {\n    margin: 0 auto;\n    display: block;\n  }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])])]),s._m(3),a("p",[s._v("Use the transition property to customize the transition animation")]),a("demo-block",{attrs:{jsfiddle:{html:'<div class="alert-demo-wrapper">\n  <mu-button color="primary" style="margin-bottom: 16px;" @click="toggleAlert()">TOGGLE</mu-button>\n  <mu-alert color="warning" @delete="alert1 = false" delete v-if="alert1" transition="mu-scale-transition">\n    <mu-icon left value="warning"></mu-icon> this is warning alert\n  </mu-alert>\n</div>\n\n\n\n',script:"\nexport default {\n  data () {\n    return {\n      alert1: true\n    };\n  },\n  methods: {\n    toggleAlert () {\n      this.alert1 = !this.alert1;\n    }\n  }\n}\n",style:"\n.alert-demo-wrapper {\n  width: 100%;\n  > .mu-alert {\n    margin-bottom: 16px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  > .mu-button {\n    margin: 0 auto;\n    display: block;\n  }\n}\n\n.mu-scale-transition-enter-active,\n.mu-scale-transition-leave-active {\n  transition: transform .45s cubic-bezier(0.23, 1, 0.32, 1), opacity .45s cubic-bezier(0.23, 1, 0.32, 1);\n  backface-visibility: hidden;\n}\n\n.mu-scale-transition-enter,\n.mu-scale-transition-leave-active {\n  transform: scale(0);\n  opacity: 0;\n}\n"}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("div",{staticClass:"alert-demo-wrapper"},[a("mu-button",{staticStyle:{"margin-bottom":"16px"},attrs:{color:"primary"},on:{click:function(t){s.toggleAlert()}}},[s._v("TOGGLE")]),s.alert1?a("mu-alert",{attrs:{color:"warning",delete:"",transition:"mu-scale-transition"},on:{delete:function(t){s.alert1=!1}}},[a("mu-icon",{attrs:{left:"",value:"warning"}}),s._v(" this is warning alert\n  ")],1):s._e()],1)]),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"alert-demo-wrapper"')]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"margin-bottom: 16px;"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"toggleAlert()"')]),s._v(">")]),s._v("TOGGLE"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-alert")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"warning"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@delete")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"alert1 = false"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("delete")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"alert1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("transition")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"mu-scale-transition"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-icon")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("left")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"warning"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-icon")]),s._v(">")]),s._v(" this is warning alert\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-alert")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("alert1")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n    };\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    toggleAlert () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".alert1 = !"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".alert1;\n    }\n  }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lang")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"less"')]),s._v(">")]),a("span",{attrs:{class:"undefined"}},[s._v("\n.alert-demo-wrapper {\n  width: 100%;\n  > .mu-alert {\n    margin-bottom: 16px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  > .mu-button {\n    margin: 0 auto;\n    display: block;\n  }\n}\n\n.mu-scale-transition-enter-active,\n.mu-scale-transition-leave-active {\n  transition: transform .45s cubic-bezier(0.23, 1, 0.32, 1), opacity .45s cubic-bezier(0.23, 1, 0.32, 1);\n  backface-visibility: hidden;\n}\n\n.mu-scale-transition-enter,\n.mu-scale-transition-leave-active {\n  transform: scale(0);\n  opacity: 0;\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n\n")])])])]),s._m(4),s._m(5),s._m(6),s._m(7)],1)},r=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("code",{pre:!0},[s._v("Mu-alert")]),s._v(" components are used to pass information to users, it can define different colors and icons.")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"basic-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-example","aria-hidden":"true"}},[s._v("¶")]),s._v(" Basic example")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"display-icon-and-delete-icon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#display-icon-and-delete-icon","aria-hidden":"true"}},[s._v("¶")]),s._v(" Display Icon and delete icon")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"transition-animation-customization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transition-animation-customization","aria-hidden":"true"}},[s._v("¶")]),s._v(" Transition animation customization")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"alert-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alert-props","aria-hidden":"true"}},[s._v("¶")]),s._v(" Alert Props")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("Attribute")]),a("th",[s._v("Description")]),a("th",[s._v("Type")]),a("th",[s._v("Accepted values")]),a("th",[s._v("Default")])])]),a("tbody",[a("tr",[a("td",[s._v("color")]),a("td",[s._v("component color")]),a("td",[s._v("String")]),a("td",[s._v("—")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("delete")]),a("td",[s._v("determine whether it’s to display deleting icons")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("transition")]),a("td",[s._v("setting the transition animation to display and hide the component")]),a("td",[s._v("String")]),a("td",[s._v("—")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("mode")]),a("td",[s._v("setting the mode of the transtion animation")]),a("td",[s._v("String")]),a("td",[s._v("out-in/in-out")]),a("td",[s._v("—")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"alert-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alert-events","aria-hidden":"true"}},[s._v("¶")]),s._v(" Alert Events")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("Name")]),a("th",[s._v("Description")]),a("th",[s._v("Parameters")])])]),a("tbody",[a("tr",[a("td",[s._v("delete")]),a("td",[s._v("triggers when the delete icon clicked")]),a("td",[s._v("—")])])])])}],l={data:function(){return{alert:!0,alert1:!0}},methods:{showAlert:function(){this.alert=!0},closeAlert:function(){this.alert=!1},toggleAlert:function(){this.alert1=!this.alert1}}},e=l,v=(a("ML7o"),a("KHd+")),i=Object(v["a"])(e,n,r,!1,null,null,null);t["default"]=i.exports}}]);