<template>
  <div id="main">
    <div id="main-setting">
      <i class="el-icon-setting" @click="openSetting()" style="font-size:20px"></i>
      <div id="main-setting-inputs" style=" width:200px " v-show="setttings.isSetting">
        <el-input style="width:200px"></el-input>
        <el-input style="width:200px"></el-input>
        <el-input style="width:200px"></el-input>
        <el-input style="width:200px"></el-input>
      </div>
    </div>

    <div id="model-opt-div">
      <modelList id="modelList-com"></modelList>
      <bpmnpanel id="panel-com"></bpmnpanel>
    </div>
  </div>
</template>
<script>
import modelList from "@/components/modelList";
import bpmnpanel from "@/components/panel/panel";
export default {
  components: { modelList, bpmnpanel },
  data() {
    return {
      setttings: {
        isSetting: false
      }
    };
  },
  methods: {
    openSetting() {
      this.setttings.isSetting = !this.setttings.isSetting;
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