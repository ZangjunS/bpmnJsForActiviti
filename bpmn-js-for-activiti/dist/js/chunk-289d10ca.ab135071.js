(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-289d10ca"],{"1a6e":function(e,t,n){"use strict";var r=n("8e3e"),a=n.n(r);a.a},"8be8":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("processViewer")],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("el-button",{staticClass:"primary",on:{click:function(t){return e.fixZoom()}}},[e._v("居中")]),n("div",{ref:"viewContainer",attrs:{id:"viewContainer"}})],1)},i=[],s=(n("4160"),n("159b"),n("96cf"),n("1da1")),c=n("7024"),l=n("86af"),u=n("bc3a"),f=n.n(u),m={created:function(){},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.initView(),""!=e.paramInUrl&&null!=e.paramInUrl||(e.paramInUrl=e.$route.query.paramInUrl),null==e.paramInUrl){t.next=6;break}return t.next=5,e.getProcess();case 5:e.process=t.sent;case 6:e.drawProcess(e.process);case 7:case"end":return t.stop()}}),t)})))()},data:function(){return{paramInUrl:"",process:{xml:l["a"],nodeStatus:{task_1:-1,StartEvent_1y45yut:1}},bpmnModeler:null,currentCanvasXml:l["a"],style:{"-1":{stroke:"#c3272b",fill:"#f3f8f1"},0:{},1:{stroke:"#475164",fill:"#5e6a6d"}}}},watch:{},methods:{initView:function(){this.containerEl=this.$refs.viewContainer,this.bpmnModeler&&this.bpmnModeler.destroy(),this.bpmnModeler=new c["a"]({container:this.containerEl})},getProcess:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(t.paramInUrl);case 2:return n=e.sent,e.abrupt("return",n.data.data);case 4:case"end":return e.stop()}}),e)})))()},drawProcess:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.bpmnModeler,n.next=3,r.importXML(e.xml);case 3:a=n.sent,console.log(a),0==a.warnings.length&&(console.log("render"),o=r.get("elementRegistry"),i=r.get("modeling"),o.forEach((function(e){var n=t.onNodeRenderStyle(e);i.setColor(e,n)}))),s=r.get("canvas"),console.log("fix"),s.zoom("fit-viewport");case 9:case"end":return n.stop()}}),n)})))()},onNodeRenderStyle:function(e){return this.style[this.process.nodeStatus[e.id]]},fixZoom:function(e){this.bpmnModeler.get("canvas").zoom("fit-viewport")},hoverEvent:function(){var e=this.bpmnModeler.get("eventBus"),t=this.bpmnModeler.get("overlays");e.on("element.hover",(function(e){var n="hhh";t.add(e.element.id,{position:{top:e.element.height,left:0},html:n})})),e.on("element.out",(function(){t.clear()}))}}},p=m,d=(n("1a6e"),n("2877")),h=Object(d["a"])(p,o,i,!1,null,null,null),v=h.exports,w={components:{processViewer:v},data:function(){return{}}},g=w,b=Object(d["a"])(g,r,a,!1,null,null,null);t["default"]=b.exports},"8e3e":function(e,t,n){}}]);
//# sourceMappingURL=chunk-289d10ca.ab135071.js.map