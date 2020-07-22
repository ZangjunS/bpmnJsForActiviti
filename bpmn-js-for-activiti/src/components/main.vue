<template>
  <div id="main">
    <div id="model-opt-div">
      <modelList id="modelList-com" @emitmodel="sendModel"></modelList>
      <bpmnpanel id="panel-com" :propModel="model"></bpmnpanel>
    </div>
  </div>
</template>
<script>
import modelList from "@/components/modelList";
import bpmnpanel from "@/components/panel/panel";
import sysSetting from "@/classes/z-server-vue/core/FrontLinkSysParamInf.vue";
export default {
  components: { modelList, bpmnpanel },
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
  flex: none;
  /* float: left; */
  max-width: 20%;
}
#panel-com {
  flex: auto;
  min-width: 0;
  border-radius: 15px;
  /* border: gray solid 1px; */
}
</style>>