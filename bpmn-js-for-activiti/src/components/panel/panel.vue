<template>
  <div>
    <div class="panel">
      <div style="font-size:20px">{{model.name}}:{{model.id}}</div>
      <div class="containers">
        <div class="canvas" ref="canvas" @keydown.left="ctrlzBack"></div>
        <div id="js-properties-panel"></div>
        <div class="buttons">
          <li>
            <ul>
              <el-button @click="fixZoom()" type="primary" icon="el-icon-aim">重置</el-button>
            </ul>
          </li>
        </div>

        <modelOutPutCpt id="model-out-put-com" :model="model"></modelOutPutCpt>
      </div>
    </div>
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
import propertiesPanelModule from "@/components/panel/workflow/properties-panel";
import propertiesProviderModule from "@/components/panel/workflow/properties-panel/provider/activiti";
import activitiModdleDescriptor from "@/../resources/activiti.json";
import customTranslate from "@/components/panel/workflow/customTranslate/customTranslate";
import customControlsModule from "@/components/panel/workflow/customControls";
var customTranslateModule = {
  translate: ["value", customTranslate]
};
export default {
  props: {
    propModel: Object
  },
  name: "panel",
  components: { ModelOutPutCpt },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
  mounted() {
    this.init();
    document.onkeydown = e => {
      this.ctrlzBack(e);
    };
  },
  data() {
    return {
      // bpmn建模器
      bpmnModeler: null,
      container: null,
      canvas: null,
      model: {},
      backupModel: {},
      drawingTracks: [],
      panelDrawing: false
    };
  },
  watch: {
    propModel: {
      handler(newModel, oldVal) {
        if (newModel != null) {
          this.model = BpmnInfs.fixModel(newModel);
        }
        console.info("value changed 2", newModel.id);
        this.drawingTracks = [];
        this.createNewDiagram();
      }
    }
  },
  // 方法集合
  methods: {
    init() {
      this.initBpmn();
      // this.createNewDiagram();
      this.addModelerListener();
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
      var res = this.transformCanvas(this.model.modelXml);
      // 让图能自适应屏幕
      var canvas = this.bpmnModeler.get("canvas");
      canvas.zoom("fit-viewport");
      return res;
    },
    // 将字符串转换成图并渲染
    async transformCanvas(bpmnXmlStr) {
      this.panelDrawing = true;
      var warnings = await this.bpmnModeler.importXML(bpmnXmlStr);
      if (warnings.warnings.length > 0) {
        console.log(warnings);
      }
      this.panelDrawing = false;
      return warnings.warnings.length == 0;
    },

    addModelerListener() {
      // 监听 modeler
      const bpmnjs = this.bpmnModeler;
      const that = this;
      // 'shape.removed'
      const events = [
        "commandStack.changed"
        // "shape.added",
        // "shape.move.end",
        // "shape.move.start",
        // "shape.removed",
        // "connect.end",
        // "connection.added",
        // "connection.removed",
        // "connection.changed",
        // "connectionSegment.move.end"
      ];
      events.forEach(function(event) {
        that.bpmnModeler.on(event, async e => {
          var elementRegistry = bpmnjs.get("elementRegistry");
          var shape = e.element ? elementRegistry.get(e.element.id) : e.shape;
          if (!that.panelDrawing) {
            // that.logTrack(that.model.modelXml);
            that.model = await that.getModelData();
            // console.log(that.model);
            console.log(event, e);
            // console.log(shape);
          }
        });
      });
    },
    async getModelData() {
      var baseModel = BpmnInfs.fixModel(this.model);

      var xmlObj = await this.bpmnModeler.saveXML({ format: true });
      var svgObj = await this.bpmnModeler.saveSVG({ format: true });
      baseModel.modelXml = xmlObj.xml;
      baseModel.modelSvg = svgObj.svg;
      // await this.sleep(5);
      // console.log("xml", svgObj);
      // console.log("pro xml", baseModel);
      return baseModel;
    },
    logTrack(track) {
      if (track == this.drawingTracks[this.drawingTracks.length - 1]) {
        return;
      }
      this.drawingTracks.push(track);
      if (this.drawingTracks.length > 10) {
        this.drawingTracks.shift();
      }
    },
    async ctrlzBack(e) {
      if (e.keyCode == 90 && e.ctrlKey == true && e.shiftKey == true) {
        this.bpmnModeler.get("commandStack").redo();
        return;
      }
      if (e.keyCode == 90 && e.ctrlKey == true) {
        this.bpmnModeler.get("commandStack").undo();
      }
      // if (1 == {1:1}[1]) {
      //   return;
      // }
      // if (this.drawingTracks.length == 0) {
      //   return;
      // }
      // console.log("callback");
      // console.log(this.drawingTracks);
      // var modelXml = this.drawingTracks.pop();
      // // console.log("locked");
      // var success = await this.transformCanvas(modelXml);
      // this.model = await this.getModelData();
      // // console.log("draw success", success);
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    fixZoom(value) {
      this.bpmnModeler.get("canvas").zoom("fit-viewport");
    }
  },
  // 计算属性
  computed: {}
};
</script>


<style  >
.containers {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: space-between;
  background-color: #ffffff;
  width: 100%;
  height: 90vh;
}
.canvas {
  width: 80%;
  height: 95%;
  /* float: left; */
  flex: none;
  /* margin-right: 0%; */
  border: gray solid 1px;
  border-radius: 15px;
}
#js-properties-panel {
  /* position: fixed; 
    right:0; 
    top: 0; */
  flex: 1;
  /* justify-content: flex-end; */
  /* margin-left: auto; */
  /* margin-right: 0%; */
  min-width: 20%;
  border: slategray solid;
  border-radius: 15px;
  overflow-y: scroll;
  height: 95%;
  width: 20%;
}
</style>
