<template>
  <div class="container">
    <el-button @click="fixZoom()" class="primary">居中</el-button>
    <!-- <el-button type="primary" @click="previewTemp">预览</el-button>
    <el-button type="success" @click="handleZoom(1)">放大</el-button>
    <el-button type="warning" @click="handleZoom(-1)">缩小</el-button>-->

    <div id="viewContainer" ref="viewContainer"></div>
  </div>
</template>
<script>
// import jquery from "jquery";
import BpmnModeler from "bpmn-js/lib/Modeler";
import { defaultXmlStr } from "@/../resources/defaultXmlStr";
import Axios from "axios";
export default {
  created() {},
  async mounted() {
    this.initView();
    if (this.paramInUrl == "" || this.paramInUrl == null) {
      this.paramInUrl = this.$route.query.paramInUrl;
    }
    if (this.paramInUrl != null) {
    //   console.log("fetching");
      this.process = await this.getProcess();
    //   console.log(this.process);
    }
    this.drawProcess(this.process);
  },
  data() {
    return {
      // http://localhost:8080/static/process.json
      paramInUrl: "",
      process: {
        xml: defaultXmlStr,
        nodeStatus: { task_1: -1, StartEvent_1y45yut: 1 }
      },
      bpmnModeler: null,
      // 此变量为预览的xml文件数据，由于行数过多，附在了附件中，使用时，将附件整个复值到currentCanvasXml即可
      currentCanvasXml: defaultXmlStr,
      style: {
        "-1": {
          stroke: "#c3272b",
          fill: "#f3f8f1"
        },
        0: {},
        1: {
          stroke: "#475164",
          fill: "#5e6a6d" //
        }
      }
    };
  },
  watch: {},
  methods: {
    initView() {
      this.containerEl = this.$refs.viewContainer;
      // 避免缓存，每次清一下
      this.bpmnModeler && this.bpmnModeler.destroy();
      this.bpmnModeler = new BpmnModeler({ container: this.containerEl });
      //   const viewer = this.bpmnModeler;
    },
    async getProcess(paramInUrl) {
      var res = await Axios.get(this.paramInUrl);
    //   console.log("res", res);
      return res.data.data;
    },
    async drawProcess(process) {
      var viewer = this.bpmnModeler;
      var warns = await viewer.importXML(process.xml);
      console.log(warns);
      if (warns.warnings.length == 0) {
        console.log("render");
        const elementRegistry = viewer.get("elementRegistry");
        let modeling = viewer.get("modeling");
        elementRegistry.forEach(element => {
          var style = this.onNodeRenderStyle(element);
          modeling.setColor(element, style);
        });
      }
      const canvas = viewer.get("canvas");
      console.log("fix");
      canvas.zoom("fit-viewport");
    },
    onNodeRenderStyle(element) {
      return this.style[this.process.nodeStatus[element.id]];
    },
    fixZoom(value) {
      this.bpmnModeler.get("canvas").zoom("fit-viewport");
    },

    hoverEvent() {
      // 以下代码为：为节点注册鼠标悬浮事件
      const eventBus = this.bpmnModeler.get("eventBus");
      const overlays = this.bpmnModeler.get("overlays");
      eventBus.on("element.hover", e => {
        const $overlayHtml = "hhh";
        //  jquery(` <div class="tipBox">
        //         你好，我是悬浮框里的内容
        //         </div>`);
        overlays.add(e.element.id, {
          position: { top: e.element.height, left: 0 },
          html: $overlayHtml
        });
      });
      eventBus.on("element.out", () => {
        overlays.clear();
      });
      //  注册悬浮事件结束
    }
  }
};
</script>
<style  >
.container {
  height: 100%;
}
#viewContainer .djs-palette {
  display: none;
}

#viewContainer {
  height: 100%;
}
</style>
 