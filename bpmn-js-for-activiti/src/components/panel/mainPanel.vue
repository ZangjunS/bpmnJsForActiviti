<template>
  <div id="main">
    <div id="model-opt-div">
      <z-fold :defaultShow="false" :foldDir="'h'" :iconClass="'el-icon-s-fold'" :fontSize="25">
        <modelList id="modelList-com" @emitmodel="sendModel"></modelList>
      </z-fold>

      <bpmnpanel id="panel-com" :propModel="model"></bpmnpanel>
    </div>
  </div>
</template>
<script>
import modelList from "@/components/panel/modelList";
import bpmnpanel from "@/components/panel/panel";
import sysSetting from "@/classes/z-server-vue/core/FrontLinkSysParamInf.vue";
import zFold from "@/slot/folds/z-fold";

export default {
  components: { modelList, bpmnpanel, zFold },
  mounted() {
    var initSetting = sysSetting.getSysLinkFromVue(this);
    this.$emit("initSetting", initSetting);
  },
  data() {
    return {
      model: {}
    };
  },
  methods: {
    sendModel(amodel) {
      this.model = amodel;
    }
  }
};
</script>

<style  >
#main {
  height: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: flex-start;
}
#model-opt-div {
  position: relative;
  flex: auto;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: flex-start;
}
#modelList-com {
  flex: 1;
  /* float: left; */
  /* max-width: 20%; */
}
#panel-com {
  flex: auto;
  border-radius: 15px;
  height: 100%;
  /* border: gray solid 1px; */
}
</style>>