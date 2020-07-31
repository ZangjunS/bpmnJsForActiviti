<template>
  <div id="modelOutPutPanel">
    <el-button @click="saveTo('xml')" type icon="el-icon-download">
      <i class="el-icon-document"></i>
    </el-button>

    <el-button @click="saveTo('svg')" type icon="el-icon-download ">
      <i class="el-icon-picture-outline"></i>
    </el-button>

    <el-button @click="saveToBackend()" type icon="el-icon-upload"
      >保存到后端</el-button
    >

    <!-- <li>
        <el-input placeholder="请输入内容" v-model="modelOutputBackendUrl" style="width:200px">
          <template slot="prepend">Http://</template>
        </el-input>
        <el-button @click="saveToUrl()" type="primary" icon="el-icon-cloudy">保存到接口</el-button>
    </li>-->

    <a ref="localDownLink" href="javascript:" title></a>
  </div>
</template>
<script>
import SysLinks from "@/classes/z-server-vue/core/FrontLinkSysParamInf";
import BpmnInfs from "@/classes/bpmn/BpmnInfs";
export default {
  props: {
    model: Object,
    modeler: Object,
  },
  mounted() {},
  data() {
    return { diagramName: "diagram", modelOutputBackendUrl: "" };
  },
  methods: {
    saveToBackend() {
      console.log(this.$store);
      console.log(this.$store.state.mainPanel.modelOutUrlTpl);

      // console.log(this.$root.rootValue);
      // if (this.modelOutputBackendUrl == "") {
      //   this.modelOutputBackendUrl = SysLinks.getSysLink().sysParamOutUrl;
      // }
      // console.log(this.modelOutputBackendUrl);
    },
    saveToUrl() {
      this.saveToBackend();
    },
    saveTo(type) {
      var diagramName = this.model.name;
      this.modeler["save" + type.toUpperCase()]({ format: true }).then(
        (data) => {
          console.log(data);
          this.setEncoded(diagramName + "." + type, data[type]);
        }
      );
    },
    // 下载为SVG格式,done是个函数，调用的时候传入的
    // saveSvg() {
    //   var model = this.getModelData();
    //   var diagramName = model.name;
    //   this.setEncoded(diagramName + ".svg", model.modelSvg);
    // },
    // // 下载为bpmn格式,done是个函数，调用的时候传入的
    // saveDiagram() {
    //   this.getModelData().then(m => {
    //     this.setEncoded(m.name + ".bpmn", m.modelXml);
    //   });
    // },
    setEncoded(name, data) {
      var link = this.$refs.localDownLink;
      // 把xml转换为URI，下载要用到的
      const encodedData = encodeURIComponent(data);
      // 下载图的具体操作,改变a的属性，className令a标签可点击，href令能下载，download是下载的文件的名字
      // console.log(name, data);
      // let xmlFile = new File([data], "test.bpmn");
      // console.log(xmlFile);
      if (data) {
        link.href = "data:application/bpmn20-xml;charset=UTF-8," + encodedData;
        link.download = name;
        link.click();
      }
    },
    async getModelData() {
      var baseModel = BpmnInfs.fixModel(this.model);

      var xmlObj = await this.modeler.saveXML({ format: true });
      var svgObj = await this.modeler.saveSVG({ format: true });
      baseModel.modelXml = xmlObj.xml;
      baseModel.modelSvg = svgObj.svg;
      // await this.sleep(5);
      // console.log("xml", svgObj);
      // console.log("pro xml", baseModel);
      return baseModel;
    },
  },
};
</script>
<style>
.buttons {
}
.buttons li {
  display: inline-block;
  margin: 5px;
}
</style>
