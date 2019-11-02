(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0dd5fc"],{"80b0":function(s,t,a){"use strict";a.r(t);var r={data:function(){return{model:{},formData:[{type:"text",name:"userName",item:{label:"用户名",className:"item-1"},control:{value:"",placeholder:"请输入",change:function(){console.log("change")}},rules:[{type:"required",msg:"请输入用户名"},{type:"maxLength",maxLength:6,msg:"最大6个字符"},{type:"minLength",minLength:3,msg:"不能小于3"}],other:{value:"可带点击事件的提示",click:function(s){console.log("click")}}},{type:"password",name:"password",item:{label:"密码"},control:{value:"",placeholder:"请输入密码"},rules:[{type:"required",msg:"请输入用户名"},{type:"maxLength",maxLength:6,msg:"最大6个字符"},{type:"minLength",minLength:3,msg:"不能小于3"}]},{type:"radio",item:{label:"单选"},control:{value:"",data:[{label:"男",value:"0"},{label:"女",value:"1"}]},rules:[{type:"required",msg:"请勾选"}],other:{value:"单选使用单选组形式"}},{type:"checkbox",item:{label:"多选"},control:{disabled:!0,value:["0"],data:[{label:"男",value:"0"},{label:"女",value:"1"},{label:"人妖",value:"3",disabled:!0}],change:function(){console.log("checkbox change")}},rules:[{type:"required",msg:"请勾选"}]},{type:"datePicker",item:{label:"开始时间"},control:{value:"",placeholder:"请选择时间"},rules:[{type:"required",msg:"请选择时间"}]},{type:"select",item:{label:"下拉选择"},control:{value:"",placeholder:"请选择",options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{type:"required",msg:"不能为空请选择"}]},{type:"switch",item:{label:"switch"},control:{value:!0}},{type:"textarea",item:{label:"文本框",className:"auto-height"},control:{value:"",placeholder:"请输入"},rules:[{type:"required",msg:"文本框不能为空"}]},{type:"txt",item:{label:"电话"},control:{value:"13800138000"}}]}},components:{},methods:{submitForm:function(){this.$refs.ruleForm.validate(function(s,t){console.log(s),console.log(t)})},submitForm2:function(){this.$refs.ruleForm.validateField(["userName"],function(s,t){console.log(s),console.log(t)})},submitForm3:function(){this.$refs.ruleForm.resetFields()}},mounted:function(){var s=this;setTimeout(function(){console.log("--------------"),s.$refs.ruleForm.setValue({userName:"userName"})},2e3)}},l=a("2877"),e=Object(l.a)(r,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("AutoForm 自动表单")]),s._m(0),s._m(1),a("demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[a("div",[a("ak-auto-form",{ref:"ruleForm",attrs:{data:s.formData}}),a("ak-button",{attrs:{type:"primary"},on:{click:s.submitForm}},[s._v("提交")]),a("ak-button",{attrs:{type:"primary"},on:{click:s.submitForm2}},[s._v("对用户名验证")]),a("ak-button",{attrs:{type:"primary"},on:{click:s.submitForm3}},[s._v("重置")])],1)]],2),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-auto-form")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"formData"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ruleForm"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-auto-form")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"submitForm"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(">")]),s._v("提交"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-button")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"submitForm2"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(">")]),s._v("对用户名验证"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-button")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"submitForm3"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(">")]),s._v("重置"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-button")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("model")]),s._v(":{},\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formData")]),s._v(": [\n        {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'text'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'userName'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("item")]),s._v(": {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'用户名'")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("className")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'item-1'")]),s._v("\n          },\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("control")]),s._v(": {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'请输入'")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("change")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n              "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'change'")]),s._v(")\n            }\n          },\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rules")]),s._v(": [\n            {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'required'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("msg")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'请输入用户名'")]),s._v("},\n            {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'maxLength'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("maxLength")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("msg")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'最大6个字符'")]),s._v("},\n            {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'minLength'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("minLength")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("msg")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'不能小于3'")]),s._v("}\n          ],\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("other")]),s._v(": {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'可带点击事件的提示'")]),s._v(",\n            click(item){\n              "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v(")\n            }\n          }\n        },\n        {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'password'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'password'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("item")]),s._v(": {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'密码'")]),s._v("},\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("control")]),s._v(": {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'请输入密码'")]),s._v("\n          },\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rules")]),s._v(": [\n            {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'required'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("msg")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'请输入用户名'")]),s._v("},\n            {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'maxLength'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("maxLength")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("msg")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'最大6个字符'")]),s._v("},\n            {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'minLength'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("minLength")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("msg")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'不能小于3'")]),s._v("}\n          ]\n        },\n        {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'radio'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("item")]),s._v(": {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'单选'")]),s._v("},\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("control")]),s._v(": {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [\n              {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'男'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0'")]),s._v("},\n              {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'女'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1'")]),s._v("}\n            ]\n          },\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rules")]),s._v(": [\n            {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'required'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("msg")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'请勾选'")]),s._v("}\n          ],\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("other")]),s._v(": {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'单选使用单选组形式'")]),s._v("\n          }\n        },\n        {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'checkbox'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("item")]),s._v(": {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'多选'")]),s._v("},\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("control")]),s._v(": {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0'")]),s._v("],\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [\n              {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'男'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0'")]),s._v("},\n              {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'女'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1'")]),s._v("},\n              {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'人妖'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'3'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("}\n            ],\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("change")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n              "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'checkbox change'")]),s._v(")\n            }\n          },\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rules")]),s._v(": [\n            {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'required'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("msg")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'请勾选'")]),s._v("}\n          ]\n        },\n        {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'datePicker'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("item")]),s._v(": {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'开始时间'")]),s._v("},\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("control")]),s._v(": {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'请选择时间'")]),s._v("\n          },\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rules")]),s._v(": [\n            {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'required'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("msg")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'请选择时间'")]),s._v("}\n          ]\n        },\n        {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'select'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("item")]),s._v(": {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'下拉选择'")]),s._v("},\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("control")]),s._v(": {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'请选择'")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [\n              {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'选项1'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1'")]),s._v("},\n              {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'选项2'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2'")]),s._v("}\n            ]\n          },\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rules")]),s._v(": [\n            {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'required'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("msg")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'不能为空请选择'")]),s._v("}\n          ]\n        },\n        {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'switch'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("item")]),s._v(": {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'switch'")]),s._v("},\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("control")]),s._v(": {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n          }\n        },\n        {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'textarea'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("item")]),s._v(": {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'文本框'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("className")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'auto-height'")]),s._v("},\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("control")]),s._v(": {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'请输入'")]),s._v("\n          },\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rules")]),s._v(": [\n            {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'required'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("msg")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'文本框不能为空'")]),s._v("}\n          ]\n        },\n        {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'txt'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("item")]),s._v(": {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'电话'")]),s._v("\n          },\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("control")]),s._v(": {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'13800138000'")]),s._v("\n          }\n        }\n      ]\n    }\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("components")]),s._v(": {},\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    submitForm () {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.ruleForm.validate("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("result, object")]),s._v(") =>")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(result)\n        "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(object)\n      })\n    },\n    submitForm2 () {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" props = ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'userName'")]),s._v("]\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.ruleForm.validateField(props, (result, object) => {\n        "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(result)\n        "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(object)\n      })\n    },\n    submitForm3 () {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.ruleForm.resetFields()\n    }\n  },\n  mounted () {\n    setTimeout("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v("=>")]),s._v("{\n    "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'--------------'")]),s._v(")\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 模拟初始化后再对输入框进行设值")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.ruleForm.setValue({"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("userName")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'userName'")]),s._v("})\n    },"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2000")]),s._v(")\n  }\n}\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n\n\n\n")])])])]),s._m(2),s._m(3),s._m(4),s._m(5),s._m(6),s._m(7),s._m(8),s._m(9)],1)},[function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95","aria-hidden":"true"}},[this._v("¶")]),this._v(" 基础用法")])},function(){var s=this.$createElement,t=this._self._c||s;return t("blockquote",[t("p",[this._v("基于form表单封装，方便比较有规则的表单使用。使用一组object即可快速生成带验证功能的表单")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("¶")]),this._v(" API")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"autoform"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#autoform","aria-hidden":"true"}},[this._v("¶")]),this._v(" AutoForm")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),a("th",[s._v("类型")]),a("th",[s._v("说明")])])]),a("tbody",[a("tr",[a("td",[s._v("showMessage")]),a("td",[s._v("boolean/true")]),a("td",[s._v("是否显示校验错误信息")])]),a("tr",[a("td",[s._v("trigger")]),a("td",[s._v("String")]),a("td",[s._v("触发验证类型，change和blur两种，默认change，仅对input")])]),a("tr",[a("td",[s._v("data")]),a("td",[s._v("object")]),a("td",[s._v("表单数据")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"form-methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#form-methods","aria-hidden":"true"}},[this._v("¶")]),this._v(" Form Methods")])},function(){var s=this.$createElement,t=this._self._c||s;return t("table",[t("thead",[t("tr",[t("th",[this._v("参数")]),t("th",[this._v("说明")])])]),t("tbody",[t("tr",[t("td",[this._v("setValue")]),t("td",[this._v("用于初始化后对表单设值")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("blockquote",[t("p",[this._v("其他同Form Methods ，见"),t("a",{attrs:{href:"/#/form"}},[this._v("formItem(点击查看)")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"autoform-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#autoform-data","aria-hidden":"true"}},[this._v("¶")]),this._v(" AutoForm Data")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),a("th",[s._v("类型")]),a("th",[s._v("说明")])])]),a("tbody",[a("tr",[a("td",[s._v("type")]),a("td",[s._v("String")]),a("td",[s._v("表单元素类型，可选text,password,radio,checkbox,datePicker,select,switch,textarea,txt")])]),a("tr",[a("td",[s._v("name")]),a("td",[s._v("String")]),a("td",[s._v("一般不需要填写，需要对指定字段验证时填写")])]),a("tr",[a("td",[s._v("item")]),a("td",[s._v("object")]),a("td",[s._v("FormItem 参数，prop无效，见"),a("a",{attrs:{href:"/#/form"}},[s._v("formItem(点击查看)")])])]),a("tr",[a("td",[s._v("control")]),a("td",[s._v("object")]),a("td",[s._v("对应type类型的各表单元素参数")])]),a("tr",[a("td",[s._v("rules")]),a("td",[s._v("object")]),a("td",[s._v("见FormItem Rules 验证规则，"),a("a",{attrs:{href:"/#/form"}},[s._v("formItem(点击查看)")])])]),a("tr",[a("td",[s._v("other")]),a("td",[s._v("String")]),a("td",[s._v("置于表单元素后面的提示性文字")])])])])}],!1,null,null,null);t.default=e.exports}}]);