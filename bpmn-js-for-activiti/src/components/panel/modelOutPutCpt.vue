<template>
  <div id="modelOutPutPanel">
    <ul class="buttons">
      <li>
        <el-button @click="saveDiagram()" type="primary" icon="el-icon-download">
          <i class="el-icon-document"></i>
        </el-button>
      </li>
      <li>
        <el-button @click="saveSvg()" type="primary" icon="el-icon-download ">
          <i class="el-icon-picture-outline"></i>
        </el-button>
      </li>
      <li>
        <el-button @click="saveToBackend()" type="primary" icon="el-icon-upload">保存到后端</el-button>
      </li>
      <!-- <li>
        <el-input placeholder="请输入内容" v-model="modelOutputBackendUrl" style="width:200px">
          <template slot="prepend">Http://</template>
        </el-input>
        <el-button @click="saveToUrl()" type="primary" icon="el-icon-cloudy">保存到接口</el-button>
      </li>-->
    </ul>
    <a ref="localDownLink" href="javascript:" title></a>
  </div>
</template>
<script>
import SysLinks from "@/classes/z-server-vue/core/FrontLinkSysParamInf";
import BpmnInfs from "@/classes/bpmn/BpmnInfs";
export default {
  props: {
    model: Object
  },
  mounted() {},
  data() {
    return { diagramName: "diagram", modelOutputBackendUrl: "" };
  },
  methods: {
    saveToBackend() {
      console.log(this.$root.rootValue);
      if (this.modelOutputBackendUrl == "") {
        this.modelOutputBackendUrl = SysLinks.getSysLink().sysParamOutUrl;
      }
      console.log(this.modelOutputBackendUrl);
    },
    saveToUrl() {
      this.saveToBackend();
    },
    // 下载为SVG格式,done是个函数，调用的时候传入的
    saveSvg() {
      var diagramName = this.model.getName();
      this.setEncoded(diagramName + ".svg", this.model.modelSvg);
    },
    // 下载为bpmn格式,done是个函数，调用的时候传入的
    saveDiagram() {
      var diagramName = this.model.getName();
      this.setEncoded(diagramName + ".bpmn", this.model.modelXml);
    },
    setEncoded(name, data) {
      var link = this.$refs.localDownLink;
      // 把xml转换为URI，下载要用到的
      const encodedData = encodeURIComponent(data);
      // 下载图的具体操作,改变a的属性，className令a标签可点击，href令能下载，download是下载的文件的名字
      // console.log(name, data);
      // let xmlFile = new File([data], "test.bpmn");
      // console.log(xmlFile);
      if (data) {
        // link.className = "active";
        link.href = "data:application/bpmn20-xml;charset=UTF-8," + encodedData;
        link.download = name;
        link.click();
      }
    }
  }
};
</script>
<style  >
.buttons {
}
.buttons li {
  display: inline-block;
  margin: 5px;
}
</style>