<template>
  <div class="containers">
    <div class="canvas" ref="canvas"></div>
    <div id="js-properties-panel"></div>
    <modelOutPutCpt :model="model"></modelOutPutCpt>
  </div>
</template>

<script>
// 引入相关的依赖
import ModelOutPutCpt from "./modelOutPutCpt";
// Vue.use(ModelOutPutCpt)
// import BpmnViewer from 'bpmn-js'
import axios from "axios";
import BpmnModeler from "bpmn-js/lib/Modeler";
import BpmnInfs from "@/classes/bpmn/BpmnInfs";
import propertiesPanelModule from "@/components/workflow/properties-panel";
import propertiesProviderModule from "@/components/workflow/properties-panel/provider/activiti";
import activitiModdleDescriptor from "@/../resources/activiti.json";
import customTranslate from "@/components/workflow/customTranslate/customTranslate";
import customControlsModule from "@/components/workflow/customControls";
import { defaultXmlStr } from "@/../resources/defaultXmlStr";
var customTranslateModule = {
  translate: ["value", customTranslate]
};
export default {
  props: {
    propModel: Object
  },
  name: "",
  components: { ModelOutPutCpt },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
  mounted() {
    this.init();
  },
  data() {
    return {
      // bpmn建模器
      bpmnModeler: null,
      container: null,
      canvas: null,
      model: null
    };
  },
  // 方法集合
  methods: {
    async init() {
      this.model = this.$props.propModel;
      if (this.model == null) {
        this.model = { modelXml: defaultXmlStr };
      }
      this.model = BpmnInfs.fixModel(this.model);
      this.initBpmn();
      this.createNewDiagram();
      this.addModelerListener();
      // this.model = this.getModelData();
    },
    initBpmn() {
      // 获取到属性ref为“canvas”的dom节点
      const canvas = this.$refs.canvas;
      // 建模
      this.bpmnModeler = new BpmnModeler({
        container: canvas,
        //添加控制板
        propertiesPanel: {
          parent: "#js-properties-panel"
        },
        additionalModules: [
          propertiesPanelModule,
          propertiesProviderModule,
          customTranslateModule,
          customControlsModule
        ],
        //模块拓展，拓展activiti的描述
        moddleExtensions: {
          activiti: activitiModdleDescriptor
        }
      });
    },
    async createNewDiagram() {
      this.transformCanvas(this.model.modelXml);
      // 让图能自适应屏幕
      var canvas = this.bpmnModeler.get("canvas");
      canvas.zoom("fit-viewport");
    },
    // 将字符串转换成图并渲染
    transformCanvas(bpmnXmlStr) {
      this.bpmnModeler.importXML(bpmnXmlStr, err => {
        if (err) {
          alert(err);
        } else {
          console.log("success");
        }
      });
    },

    addModelerListener() {
      // 监听 modeler
      const bpmnjs = this.bpmnModeler;
      const that = this;
      // 'shape.removed'
      const events = [
        "commandStack.changed",
        "shape.added",
        "shape.move.end",
        "connect.end",
        "connection.create",
        "connection.move"
      ];
      events.forEach(function(event) {
        that.bpmnModeler.on(event, e => {
          var elementRegistry = bpmnjs.get("elementRegistry");
          var shape = e.element ? elementRegistry.get(e.element.id) : e.shape;
          that.model = that.getModelData();
          // console.log(event, e);
          // console.log(shape);
          // console.log(that.model);
        });
      });
    },
    getModelData() {
      this.bpmnModeler.saveXML({ format: true }, (err, xml) => {
        this.model.modelXml = err ? "" : xml;
      });
      // 传给bpmn原型的saveSVG函数调用
      this.bpmnModeler.saveSVG({ format: true }, (err, xml) => {
        this.model.modelSvg = err ? "" : xml;
      });
      return BpmnInfs.fixModel(this.model);
    }
  },
  // 计算属性
  computed: {}
};
</script>


<style scoped>
.containers {
  background-color: #ffffff;
  width: 100%;
  height: 80vh;
}
.canvas {
  width: 100%;
  height: 100%;
}
</style>